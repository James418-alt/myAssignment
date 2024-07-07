"use client";
import { signIn } from "next-auth/react";
import React from "react";

const Page = () => {
  const formAction = (formData: FormData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    signIn("credentials", { email, password });
  };
  return (
    <div className="flex justify-center items-center w-full h-full">
      <form action={formAction} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label>Email</label>
          <input className="bg-gray-400" name="email" type="text" />
        </div>
        <div className="flex flex-col gap-2">
          <label>Password</label>
          <input className="bg-gray-400" name="password" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Page;
