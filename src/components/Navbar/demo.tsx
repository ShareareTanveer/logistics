"use client";
import React, { useState, useEffect } from "react";
import menuItem from "../../lib/menuItem.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/button";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathName = usePathname();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="bg-[#F2F2F2]">
        <div className="container flex justify-end bg-F2F2F2 text-xs gap-2 py-2">
          <Button className="w-28 h-7 bg-black text-white font-semibold  rounded-full text-[0.7rem] py-1">
            Take a shipment
          </Button>
          <Button className="w-20 h-7 bg-basicColor font-semibold text-[0.7rem] rounded-full text-black py-1 hover:bg-green-300">
            Get Started
          </Button>
        </div>
      </div>
      <div
        className={`${
          isSticky
            ? "fixed top-0 left-0 right-0 z-50 shadow-md bg-white"
            : "relative bg-transparent"
        }`}
      >
        <nav
          className={`mx-auto transition-all duration-300 container bg-white z-50`}
        >
          <div className="flex items-center justify-between py-2  mx-auto">
            <div>
              <Link href={"/"} className="text-xl text-black font-bold">
              Atlas Logistics
              </Link>
            </div>
            <div className="hidden lg:flex items-center justify-between space-x-6 text-md">
              {menuItem?.menuItems?.map((menu) => {
                const isActive = pathName === menu?.link;

                return (
                  <Link
                    href={menu?.link}
                    key={menu?.id}
                    className={`capitalize px-5 border-b-0 transition ease-in-out delay-150 ${
                      isActive
                        ? "scale-110 py-[13px] font-bold"
                        : "underline-effect"
                    }`}
                  >
                    {menu?.title}
                  </Link>
                );
              })}
            </div>
            <div
              className="lg:hidden block cursor-pointer mx-4"
              onClick={toggleSidebar}
            >
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </nav>
        <div className="bg-basicColor text-black text-center">
          <p className="py-6">Company has acquired Large Logistics. <span className="underline font-semibold m-2">Learn More</span></p>
        </div>

        {/* Sidebar */}
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 ">
            <div className="fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg z-50 px-4 py-2 transition-transform transform duration-300 ease-in-out">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-semibold">Menu</h2>
                <div className="cursor-pointer" onClick={toggleSidebar}>
                  <FontAwesomeIcon icon={faTimes} />
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                {menuItem?.menuItems?.map((menu) => {
                  const isActive = pathName === menu?.link;

                  return (
                    <Link
                      href={menu?.link}
                      key={menu?.id}
                      className={`uppercase font-semibold py-2 px-4 transition ease-in-out delay-150 duration-300 hover:bg-gray-200 ${
                        isActive ? "bg-basicColor text-white" : ""
                      }`}
                      onClick={toggleSidebar}
                    >
                      {menu?.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
