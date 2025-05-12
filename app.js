// imports modules
import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Recreate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// intilize app
const app = express();

// connect to db

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine for EJS
app.set("views", __dirname, "./src/views");

// routes

// default route
app.get(`/`, (req, res) => {
  res.send(`API is running...`);
});

export default app;
