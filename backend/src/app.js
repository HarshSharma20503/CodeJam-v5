import express from "express";
import cors from "cors";
import AuthRouter from "./routes/authRoutes.js";
import UserRouter from "./routes/userRoutes.js";
import NoteRouter from "./routes/noteRoutes.js";
import tagRotuer from "./routes/tagRoutes.js";
import chatRouter from "./routes/chatRoutes.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", AuthRouter);
app.use("/api/user", UserRouter);
app.use("/api/note", NoteRouter);
app.use("/api/tag", tagRotuer);
app.use("api/chat", chatRouter);

export default app;
