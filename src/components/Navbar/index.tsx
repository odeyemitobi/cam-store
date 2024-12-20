"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div className="lg:block hidden">
        <nav className="flex items-center justify-between px-20 py-6 bg-white text-[#000000]">
          <div className="w-full flex items-center xxl:gap-32 gap-16">
            <div className="flex items-center">
              <Image src="/logo.svg" alt="Logo" width={120} height={140} />
            </div>

            <div className="flex items-center space-x-7 xxl:space-x-12 xlg:space-x-20 text-sm">
              <a href="#" className="text-black ">
                Home
              </a>
              <a href="#" className="text-black ">
                Shop
              </a>
              <a href="#" className="text-black ">
                Categories
              </a>
              <a href="#" className="text-black ">
                About Us
              </a>
              <a href="#" className="text-black ">
                Contact Us
              </a>
            </div>
          </div>

          <div className="xlg:w-[60%] maxlg:w-full flex justify-between items-center">
            {/* Search Bar */}
            <div className="flex-1 mx-8 relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className=" maxlg:w-full px-4 py-2 pl-10 bg-gray-100 rounded-3xl focus:outline-none"
                />
                <RiSearch2Line className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2 cursor-pointer">
                <span>EN</span>
                <Image
                  src={"/down.svg"}
                  alt="Drop down"
                  width={120}
                  height={120}
                  className="w-4 h-4"
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="border cursor-pointer border-[#777777] rounded-full p-2">
                  <div className="relative">
                    <AiOutlineShoppingCart className="h-6 w-6" />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      2
                    </span>
                  </div>
                </div>

                <div className="relative cursor-pointer border border-[#777777] rounded-full p-2">
                  <AiOutlineUser className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Navbar */}

      {/* Mobile Navbar */}

      {/* Mobile Navbar */}

      <div className="lg:hidden text-[#000000]">
        <div className="flex items-center justify-between px-6 py-4 bg-white">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/logo.svg" alt="Logo" width={120} height={120} />
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="border cursor-pointer border-[#777777] rounded-full p-2">
                <div className="relative">
                  <AiOutlineShoppingCart className="h-3 w-3" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-3 w-3 flex items-center justify-center">
                    2
                  </span>
                </div>
              </div>

              <div className="relative cursor-pointer border border-[#777777] rounded-full p-2">
                <AiOutlineUser className="h-3 w-3" />
              </div>
            </div>
            <AiOutlineMenu
              className="h-6 w-6 cursor-pointer"
              onClick={() => setIsDrawerOpen(true)}
            />
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="px-4 py-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 pl-10 bg-gray-100 rounded-lg focus:outline-none"
            />
            <RiSearch2Line className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Bottom Drawer Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
            isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsDrawerOpen(false)}
        />

        {/* Bottom Drawer */}
        <div
          className={`fixed bottom-0 left-0 right-0 bg-white z-50 transform transition-transform duration-300 ease-in-out rounded-t-3xl ${
            isDrawerOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          {/* Drawer Handle */}
          <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mt-3 mb-4" />

          <div className="px-6 pb-8">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold">Menu</span>
              <AiOutlineClose
                className="h-6 w-6 cursor-pointer"
                onClick={() => setIsDrawerOpen(false)}
              />
            </div>

            <div className="space-y-4">
              <a
                href="#"
                className="block py-3 text-lg hover:text-gray-600 border-b border-gray-100"
              >
                Home
              </a>
              <a
                href="#"
                className="block py-3 text-lg hover:text-gray-600 border-b border-gray-100"
              >
                Shop
              </a>
              <a
                href="#"
                className="block py-3 text-lg hover:text-gray-600 border-b border-gray-100"
              >
                Categories
              </a>
              <a
                href="#"
                className="block py-3 text-lg hover:text-gray-600 border-b border-gray-100"
              >
                About Us
              </a>
              <a
                href="#"
                className="block py-3 text-lg hover:text-gray-600 border-b border-gray-100"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">Language:</span>
                <div className="flex items-center">
                  <span>EN</span>
                  <MdKeyboardArrowDown className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;