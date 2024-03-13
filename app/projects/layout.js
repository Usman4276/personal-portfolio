import React from "react";
import Navbar from "../ui/navbar";

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default layout;
