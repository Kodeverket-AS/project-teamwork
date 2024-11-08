"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll til toppen"
      className={` z-50 p-4 fixed md:bottom-8 bottom-4 md:right-8 right-4 transition-all duration-200  bg-kv-black text-kv-white rounded-full hover:scale-[0.90] border shadow ${
        isVisible ? "opacity-100 " : "opacity-0 cursor-default"
      }`}>
      <FaArrowUp
        className="w-6 h-6 "
        strokeWidth={1.5}
      />
    </button>
  );
}

export function DownloadButton() {
  return (
    <a
      href=""
      rel="noopener noreferrer"
      className="bg-teamwork-primary-orange w-full md:w-fit px-6 py-3 text-base rounded-md font-semibold text-center hover:bg-teamwork-primary-orange/90">
      Last ned håndboken
    </a>
  );
}

type TBasicButton = {
  href: string;
  wFit?: boolean;
  text?: string;
};

export function BuyButton({ href, wFit, text }: TBasicButton) {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      className={`bg-teamwork-primary-orange min-w-48 ${wFit ? "w-fit" : "w-full"} px-6 py-3 text-base rounded-md font-semibold text-center hover:bg-teamwork-primary-orange/90`}>
      {text || "Kjøp nå"}
    </Link>
  );
}
// w-full < sm > w-fit
export function ButtonResponsive({ href, text }: TBasicButton) {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      className={`bg-teamwork-primary-orange min-w-48 w-full sm:w-fit px-6 py-3 text-base rounded-md font-semibold text-center hover:bg-teamwork-primary-orange/90`}>
      {text || "Les mer"}
    </Link>
  );
}