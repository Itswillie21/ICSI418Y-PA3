# ICSI 418Y Programming Assignment 3

## Projects and Project Memberships

This project builds on Programming Assignment 2 by adding projects and project memberships to the existing full-stack Signup and Login application.

The application was built using React, Node.js, Express, MongoDB, and Mongoose.

## Features

- User Signup and Login
- Create projects with a name, description, status, and Project Lead
- View existing projects
- Select Project Leads from registered users
- View the members of a project
- Add registered users to projects
- Remove non-lead members from projects
- Prevent duplicate project memberships
- Prevent the Project Lead from being removed
- Allow users to participate in multiple projects

Project and user relationships are stored using MongoDB ObjectId references.

## Running the Project

The backend and frontend need to be run in separate terminals.

### Backend

From the project folder:

```bash
cd server
npm install
node server.js
```

The backend runs at:

```text
http://localhost:5000
```

The server requires a `.env` file inside the `server` folder containing a valid MongoDB connection string:

```text
MONGO_URI=your_mongodb_connection_string
```

The `.env` file is not included in the GitHub repository.

### Frontend

Open a second terminal:

```bash
cd client
npm install
npm run dev
```

The frontend runs at:

```text
http://localhost:5173
```

Open that address in a browser to use the application.

## Database

The application uses three MongoDB collections:

- Users
- Projects
- ProjectMemberships

ProjectMemberships use the Project and User ObjectIds to represent the many-to-many relationship between users and projects.

## Author

William Taylor  
ICSI 418Y - Software Engineering
