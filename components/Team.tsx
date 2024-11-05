"use client";

import Image from "next/image";
import { FaUserAltSlash } from "react-icons/fa";
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
    <div className="bg-white text-kv-black overflow-hidden rounded-md min-w-72 w-full sm:w-96 flex flex-col items-left justify-center">
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
          <h2 className="text-3xl">{name}</h2>
          <p className="">{role}</p>
        </div>
        <div className="text-sm text-kv-black/70 leading-relaxed">
          <p>{phone}</p>
          <p>{email}</p>
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
      <div className="container relative mx-auto px-4 py-14">
        <div className="hidden sm:block h-full w-16 absolute top-0 right-0 bg-gradient-to-r from-teamwork-secondary-orange/0 via-teamwork-secondary-orange/40 to-teamwork-secondary-orange/100 "></div>
        <div className="pb-4">
          <h1 className="pb-10">Vårt team</h1>
          <ul className="flex gap-4 pb-4">
            {locations.map((loc) => (
              <li
                key={loc}
                className={`underline-offset-4 ${
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
        <div className=" sm:overflow-x-scroll pb-5 sm:pr-40 flex flex-col sm:flex-row gap-2 items-center">
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
      </div>
    </section>
  );
}
