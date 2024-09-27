"use client";

import React, { useEffect, useState, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

type THamburgerMenuProps = {
  hamFill: string;
};
/*
const HamburgerMenu: React.FC<THamburgerMenuProps> = ( hamFill: string ) => {
  const [isOpen, setIsOpen] = useState(false);
  //const menuRef = useRef(null);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
      };

  // Bruker Reacts event-system på window i stedet for document
  window.addEventListener('mousedown', handleClickOutside);

  return () => {
    window.removeEventListener('mousedown', handleClickOutside);
  };
}, [menuRef]);*/
  {/*useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target:MouseEvent)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [])*/};
/*
  return (
    <div className="block md:hidden">
      <button
        className="flex items-center justify-center w-10 h-10 transition duration-500 rounded-md top-4 right-4"
        onClick={handleMenuToggle}
        aria-label="Åpne navigasjonsmeny"
      >
        <GiHamburgerMenu
          className={`w-20 h-20 ${
            hamFill == "white"
              ? "fill-kv-white"
              : "fill-jobloop-secondary-green"
          }`}
        />
      </button>
      <div
        className={`fixed top-0 z-40 right-0 w-full bg-kv-white h-screen transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        ref={menuRef}
      >
        <nav className="relative flex justify-center">
          <button
            className="absolute flex items-center justify-center w-10 h-10 transition rounded-md top-4 right-4 "
            onClick={handleMenuToggle}
            aria-label="Lukke navigasjonsmeny"
          >
            {" "}
            <IoCloseSharp
              className={` ${
                isOpen ? "block" : "hidden"
              } text-kv-black rounded-full transition duration-500 z-50 w-12 h-12`}
            />
          </button>

          <ul className="grid gap-8 mt-20">
            <Link
              href="/om-oss"
              aria-label="gå til underside og les mer om oss"
              className="px-8 text-xl font-bold transition-all text-jobloop-secondary-green group w-fit"
              onClick={(event) => {
                setIsOpen(false);
              }}
            >
              Om Oss
            </Link>
            <Link
              href="/kontakt"
              aria-label="gå til underside og ta kontakt med en av oss"
              className="px-8 text-xl font-bold transition-all text-jobloop-secondary-green group w-fit"
              onClick={(event) => {
                setIsOpen(false);
              }}
            >
              Kontakt
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;*/
