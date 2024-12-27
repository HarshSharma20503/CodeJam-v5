import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Tag } from "../models/tagModel.js";

export const getTag = AsyncHandler(async (req, res) => {
    console.log("******** getTag Function ********");
    const { userID } = req.body;

    
    console.log("userId: ", userID);

    const tag = await Tag.find({ userId: userID });
    console.log("tag: ", tag);
    
    if (!tag) {
        throw new ApiError(404, "tag not found"); 
    };
    
    
    return res.status(200).json(
        new ApiResponse(
        200,
        {
            tag,
        },
        "tag fetched successfully"
        )
    );
});

export const postTag = AsyncHandler(async (req, res) => {
    console.log("******** getTag Function ********");
    const user = req.user;
    const { Tags, lectureId } = req.body;

    const tags = await Tag.create({ Tags, lectureId, userId: user._id });

    if (!tags) {
        throw new ApiError(404, "Tag not found");  //change this error code??
    }

    return res.status(200).json(
        new ApiResponse(
        200,
        {
            tags,
        },
        "Tag added successfully"
        )
    );
});

export const updateTag = AsyncHandler(async (req, res) => {
    console.log("******** updateTag Function ********");
    const user = req.user;
    const { Tags, lectureId } = req.body;

    const tags = await Tag.findOneAndUpdate({ userId: user._id, lectureId }, { Tags });
    

    if (!tags) {
        throw new ApiError(404, "Tag not found");  //change this error code??
    }

    return res.status(200).json(
        new ApiResponse(
        200,
        {
            tags,
        },
        "Tag updated successfully"
        )
    );
});

