import { dbConfig } from "@/app/utils/dbConfig";
import myTaskModel from "@/app/utils/model/taskModel";
import myUserModel from "@/app/utils/model/userModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { userID } = params;

    const getD = await myUserModel.findById(userID).populate({ path: "task" });
    return NextResponse.json({
      message: "User Found",
      data: getD,
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error Occured",
      status: 400,
      error: error.message,
    });
  }
};

export const POST = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { userID } = params;
    const { title, details } = await req.json();
    const userExist = await myUserModel.findById(userID);
    if (userExist) {
      const getD = await myTaskModel.create({
        title,
        details,
        user: userExist,
      });
      userExist.task.push(getD);
      userExist.save();
      return NextResponse.json({
        message: "Post Created",
        data: getD,
        status: 200,
      });
    } else {
      return NextResponse.json({
        message: "User not found",
        status: 400,
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
