import { getServerSession } from "next-auth";
import React from "react";
import { options } from "./api/auth/[...nextauth]/options";
import { MdCreate, MdHome } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";
import Link from "next/link";

const Header = async () => {
  const session: any = await getServerSession(options);
  console.log(session);

  const data = [
    { id: 0, title: "Home", logo: <MdHome />, url: "/" },
    { id: 1, title: "Create", logo: <MdCreate />, url: "/create" },
    ,
    { id: 2, title: "Personal", logo: <IoMdEyeOff />, url: "/personal" },
  ];
  return (
    <div className="flex gap-4 p-2 justify-center">
      {data.map((el: any) => (
        <Link
          href={el.url}
          key={el.id}
          className="flex justify-center items-center border p-1 rounded-sm cursor-default"
        >
          <div className="flex items-center  gap-2">
            <div>{el.title}</div>
            <div>{el.logo}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Header;
