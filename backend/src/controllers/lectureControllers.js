import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Lecture } from "../models/lectureModel.js";

export const getLecture = AsyncHandler(async (req, res) => {
    console.log("******** getUserData Function ********");
  const user = req.user;
  const batch = user.batch;
  const branch = user.branch;

  const lectures = await Lecture.find({ batch, branch });

  if (!lectures) {
    throw new ApiError(404, "lectures not found");
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        user,
        lectures,
      },
      "User data fetched successfully"
    )
  );
});

export const postLecture = AsyncHandler(async (req, res) => {
    console.log("******** postLecture Function ********");
    const user = req.user;
    const { lectures, course, link, batch, branch } = req.body;

    const lecture = await Lecture.create({
        userId: user._id,
        lectures,
        course,
        link,
        batch,
        branch,
    });

    return res.status(201).json(
        new ApiResponse(
        201,
        {
            lecture,
        },
        "lecture created successfully"
        )
    );
});
