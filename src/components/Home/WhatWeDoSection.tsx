"use client";
import React, { useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import Image from "next/image"; // Import the Next.js Image component

const tabs = [
  {
    title: "Truckload",
    description:
      "Our carrier network has truckloads covered with access to dry vans, refrigerated trucks, flatbeds, drop trailers, and more.",
    image: "/corporate/what-we-do-1.jpg",
  },
  {
    title: "Less-than-Truckload",
    description:
      "Optimize freight shipping with cost-effective less-than-truckload solutions.",
    image: "/corporate/what-we-do-2.jpg",
  },
  {
    title: "Managed Transportation",
    description:
      "Expertly managed transportation services tailored to your business needs.",
    image: "/corporate/what-we-do-3.jpg",
  },
  {
    title: "Last Mile",
    description:
      "Seamless last-mile delivery solutions for superior customer satisfaction.",
    image: "/corporate/what-we-do-4.jpg",
  },
  {
    title: "Expedite",
    description: "Fast and reliable expedited shipping services.",
    image: "/corporate/what-we-do-1.jpg",
  },
  {
    title: "Freight Forwarding",
    description:
      "Global freight forwarding solutions for seamless international trade.",
    image: "/corporate/what-we-do-2.jpg",
  },
];

const WhatWeDoSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="mx-auto py-16 space-y-10">
      {/* Title Section */}
      <div className="space-y-2">
        <h2 className="text-xl font-bold text-center">Smart Solutions</h2>
        <h3 className="text-center text-gray-600">You need it. We create it.</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg cursor-pointer ${
                activeTab === index ? "bg-[#F2F2F2]" : "bg-white"
              }`}
              onClick={() => setActiveTab(index)}
            >
              <div className="flex justify-between items-center">
                <h4
                  className={`text-lg font-medium ${
                    activeTab === index ? "text-green-600" : "text-gray-800"
                  }`}
                >
                  {tab.title}
                </h4>
                {activeTab === index ? (
                  <ArrowUpIcon className="w-6 h-6 text-green-600" />
                ) : (
                  <ArrowDownIcon className="w-6 h-6 text-gray-400" />
                )}
              </div>
              {activeTab === index && (
                <p className="mt-2 text-gray-600">{tab.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* Right Section: Image */}
        <div className="relative">
          {tabs[activeTab] && (
            <Image
              key={activeTab}
              src={tabs[activeTab].image}
              alt={tabs[activeTab].title}
              width={600}
              height={500}
              className="rounded-lg shadow-lg"
              data-aos="zoom-in"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoSection;
