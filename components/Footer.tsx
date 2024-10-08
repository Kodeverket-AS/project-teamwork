"use client";

import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full pb-4 text-kv-white bg-[#373131]">
        <div className="flex flex-row justify-center items-center">
            <Image src={""} height={250} width={350} className="" alt="" />
        </div>
        <div className="flex flex-row justify-center items-center gap-4 pb-3">
            <Link href={"/"}>Modell</Link>
            <Link href={"/"}>Tjenester</Link>
            <Link href={"/"}>Historier</Link>
            <Link href={"/"}>Suksess</Link>
        </div>
        <div className="flex flex-col justify-center gap-3">
          <div className="flex flex-row justify-center gap-3">
            <div className="flex flex-row gap-1"><FaEnvelope className="w-3 h-auto" /><p>post@teamwork.no</p></div>
            <div className="flex flex-row gap-1"><FaPhoneAlt className="w-3 h-auto" /><p>(414) 687 - 5892</p></div>
          </div>
          <div className="flex justify-center flex-row gap-1"><FaMapMarkedAlt className="w-3 h-auto" /><p>Rosenholmveien 25, 1414 Trollåsen</p></div>
          <div className="flex flex-row justify-center gap-3">
            <div><p>Orgnummer 942 858 973</p></div>
            <div className="flex flex-row gap-1"><FaLinkedinIn className="w-3 h-auto" /><p>LinkedIn</p></div>
          </div>
          <div className="flex justify-center"><p>Levert av Hjemmesidehuset AS</p></div>
        </div>
        <p className="text-center pt-4">&copy; Teamwork, {new Date().getFullYear()}</p>
    </footer>
  );
}