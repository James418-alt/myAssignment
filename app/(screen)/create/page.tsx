// "use client";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import React from "react";

const Page = async () => {
  const session = await getServerSession(options);

  const formAction = async (formData: FormData) => {
    "use server";
    const title = formData.get("title");
    const details = formData.get("description");

    await fetch(`http://localhost:3000/api/register/${session?.user?.id}`, {
      method: "POST",
      body: JSON.stringify({ title, details }),
    }).then(() => {
      console.log("Done");
      redirect("/");
    });
  };
  return (
    <div className="p-2">
      <div className="border w-full h-[100vh] rounded-md flex flex-wrap justify-center">
        <form
          action={formAction}
          className="border p-2 h-[185px] w-[250px] mt-10 flex flex-col gap-3"
        >
          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-semibold">Title</label>
            <input
              name="title"
              className="bg-gray-100 p-1 rounded-sm outline-none text-[14px]"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-semibold">Description</label>
            <input
              name="description"
              className="bg-gray-100 p-1 rounded-sm outline-none text-[14px]"
              type="text"
            />
          </div>
          <div className="flex justify-center mt-3">
            <button className="border rounded-sm text-[13px] font-semibold p-1 ">
              Make Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
