import mongoose, { Schema } from "mongoose";

const tagSchema = new Schema(
  {
    Tag: {
      type: [String],
      required: true,
    },
    lectureId: {
      type: Schema.Types.ObjectId,
      ref: "Lecture",
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Tag = mongoose.model("Tag", tagSchema);
