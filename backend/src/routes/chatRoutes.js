import Router from "express";
import { getChat, postChat, updateChat, deleteChat } from "../controllers/chatControllers.js";
import { validateToken } from "../middleware/validateToken.js";

const router = Router();

router.route("/get").get(validateToken, getChat);
router.route("/").post(validateToken, postChat);
router.route("/").put(validateToken, updateChat);
router.route("/").delete(validateToken, deleteChat);

export default router;
