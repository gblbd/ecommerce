import React from "react";
import { Route, Routes } from "react-router-dom";
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
    <div>
      <SidebarComponent sidebarLinks={DashboardLinks} />
      <Routes>
        <Route index element={<AdminDashboardHome />} />
        <Route path="admin-profile" element={<AdminProfile />} />
      </Routes>
    </div>
  );
};

export default AdminDashboard;
