# Quiz API

This is a simple Express Quiz API designed to manage quiz questions and answers. It also supports admin authentication and authorization.

## Project Structure

## Installation

1. Clone this project to your local machine.
2. Install the required packages with `npm install`.
3. Copy the `.env.example` file to a new file named `.env` and fill in the required variables.

## Scripts

- `npm run dev`: Starts the server in development mode with hot-reloading.
- `npm start`: Starts the server in production mode.

## API Routes

### General

- `GET /`: Returns the welcome message.

### Authentication

- `POST /api/v1/auth/register`: Register a new admin. Required fields are `username`, `email`, and `password`.
- `POST /api/v1/auth/login`: Login an admin. Required fields are `email` and `password`. Returns a Bearer Token for communication with the API.

### Admins

- `GET /api/v1/admins`: Retrieves all admins.
- `GET /api/v1/admins/{id}`: Retrieves an admin based on the given ID.

## Documentation

The API documentation is generated with Swagger and is available at `http://localhost:{port}/api-docs`.

## Middleware

- `verifyToken`: Verifies the JWT token passed in the Authorization header.

## Models

- `Admin`: Contains the data structure for an admin.

## Environment Variables

- `MONGO_USERNAME`: The username for MongoDB.
- `MONGO_PASSWORD`: The password for MongoDB.
- `MONGO_HOST`: The host for MongoDB.
- `MONGO_PORT`: The port for MongoDB.
- `PORT`: The port on which the server runs.
- `JWT_SECRET`: The secret used to sign and verify JWT tokens.

## Dependencies

- `bcrypt`: For hashing passwords.
- `chalk`: For coloring console logs.
- `dotenv`: For loading environment variables.
- `express`: For setting up the server and routes.
- `jsonwebtoken`: For creating and verifying JWT tokens.
- `mongoose`: For connecting to and working with MongoDB.
- `nodemon`: For development with hot-reloading.
- `swagger-jsdoc`: For generating the Swagger documentation.
- `swagger-ui-express`: For displaying the Swagger documentation.

## License

This project is licensed under the ISC license.
