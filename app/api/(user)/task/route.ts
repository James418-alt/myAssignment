import myTaskModel from "@/app/utils/model/taskModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const getD = await myTaskModel.find().populate({ path: "user" });
    return NextResponse.json({
      message: "Task found",
      status: 200,
      data: getD,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error Occured",
      status: 400,
      error: error.message,
    });
  }
};
