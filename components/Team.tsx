"use client";

import Image from "next/image";
import { FaUserAltSlash } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";

// TYPE for TeamMemberCard
type TMemberCardProps = {
  id: number;
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
  location: string;
};

// TYPE for Team Component
type TContentItem = {
  id: number;
  title: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
  location: string;
};
type TContent = TContentItem[];

// TeamMemberCard component
const TeamMemberCard: React.FC<TMemberCardProps> = ({
  name,
  role,
  phone,
  email,
  image,
}: TMemberCardProps) => {
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
          <div className="w-full h-full flex justify-center items-center bg-slate-100">
            <FaUserAltSlash className="text-3xl text-slate-800" />
          </div>
        )}
      </div>

      <div className="w-full h-full p-4">
        <div className="pb-4">
          <h2 className="text-2xl">{name}</h2>
          <p className="text-sm">{role}</p>
        </div>
        <div className="text-xs text-kv-black/70 leading-relaxed">
          <p>Mobil: {phone}</p>
          <p>Epost: {email}</p>
        </div>
      </div>
    </div>
  );
};

// Locations Array
const locations = ["Alle", "Oslo", "Trondheim", "Bergen"];

// Team component
export default function Team({ content }: { content: TContent }) {
  const [location, setLocation] = useState(locations[0]);

  const filteredContent =
    location === locations[0]
      ? content
      : content.filter(
          (item: TContentItem) => item.location === location
        );

  const handleLocation = (location: string) => {
    setLocation(location);
  };

  return (
    <section className="w-screen bg-teamwork-secondary-orange ">
      <div className="relative container mx-auto pt-20 pb-12 sm:px-0">
        <div className="absolute left-0 top-0 h-full w-5 bg-gradient-to-r from-teamwork-secondary-orange to-teamwork-secondary-orange/0"></div>
        <div className="absolute right-0 top-0 h-full w-5 bg-gradient-to-r from-teamwork-secondary-orange/0 to-teamwork-secondary-orange"></div>
        <div className="px-5 md:px-10 pb-4 ">
          <h1 className="pb-10">Vårt team</h1>
          <ul className="appearance-none flex gap-4 pb-4">
            {locations.map((loc) => (
              <li
                key={loc}
                className={`appearance-none py-3 pr-1 underline-offset-4 ${
                  location === loc
                    ? "underline font-semibold"
                    : "underline-none font-normal"
                } cursor-pointer`}
                onClick={() => handleLocation(loc)}>
                {loc}
              </li>
            ))}
          </ul>
        </div>
        <div
          style={{ scrollbarWidth: "none" }}
          className="w-full overflow-x-auto pb-5 sm:pl-5 md:pl-10 pl-4 pr-4 sm:pr-10 flex flex-row gap-4 items-center">
          {filteredContent.map(
            (item: TContentItem, index: number) => (
              <TeamMemberCard
                id={item.id}
                location={item.location}
                key={index}
                name={item.name}
                role={item.role}
                phone={item.phone}
                email={item.email}
                image={item.image}
              />
            )
          )}
        </div>
        <div className="flex w-full justify-end pt-4">
          <div className="flex gap-2 px-5 text-base text-teamwork-primary-orange/60">
            <FaChevronLeft />
            <FaChevronRight />
          </div>
        </div>
      </div>
    </section>
  );
}
