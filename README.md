# 🚀 Saurabh Registration System

A full-stack user registration application built using **HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB Atlas**.

This project provides a user-friendly registration interface with client-side validation, server-side validation, secure password hashing, and database integration.

## 📌 Project Overview

The Saurabh Registration System is designed to demonstrate how a frontend registration form communicates with a backend REST API and stores user information in a MongoDB database.

Users can enter their personal details, create an account, and submit their information securely to the backend.

## ✨ Features

- User registration with a clean interface.
- Full name and username validation.
- Email format validation.
- 10-digit phone number validation.
- Password length validation.
- Confirm password matching.
- Gender selection.
- Client-side form validation.
- Server-side input validation.
- Password hashing using bcryptjs.
- Duplicate email and username checking.
- MongoDB Atlas database integration.
- REST API using Express.js.
- Rate limiting for API requests.
- Security headers using Helmet.
- Frontend and backend integration using Fetch API.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structure |
| CSS3 | Styling and layout |
| JavaScript | Frontend functionality |
| Node.js | Backend runtime |
| Express.js | Backend framework |
| MongoDB Atlas | Cloud database |
| Mongoose | MongoDB object modeling |
| bcryptjs | Password hashing |
| Express Validator | Input validation |
| Helmet | Security headers |
| CORS | Cross-origin requests |
| Nodemon | Development server |

## 📂 Project Structure

```text
Saurabh-Registration-System/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │
│   ├── middleware/
│   │
│   ├── models/
│   │   └── User.js
│   │
│   ├── routes/
│   │   └── authRoutes.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .gitignore
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git
- MongoDB Atlas account
- Visual Studio Code

### 1. Clone the Repository

```bash
git clone https://github.com/saurabh-tiwari-1/Saurabh-Registration-System.git
```

### 2. Navigate to the Project

```bash
cd Saurabh-Registration-System
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the backend folder.

Add the following configuration:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your MongoDB Atlas connection URI.

**Important:** Never upload your `.env` file or database credentials to GitHub.

### 5. Start the Backend Server

For development:

```bash
npm run dev
```

For production:

```bash
npm start
```

The backend server will run at:

```text
http://localhost:5000
```

### 6. Run the Frontend

Open the `frontend` folder in Visual Studio Code.

Right-click on `index.html` and select:

**Open with Live Server**

The registration form will open in your browser.

## 🔗 API Endpoints

Base URL:

```text
http://localhost:5000
```

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Check backend status |
| GET | `/api/health` | Check server health |
| POST | `/api/auth/register` | Register a new user |

### Registration API

**Endpoint:**

```text
POST /api/auth/register
```

**Request Body:**

```json
{
  "fullName": "Rahul Sharma",
  "username": "rahul123",
  "email": "rahul@example.com",
  "phone": "9876543210",
  "password": "Example123!",
  "confirmPassword": "Example123!",
  "gender": "Male"
}
```

**Successful Response:**

```json
{
  "success": true,
  "message": "Registration successful!"
}
```

The response also includes the newly registered user's non-password details.

## 🔐 Security Features

- Passwords are hashed using bcryptjs before database storage.
- Server-side validation is implemented.
- Duplicate usernames and email addresses are checked.
- Helmet adds security-related HTTP headers.
- Express Rate Limit helps protect API endpoints against excessive requests.
- Environment variables are excluded from Git tracking.

## 🧪 Testing

The registration API can be tested using:

- Browser for GET endpoints.
- Postman for POST requests.
- PowerShell for API requests.
- MongoDB Atlas to verify stored user records.

## 🎯 Learning Outcomes

Through this project, I learned:

- Building frontend applications using HTML, CSS, and JavaScript.
- Creating backend servers using Node.js and Express.js.
- Working with REST APIs.
- Connecting MongoDB Atlas with a backend application.
- Designing database schemas using Mongoose.
- Implementing frontend and backend validation.
- Hashing passwords using bcryptjs.
- Managing environment variables.
- Using Git and GitHub for version control.

## 🚀 Future Improvements

- User login and authentication.
- User dashboard.
- Forgot password functionality.
- Email verification.
- Profile management.
- JWT-based authentication.
- Deployment to cloud platforms.

## 👨‍💻 Author

**Saurabh Tiwari**

B.Tech Computer Science and Engineering Student

- GitHub: [saurabh-tiwari-1](https://github.com/saurabh-tiwari-1)

---

⭐ If you find this project useful, consider giving it a star!

**Built with ❤️ using HTML, CSS, JavaScript, Node.js, Express.js and MongoDB.**
