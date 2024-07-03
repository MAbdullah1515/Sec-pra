import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Menu from "../components/Menu";
import axios from "axios";
import { BASE_URL } from "../utilities/URL";
import DataTable from "react-data-table-component";

export default function Driver() {
  const [drivers, setdrivers] = useState([]);
  // console.log("driversdata",drivers);
  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "Name",
      selector: (row) => row.firstName,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
  ];
  // const data = drivers?.data?.map((item) => {
    const data = drivers?.data?.freeLance?.approved?.map((item)=>{
    return {
      id: item?.id,
      firstName: item?.firstName,
      email: item?.email,
    };
  });

  useEffect(() => {
    var config = {
      headers: {
        accessToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBwcHMuY29tIiwiZHZUb2tlbiI6IjIxMjEtcGtsLXBsbCIsImlhdCI6MTcxOTk5OTg2N30.K7B81-tojYK3t6SVxRiX0B3oPX645y6voap5euCl9b8",
      },
    };
    axios
      .get(BASE_URL + "/admin/alldrivers", config)
      .then((res) => setdrivers(res.data))
      // .then((res)=> console.log(res,data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="bg-[#F4F7FF]  flex flex-row">
        <SideBar />

        <div className="w-[80%] flex flex-col">
          <Menu />

          <div className=" flex  flex-col items-center ">
            <h1 className="text-4xl m-4">drivers Data</h1>
            <div className="w-[80%]">
              {drivers ? (
                <DataTable columns={columns} data={data}></DataTable>
              ) : (
                "Loading"
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
