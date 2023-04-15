import React from "react";
import { Poppins } from "next/font/google";
import Footer from "../Credits/Footer";
import TestNav from "./TestNavbar";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const Layout = ({ children }) => {
  return (
    <div className={`bg-white text-black ${poppins.className}`}>
      <TestNav />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
