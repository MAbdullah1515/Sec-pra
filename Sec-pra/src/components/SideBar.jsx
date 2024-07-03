import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import { MdDashboard } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";

export default function SideBar() {
  return (
    <>
      <div className=" grid  grid-cols-1 bg-white pt-1 pb-1 pl-4 pr-4 w-[20%]  ">
        <Link to="/">
          <img src="./images/Group 10263.png" className="w-[100px] " />{" "}
        </Link>
        <div className=" mt-10 space-y-6">
          <button className="text-[#202053] border-[1px] border-[#202053] pt-2 pb-2 pl-10 pr-10 rounded-md">
            + Create Order
          </button>
          <button className="text-[#FF745A] font-medium bg-[#202053] rounded-md pt-3 pb-3 pl-4 grid-rows-1  grid grid-cols-7 w-[86%]">
            <MdDashboard className="m-1  " /> Dashboard
          </button>
          <div className="grid grid-cols-1 space-y-6">
            <Link to="/customer">
              <img src="./images/customer.png" className="w-48" />{" "}
            </Link>
            <Link to="/driver">
              <img src="./images/Group 9666.png" className="w-48" />{" "}
            </Link>
            <Link to="/warehouse">
              <img src="./images/Group 9665.png" className="w-48" />{" "}
            </Link>
            <Link to= "/charge">
              <img src="./images/Group 9667.png" className="w-48" />{" "}
            </Link>
            <Link to="/earning">
              <img src="./images/Group 9668.png" className="w-48" />{" "}
            </Link>

            <Link to="/income">
              <img src="./images/Group 9654.png" className="w-48" />{" "}
            </Link>
            <Link>
              <img src="./images/Group 9660.png" className="w-48" />{" "}
            </Link>
            <Link>
              <img src="./images/Group 9663.png" className="w-28" />{" "}
            </Link>
            <Link>
              <img src="./images/Group 9664.png" className="w-24" />{" "}
            </Link>
            <Link>
              <img src="./images/Group 9662.png" className="w-20" />{" "}
            </Link>
          </div>
        </div>
        <Link className=" bottom-0 bg-white flex flex-row w-56 fixed p-6 ">
          <IoIosLogOut className=" mt-1 " /> Logout
        </Link>
      </div>
    </>
  );
}
