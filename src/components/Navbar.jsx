import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { TbMessage2 } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="py-5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="w-[15%]">
            <div className="bg-neutral-400 h-[50px] w-[50px] mx-auto rounded-full flex justify-center items-center">
              <FiShoppingCart className="font-roboto text-[20px] text-white" />
            </div>
            <h3 className="text-[20px] font-roboto font-medium py-1 text-center">
              House Dragon
            </h3>
            <p className="text-[18px] font-roboto font-normal text-center border-b border-gray-400 pb-10">
              ID: 318620
            </p>
          </div>
          <div className="w-[16%]">
            <h3 className="text-[35px] font-roboto font-medium">
              Power
              <span className="text-[20px] font-roboto text-red-500">
                Courier
              </span>
            </h3>
          </div>
          <div className="w-[20%]">
            <input
              type="text"
              placeholder="Search Consignment"
              name=""
              id=""
              className="text-[18px] font-roboto text-gray-500 outline-none border-2 border-gray-500 text-center w-full rounded-full py-4"
            />
          </div>
          <div className="w-[20%]">
            <input
              type="text"
              placeholder="Check Balance"
              name=""
              id=""
              className="text-[18px] font-roboto text-[#00b795] outline-none border-2 border-gray-500 text-center w-full rounded-full py-4"
            />
          </div>
          <div className="w-[20%]">
            <ul className="flex gap-x-5 justify-center">
              <li className="h-[50px] w-[50px] bg-gray-200 rounded-full flex items-center justify-center">
                <p className="text-[20px] font-roboto text-black">EN</p>
              </li>
              <li className="h-[50px] w-[50px] bg-gray-200 rounded-full flex items-center justify-center">
                <TbMessage2 className="text-[20px] font-roboto text-black" />
              </li>
              <li className="h-[50px] w-[50px] bg-gray-200 rounded-full flex items-center justify-center">
                <IoMdNotifications className="text-[20px] font-roboto text-black" />
              </li>
              <li className="h-[50px] w-[50px] bg-gray-500 rounded-full flex items-center justify-center">
                <FiShoppingCart className="text-[20px] font-roboto text-white" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
