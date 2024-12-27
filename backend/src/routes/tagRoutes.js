import Router from "express";
import {
  getTag,
  postTag,
  updateTag,
} from "../controllers/tagControllers.js";
import { validateToken } from "../middleware/validateToken.js";

const router = Router();


router.route("/getTags").post(validateToken, getTag);
router.route("/").post(validateToken, postTag);
router.route("/").put(validateToken, updateTag);

export default router;
