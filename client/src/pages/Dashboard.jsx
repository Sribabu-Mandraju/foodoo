import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Header } from "../components/Header/Header";
import { EditModel } from "../components/models/EditModel";

const Dashboard = () => {
  const [id, setId] = useState("");
  const { donations, loading, error } = useSelector((state) => state.donations);
  console.log("dd", donations.data);

  const deleteDonation = async (id) => {
    try {
      const response = await fetch(
        `/api/auth/deletedonation/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if(response.ok){
        alert("deleted")
        window.location.reload()

      }
      if (!response.ok) {
        throw new Error("Failed to delete donation");
      }

      console.log("Donation deleted successfully");
    } catch (error) {
      console.error("Error deleting donation:", error.message);
    }
  };

  return (
    <>

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
      <div className="w-full flex items-center flex-wrap justify-center mt-[40px]">
        {donations.data.map((data, index) => (
          <div
            key={data._id} // Make sure to add a unique key
            className="w-[96%] max-w-[320px] shadow relative rounded-[5px] m-5 h-[300px] flex flex-col "
          >
            <div className="font-bold text-2xl pt-3 text-center">
              {data.foodname}({data.quantity})
            </div>
            <div className="text-center text-[grey] text-2xl pt-3">Donor</div>
            <div className="text-center font-bold">{data.email}</div>
            <div className="text-center font-bold">{data.phonenumber}</div>
            <div className="w-full flex items-center justify-around flex-wrap">
              <div className="bg-[#9df6cf] mx-2 rounded-[5px] px-2 mt-3">
                {data.address}
              </div>
              <div className="bg-[#9df6cf] mx-2 rounded-[5px] px-2 mt-3">
                {data.mealType}
              </div>
              <div className="bg-[#9df6cf] mx-2 rounded-[5px] px-2 mt-3">
                {data.categoryType}
              </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-2 my-3 absolute bottom-[13px]  ">
              <button className="bg-[#971010] rounded-[5px] py-2 mx-3 text-white font-bold "
                onClick={() => {
                  deleteDonation(data._id); // Pass the ID directly
                }}
              >
                Delete
              </button>
              <EditModel data={data} button={"Edit"} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
