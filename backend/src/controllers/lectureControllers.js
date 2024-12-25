import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadToS3 } from "../utils/aws-utils.js";
import fs from "fs/promises";
import { Course } from "../models/courseModel.js";
import { Lecture } from "../models/lectureModel.js";

export const postLecture = AsyncHandler(async (req, res) => {
  console.log("******** postLecture Function ********");
  const { batch, branch } = req.user;

  if (!req.file) {
    throw new ApiError(400, "No file uploaded");
  }

  console.log("req.file: ", req.file);

  console.log("req.body:", JSON.stringify(req.body));

  const objectKey = req.body.course + req.file.originalname;

  const url = await uploadToS3(
    req.file.path,
    process.env.AWS_BUCKET_NAME,
    objectKey
  );

  let course = await Course.findOne({ name: req.body.course });

  if (!course) {
    console.log("Course not found, creating new course");
    course = await Course.create({
      name: req.body.course,
      branch,
      batch,
    });
  }

  console.log("Course: ", course);

  let lecture = await Lecture.findOne({
    name: req.file.originalname,
    course: course._id,
  });

  if (!lecture) {
    console.log("Lecture not found, creating new lecture");
    lecture = await Lecture.create({
      name: req.file.originalname,
      course: course._id,
      link: url,
      batch,
      branch,
    });
  }

  console.log("Lecture: ", lecture);

  fs.unlink(req.file.path, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        message: "Error deleting file from server",
      });
    }
    console.log("File deleted from server");
  });

  return res.status(200).json({
    message: "File uploaded successfully",
    filename: req.file.filename,
  });
});
