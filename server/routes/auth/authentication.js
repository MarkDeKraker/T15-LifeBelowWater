import bcrypt from 'bcrypt';
import express from 'express';
import jwt from 'jsonwebtoken';

import Admin from '../../models/Admin.js';

const router = express.Router();

// REGISTER //
/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Register a new admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Account has been created
 *       400:
 *         description: Admin already exists
 *       500:
 *         description: Internal Server Error
 */
router.post("/register", async (req, res) => {
  console.log("Register initiated");
  try {
    const { username, email, password } = req.body;

    const admin = new Admin({ username, email, password });
    await admin.save();

    res.status(201).send("Account has been created");
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).send("Admin already exists");
    }
    res.status(500).send(err.message);
  }
});

// LOGIN //
/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Login an admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Incorrect email or password
 *       500:
 *         description: Internal Server Error
 */
router.post("/login", async (req, res) => {
  try {
    console.log("Login initiated");
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).send("Incorrect email or password");
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).send("Incorrect password");
    }

    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "12h",
    });

    res.send({ token, expiresIn: 43200 });
  } catch (err) {
    res.status(500).send(err.message);
    console.log(err.message);
  }
});

export default router;
