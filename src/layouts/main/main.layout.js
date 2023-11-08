import React from "react";
import Header from "../../components/header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="flex justify-between items-center gap-3">
        <div className="sidebar min-w-[220px]">Sidebar</div>
        <div className="main w-full">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
