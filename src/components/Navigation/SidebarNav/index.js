import React, {useState, Fragment} from 'react';
import NavLinks from "./menu-links";
import SocialLinks from "./social-links";
import Backdrop from "./backdrop";

const SideNavbar = (props) => {
  const [openSidenav, toggleSidenav] = useState(false);

  let handleClick = (evt) => {
    let isOpen = document.getElementsByClassName("sidebarVisible").length > 0;
    return isOpen ? toggleSidenav(!openSidenav) : null;
  };

  let _toggleSidenav = () => {
    toggleSidenav(!openSidenav);
  };
  return (
    <Fragment>
      <Backdrop isOpen={openSidenav} handleClick={handleClick}/>
      
      <div id="nav-sidebar">
        <div className="sidebar">
          <div className="menu-icon" id="menu-icon" onClick={_toggleSidenav}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <SocialLinks />

          <div className="year">
            <p>{new Date().getFullYear()}</p>
          </div>
        </div>

        <div className={`navbar ${openSidenav ? 'sidebarVisible' : 'sidebarHidden'}`}>
          <div className="navbar__header">
            <h2 className="navbar__header-title">House of <br />Anasa</h2>
          </div>

          <NavLinks />

          <div className="copyright">
            <p>&copy; C0D1NGD0J0. All rights reserved.</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SideNavbar;