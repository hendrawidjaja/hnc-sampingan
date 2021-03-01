import React from "react";
import { Link } from "react-router-dom";
import Divider from "../../atomic/Divider";
import ThemeSwitcher from "../../atomic/ThemeSwitcher";
import { H3, MenuList, Navbar, Submenu } from "./style";

const NavBar = () => {
  return (
    <Navbar className="nav">
      <H3>
        <Link to="/">HackerNews.</Link>
      </H3>

      <Submenu className="submenu">
        <MenuList className="menu-list">
          <Link to="/">new</Link>
        </MenuList>
        <Divider />

        <MenuList className="menu-list">
          <Link to="">past</Link>
        </MenuList>
        <Divider />

        <MenuList className="menu-list">
          <Link to="">comments</Link>
        </MenuList>
        <Divider />

        <MenuList className="menu-list">
          <Link to="">ask</Link>
        </MenuList>
        <Divider />

        <MenuList className="menu-list">
          <Link to="">show</Link>
        </MenuList>
        <Divider />

        <MenuList className="menu-list">
          <Link to="">jobs</Link>
        </MenuList>
        <Divider />

        <MenuList className="menu-list">
          <Link to="">submit</Link>
        </MenuList>

        <ThemeSwitcher />
      </Submenu>
    </Navbar>
  );
};

export default NavBar;
