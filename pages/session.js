import React from "react";
import Dashboard from "../components/Session/Dashboard";
import Sidebar from "../components/Session/Sidebar";

export default function Session() {
  return (
    <div id = "layout" className="flex">
    <Sidebar/>
    <div className = "w-4/5">
    <Dashboard/>
    </div>
    </div>
  )
}