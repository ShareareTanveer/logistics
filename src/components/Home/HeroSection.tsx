import React from "react";
import { Button } from "../ui/button";
const HeroSection = () => {
  return (
    <div className="mx-auto space-y-20">
      <div className="relative bg-[url(/corporate/hero-logistics.jpg)] bg-cover bg-center bg-no-repeat min-h-screen">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#001524]/95 to-[#11001c]/25 md:bg-gradient-to-r"></div>

        {/* Hero Content */}
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:px-8" data-aos="fade-right">
          <div className="max-w-xl text-center sm:text-left text-white">
            <h1 className="text-3xl md:text-4xl font-extrabold">
              Your Trusted Partner in Logistics and Business Supplies,
              <strong className="block font-extrabold text-basicColor">
                {" "}
                Atlas Logistics.{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg text-base sm:text-lg sm:leading-relaxed">
              Specialists in Import, Export, and Supplier services.
              <br /> From pads to visiting cards, we make every delivery count.
            </p>
          </div>
        </div>

        {/* Button Section */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[80%] lg:w-[70%] flex flex-col sm:flex-row justify-between items-center gap-5 px-6 sm:px-12 py-6 bg-white text-black rounded-3xl z-10 shadow-lg">
          <p className="text-sm sm:text-base md:text-lg sm:w-3/5 text-center sm:text-left">
            From efficient import-export services to professional pad and
            visiting card supplies, Atlas Logistics Express is your reliable
            partner for business success.
          </p>
          <div className="flex gap-3">
            <Button className="bg-basicColor font-semibold text-black text-sm sm:text-base py-2 px-4 rounded-full hover:bg-green-300">
              Take a shipment
            </Button>
            <Button className="bg-basicColor font-semibold text-black text-sm sm:text-base py-2 px-4 rounded-full hover:bg-green-300">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
