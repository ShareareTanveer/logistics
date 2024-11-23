import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative z-50 bg-white mb-[64rem]">
        <Navbar />
        {children}
      </div>
        <Footer />
    </>
  );
};

export default MainLayout;
