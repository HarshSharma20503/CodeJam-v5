import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Note } from "../models/noteModel.js";

export const getNote = AsyncHandler(async (req, res) => {
    console.log("******** getnote Function ********");
    const user = req.user;
    const note = await Note.find({ userId: user._id });
    
    if (!note) {
        throw new ApiError(404, "note not found"); 
    };
   
    
    return res.status(200).json(
        new ApiResponse(
        200,
        {
            note,
        },
        "note fetched successfully"
        )
    );
});

export const postNote = AsyncHandler(async (req, res) => {
    console.log("******** getnote Function ********");
    const user = req.user;
    const { notes, lectureId } = req.body;

    const note = await Note.create({ notes, lectureId, userId: user._id });

    if (!note) {
        throw new ApiError(404, "note not found");  //change this error code??
    }

    return res.status(200).json(
        new ApiResponse(
        200,
        {
            note,
        },
        "note added successfully"
        )
    );
});

export const updateNote = AsyncHandler(async (req, res) => {
    console.log("******** updatenote Function ********");
    const user = req.user;
    const { notes, lectureId } = req.body;

    const note = await Note.findOneAndUpdate({ userId: user._id, lectureId }, { notes });
    

    if (!note) {
        throw new ApiError(404, "note not found");  //change this error code??
    }

    return res.status(200).json(
        new ApiResponse(
        200,
        {
            note,
        },
        "note updated successfully"
        )
    );
});


export const deleteNote = AsyncHandler(async (req, res) => {
    console.log("******** deletenote Function ********");
    const user = req.user;
    const { lectureId } = req.body;

    const note = await note.findOneAndDelete({ userId: user._id, lectureId });
    
    
    if (!note) {
        throw new ApiError(404, "note not found");  //change this error code??
    }

    return res.status(200).json(
        new ApiResponse(
        200,
        {
            note,
        },
        "note deleted successfully"
        )
    );
});