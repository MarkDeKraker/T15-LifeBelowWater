import express from 'express';

import verifyToken from '../../middleware/verifyToken.js';
import Admin from '../../models/Admin.js';

const router = express.Router();

// GET ALL ADMINS //
/**
 * @swagger
 * /api/v1/admins:
 *   get:
 *     tags:
 *       - Admins
 *     summary: Get all admins
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of all admins
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The admin ID
 *                   name:
 *                     type: string
 *                     description: The admin name
 *                   email:
 *                     type: string
 *                     description: The admin email
 *                 required:
 *                   - id
 *                   - name
 *                   - email
 */
router.get("/", verifyToken, async (req, res) => {
  try {
    const admins = await Admin.find();

    if (!admins || admins.length === 0) {
      return res.status(404).send("No admins found");
    }

    res.send(admins);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET ADMIN BY ID //
/**
 * @swagger
 * /api/v1/admins/{id}:
 *   get:
 *     tags:
 *       - Admins
 *     summary: Get an admin by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the admin
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: An admin object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The admin ID
 *                 name:
 *                   type: string
 *                   description: The admin name
 *                 email:
 *                   type: string
 *                   description: The admin email
 *               required:
 *                 - id
 *                 - name
 *                 - email
 *       404:
 *         description: Admin not found
 */
router.get("/:id", verifyToken, async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);

    if (!admin) {
      return res.status(404).send("Admin not found");
    }

    res.send(admin);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

export default router;
