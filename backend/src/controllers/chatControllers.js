import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Chat } from "../models/chatModel.js";

export const getChat = AsyncHandler(async (req, res) => {
  console.log("******** getChat Function ********");
  const user = req.user;
  const lectureId = req.body.lectureId;
  const chat = await Chat.find({ userId: user._id, lectureId })
    .sort({ createdAt: -1 })
    .limit(10);

  if (!chat) {
    await Chat.create({
      userId: user._id,
      lectureId,
      messages: [],
    });
    return res.status(201).json(
      new ApiResponse(
        201,
        {
          chat: [],
        },
        "Chat fetched successfully"
      )
    );
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        chat,
      },
      "Chat fetched successfully"
    )
  );
});
