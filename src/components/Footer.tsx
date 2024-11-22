"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBuilding,
} from "react-icons/fa";
import LogoLight from "../public/LogoLight.svg";

// const sections = [
//   { name: "Modell", href: "/" },
//   { name: "Tjenester", href: "/" },
//   { name: "Historier", href: "/" },
//   { name: "Suksess", href: "/" },
// ];

const contactInfo = [
  { icon: FaMapMarkerAlt, text: "Rosenholmveien 25, 1414 Trollåsen" },
  { icon: FaEnvelope, text: "post@teamwork.no" },
  { icon: FaPhoneAlt, text: "(414) 687 - 5892" },
  {
    icon: FaLinkedinIn,
    text: "LinkedIn",
    url: "https://www.linkedin.com/company/teamwork-norge/",
  },
];

type TFooterItem = {
  icon: React.ElementType;
  text: string;
  url?: string | null;
};

const FooterItem = ({ icon, text, url }: TFooterItem) => {
  const Icon = icon;
  return (
    <div className="flex items-center gap-2  text-kv-white/70 hover:text-kv-white">
      <Icon className="text-lg" />
      {text === "LinkedIn" ? (
        <Link
          target="_blank"
          href={url ?? "/"}>
          {text}
        </Link>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="w-full h-screen sm:h-fit flex flex-col items-center justify-center pt-12 pb-8 text-kv-white bg-[#373131]">
      <div className="flex flex-row justify-center items-start w-56 h-auto mx-auto pb-12">
        <Image
          src={LogoLight}
          height={250}
          width={350}
          className=""
          alt="Teamwork logo"
        />
      </div>
      {/* <div className="flex flex-row justify-center items-center gap-4 pb-3">
        {sections.map((section, index) => (
          <Link
            key={index}
            href={section.href}>
            {section.name}
          </Link>
        ))}
      </div> */}
      <div className="flex flex-col justify-center gap-12">
        <div className="flex flex-col items-center sm:flex-row justify-center gap-6 sm:gap-8">
          {contactInfo.map((info, index) => (
            <FooterItem
              key={index}
              icon={info.icon}
              text={info.text}
              url={info.url}
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row text-xs justify-center items-center gap-2 sm:gap-8 text-kv-white/70">
          <FooterItem
            icon={FaBuilding}
            text="Orgnummer: 942 858 973"
          />
          {/* <p>Orgnummer 942 858 973</p> */}
          <p className="text-center">
            &copy; Teamwork, {new Date().getFullYear()}
          </p>
          <p>Levert av Kodeverket Bergen</p>
        </div>
      </div>
    </footer>
  );
}
