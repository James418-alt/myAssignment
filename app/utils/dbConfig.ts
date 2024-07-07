import { clear } from "console";
import { connect } from "mongoose";

export const dbConfig = async () => {
  await connect(
    "mongodb+srv://ebifegha123:ebifegha123@gomenticode.1l9lbmv.mongodb.net/assignmentDb?retryWrites=true&w=majority&appName=GomentiCodeZ"
  ).then(() => {
    clear();
    console.log("Server UP!!");
  });
};
