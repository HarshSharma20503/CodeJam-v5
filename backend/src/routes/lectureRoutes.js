import { Router } from "express";

import { postLecture } from "../controllers/lectureControllers.js";
import { validateToken } from "../middleware/validateToken.js";
import { upload } from "../middleware/multer.js";

const router = Router();

router.post("/", validateToken, upload.single("file"), postLecture);

export default router;
