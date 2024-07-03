import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Menu from "../components/Menu";
import axios from "axios";
import { BASE_URL } from "../utilities/URL";
import DataTable from "react-data-table-component";

export default function Charge() {
  const [drivers, setDrivers] = useState([]);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Address",
      selector: (row) => row.addr,
    },
  ];

  const data = drivers?.map((item) => {
    return {
      id: item?.id,
      name: item?.name,
      email: item?.email,
      addr: item?.address?.street,
    };
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}` + "users")
      .then((res) => setDrivers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="bg-[#F4F7FF]  flex flex-row">
        <SideBar />

        <div className="w-[80%] flex flex-col">
          <Menu />

          <div className=" flex  flex-col items-center ">
            <h1 className="text-4xl m-4">Charge Management Data</h1>
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
// useEffect(() => {
//   var config = {
//     headers: {
//       accessToken:
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBwcHMuY29tIiwiZHZUb2tlbiI6IjIxMjEtcGtsLXBsbCIsImlhdCI6MTcxOTk5OTg2N30.K7B81-tojYK3t6SVxRiX0B3oPX645y6voap5euCl9b8",
//     },
//   };
//   axios
//     .get(`${BASE_URL}admin/allcustomers?featureId=1`, config)
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// }, []);
