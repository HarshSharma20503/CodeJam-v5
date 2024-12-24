import Router from "express";
import { getChat, postChat, updateChat, deleteChat } from "../controllers/chatControllers.js";
import { validateToken } from "../middleware/validateToken.js";

const router = Router();

router.route("/get").get(validateToken, getChat);
router.route("/post").get(validateToken, postChat);
router.route("/update").get(validateToken, updateChat);
router.route("/delete").get(validateToken, deleteChat);

export default router;
