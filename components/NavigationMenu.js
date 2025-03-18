"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function NavigationMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navMenu">
      <div className="navMenuSize">
        <div className="navMenuContent">
          <div className="navMenuLogo">
            {/* Logo */}
            <Link href="/">
              <Image
                className="drop-shadow-[0.15em_0.15em_0.15em_rgba(0,0,0,0.5)]"
                src="/frio.svg"
                width={138}
                height={58}
                alt="Frio Blog Logo"
              />
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="navMenuButtons">
            <Link href="/" className="navMenuLinks">
              Home
            </Link>
            <a href="https://www.frio.sk" className="navMenuLinks">
              FRIO
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="navMenuMobile">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="navMenuMobileIcon">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="navMenuLinksMobile">
                Home
              </Link>
              <a href="https://www.frio.sk" className="navMenuLinksMobile">
                FRIO
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
