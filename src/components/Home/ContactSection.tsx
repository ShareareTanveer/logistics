import React from "react";

const ContactSection = () => {
  return (
    <div
      className="relative h-screen bg-fixed bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('/corporate/contact-logistics.jpg')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-8 text-white">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-center">
          Contact
        </h2>
        <div className="space-y-6 bg-white rounded-xl px-8 py-8 lg:px-12 lg:py-12 text-black w-full max-w-4xl">
          {/* Location */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex justify-center items-center w-12 h-12 bg-green-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-green-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2C8.134 2 5 5.134 5 9c0 6.522 7 13 7 13s7-6.478 7-13c0-3.866-3.134-7-7-7zm0 10a3 3 0 110-6 3 3 0 010 6z"
                />
              </svg>
            </div>
            <p className="text-base sm:text-lg lg:text-xl">
              <span className="font-semibold text-green-700">Office: </span>7th
              Floor, 77 Motijheel Commercial Area, Motijheel, Dhaka-1000,
              Bangladesh
            </p>
          </div>
          {/* Email */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex justify-center items-center w-12 h-12 bg-green-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-green-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 11-8 0 4 4 0 018 0zm2 0a6 6 0 10-12 0 6 6 0 0012 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.5 21.5L7 17h10l4.5 4.5"
                />
              </svg>
            </div>
            <p className="text-base sm:text-lg lg:text-xl">
              <span className="font-semibold text-green-700">Warehouse: </span>
              BSCIC Industrial Estate, Tongi, Gazipur, Bangladesh
            </p>
          </div>
          {/* Phone */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex justify-center items-center w-12 h-12 bg-green-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-green-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10.5v-6A2.5 2.5 0 0012.5 2h-6A2.5 2.5 0 004 4.5v6A2.5 2.5 0 006.5 13h6A2.5 2.5 0 0015 10.5zm0 0L17.5 13l-3 3"
                />
              </svg>
            </div>
            <p className="text-base sm:text-lg lg:text-xl">
              <span className="font-semibold text-green-700">Phone: </span>+880
              1791460000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
