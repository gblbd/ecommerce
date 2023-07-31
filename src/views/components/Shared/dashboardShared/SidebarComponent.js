import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaBeer } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import { signout } from "../../../../utilities/helper";
import "./Sidebar.css";
const SidebarComponent = ({ sidebarLinks }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, setUser, isLoading, setIsLoading } = useAuth();
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const navigate = useNavigate();
  const logout = () => {
    // setIsLoading(true);
    signout(() => {
      setUser("");
      navigate("/login", { replace: true });
    });
  };
  return (
    <>
      <section id="sidebar">
        <a className="brand">Admin Logo</a>

        <ul className="side-menu">
          <li>
            <Link className="link active" to="/dashboard">
              <span className="icon bx">
                <FaBeer />
              </span>
              Dashboard
            </Link>
          </li>
          <li className="divider">Dashboard</li>
          <li>
            <Link className="link" to="/dashboard/product-upload">
              <span className="icon bx">
                <FaBeer />
              </span>
              product upload
            </Link>
          </li>
          <li>
            <Link className="link" to="/dashboard/product-list">
              <span className="icon bx">
                <FaBeer />
              </span>
              Product list
            </Link>
          </li>
          <li>
            <Link className="link" to="/dashboard/admin-profile">
              <span className="icon bx">
                <FaBeer />
              </span>
              Profile
            </Link>
          </li>
          <li>
            <Link className="link" to="/dashboard/admin-profile">
              <span className="icon bx">
                <FaBeer />
              </span>
              Profile
            </Link>
          </li>
          <li>
            <Link className="link" to="/dashboard/admin-profile">
              <span className="icon bx">
                <FaBeer />
              </span>
              Profile
            </Link>
          </li>
          {/* dropdown */}
          <li>
            <Link className="link" onClick={toggleDropdown}>
              <span className="icon bx">
                <FaBeer />
              </span>
              dropdown
              <AiOutlineArrowRight
                className={`icon-right ${dropdownOpen ? "active" : ""}`}
              />
            </Link>
            <ul className={`side-dropdown ${dropdownOpen ? "open" : ""}`}>
              <li>
                <Link>option 1</Link>
              </li>
              <li>
                <Link>option 1</Link>
              </li>
              <li>
                <Link>option 1</Link>
              </li>
              <li>
                <Link>option 1</Link>
              </li>
            </ul>
          </li>
          <li>
            <button className="link" onClick={logout}>
              <span className="icon bx">
                <FaBeer />
              </span>
              LogOut
            </button>
          </li>
        </ul>

        {/*  {sidebarLinks.map((sidebarLink, linkIdx) => (
          <SidebarLinkComponent key={linkIdx} sidebarLink={sidebarLink} />
        ))} */}
      </section>
    </>
  );
};

export default SidebarComponent;
