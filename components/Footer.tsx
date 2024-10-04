"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full pb-4 text-kv-white bg-[#373131]">
        <div className="flex flex-row justify-center items-center">
            <Image src={""} height={250} width={350} className="" alt="" />
        </div>
        <div className="flex flex-row justify-center items-center gap-4">
            <Link href={"/"}>Modell</Link>
            <Link href={"/"}>Tjenester</Link>
            <Link href={"/"}>Historier</Link>
            <Link href={"/"}>Suksess</Link>
        </div>
        <div>
            <p></p>
        </div>
        <p className="text-center">&copy; Teamwork, {new Date().getFullYear()}</p>
    </footer>
  );
}