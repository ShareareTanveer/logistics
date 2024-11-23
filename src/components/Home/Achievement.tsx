"use client";
import React from "react";
import {
  FaShippingFast,
  FaWarehouse,
  FaBusinessTime,
  FaGlobe,
} from "react-icons/fa";

function AchievementSection() {
  const achievements = [
    {
      title: "Global Logistics Network",
      value: "50+ Countries",
      description: "Efficient import and export services across continents.",
      icon: <FaGlobe />,
      aosEffect: "fade-up",
    },
    {
      title: "Warehouse Capacity",
      value: "100,000+ Sq. Ft.",
      description: "State-of-the-art storage facility in Tongi, Gazipur.",
      icon: <FaWarehouse />,
      aosEffect: "zoom-in",
    },
    {
      title: "Suppliers & Partners",
      value: "500+ Partners",
      description: "Trusted by industry leaders for machinery distribution.",
      icon: <FaBusinessTime />,
      aosEffect: "fade-up",
    },
    {
      title: "Fast Delivery",
      value: "24/7 Operations",
      description: "Seamless logistics solutions around the clock.",
      icon: <FaShippingFast />,
      aosEffect: "zoom-in",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-200 pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight">
            Atlas Logistics Express Achievements
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Excellence in logistics, machinery import, and global supply chain
            solutions.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
              data-aos={achievement.aosEffect}
            >
              <div className="text-basicColor text-5xl mb-4">
                {achievement.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {achievement.value}
              </h3>
              <p className="text-lg font-medium text-gray-700 mb-3">
                {achievement.title}
              </p>
              <p className="text-sm text-gray-500 text-center">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>

{/* Call to Action */}
<div
  className="md:mt-32 mt-16 relative rounded-lg overflow-hidden shadow-lg"
  data-aos="fade-up"
>
  {/* Parallax Background */}
  <div
    className="absolute inset-0 bg-cover bg-center parallax-background"
    style={{
      backgroundImage: "url('/corporate/hero-logistics.jpg')",
    }}
  ></div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  {/* Content */}
  <div className="relative z-10 text-white text-center py-20 px-8">
    <h3 className="text-3xl font-bold mb-4">
      Need a Trusted Partner for Your Logistics & Imports?
    </h3>
    <p className="text-lg mb-6">
      Let Atlas Logistics Express handle your import, export, and distribution
      needs with unmatched efficiency.
    </p>
    <a
      href="https://atlaslogisticsexpress.com"
      className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100"
    >
      Learn More
    </a>
  </div>
</div>

    </section>
  );
}

export default AchievementSection;
