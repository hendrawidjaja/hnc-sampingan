import React from "react";
import { Link } from "react-router-dom";
import { H3, MenuList, Navbar, Span, Submenu } from "./style";

const NavBar = () => {
  return (
    <Navbar className="nav">
      <H3>HackerNews.</H3>

      <Submenu className="submenu">
        <MenuList className="menu-list">
          <Link to="">new</Link>
        </MenuList>

        <Span>|</Span>
        <MenuList className="menu-list">
          <Link to="">past</Link>
        </MenuList>

        <Span>|</Span>
        <MenuList className="menu-list">
          <Link to="">comments</Link>
        </MenuList>

        <Span>|</Span>
        <MenuList className="menu-list">
          <Link to="">ask</Link>
        </MenuList>

        <Span>|</Span>
        <MenuList className="menu-list">
          <Link to="">show</Link>
        </MenuList>

        <Span>|</Span>
        <MenuList className="menu-list">
          <Link to="">jobs</Link>
        </MenuList>

        <Span>|</Span>
        <MenuList className="menu-list">
          <Link to="">submit</Link>
        </MenuList>
      </Submenu>
    </Navbar>
  );
};

export default NavBar;
