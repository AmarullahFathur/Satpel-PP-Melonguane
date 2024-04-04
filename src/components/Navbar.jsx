import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Navbar as Nav } from "flowbite-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState("beranda");

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };

  return (
    <Nav className="shadow-md py-3.5">
      <Nav.Brand as={Link} href="https://flowbite-react.com">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          SATPEL PP MELONGUANE
        </span>
      </Nav.Brand>
      <Nav.Toggle />
      <Nav.Collapse>
        <Nav.Link
          as={Link}
          to="/"
          active={activeNavItem === "beranda"}
          onClick={() => handleNavItemClick("beranda")}
        >
          Beranda
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/jadwal"
          active={activeNavItem === "jadwal"}
          onClick={() => handleNavItemClick("jadwal")}
        >
          Jadwal
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/kontak"
          active={activeNavItem === "kontak"}
          onClick={() => handleNavItemClick("kontak")}
        >
          Kontak
        </Nav.Link>
      </Nav.Collapse>
    </Nav>
  );
};

export default Navbar;
