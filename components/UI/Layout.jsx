import React from "react";
import Navbar from "./Navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});


const Layout = ({ children }) => {
  return (
    <div className={`bg-white text-black ${poppins.className}`}>
      <Navbar />
      <main className="min-h-screen">{children}</main>
    </div>
  );
};

export default Layout;
