import React from "react";
import { RxDashboard } from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Parcel = () => {
  return (
    <div>
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
                <span>
                  <Link to="/parcel">Add Parcel</Link>
                </span>
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
          <div className="w-[85%] bg-gray-100 px-5">
            <div className="w-[60%] flex justify-center bg-white mx-auto py-5 px-3 rounded-xl shadow-xl">
              <ul className="flex justify-between">
                <li className="flex gap-x-2 items-center justify-center border-r border-black px-3">
                  <FiShoppingCart className="text-[20px] font-roboto" />
                  <span className="text-18px] font-roboto font-normal ">
                    consignment
                  </span>
                </li>
                <li className="flex gap-x-2 items-center justify-center border-r border-black px-3">
                  <FiShoppingCart className="text-[20px] font-roboto" />
                  <span className="text-18px] font-roboto font-normal ">
                    Add Parcel
                  </span>
                </li>
                <li className="flex gap-x-2 items-center justify-center border-r border-black px-3">
                  <FiShoppingCart className="text-[20px] font-roboto" />
                  <span className="text-18px] font-roboto font-normal ">
                    Bulk Import
                  </span>
                </li>
                <li className="flex gap-x-2 items-center justify-center border-r border-black px-3">
                  <FiShoppingCart className="text-[20px] font-roboto" />
                  <span className="text-18px] font-roboto font-normal ">
                    Pickup request
                  </span>
                </li>
                <li className="flex gap-x-2 items-center justify-center border-r border-black px-3">
                  <FiShoppingCart className="text-[20px] font-roboto" />
                  <span className="text-18px] font-roboto font-normal">
                    Support
                  </span>
                </li>
              </ul>
            </div>
            <h3 className="text-[20px] font-roboto font-normal py-10">
              To create multiple orders quickly try
            </h3>
            <div className="flex justify-end">
              <a
                href="#"
                className="text-[18px] font-roboto font-normal py-4 text-center bg-[#66d3bf] px-5 text-white rounded-lg capitalize"
              >
                regular
              </a>
              <a
                href="#"
                className="text-[18px] font-roboto font-normal py-4 text-center bg-[#66d3bf] px-5 text-white rounded-lg capitalize mx-5"
              >
                express
              </a>
              <a
                href="#"
                className="text-[18px] font-roboto font-normal py-4 text-center bg-[#66d3bf] px-5 text-white rounded-lg capitalize"
              >
                pick&drop
              </a>
            </div>
            <div className="bg-white py-5 px-5 mt-10">
              <div className="flex gap-x-10">
                <h4 className="text-[20px] font-roboto font-normal capitalize">
                  home delivery
                </h4>
                <h4 className="text-[20px] font-roboto font-normal capitalize">
                  point delivery
                </h4>
              </div>
              <div className="flex justify-between pt-5">
                <div className="w-[48%]">
                  <div className="flex justify-between items-center py-5">
                    <h3 className="text-[20px] font-roboto font-normal capitalize text-gray-400">
                      phone#
                    </h3>
                    <input
                      type="text"
                      placeholder="type phone number"
                      name=""
                      id=""
                      className="py-4 text-center outline-none w-[400px] rounded-lg capitalize border-2 border-gray-300"
                    />
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <h3 className="text-[20px] font-roboto font-normal capitalize text-gray-400">
                      Name#
                    </h3>
                    <input
                      type="text"
                      placeholder="type recipient name"
                      name=""
                      id=""
                      className="py-4 text-center outline-none w-[400px] rounded-lg capitalize border-2 border-gray-300"
                    />
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <h3 className="text-[20px] font-roboto font-normal capitalize text-gray-400">
                      Address#
                    </h3>
                    <input
                      type="text"
                      placeholder="type your address"
                      name=""
                      id=""
                      className="py-4 text-center outline-none w-[400px] rounded-lg capitalize border-2 border-gray-300"
                    />
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <h3 className="text-[20px] font-roboto font-normal capitalize text-gray-400">
                      District#
                    </h3>
                    <input
                      type="text"
                      placeholder="dhaka city"
                      name=""
                      id=""
                      className="py-4 text-center outline-none w-[400px] rounded-lg capitalize border-2 border-gray-300"
                    />
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <h3 className="text-[20px] font-roboto font-normal capitalize text-gray-400">
                      Thana
                    </h3>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="py-4 text-center outline-none w-[400px] rounded-lg capitalize border-2 border-gray-300"
                    />
                  </div>
                </div>
                <div className="w-[48%]">
                  <div className="flex justify-between items-center py-5">
                    <h3 className="text-[20px] font-roboto font-normal capitalize text-gray-400">
                      COD Amount
                    </h3>
                    <input
                      type="text"
                      placeholder="type cash delivey amount"
                      name=""
                      id=""
                      className="py-4 text-center outline-none w-[400px] rounded-lg capitalize border-2 border-gray-300"
                    />
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <h3 className="text-[20px] font-roboto font-normal capitalize text-gray-400">
                      Invoice
                    </h3>
                    <input
                      type="text"
                      placeholder="type invoice"
                      name=""
                      id=""
                      className="py-4 text-center outline-none w-[400px] rounded-lg capitalize border-2 border-gray-300"
                    />
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <h3 className="text-[20px] font-roboto font-normal capitalize text-gray-400">
                      Note
                    </h3>
                    <input
                      type="text"
                      placeholder="type note"
                      name=""
                      id=""
                      className="py-4 text-center outline-none w-[400px] rounded-lg capitalize border-2 border-gray-300"
                    />
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <h3 className="text-[20px] font-roboto font-normal capitalize text-gray-400">
                      Weight (KG)
                    </h3>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="py-4 text-center outline-none w-[400px] rounded-lg capitalize border-2 border-gray-300"
                    />
                  </div>
                  <a href="#" className="text-white text-[20px] font-pops font-medium bg-[#66d3bf] w-full mx-auto h-14 flex items-center justify-center rounded-lg mt-10">Submit</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parcel;
