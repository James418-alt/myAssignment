// import { getServerSession } from "next-auth";
import React from "react";

import moment from "moment";
import { MdCancel } from "react-icons/md";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";

const Page = async () => {
  const session = await getServerSession(options);

  const res = await fetch("http://localhost:3000/api/task", {
    method: "GET",
    cache: "no-cache",
  });
  const data = await res.json();

  return (
    <div className="p-2">
      <div className="border w-full h-full rounded-md flex flex-wrap justify-center">
        {data?.data?.map((el: any) => (
          <div
            key={el._id}
            className="border p-2 rounded-md w-[250px] h-[250px] my-2 mx-2"
          >
            <h2 className="font-semibold text-[19px]">{el.title}</h2>
            <p className="text-[14px] text-gray-600">{el.details}</p>
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
