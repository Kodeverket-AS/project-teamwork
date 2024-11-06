"use client";

import Image from "next/image";
import { FaUserAltSlash } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import SectionComponent from "./sections/SectionComponent";

/**
 * ====================================================
 * TYPES DECLARATIONS
 * ====================================================
 */

// TYPE : LOCATION (INSIDE HANDLELOCATION FUNCTION)
type TLocation = "Alle" | "Oslo" | "Trondheim" | "Bergen";
type TLocations = TLocation[];

// TYPE : TEAM MEMBER CARD
type TMember = {
  id: number;
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
  location: TLocation;
};

// TYPE : TEAM COMPONENT (EXPORT DEFAULT)
type TMembers = TMember[];

type TTeam = {
  members: TMembers;
  locations: TLocations;
};

/**
 * ====================================================
 * COMPONENTS DECLARATIONS
 * ====================================================
 */

// MISSING IMAGE REPLACEMENT COMPONENT
const ImageMissing = () => (
  <div className="group w-full h-full flex flex-col justify-center items-center bg-teamwork-primary-orange/80 text-teamwork-secondary-orange">
    <FaUserAltSlash className="text-3xl" />
    <p className="text-xs transition-all group-hover:text-sm">
      Image not available
    </p>
  </div>
);

// TEAM MEMBER CARD COMPONENT
const Member: React.FC<TMember> = ({
  name,
  role,
  phone,
  email,
  image,
}: TMember) => {
  return (
    <div className="bg-white text-kv-black overflow-hidden rounded-md min-w-72 sm:min-w-96 sm:w-96 flex flex-col items-left justify-center transition-all duration-200 shadow-md hover:shadow-lg">
      <div className="h-64 w-full">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={100}
            height={100}
            className="w-full h-full bg-slate-300"
          />
        ) : (
          <ImageMissing />
        )}
      </div>

      <div className="w-full h-full p-4 pb-6">
        <div className="pb-4">
          <h2 className="text-2xl">{name}</h2>
          <p className="text-sm">{role}</p>
        </div>
        <div className="text-xs text-kv-black/70 leading-relaxed">
          <div className="flex gap-1">
            <b>Mobil:</b>
            <p>{phone}</p>
          </div>
          <div className="flex gap-1">
            <b>Epost:</b>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * ====================================================
 * MAIN COMPONENT (TEAM) EXPORT DEFAULT
 * ====================================================
 */
export default function Team({ content }: { content: TTeam }) {
  const [location, setLocation] = useState<TLocation>(
    content.locations[0]
  );

  const filteredContent =
    location === "Alle"
      ? content.members
      : content.members.filter(
          (item: TMember) => item.location === location
        );

  const handleLocation = (location: TLocation) => {
    setLocation(location);
  };

  return (
    <SectionComponent orange={true}>
      <div className="relative">
        <div className="text-kv-black">
          <h1 className="pb-10">Vårt team</h1>
          <ul className="appearance-none flex gap-4 pb-4">
            {content.locations.map((loc) => (
              <li
                key={loc}
                className={`appearance-none py-3 pr-1 underline-offset-4 ${
                  location === loc
                    ? "underline font-semibold"
                    : "underline-none font-normal text-kv-black/70 hover:text-kv-black"
                } cursor-pointer`}
                onClick={() => handleLocation(loc)}>
                {loc}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative w-screen sm:w-full h-fit py-4 ">
          <div className="hidden sm:block absolute left-0 top-0 h-full  w-6 bg-gradient-to-r from-teamwork-secondary-orange to-teamwork-secondary-orange/0"></div>
          <div className="hidden sm:block absolute right-0 top-0 h-full w-6 bg-gradient-to-r from-teamwork-secondary-orange/0 to-teamwork-secondary-orange"></div>
          <div
            style={{ scrollbarWidth: "none" }}
            className="w-full overflow-x-auto pl-2 sm:pl-6 flex flex-row gap-4 items-center">
            {filteredContent.map((item: TMember, index: number) => (
              <Member
                id={item.id}
                location={item.location}
                key={index}
                name={item.name}
                role={item.role}
                phone={item.phone}
                email={item.email}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <div className="flex w-full justify-end pt-4">
          <div className="flex gap-2 px-5 text-base">
            <FaChevronLeft />
            <FaChevronRight />
          </div>
        </div>
      </div>
    </SectionComponent>
  );
}
