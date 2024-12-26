import { Router } from "express";

import { askAi } from "../controllers/chatBotControllers.js";
import { validateToken } from "../middleware/validateToken.js";

const router = Router();

router.route("/ask").post(validateToken, askAi);

export default router;
