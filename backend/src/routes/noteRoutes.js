import Router from "express";
import { getNote, postnote, updatenote, deletenote } from "../controllers/noteControllers.js";
import { validateToken } from "../middleware/validateToken.js";

const router = Router();

router.route("/get").get(validateToken, getNote);
router.route("/post").get(validateToken, postnote);
router.route("/update").get(validateToken, updatenote);
router.route("/delete").get(validateToken, deletenote);

export default router;
