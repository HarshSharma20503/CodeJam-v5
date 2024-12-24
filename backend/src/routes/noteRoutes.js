import Router from "express";
import {
  getNote,
  postNote,
  updateNote,
  deleteNote,
} from "../controllers/noteControllers.js";
import { validateToken } from "../middleware/validateToken.js";

const router = Router();

router.route("/get").get(validateToken, getNote);
router.route("/post").get(validateToken, postNote);
router.route("/update").get(validateToken, updateNote);
router.route("/delete").get(validateToken, deleteNote);

export default router;
