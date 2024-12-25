import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    processed: {
      type: Boolean,
      default: false,
    },
    branch: {
      type: String,
      required: true,
    },
    batch: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Course = mongoose.model("Course", courseSchema);
