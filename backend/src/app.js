import express from "express";
import cors from "cors";
import AuthRouter from "./routes/authRoutes.js";
import UserRouter from "./routes/userRoutes.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", AuthRouter);
app.use("/api/user", UserRouter);

export default app;
