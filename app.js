import express from "express";
import { config } from "dotenv";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

config({
  path: ".env",
});

// Using Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["*"],
  })
);
//using routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);

app.get("/", (req, res) => {
  res.status(200).send("Hello User");
});

//using Error Middleware
app.use(errorMiddleware);
