import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import "dotenv/config";

import UserRoutes from "./Kanbas/Users/routes.js";
import session from "express-session";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import EnrollmentRoutes from "./Kanbas/Enrollments/routes.js";
import AssignmentRoutes from "./Kanbas/Assisgnments/routes.js";

const app = express();

// Define allowed origins
const allowedOrigins = [
  process.env.NETLIFY_URL || "http://localhost:3000"
];

// CORS configuration
app.use(
  cors({
    credentials: true, // Allow credentials (cookies, headers, etc.)
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

// Session configuration
const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kanbas",
  resave: false,
  saveUninitialized: false,
};

if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none", // Required for cross-origin cookies
    secure: true, // Send cookies only over HTTPS
    domain: process.env.NODE_SERVER_DOMAIN, // Ensure it matches your backend domain
  };
}

app.use(session(sessionOptions));
app.use(express.json());

// Route imports
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
EnrollmentRoutes(app);
AssignmentRoutes(app);

Hello(app);
Lab5(app);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
