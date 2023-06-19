import React from "react";

import SidebarLinkComponent from "./SidebarLinkComponent";

const SidebarComponent = ({ sidebarLinks }) => {
  return (
    <div>
      <div className="sidebar-container">
        {sidebarLinks.map((sidebarLink, linkIdx) => (
          <SidebarLinkComponent key={linkIdx} sidebarLink={sidebarLink} />
        ))}
      </div>
    </div>
  );
};

export default SidebarComponent;
