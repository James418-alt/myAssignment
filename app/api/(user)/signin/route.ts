import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import myUserModel from "@/app/utils/model/userModel";

export const POST = async (req: NextRequest) => {
  try {
    const { email, password } = await req.json();
    const userExist = await myUserModel.findOne({ email });
    if (userExist) {
      const passCheck = await bcrypt.compare(password, userExist.password);
      if (passCheck) {
        return NextResponse.json({
          message: "Login Successful",
          data: userExist,
          status: 200,
        });
      } else {
        return NextResponse.json({
          message: "Error reading Password",
          status: 400,
        });
      }
    } else {
      return NextResponse.json({
        message: "no user found ",

        status: 400,
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      messsage: "Error Occured",
      status: 400,
      error: error.message,
    });
  }
};
