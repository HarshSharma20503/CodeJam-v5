import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Chat } from "../models/savedChatsModel.js";

export const getChat = AsyncHandler(async (req, res) => {
    console.log("******** getChat Function ********");
    const user = req.user;
    const chat = await Chat.find({ userId: user._id });
    
    if (!chat) {
        throw new ApiError(404, "Chat not found"); 
    };
   
    
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

export const postChat = AsyncHandler(async (req, res) => {
    console.log("******** getChat Function ********");
    const user = req.user;
    const { chats, lectureId } = req.body;

    const chat = await Chat.create({ chats, lectureId, userId: user._id });

    if (!chat) {
        throw new ApiError(404, "Chat not found");  //change this error code??
    }

    return res.status(200).json(
        new ApiResponse(
        200,
        {
            chat,
        },
        "Chat added successfully"
        )
    );
});

export const updateChat = AsyncHandler(async (req, res) => {
    console.log("******** updateChat Function ********");
    const user = req.user;
    const { chats, lectureId } = req.body;

    const chat = await Chat.findOneAndUpdate({ userId: user._id, lectureId }, { chats });
    

    if (!chat) {
        throw new ApiError(404, "Chat not found");  //change this error code??
    }

    return res.status(200).json(
        new ApiResponse(
        200,
        {
            chat,
        },
        "Chat updated successfully"
        )
    );
});


export const deleteChat = AsyncHandler(async (req, res) => {
    console.log("******** deleteChat Function ********");
    const user = req.user;
    const { lectureId } = req.body;

    const chat = await Chat.findOneAndDelete({ userId: user._id, lectureId });
    
    
    if (!chat) {
        throw new ApiError(404, "Chat not found");  //change this error code??
    }

    return res.status(200).json(
        new ApiResponse(
        200,
        {
            chat,
        },
        "Chat deleted successfully"
        )
    );
});