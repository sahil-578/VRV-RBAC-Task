// import
import express from "express";
import createHttpError from "http-errors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectFlash from "connect-flash";
import passport from "passport";
import { ensureLoggedIn } from "connect-ensure-login";

// Import custom modules
import indexRoutes from "./routes/index.route.js";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import adminRoutes from "./routes/admin.route.js";
import "./utils/passport.auth.js";
import { connectDB } from "./utils/db.js";
import { sessionConfig } from "./utils/session.js";
import { ensureAdmin } from "./middlewares/auth.middleware.js";

// Load environment variables
dotenv.config();

// Initialization
const app = express();

// Middlewares
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Init Session
app.use(sessionConfig);

// For Passport JS Authentication
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

// Connect Flash
app.use(connectFlash());
app.use((req, res, next) => {
  res.locals.messages = req.flash();
  next();
});

// Routes
app.use("/", indexRoutes);
app.use("/auth", authRoutes);
app.use("/user", ensureLoggedIn, userRoutes);
app.use("/admin", ensureLoggedIn, ensureAdmin, adminRoutes);

// 404 Handler
app.use((req, res, next) => {
  next(createHttpError.NotFound());
});

// Error Handler
app.use((error, req, res, next) => {
  error.status = error.status || 500;
  res.status(error.status);
  res.render("error_40x", { error });
});

// Connect to Database and Start Server
const PORT = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(PORT, () =>
    console.log(`🚀 Server running at http://localhost:${PORT}`)
  );
});
