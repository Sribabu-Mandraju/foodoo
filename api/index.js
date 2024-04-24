import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routes/auth.route.js";
import path from "path";

dotenv.config();

// const dbName = "FOOD_DONATION";

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

const _dirname = path.resolve();

const app = express();
app.use(express.json());
// const allowedOrigins = [process.env.FRONTEND_URL];
// // Add your allowed origin here
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };
// app.use(cors(corsOptions)); // Pass corsOptions to cors middleware

app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
  // console.log(process.env.FRONTEND_URL)
  // console.log(process.env.MONGO_URL)
});

app.use("/api/auth", authRouter);

app.use(express.static(path.join(_dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(_dirname, "client", "dist", "index.html"));
});
