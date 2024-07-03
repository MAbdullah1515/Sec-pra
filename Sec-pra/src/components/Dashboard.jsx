import React from "react";

export default function Dashboard() {
  return (
    <div className="pl-12 pt-4">
      <h1>Dashboard</h1>
      <div className="  grid grid-cols-4 grid-rows-2">
        <div className=" bg-white w-[130px] mt-6 p-4 grid grid-col-1">
          <div className=" flex flex-col  items-center ">
            <img src="./images/Frame 9867.png" className="w-10 " />
            <div className="flex flex-col translate-y-2 justify-center">
              {/* <MdOutlinePhoneCallback className="text-white p-1 text-4xl rounded-md bg-[#7B5BD6]" /> */}
              <h1 className=" -mt-1  text-[#00000066] text-xs font-normail">
                All Users
              </h1>
              <h1 className=" -mt-1  text-[#202053] font-bold flex justify-center">
                2500
              </h1>
            </div>
          </div>
        </div>
        {/* sec */}
        <div className=" bg-white w-[130px] mt-6 p-4 grid grid-col-1">
          <div className=" flex flex-col  items-center ">
            <img src="./images/fa6-solid_warehouse.png" className="w-10 " />
            <div className="flex flex-col translate-y-2 justify-center">
              {/* <MdOutlinePhoneCallback className="text-white p-1 text-4xl rounded-md bg-[#7B5BD6]" /> */}
              <h1 className=" -mt-1  text-[#00000066] text-xs font-normail">
                All Warehouses
              </h1>
              <h1 className=" -mt-1  text-[#202053] font-bold flex justify-center">
                100
              </h1>
            </div>
          </div>
        </div>
        {/* third */}
        <div className=" bg-white w-[130px] mt-6 p-4 grid grid-col-1">
          <div className=" flex flex-col  items-center ">
            <img src="./images/ph_package-fill.png" className="w-10 " />
            <div className="flex flex-col translate-y-2 justify-center">
              {/* <MdOutlinePhoneCallback className="text-white p-1 text-4xl rounded-md bg-[#7B5BD6]" /> */}
              <h1 className=" -mt-1  text-[#00000066] text-xs">All Drivers</h1>
              <h1 className=" -mt-1  text-[#202053] font-bold flex justify-center">
                200
              </h1>
            </div>
          </div>
        </div>
        {/* fourth */}
        <div className=" bg-white w-[130px] mt-6 p-4 grid grid-col-1">
          <div className=" flex flex-col  items-center ">
            <img src="./images/ph_package-fill2.png" className="w-10 " />

            <div className="flex flex-col translate-y-2 justify-center">
              {/* <MdOutlinePhoneCallback className="text-white p-1 text-4xl rounded-md bg-[#7B5BD6]" /> */}
              <h1 className=" -mt-1  text-[#00000066] text-xs font-normail">
                All Orders
              </h1>
              <h1 className=" -mt-1  text-[#202053] font-bold flex justify-center">
                500
              </h1>
            </div>
          </div>
        </div>

        {/* fifth */}
        <div className=" bg-white w-[130px] mt-6 p-4 grid grid-col-1">
          <div className=" flex flex-col  items-center ">
            <img src="./images/Group 10445.png" className="w-10 " />
            <div className="flex flex-col translate-y-2 justify-center">
              {/* <MdOutlinePhoneCallback className="text-white p-1 text-4xl rounded-md bg-[#7B5BD6]" /> */}
              <h1 className=" -mt-1  text-[#00000066] text-xs font-normail">
                Total Earnings
              </h1>
              <h1 className=" -mt-1  text-[#202053] font-bold flex justify-center">
                $5000
              </h1>
            </div>
          </div>
        </div>
        {/* sixth */}
        <div className=" bg-white w-[130px] mt-6 p-4 grid grid-col-1">
          <div className=" flex flex-col  items-center ">
            <img src="./images/ph_package-fill2.png" className="w-10 " />
            <div className="flex flex-col translate-y-2 justify-center">
              {/* <MdOutlinePhoneCallback className="text-white p-1 text-4xl rounded-md bg-[#7B5BD6]" /> */}
              <h1 className=" -mt-1  text-[#00000066] text-xs font-normail">
                Available Balance
              </h1>
              <h1 className=" -mt-1  text-[#202053] font-bold flex justify-center">
                $200
              </h1>
            </div>
          </div>
        </div>
        {/* seven */}
        <div className=" bg-white w-[130px] mt-6 p-4 grid grid-col-1">
          <div className=" flex flex-col  items-center ">
            <img src="./images/Group 104452.png" className="w-10 " />
            <div className="flex flex-col translate-y-2 justify-center">
              {/* <MdOutlinePhoneCallback className="text-white p-1 text-4xl rounded-md bg-[#7B5BD6]" /> */}
              <h1 className=" -mt-1  text-[#00000066] text-xs font-normail">
                Blocked Users
              </h1>
              <h1 className=" -mt-1  text-[#202053] font-bold flex justify-center">
                $5000
              </h1>
            </div>
          </div>
        </div>
        {/* eight */}
        <div className=" bg-white w-[130px] mt-6 p-4 grid grid-col-1">
          <div className=" flex flex-col  items-center ">
            <img src="./images/ph_package-fill3.png" className="w-10 " />
            <div className="flex flex-col translate-y-2 justify-center">
              {/* <MdOutlinePhoneCallback className="text-white p-1 text-4xl rounded-md bg-[#7B5BD6]" /> */}
              <h1 className=" -mt-1  text-[#00000066] text-xs font-normail">
                Blocked Drivers
              </h1>
              <h1 className=" -mt-1  text-[#202053] font-bold flex justify-center">
                $500
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
