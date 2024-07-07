import { Schema, Types, model, models } from "mongoose";
import { iTaskData } from "../interface";

const taskModel = new Schema<iTaskData>(
  {
    title: {
      type: String,
    },
    details: {
      type: String,
    },
    user: {
      type: Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);
const myTaskModel = models.tasks || model<iTaskData>("tasks", taskModel);
export default myTaskModel;
