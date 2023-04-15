import React from "react";
import Sidebar from "../../../components/Session/Sidebar";
import Dashboard from "../../../components/Session/Dashboard";
import Request from "../../../components/Session/Request";
import RequestBox from "../../../components/Session/RequestBox";
import Review from "../../../components/Session/Review";

const SessionPage = () => {
  return (
    <div>
      <Sidebar />
      <Dashboard />
      <Request />
      <RequestBox />
      <Review />
    </div>
  );
};

export default SessionPage;
