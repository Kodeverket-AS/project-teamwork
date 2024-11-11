"use client";

import Image from "next/image";
import SectionComponent from "./sections/SectionComponent";
import {
  FaStar,
  FaRegStar,
  FaStarHalfStroke,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import { useHorizontalScroll } from "@/hooks/scrolls";
import { FaUserAltSlash } from "react-icons/fa";
import { Feedback } from "@/types/sanity.types";

const Rating = ({ rating }: { rating: number}) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<FaStar key={i} />);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(<FaStarHalfStroke key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }

  return <div className="flex gap-1">{stars}</div>;
};

const ReviewCard = ({ title, content, rating, name, workTitle, company, image }: Feedback) => {
  return (
    <div className="w-full sm:w-2/3 p-6 rounded-lg leading-relaxed flex flex-col sm:flex-row flex-shrink-0 justify-between gap-4 sm:gap-8 items-start transition-all duration-300 shadow-md hover:shadow-lg">
      <div className="w-full">
        <div className="pb-4 text-2xl text-teamwork-primary-orange">
          <Rating rating={rating ?? 0} />
        </div>
        <div>
          <h2 className="font-semibold ">{title}</h2>
          <p>{content}</p>
        </div>
        <div className="text-xs flex items-center gap-2 py-4">
          <p className="font-semibold">{name}</p>
          <p>|</p>
          <p>{workTitle}, {company}</p>
        </div>
      </div>
      <div className="hidden sm:block h-full w-56 rounded-md overflow-hidden">
        {image?.url ? (
          <Image
            src={image.url}
            alt="Success"
            width={200}
            height={200}
            className="w-full h-full bg-slate-300"
          />
        ) : (
          <div className="group w-full h-full flex flex-col justify-center items-center bg-teamwork-primary-orange/80 text-teamwork-secondary-orange">
            <FaUserAltSlash className="text-3xl" />
          </div>
        )}
      </div>
    </div>
  );
};

export default function Success({ content }: { content: Feedback[]}) {
  const { scrollContainerRef, handleScrollHorizontal } =
    useHorizontalScroll({ scrollLength: 0.6 });
  return (
    <SectionComponent orange={false}>
      <div className="text-kv-black">
        <h1 className="pb-10">Suksess</h1>
        <p className="max-w-[60ch]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          earum unde placeat ad recusandae? Repellat aperiam vel
          exercitationem, corrupti quas accusantium iure.
        </p>
        <div
          ref={scrollContainerRef}
          style={{ scrollbarWidth: "none" }}
          className="flex overflow-x-scroll gap-10 py-8">
          {content.map((data) => (
            <ReviewCard key={data._id} {...data} />
          ))}
        </div>
      </div>
      <div className="flex w-full justify-end pt-4">
        <div className="hidden sm:flex gap-2 px-5 text-base">
          <button onClick={() => handleScrollHorizontal("left")}>
            <FaChevronLeft />
          </button>
          <button onClick={() => handleScrollHorizontal("right")}>
            <FaChevronRight />
          </button>
        </div>
        <div className="flex sm:hidden gap-2 px-5 text-base">
          <FaChevronLeft />
          <FaChevronRight />
        </div>
      </div>
    </SectionComponent>
  );
}
