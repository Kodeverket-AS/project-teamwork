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
import { useHorizontalScroll } from "@/hooks/useScrolls";
import { FaUserAltSlash } from "react-icons/fa";
import { Feedback as tFeedback } from "@/types/sanity.types";

const Rating = ({ rating }: {rating: number}) => {
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

// MISSING IMAGE REPLACEMENT COMPONENT
const ImageMissing = () => (
  <div className="group w-full h-full flex flex-col justify-center items-center bg-teamwork-primary-orange/80 text-teamwork-secondary-orange">
    <FaUserAltSlash className="text-3xl" />
  </div>
);

const ReviewCard = ({
  name,
  workTitle,
  rating,
  title,
  content,
  image,
}: tFeedback) => {
  return (
    <div className="group w-full sm:w-3/5 p-6 rounded-lg leading-relaxed flex flex-col sm:flex-row flex-shrink-0 justify-between gap-4 sm:gap-8 items-start transition-all duration-300 shadow-md hover:shadow-lg focus:shadow-lg">
      <div className="w-full">
        <div className="pb-4 text-2xl text-teamwork-primary-orange">
          <Rating rating={rating ?? 0} />
        </div>
        <div>
          <h3 className="font-semibold ">{title}</h3>
          <p className="text-sm sm:text-base text-pretty max-w-[65ch]">
            {content}
          </p>
        </div>
        <div className="text-xs flex items-center gap-2 py-4">
          <p className="font-semibold">{name}</p>
          <p>|</p>
          <p>{workTitle}</p>
        </div>
      </div>
      <div className="hidden sm:block h-full w-56 rounded-sm overflow-hidden">
        {image ? (
          <Image
            src={image.url ?? ""}
            alt="Success"
            width={200}
            height={200}
            className="object-cover w-full h-full bg-slate-300 scale-100 group-hover:scale-105 group-focus:scale-105 transition-all duration-1000"
          />
        ) : (
          <ImageMissing />
        )}
      </div>
    </div>
  );
};

export default function Success({ content }: { content: tFeedback[] }) {
  const { scrollContainerRef, handleScrollHorizontal } = useHorizontalScroll({ scrollLength: 0.6 });

  return (
    <SectionComponent
      orange={false}
      fade>
      <div id="success" className="text-kv-black">
        <h2 className="pb-10">Suksess</h2>
        {/* <p className="max-w-[60ch] text-pretty">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          earum unde placeat ad recusandae? Repellat aperiam vel
          exercitationem, corrupti quas accusantium iure.
        </p> */}
        <div
          ref={scrollContainerRef}
          style={{ scrollbarWidth: "none" }}
          className="flex overflow-x-scroll gap-12 py-8">
          {content.map((feedback) => (
            <ReviewCard
              key={feedback._id}
              {...feedback}
            />
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
