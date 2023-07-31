import React, { useState } from "react";
import { AiFillBell } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import profile from "../../../../assets/profile.jpg";
import "./DashboardNav.css";

const DashboardNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <section id="content">
        <nav className="nav-design">
          <span className="bx bx-menu toggle-sidebar">
            <BsFillMenuButtonWideFill />
          </span>
          <form action="#">
            <div className="form-group">
              <input type="text" placeholder="search...." />
              <span className="bx-search">
                <BiSearchAlt />
              </span>
            </div>
          </form>
          <div className="nav-links d-flex align-items-end">
            <div className="nav-link">
              <span className="bxs-bell">
                <AiFillBell />
              </span>
              <span className="badge">5</span>
            </div>
            <span className="divider"></span>
            <div className="profile">
              <div className="profile-info" onClick={toggleDropdown}>
                <img src={profile} alt="" />
                <span className="profile-name">John Doe</span>
                <FaChevronDown
                  className={`dropdown-icon ${dropdownOpen ? "open" : ""}`}
                />
              </div>
              <div className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
                <ul>
                  <li>Option 1</li>
                  <li>Option 2</li>
                  <li>Option 3</li>
                  <li>Option 4</li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default DashboardNavbar;
