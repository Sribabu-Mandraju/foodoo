import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

import authRouter from "./routes/auth.route.js";

const dbName = 'FOOD_DONATION';

mongoose
  .connect(`mongodb+srv://sribabu:63037sribabu@atlascluster.k6u2oy9.mongodb.net/${dbName}?retryWrites=true&w=majority`)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

app.use("/api/auth", authRouter);
