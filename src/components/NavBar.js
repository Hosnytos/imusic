import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import { SideBarData } from "./SideBarData";
import "./NavBar.css";
import Greetings from "./Greetings";
import Input from "./Input";
import ThemeSwitch from "./ThemeSwitch";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars"></Link>
        <FaIcons.FaBars onClick={showSidebar} className="display-menu-icon" />
        <Greetings />
        <Input />
        <ThemeSwitch />
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
