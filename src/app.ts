import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morganLogger from "morgan";
import helmetSecurity from "helmet";
import corsMiddleware from "cors";
import cookieParserMiddleware from "cookie-parser";
import path from "node:path";
import responseMiddleware from "./middlewares/response";
import { handleError, handleNotFound } from "./middlewares/middlewares";
import apiRoutes from "./routes";

const expressApp = express();
expressApp.use(morganLogger("dev"));
expressApp.use(helmetSecurity());

// Allow multiple origins dynamically
const allowedOrigins = ["http://localhost:3000"];

expressApp.use(
  corsMiddleware({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
expressApp.use(express.json());
expressApp.use(cookieParserMiddleware());
expressApp.use(responseMiddleware);

// Define root route
expressApp.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

expressApp.use("/api", apiRoutes);

// Use custom middlewares for handling 404 and errors
expressApp.use(handleNotFound);
expressApp.use(handleError);

export default expressApp;
