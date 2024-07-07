import { Schema, Types, model, models } from "mongoose";
import { iUserData } from "../interface";

const userModel = new Schema<iUserData>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    task: [
      {
        type: Types.ObjectId,
        ref: "tasks",
      },
    ],
  },
  { timestamps: true }
);
const myUserModel = models.people || model<iUserData>("people", userModel);

export default myUserModel;
