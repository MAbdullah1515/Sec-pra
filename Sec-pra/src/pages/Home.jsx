import React from "react";
import Nav from "../components/SideBar";
import Menu from "../components/Menu";
import SideBar from "../components/SideBar";
import Dashboard from "../components/Dashboard";
import RecentActivities from "../components/RecentActivities";

export default function Home() {
  return (
    <>
      <div className="bg-[#F4F7FF]  flex flex-row">
        <SideBar />

        <div className="w-[80%] flex flex-col">
          <Menu />
          <div className=" flex flex-rows ">
            <div className="w-[70%]">
              <Dashboard />
            </div>
            <div className="w-[25%] mt-16">
              <RecentActivities />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
