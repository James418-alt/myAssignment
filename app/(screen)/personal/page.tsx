// import { getServerSession } from "next-auth";
import React from "react";

import moment from "moment";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

const Page = async () => {
  const session = await getServerSession(options);
  const res = await fetch(
    `http://localhost:3000/api/register/${session?.user?.id}`,
    {
      method: "GET",
      cache: "no-cache",
    }
  );
  const data = await res.json();

  return (
    <div className="p-2">
      <div className="border w-full h-full rounded-md flex flex-wrap justify-center">
        {data?.data?.task?.map((el: any) => (
          <div
            key={el._id}
            className="border p-2 rounded-md w-[250px] h-[250px] my-2 mx-2"
          >
            <h2>{el.title}</h2>
            <p>{el.details}</p>
            <div className="flex gap-2 justify-end items-end h-[190px]">
              <p className="text-gray-500 text-[12px]">
                {moment(el.createdAt).fromNow()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
