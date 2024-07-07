import myTaskModel from "@/app/utils/model/taskModel";
import myUserModel from "@/app/utils/model/userModel";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest, { params }: any) => {
  try {
    const { userID, taskID } = params;
    const user = await myUserModel.findById(userID);
    if (user) {
      const getD = await myTaskModel.findByIdAndDelete(taskID);
      user.task.pull(taskID);
      user.save();
      return NextResponse.json({
        message: "Task Deleted",
        data: getD,
        status: 200,
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      message: "Error Occured",
      status: 400,
      error: error.message,
    });
  }
};
