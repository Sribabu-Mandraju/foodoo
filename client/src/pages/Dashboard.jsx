import React,{useState,useEffect} from "react";
import { FaSearch } from "react-icons/fa";
import { createContext, useContext } from 'react';
import { useSelector } from "react-redux";
import Model1 from "../components/models/Model1";


const DonationContext = createContext();

export const useDonationContext = () => useContext(DonationContext);

// import axios from axios
const Dashboard = () => {
  const [data,setData] = useState({})
  const { donations, loading, error } = useSelector(state => state.donations);
  console.log("dd",donations.data)
  const data1 = {
    "foodname": "Pizza",
    "email": "example@example.com",
    "phonenumber": 1234567890,
    "quantity": 2,
    "address": "123 Main St",
    "mealType": "Dinner",
    "categoryType": "Italian",
    "district": "Central"
  }
  
  return (
    <>
      <div className="w-full flex items-center justify-between shadow h-[60px] bg-[white]"></div>
      <div className="w-full flex items-center justify-between">
        <div className="text-3xl md:text-5xl font-bold text-[#006d21] py-4 ps-4">Donations</div>
        <div className="flex items-center mx-2">
          <FaSearch className="me-[-20px] pointer-events-none z-[1]  text-black " />
          <input type="text" placeholder="search...." className="ps-[20px] w-[120px] md:w-[200px] h-[30px] rounded-[5px] border-[2px]" style={{
            border:"2px solid black"
          }}/>
          
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-[40px]">
          
          {
            donations.data.map((data,index) => (
              <div className="w-[96%] max-w-[320px] shadow relative rounded-[5px] m-5 h-[300px] flex flex-col ">
                <div className="font-bold text-2xl pt-3 text-center">{data.foodname}{`(${data.quantity})`}</div>
                <div className="text-center text-[grey] text-2xl pt-3">Donor</div>
                <div className="text-center font-bold">{data.email}</div>
                <div className="text-center font-bold">{data.phonenumber}</div>
                <div className="w-full flex items-center justify-around flex-wrap">
                    <div className="bg-[#9df6cf] mx-2 rounded-[5px] px-2 mt-3" >{data.address}</div>
                    <div className="bg-[#9df6cf] mx-2 rounded-[5px] px-2 mt-3" >{data.mealType}</div>
                    <div className="bg-[#9df6cf] mx-2 rounded-[5px] px-2 mt-3" >{data.categoryType}</div>
                </div>
                <div className="w-full grid grid-cols-2 gap-2 my-3 absolute bottom-[13px]  ">
                  <button className=" rounded-[5px] py-2 mx-3 bg-[#7f1212] text-white font-bold">
                    <Model1 children={"helllo"} button={"delete"} />
                  </button>
                  <button className=" rounded-[5px] py-2 mx-3 bg-[#2e30c9] text-white font-bold">Edit</button>
                </div>
              </div>
            ))
          }
        </div>
    </>
  );
};

export default Dashboard;
