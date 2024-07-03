import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

export default function Menu() {
  return (
    <>
      <div className="pt-2 bg-white pb-2 pl-2 pr-10 h-[40px] grid grid-rows-1 grid-cols-2 w-full">
        <div className="float-left grid grid-cols-1  ml-10 ">
          <input
            type="text"
            placeholder="Search"
            className=" rounded bg-[#F4F5FA] pl-8 w-[230px]"
          />
          <CiSearch className="absolute top-3 " />
        </div>
        <div className="float-right grid-cols-1 flex justify-end">
          <FaRegBell />
          <div className="ml-6 flex flex-row">
            <MdAccountCircle />
            <h1 className="-mt-1 ml-2 ">Account</h1>
            <IoIosArrowDown className="ml-2" />
          </div>
        </div>
      </div>
    </>
  );
}
