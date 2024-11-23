"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-black text-white md:pt-24 md:pb-24 pt-96 pb-12 fixed bottom-0 w-full">
      <div className="lg:w-[65%] mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-sm ">
        <div>
          <h3 className=" pb-5 mb-3 border-b border-white text-basicColor">
            Products
          </h3>
          <ul>
            {[
              "Auth",
              "Identity",
              "Balance",
              "Signal",
              "Transfer",
              "Identity Verification",
            ].map((item) => (
              <li
                key={item}
                className="mb-2 hover:text-gray-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* About Us Section */}
        <div>
          <h3 className=" pb-5 mb-3 border-b border-white text-basicColor">
            About us
          </h3>
          <ul>
            {[
              "Company",
              "Careers",
              "Contact",
              "Partners",
              "Press",
              "Safety",
              "How we handle data",
            ].map((item) => (
              <li
                key={item}
                className="mb-2 hover:text-gray-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* For Consumers Section */}
        <div>
          <h3 className=" pb-5 mb-3 border-b border-white text-basicColor">
            For consumers
          </h3>
          <ul>
            {[
              "How it works",
              "Discover apps",
              "Trouble connecting?",
              "Atlas Portal",
            ].map((item) => (
              <li
                key={item}
                className="mb-2 hover:text-gray-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* For Financial Institutions Section */}
        <div>
          <h3 className=" pb-5 mb-3 border-b border-white text-basicColor">
            For financial institutions
          </h3>
          <ul>
            {[
              "Open Finance Solution",
              "Core Exchange",
              "Permissions Manager",
            ].map((item) => (
              <li
                key={item}
                className="mb-2 hover:text-gray-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        <div className="flex justify-center items-center space-x-4 mb-4">
          <span>© 2024 Atlas Inc.</span>
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white"
            aria-label="Twitter"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white"
            aria-label="Instagram"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
