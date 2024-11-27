"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { MdOutlineHandshake } from "react-icons/md";
import { MdJoinLeft } from "react-icons/md";
import SectionComponent from "./sections/SectionComponent";

// ACCORDION TYPE PROPS
type TAccordionProps = {
  subjectIcon: React.ReactElement;
  title: string;
  content: string;
  isOpen?: boolean;
  toggle?: () => void;
};

// ACCORDION DATA
const accordionData: TAccordionProps[] = [
  {
    subjectIcon: <RiTeamFill />,
    title: "Ledende fagmiljø",
    content:
      "Here comes a text about this subject, please change this before the page goes live it's critical and btw I need to fill the space all the time you have to leave the space. Just leave me alone, I know what to do.",
  },
  {
    subjectIcon: <MdJoinLeft />,
    title: "Medarbeiderskap",
    content:
      "Medarbeiderskap er Nordens ideal for samspill og ansvarsdeling på arbeidsplassen. Sammen med professor Stefan Tengblad i Göteborg, har Johan Velten bidratt til å gi begrepet et konkret meningsinnhold og verktøy for praktisk utvikling.",
  },
  {
    subjectIcon: <MdOutlineHandshake />,
    title: "Solid samarbeidspartner",
    content:
      "Here comes a text about this subject, please change this before the page goes live it's critical and btw I need to fill the space all the time you have to leave the space. Just leave me alone, I know what to do.",
  },
];

// ACCORDION COMPONENT
const AccordionComponent: React.FC<TAccordionProps> = ({
  subjectIcon,
  title,
  content,
  isOpen,
  toggle,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(
        isOpen ? `${contentRef.current.scrollHeight}px` : "0px"
      );
    }
  }, [isOpen]);

  return (
    <div className="bg-kv-white text-kv-black shadow px-3 transition-all duration-500 ease-in-out border-b">
      <button
        onClick={toggle}
        className="group w-full py-4">
        <div
          className={`text-xl flex flex-row justify-between items-center `}>
          <div className="flex flex-row items-center gap-2">
            <div
              className={`${isOpen ? "text-teamwork-primary-orange" : "text-kv-black"}`}>
              {subjectIcon}
            </div>
            <h4 className="no-underline group-hover:underline-offset-4 group-hover:underline">
              {title}
            </h4>
          </div>
          <div className="animate-none group-hover:animate-pulse">
            {isOpen ? <FaArrowUp /> : <FaArrowDown />}
          </div>
        </div>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="transition-max-height duration-500 ease-in-out overflow-hidden">
        <div className={`pb-8 `}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

// MODEL COMPONENT
export default function Model() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <SectionComponent
      orange={true}
      fade>
      <div
        id="model"
        className="w-full flex flex-col md:flex-row py-14 gap-10">
        <div className="flex flex-col  w-full md:w-1/2">
          <h2>Modell</h2>

          {accordionData.map((section, index) => (
            <AccordionComponent
              key={index}
              subjectIcon={section.subjectIcon}
              title={section.title}
              content={section.content}
              isOpen={openIndex === index}
              toggle={() => toggleAccordion(index)}
            />
          ))}
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/ModelImage.jpg"
            width={1000}
            height={750}
            alt="Mann i dressjakke som ser mot kamera"
          />
        </div>
      </div>
    </SectionComponent>
  );
}
