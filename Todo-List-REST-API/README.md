# To-Do List REST API

A RESTful API built with Node.js, Express.js, and MongoDB to manage personal tasks. The API supports user registration, login, JWT authentication, and user-specific task management.

## Features

- User registration and login
- Password hashing with bcryptjs
- JWT-based authentication
- Create, read, update, and delete tasks
- MongoDB Atlas integration using Mongoose
- Input validation and error handling
- User-specific task ownership and access control

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- dotenv
- Postman

## Project Structure

```text
Todo-List-REST-API/
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── Task.js
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## Prerequisites

- Node.js and npm
- A MongoDB database, such as MongoDB Atlas
- Postman for API testing

## Installation

1. Clone or download the project.
2. Open the project directory in a terminal.
3. Install dependencies:

```bash
npm install
```

## Environment Configuration

Create a `.env` file in the project root and configure these variables using your own values:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_private_random_secret
```

Replace the example values with your actual configuration. Never share your `.env` file or commit it to a public repository.

## Run the Application

Start the server:

```bash
npm start
```

The API runs on `http://localhost:3000` when configured with port 3000.

## API Endpoints

### Health Check

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health` | Check server health |

### Authentication

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/auth/register` | Register a user |
| POST | `/api/auth/login` | Log in and receive a JWT |

Example registration request:

```json
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "ExamplePass123!"
}
```

Use a test password when experimenting. Do not use real account passwords in examples or documentation.

### Tasks

All task endpoints require a valid JWT in the `Authorization` header.

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/tasks` | Create a task |
| GET | `/api/tasks` | Get the logged-in user's tasks |
| GET | `/api/tasks/:id` | Get a task by ID |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

Example task creation request:

```json
{
  "title": "Complete assignment",
  "description": "Test the To-Do List REST API",
  "completed": false
}
```

For protected endpoints, select **Bearer Token** under Postman's Authorization tab and provide the JWT returned by the login endpoint.

## Testing with Postman

1. Start the application.
2. Test `GET http://localhost:3000/api/health`.
3. Register a test user.
4. Log in and obtain a JWT.
5. Use the token to create, retrieve, update, and delete tasks.
6. Register a second test user and verify that the first user's tasks cannot be accessed by the second user.

## Security Notes

- Passwords are hashed before storage.
- Protected routes require JWT authentication.
- Task operations are restricted to the authenticated owner.
- Keep database credentials and JWT secrets private.
- Do not commit `.env` or `node_modules/` to version control.

## Learning Outcomes

This project demonstrates REST API design, Express routing, MongoDB integration, Mongoose models, authentication, password hashing, input validation, and authorization.

## Author

Add your name and relevant academic details here.
