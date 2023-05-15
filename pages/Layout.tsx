import React, { Children } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-row justify-start">
        <Sidebar />
        <div className="flex-1 p-4 px-10">{children}</div>
      </div>
    </>
  );
};

export default layout;
