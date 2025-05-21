import express from "express";
import mongoose from "mongoose";
import urlRoutes from "./routes/urlRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());

//connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

//mount routes
app.use("/", urlRoutes);

//Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
