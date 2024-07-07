import { Document } from "mongoose";

export interface iUser {
  name: string;
  email: string;
  password: string;
  task: {}[];
}

export interface iUserData extends iUser, Document {}

export interface iTask {
  title: string;
  details: string;
  user: {};
}
export interface iTaskData extends iTask, Document {}
