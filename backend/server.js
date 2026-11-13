
const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");

const app = express();

// CORS Middleware
app.use(cors({
    origin: [
        "http://127.0.0.1:5500",
        "http://localhost:5500",
        "http://127.0.0.1:5501",
        "http://localhost:5501",
        "https://saurabh-registration-frontend.onrender.com"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
// Security Middleware
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: "draft-8",
    legacyHeaders: false
});

app.use(limiter);
// Registration routes
app.use("/api/auth", authRoutes);

// Home API
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Registration Form Backend is Running!",
        project: "Saurabh Registration System",
        status: "Active"
    });
});

// Health API
app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Backend server is healthy!"
    });
});

// Start Server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
        console.log("Backend is ready!");
    });
};

startServer();
