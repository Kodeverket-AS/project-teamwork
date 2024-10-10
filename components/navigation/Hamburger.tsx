"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="p-4 focus:outline-none">
        <span className="block w-6 h-1 bg-black mb-1"></span>
        <span className="block w-6 h-1 bg-black mb-1"></span>
        <span className="block w-6 h-1 bg-black"></span>
      </button>

      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full bg-kv-black text-kv-white shadow-md w-64 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="p-4 space-y-4">
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Modell
            </Link>
          </li>
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Tjenester
            </Link>
          </li>
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Historier
            </Link>
          </li>
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Suksess
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;