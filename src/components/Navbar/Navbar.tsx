"use client";
import React, { useState, useEffect } from "react";
import menuItem from "../../lib/menuItem.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const pathName = usePathname();

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
          <Button className="w-28 h-7 bg-black text-white font-semibold rounded-full text-[0.7rem] py-1">
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
        <nav className="mx-auto transition-all duration-300 container bg-white z-50">
          <div className="flex items-center justify-between py-2 mx-auto">
            <div>
              <Link href={"/"} className="text-xl text-black font-bold">
                Atlas Logistics
              </Link>
            </div>
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center justify-between space-x-6 text-md">
              {menuItem?.menuItems?.map((menu, i) => {
                const isActive = pathName === menu?.link;
                return (
                  <Link
                    href={menu?.link}
                    key={i}
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
            {/* Mobile Burger Icon */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger>
                  {/* <Button> */}
                  <FontAwesomeIcon icon={faBars} size="lg" />
                  {/* </Button> */}
                </SheetTrigger>

                <SheetContent className="w-full lg:hidden bg-white text-black flex flex-col p-4">
                  <div className="flex justify-between items-center">
                    <Link href={"/"} className="text-xl text-black font-bold">
                      Atlas Logistics
                    </Link>
                    <SheetTrigger>
                      <Button>
                        <FontAwesomeIcon icon={faTimes} size="lg" />
                      </Button>
                    </SheetTrigger>
                  </div>
                  <div className=" mb-12 mx-auto text-center flex items-center justify-center h-full">
                    <div className="space-y-6">
                      {menuItem?.menuItems?.map((menu, i) => {
                        const isActive = pathName === menu?.link;
                        return (
                          <div
                            key={i}
                            className="py-4 border-b-2 border-basicColor"
                          >
                            <Link
                              href={menu?.link}
                              className={`capitalize px-5 py-2 transition ease-in-out delay-150 ${
                                isActive ? "font-bold" : ""
                              }`}
                            >
                              {menu?.title}
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
        <div className="bg-basicColor text-black text-center">
          <p className="py-6">
            Company has acquired Large Logistics.{" "}
            <span className="underline font-semibold m-2">Learn More</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
