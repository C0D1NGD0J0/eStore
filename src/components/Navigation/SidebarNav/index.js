import React, {useState} from 'react';
import NavLinks from "./menu-links";
import SocialLinks from "./social-links";

const SideNavbar = (props) => {
  const [isSidebarOpen, updateSidebar] = useState(false);
  
  const toggleSidebar = () => {
    updateSidebar(!isSidebarOpen);
  };

  return (
    <div id="nav-sidebar">
      <div className="sidebar">
        <div className="menu-icon" id="menu-icon" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <SocialLinks />

        <div className="year">
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      <div className={`navbar ${isSidebarOpen ? 'sidebarVisible' : 'sidebarHidden'}`}>
        <div className="navbar__header">
          <h2 className="navbar__header-title">House of <br />Anasa</h2>
        </div>

        <NavLinks />

        <div className="copyright">
          <p>&copy; C0D1NGD0J0. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default SideNavbar;