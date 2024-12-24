import mongoose, { Schema } from "mongoose";

const chatSchema = new Schema(
    {
        messages: {
                type: [String],
                required: true,
        },
        lectureId: {
                type: Schema.Types.ObjectId,
                ref: 'Lecture',
                required: true,
        },
        userId: {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: true,
        }
    },
    { timestamps: true }
);





export const Chat = mongoose.model("Chat", chatSchema);
