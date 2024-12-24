import Router from "express";
import {
  getTag,
  postTag,
  updateTag,
  deleteTag,
} from "../controllers/tagControllers.js";
import { validateToken } from "../middleware/validateToken.js";

const router = Router();

router.route("/").get(validateToken, getTag);
router.route("/").post(validateToken, postTag);
router.route("/").put(validateToken, updateTag);
router.route("/").delete(validateToken, deleteTag);

export default router;
