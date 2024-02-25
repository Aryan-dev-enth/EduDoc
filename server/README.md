# Project README

## Project Overview
This project serves as the backend API for a note-taking application. It offers various endpoints for user authentication, note creation, retrieval, and management. The backend is developed using Node.js, Express, MongoDB, and Mongoose.

## Getting Started
To begin working on this project, set up the backend server following the steps below:

### Prerequisites
- Ensure Node.js is installed on your machine.
- Have a MongoDB database ready.

### Installation
1. Clone the repository to your local machine.
   ```bash
   git clone <repository-url>
   ```

2. Install project dependencies.
   ```bash
   cd <project-directory>
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the project root.
   - Define the following variables in the `.env` file:
     ```
     PORT=8001
     DB_NAME=<your-database-name>
     MONGODB_STRING=<your-mongodb-connection-string>
     BASE_URL=<your-base-url>
     JWT_SECRET_KEY=<your-secret-key>
     ```

4. Start the development server.
   ```bash
   npm run dev
   ```

The backend server will run on the specified port, and you can proceed to work on the frontend.

## Controllers

### User Controller
The user controller manages user registration, login, profile retrieval, password change, and account details modification.

#### Endpoints:
- `POST /api/user/register`: Register a new user.
  - **Request Body:**
    ```json
    {
      "username": "string",
      "email": "string",
      "password": "string",
      "fullName": "string",
      "avatarUrl": "string",
      "bio": "string"
    }
    ```

- `POST /api/user/login`: Login with existing credentials.
  - **Request Body:**
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```

- `GET /api/user`: Retrieve user profile.
  - **Secure Route:** Requires authentication with JWT.

- `PUT /api/user/change-password`: Change user password.
  - **Request Body:**
    ```json
    {
      "currentPassword": "string",
      "newPassword": "string"
    }
    ```
  - **Secure Route:** Requires authentication with JWT.

- `PUT /api/user/change-account-details`: Modify user account details.
  - **Request Body:**
    ```json
    {
      "fullName": "string",
      "avatarUrl": "string",
      "bio": "string"
    }
    ```
  - **Secure Route:** Requires authentication with JWT.

### Notes Controller
The notes controller handles note creation, retrieval, update, and deletion.

#### Endpoints:

**Authorization:** Bearer + token for every route in notes

- `POST /api/notes/create`: Create a new note.
  - **Request Body:**
    ```json
    {
      "user_id": "string",
      "title": "string",
      "content": "string",
      "tags": ["string"],
      "attachments": [{"filename": "string", "url": "string"}]
    }
    ```
  - **Note:** Checks for existing notes with the same title and content to prevent spam.

- `GET /api/notes`: Retrieve all verified notes.
- `GET /api/notes/:id`: Retrieve a specific note by ID.
- `PUT /api/notes/:id/update`: Update a note by ID.
  - **Request Body:**
    ```json
    {
      "title": "string",
      "content": "string",
      "tags": ["string"],
      "attachments": [{"filename": "string", "url": "string"}]
    }
    ```
- `DELETE /api/notes/:id/delete`: Delete a note by ID.

### Admin Controller
The admin controller provides additional functionality for managing notes specifically for admin users.

#### Endpoints:
- `GET /api/admin/notes`: Retrieve all notes (admin only).
- `PUT /api/admin/notes/:id/update`: Update a note by ID (admin only).
  - **Request Body:**
    ```json
    {
      "title": "string",
      "content": "string",
      "tags": ["string"],
      "attachments": [{"filename": "string", "url": "string"}],
      "verified": true
    }
    ```
- `DELETE /api/admin/notes/:id/delete`: Delete a note by ID (admin only).

#### Schemas:
**Notes Schema:**
```javascript
import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  content: {
    type: String,
    required: true,
    minlength: 10,
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
  verified: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: () => new Date(),
  },
  updated_at: {
    type: Date,
    default: () => new Date(),
  },
  tags: {
    type: [String],
    default: [],
  },
  attachments: {
    type: [{
      filename: String,
      url: {
        type: String,
        validate: {
          validator: (value) => /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(value),
          message: 'Invalid URL',
        },
      },
    }],
    default: [],
  },
});

const Notes = mongoose.model('Notes', noteSchema);

export default Notes;

```

**User Schema:**
```javascript
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        // Basic email validation
        return /\S+@\S+\.\S+/.test(value);
      },
      message: 'Invalid email address',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  profile: {
    fullName: {
      type: String,
      minlength: 2,
      maxlength: 100,
    },
    avatarUrl: {
      type: String,
      validate: {
        validator: function (value) {
          return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(value);
        },
        message: 'Invalid URL',
      },
    },
    bio: {
      type: String,
      maxlength: 500,
    },
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;

```

## Development Guidelines
- Follow RESTful conventions for API design.
- Use appropriate status codes and response formats.
- Ensure error handling is implemented for all endpoints.
- Write unit tests for controllers to ensure the stability of the API.
- Document any changes or additions made to the controllers.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)

## Contributing
If you find any issues or have suggestions for improvement, please feel free to create a pull request or open