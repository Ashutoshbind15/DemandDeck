import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <main className="min-h-screen">{children}</main>
    </div>
  );
};

export default Layout;
