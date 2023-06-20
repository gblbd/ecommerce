import React from "react";
import { Route, Routes } from "react-router-dom";
import "../../../Shared/dashboardShared/DashboardNav.css";
import DashboardNavbar from "../../../Shared/dashboardShared/DashboardNavbar";
import SidebarComponent from "../../../Shared/dashboardShared/SidebarComponent";
import AdminDashboardHome from "./AdminDashboardHome/AdminDashboardHome";
import AdminProfile from "./profile/AdminProfile";
const DashboardLinks = [
  {
    to: "/dashboard",
    /* icon: <MdDashboard size={24} />, */
    text: "Dashboard",
  },
  {
    to: "/dashboard/admin-profile",
    /*  icon: <MdFavoriteBorder size={24} />, */
    text: "Admin Profile",
  },
];
const AdminDashboard = () => {
  return (
    <div className="d-flex bg-lm">
      <SidebarComponent sidebarLinks={DashboardLinks} />
      <div className="dashboard-header-content-container flex-grow-1">
        <DashboardNavbar></DashboardNavbar>
        <div className="main-body">
          <Routes>
            <Route index element={<AdminDashboardHome />} />
            <Route path="admin-profile" element={<AdminProfile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
