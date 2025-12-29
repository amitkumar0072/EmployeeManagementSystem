# Employee Management System

A **full-stack Employee Management System** built using the **MERN stack**, designed to manage employee data securely with role-based access control and authentication.  
The application focuses on clean backend architecture, scalability, and secure API design.

---

## 🚀 Features

- User authentication using **JWT**
- Role-based access control (Admin / Employee)
- Secure employee **CRUD operations**
- Password hashing with **bcrypt**
- RESTful API architecture
- Scalable backend structure (Controllers & Services)
- Input validation and error handling
- Git & GitHub version control

---

## 🛠 Tech Stack

### Frontend
- React.js
- HTML5, CSS3
- JavaScript

### Backend
- Node.js
- Express.js
- REST APIs
- JWT Authentication
- bcrypt

### Database
- MongoDB

### Tools & Platforms
- Git & GitHub
- VS Code
- Postman

---

## 🧩 System Architecture

- **Controllers**: Handle request and response logic
- **Services**: Business logic and data processing
- **Routes**: API routing and access control
- **Middleware**: Authentication, authorization, and validation
- **Database Layer**: MongoDB with Mongoose schemas

This separation ensures **maintainability, scalability, and clean code practices**.

---

## 🔐 Authentication & Security

- JWT-based authentication for secure sessions
- Passwords stored using **bcrypt hashing**
- Role-based authorization for protected routes
- Validation to prevent invalid or malicious inputs

---

## 📌 API Endpoints (Sample)

| Method | Endpoint | Description |
|------|--------|------------|
| POST | /api/auth/register | Register a new user |
| POST | /api/auth/login | User login |
| GET | /api/employees | Fetch all employees |
| POST | /api/employees | Create new employee |
| PUT | /api/employees/:id | Update employee |
| DELETE | /api/employees/:id | Delete employee |

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/employee-management-system.git

# Navigate to project directory
cd employee-management-system

# Install dependencies
npm install

# Start the server
npm run dev
