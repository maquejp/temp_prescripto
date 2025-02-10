import express from "express";
import cors from "cors";
import dotdev from "dotenv";

dotdev.config();

import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";

// app config
const app = express();
const port = process.env.PORT || 4000;

// database connection
connectDB();

// cloudinary config
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// api end points

app.use("/api/admin", adminRouter);

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
