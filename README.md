# VRV ASSESSMENT RBAC - UI 

## **Project Overview**

This project implements a secure authentication and authorization system with **Role-Based Access Control (RBAC)**. It allows users to register, log in, and log out securely. Access to specific resources or endpoints is restricted based on the user’s assigned role (e.g., Admin, User, Moderator).

We have utilized **Passport.js** for authentication, ensuring robust security and session management.

---

## **Features**

1. **Authentication**:
   - Secure user registration and login using **Passport.js**.
   - Passwords are hashed for secure storage in the database.
   - Logout functionality to terminate user sessions.

2. **Role-Based Access Control (RBAC)**:
   - Users are assigned roles (Admin, User, Moderator).
   - Specific resources and endpoints are protected based on user roles.
   - Middleware ensures role-based authorization for accessing routes.

3. **Technology Stack**:
   - **EJS**: For server-side HTML rendering.
   - **CSS**: For styling the front-end views.
   - **Express.js**: For routing and handling HTTP requests.
   - **Node.js**: As the runtime environment.
   - **MongoDB**: For data storage, integrated via **Mongoose**.
   - **Passport.js**: For secure session-based authentication.

---


## To start setting up the project

Step 1: Clone the repo

```bash
git clone https://github.com/trulymittal/role-based-access-control
```

Step 2: cd into the cloned repo and run:

```bash
npm install
```

Step 3: Put your credentials in the .env file.

```bash
PORT=3000
MONGODB_URI=YOUR_MONGODB_URI(example: mongodb://localhost:27017)
DB_NAME=YOUR_DB_NAME
SESSION_SECRET=YOUR_SESSION_SECRET_KEY
ADMIN_EMAIL=YOUR_ADMIN_EMAIL
```

Step 4: Start the app by

```bash
npm start
```

