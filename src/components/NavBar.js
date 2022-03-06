import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import { SideBarData } from "./SideBarData";
import "./NavBar.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(true);
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars"></Link>
        <FaIcons.FaBars onClick={showSidebar} />
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="/" className="menu-bars">
              <p className="nav-logo-title">
                <RiIcons.RiNeteaseCloudMusicLine /> Imusic
              </p>
            </Link>
          </li>
          {SideBarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
