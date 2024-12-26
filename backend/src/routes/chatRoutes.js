import Router from "express";
import { getChat } from "../controllers/chatControllers.js";
import { validateToken } from "../middleware/validateToken.js";

const router = Router();

router.route("/").post(validateToken, getChat);

export default router;
