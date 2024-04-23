import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Header } from "../components/Header/Header";
import { EditModel } from "../components/models/EditModel";
import { Card, Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { RiDeleteBin6Line, RiEdit2Fill } from "react-icons/ri";

import { Model2 } from "../components/models/Model2";

import toast from "react-hot-toast";

const TABLE_HEAD = [
  "Food Name",
  "Email",
  "Phone",
  "Quantity",
  "Meal Type",
  "Category",
  "Address",
  "District",
  "Delete",
  "Edit",
];

const Dashboard = () => {
  const [id, setId] = useState("");
  // const { donations, loading, error } = useSelector((state) => state.donations);
  // console.log("dd", donations.data);

  const [allDonations, setAllDonations] = useState([]);

  const fetchAllDonations = async () => {
    try {
      const response = await fetch("/api/auth/getdonations");
      const data = await response.json();
      if (!data.success) {
        toast.error(data.message);
      }
      if (data.success) {
        setAllDonations(data.data);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllDonations();
  }, []);

  const handleDelete = async (id) => {
    alert("Do You want to delete?");
    try {
      const response = await fetch(`/api/auth/deletedonation/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        toast.success("donation deleted");
        fetchAllDonations();
      }
      if (!response.ok) {
        toast.error("Failed to delete donation");
      }
    } catch (error) {
      console.error("Error deleting donation:", error.message);
    }
  };

  return (
    <section>
      <Header />
      <div className="w-full flex items-center justify-between">
        <div className="text-3xl md:text-5xl font-bold text-[#006d21] py-4 ps-4">
          Donations
        </div>
        <div className="flex items-center mx-2">
          <FaSearch className="me-[-20px] pointer-events-none z-[1]  text-black " />
          <input
            type="text"
            placeholder="search...."
            className="ps-[20px] w-[120px] md:w-[200px] h-[30px] rounded-[5px] border-[2px]"
            style={{
              border: "2px solid black",
            }}
          />
        </div>
      </div>

      <Card className="h-full w-[97%] md:w-[95%] mt-[40px] mx-auto overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead className="bg-black text-white">
            <tr className="bg-[black] text-white">
              <th className="border-b border-blue-gray-100 text-white p-4">
                <Typography
                  variant="small"
                  color="white"
                  className=" leading-none text-white text-[17px] font-bold opacity-70"
                >
                  S.no
                </Typography>
              </th>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 text-white p-4"
                >
                  <Typography
                    variant="small"
                    color="white"
                    className=" leading-none text-white text-[17px] font-bold opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allDonations.map((item, index) => {
              const isLast = index === allDonations.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={index}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {index + 1}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.foodname}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.email}
                    </Typography>
                  </td>
                  {/* <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        <div className="">
                          <Model2
                            button="view"
                            children={message}
                            title={subject}
                          />
                        </div>
                      </Typography>
                    </td> */}
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.phonenumber}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.quantity}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.mealType}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.categoryType}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.address}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.district}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Button
                      color="red"
                      variant="outlined"
                      onClick={() => handleDelete(item._id)}
                    >
                      <RiDeleteBin6Line className="text-2xl" />
                    </Button>
                  </td>
                  <td className={classes}>
                    <Button color="Green" variant="outlined">
                      <EditModel
                        data={item}
                        button={<RiEdit2Fill className="text-lg" />}
                      />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
      {/* <div className="w-full flex items-center flex-wrap justify-center mt-[40px]">
        {donations.data.length > 0 ? (
          donations.data.map((item, index) => (
            <div
              key={index} // Make sure to add a unique key
              className="w-[96%] max-w-[320px] shadow relative rounded-[5px] m-5 h-[300px] flex flex-col "
            >
              <div className="font-bold text-2xl pt-3 text-center">
                {item.foodname}({item.quantity})
              </div>
              <div className="text-center text-[grey] text-2xl pt-3">Donor</div>
              <div className="text-center font-bold">{item.email}</div>
              <div className="text-center font-bold">{item.phonenumber}</div>
              <div className="w-full flex items-center justify-around flex-wrap">
                <div className="bg-[#9df6cf] mx-2 rounded-[5px] px-2 mt-3">
                  {item.address}
                </div>
                <div className="bg-[#9df6cf] mx-2 rounded-[5px] px-2 mt-3">
                  {item.mealType}
                </div>
                <div className="bg-[#9df6cf] mx-2 rounded-[5px] px-2 mt-3">
                  {item.categoryType}
                </div>
              </div>
              <div className="w-full grid grid-cols-2 gap-2 my-3 absolute bottom-[13px]  ">
                <button
                  className="bg-[#971010] rounded-[5px] py-2 mx-3 text-white font-bold "
                  onClick={() => {
                    deleteDonation(item._id); // Pass the ID directly
                  }}
                >
                  Delete
                </button>
                <EditModel data={item} button={"Edit"} />
              </div>
            </div>
          ))
        ) : (
          <p>No data</p>
        )}
      </div> */}
    </section>
  );
};

export default Dashboard;
