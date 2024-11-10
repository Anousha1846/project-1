

"use client"
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navContainer">
        <Link href="/" className="logo">
          Anousha
        </Link>
        <div className="hamburger" onClick={toggleMenu}>
          <span className={isOpen ? "barOpen" : "bar"}></span>
          <span className={isOpen ? "barOpen" : "bar"}></span>
          <span className={isOpen ? "barOpen" : "bar"}></span>
        </div>
        <ul className={`navMenu ${isOpen ? "active" : ""}`}>
          <li className="navItem">
            <Link href="/" className="navLink">
              Home
            </Link>
          </li>
          <li className="navItem">
            <Link href="/#about" className="navLink">
              About
            </Link>
          </li>
          <li className="navItem">
            <Link href="/myProject" className="navLink">
              Projects
            </Link>
          </li>
          <li className="navItem">
            <Link href="/contact" className="navLink">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

