import React from "react";
import { RxDashboard } from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";
import Graph from "../assets/Performance.png"
import { Link } from "react-router-dom";

const Dasboard = () => {
  return (
    <div className="">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="[15%] bg-white">
            <h2 className="text-[20px] font-roboto font-medium pb-5 text-gray-400">
              MAIN MENU
            </h2>
            <ul className="">
              <li className="flex gap-x-5 text-[22px] font-roboto font-normal hover:text-[#00b795] duration-500 ease-in-out items-center py-3">
                <RxDashboard />
                <span><Link to="/">Dashboard</Link></span>
              </li>
              <li className="flex gap-x-5 text-[22px] font-roboto font-normal hover:text-[#00b795] duration-500 ease-in-out items-center py-3">
                <RxDashboard />
                <span><Link to="/parcel">Add Parcel</Link></span>
              </li>
              <li className="flex gap-x-5 text-[22px] font-roboto font-normal hover:text-[#00b795] duration-500 ease-in-out items-center py-3">
                <RxDashboard />
                <span>Consignment</span>
              </li>
              <li className="flex gap-x-5 text-[22px] font-roboto font-normal hover:text-[#00b795] duration-500 ease-in-out items-center py-3">
                <RxDashboard />
                <span>Fraud Check</span>
              </li>
              <li className="flex gap-x-5 text-[22px] font-roboto font-normal hover:text-[#00b795] duration-500 ease-in-out items-center py-3">
                <RxDashboard />
                <span>Pickup Request</span>
              </li>
              <li className="flex gap-x-5 text-[22px] font-roboto font-normal hover:text-[#00b795] duration-500 ease-in-out items-center py-3">
                <RxDashboard />
                <span>Pricing</span>
              </li>
              <li className="flex gap-x-5 text-[22px] font-roboto font-normal hover:text-[#00b795] duration-500 ease-in-out items-center py-3">
                <RxDashboard />
                <span>Bulk Print</span>
              </li>
              <li className="flex gap-x-5 text-[22px] font-roboto font-normal hover:text-[#00b795] duration-500 ease-in-out items-center py-3">
                <RxDashboard />
                <span>Moderator</span>
              </li>
              <li className="flex gap-x-5 text-[22px] font-roboto font-normal hover:text-[#00b795] duration-500 ease-in-out items-center py-3">
                <RxDashboard />
                <span>Tracking parcel</span>
              </li>
              <li className="flex gap-x-5 text-[22px] font-roboto font-normal hover:text-[#00b795] duration-500 ease-in-out items-center py-3">
                <RxDashboard />
                <span>Api</span>
              </li>
            </ul>
          </div>
          <div className="w-[85%] bg-gray-100 py-5 px-5">
            <div className="flex justify-between">
              <div className="w-[16%] bg-white h-[150px] rounded-lg shadow-md border-2 border-black mx-auto py-4">
                <div className="bg-neutral-400 h-[80px] w-[80px] mx-auto rounded-lg flex justify-center items-center">
                  <FiShoppingCart className="font-roboto text-[30px] text-white" />
                </div>
                <h3 className="text-[20px] font-roboto font-normal py-3 text-center">
                  Add Parcel
                </h3>
              </div>
              <div className="w-[16%] bg-white h-[150px] rounded-lg shadow-md border-2 border-black mx-auto py-4">
                <div className="bg-neutral-400 h-[80px] w-[80px] mx-auto rounded-lg flex justify-center items-center">
                  <FiShoppingCart className="font-roboto text-[30px] text-white" />
                </div>
                <h3 className="text-[20px] font-roboto font-normal py-3 text-center">
                  Pickup Request
                </h3>
              </div>
              <div className="w-[16%] bg-white h-[150px] rounded-lg shadow-md border-2 border-black mx-auto py-4">
                <div className="bg-neutral-400 h-[80px] w-[80px] mx-auto rounded-lg flex justify-center items-center">
                  <FiShoppingCart className="font-roboto text-[30px] text-white" />
                </div>
                <h3 className="text-[20px] font-roboto font-normal py-3 text-center">
                  Pick n Drop
                </h3>
              </div>
              <div className="w-[16%] bg-white h-[150px] rounded-lg shadow-md border-2 border-black mx-auto py-4">
                <div className="bg-neutral-400 h-[80px] w-[80px] mx-auto rounded-lg flex justify-center items-center">
                  <FiShoppingCart className="font-roboto text-[30px] text-white" />
                </div>
                <h3 className="text-[20px] font-roboto font-normal py-3 text-center">
                  Pick n Drop
                </h3>
              </div>
              <div className="w-[16%] bg-white h-[150px] rounded-lg shadow-md border-2 border-black mx-auto py-4">
                <div className="bg-neutral-400 h-[80px] w-[80px] mx-auto rounded-lg flex justify-center items-center">
                  <FiShoppingCart className="font-roboto text-[30px] text-white" />
                </div>
                <h3 className="text-[20px] font-roboto font-normal py-3 text-center">
                  Latest Entries
                </h3>
              </div>
              <div className="w-[16%] bg-white h-[150px] rounded-lg shadow-md border-2 border-black mx-auto py-4">
                <div className="bg-neutral-400 h-[80px] w-[80px] mx-auto rounded-lg flex justify-center items-center">
                  <FiShoppingCart className="font-roboto text-[30px] text-white" />
                </div>
                <h3 className="text-[20px] font-roboto font-normal py-3 text-center">
                  Latest Entries
                </h3>
              </div>
            </div>
            <div className="flex justify-between py-10">
              <div className="w-[16%] bg-[#66d3bf] h-[80px] rounded-lg shadow-md mx-auto py-4">
                <h3 className="text-[18px] font-roboto font-normal py-3 text-center">
                  Consignments
                </h3>
              </div>
              <div className="w-[16%] bg-[#66d3bf] h-[80px] rounded-lg shadow-md mx-auto py-4">
                <h3 className="text-[18px] font-roboto font-normal py-3 text-center">
                  Payments
                </h3>
              </div>
              <div className="w-[16%] bg-[#66d3bf] h-[80px] rounded-lg shadow-md mx-auto py-4">
                <h3 className="text-[18px] font-roboto font-normal py-3 text-center">
                  Bulk Import
                </h3>
              </div>
              <div className="w-[16%] bg-[#66d3bf] h-[80px] rounded-lg shadow-md mx-auto py-4">
                <h3 className="text-[18px] font-roboto font-normal py-3 text-center">
                  Export
                </h3>
              </div>
              <div className="w-[16%] bg-[#66d3bf] h-[80px] rounded-lg shadow-md mx-auto py-4">
                <h3 className="text-[18px] font-roboto font-normal py-3 text-center">
                  Stats
                </h3>
              </div>
              <div className="w-[16%] bg-[#66d3bf] h-[80px] rounded-lg shadow-md mx-auto py-4">
                <h3 className="text-[18px] font-roboto font-normal py-3 text-center">
                  Amount Change
                </h3>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-[24%] bg-[#fff] h-[80px] rounded-lg shadow-md mx-auto py-4  border-2 border-black">
                <h3 className="text-[18px] font-roboto font-normal py-3 text-center">
                  Pending Parcel
                </h3>
              </div>
              <div className="w-[24%] bg-[#fff] h-[80px] rounded-lg shadow-md mx-auto py-4  border-2 border-black">
                <h3 className="text-[18px] font-roboto font-normal py-3 text-center">
                  Pending Parcel
                </h3>
              </div>
              <div className="w-[24%] bg-[#fff] h-[80px] rounded-lg shadow-md mx-auto py-4  border-2 border-black">
                <h3 className="text-[18px] font-roboto font-normal py-3 text-center">
                  Pending Parcel
                </h3>
              </div>
              <div className="w-[24%] bg-[#fff] h-[80px] rounded-lg shadow-md mx-auto py-4 border-2 border-black">
                <h3 className="text-[18px] font-roboto font-normal py-3 text-center">
                  Cancellation Requests
                </h3>
              </div>
            </div>
            <div className="flex justify-between py-14 border-b border-gray-400 pb-5">
              <div className="w-[48%] bg-[#fff] rounded-lg shadow-md mx-auto py-4 h-[170px] px-3">
                <div className="flex justify-between">
                  <div className="">
                    <h2 className="text-[35px] font-roboto font-semibold py-5">Delivery Performance</h2>
                    <a href="#" className="text-[18px] font-roboto font-normal py-4 text-center bg-[#66d3bf] px-5 text-white rounded-lg capitalize">view graph</a>
                  </div>
                  <div className="mt-14">
                    <img src={Graph} alt="" />
                  </div>
                </div>
              </div>
              <div className="w-[48%] bg-[#fff] rounded-lg shadow-md mx-auto py-4 h-[170px] px-3">
                <div className="flex justify-between">
                  <div className="">
                    <h2 className="text-[35px] font-roboto font-semibold py-5">Parcel Summary</h2>
                    <a href="#" className="text-[18px] font-roboto font-normal py-4 text-center bg-[#66d3bf] px-5 text-white rounded-lg capitalize">view summary</a>
                  </div>
                  <div className="mt-14">
                    <img src={Graph} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dasboard;
