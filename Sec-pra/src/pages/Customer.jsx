import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Menu from "../components/Menu";
import axios from "axios";
import { BASE_URL } from "../utilities/URL";
import DataTable from "react-data-table-component";

export default function Customer() {
  const [customers, setCustomers] = useState([]);
  // console.log(customers);
  // url data show in react table
  const columns = [
    {
      name: "#",
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
    // {
    //   name: "Address",
    //   selector: (row) => row.addr,
    // },
  ];
  const data = customers?.data?.map((item) => {
    return {
      id: item?.id,
      firstName: item?.firstName,
      email: item?.email,
      // addr: item?.address?.street ,
    };
  });
  //  [ {
  //     id: 1,
  //     name: "abdullah",
  //     email: "abdullah@gmail.com",
  //     age: "23",
  //   },
  //   {
  //     id: 2,
  //     name: "abdulla",
  //     email: "abdulla@gmail.com",
  //     age: "22",
  //   },
  //   {
  //     id: 3,
  //     name: "abdull",
  //     email: "abdull@gmail.com",
  //     age: "21",
  //   },
  //   {
  //     id: 4,
  //     name: "abdul",
  //     email: "abdul@gmail.com",
  //     age: "20",
  //   },
  //   {
  //     id: 5,
  //     name: "abdu",
  //     email: "abdu@gmail.com",
  //     age: "19",
  //   },
  // ];
  // const data = [{ id: 1 }];

  // console.log(customers[0]?.id);

  useEffect(() => {
    var config = {
      headers: {
        accessToken:
          "....////.....",
      },
    };
    axios
      .get(BASE_URL + "admin/allcustomers?featureId=1", config)
      .then((res) => setCustomers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="bg-[#F4F7FF]  flex flex-row">
        <SideBar />

        <div className="w-[80%] flex flex-col">
          <Menu />

          <div className=" flex  flex-col items-center ">
            <h1 className="text-4xl m-4">Customers Data</h1>
            <div className="w-[80%]">
              {customers ? (
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
