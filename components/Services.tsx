"use client";

import SectionComponent from "./sections/SectionComponent";

interface Contents {
  title: string;
  content: string;
  image: string;
}

export default function Services({
  content,
}: {
  content: Contents[];
}) {
  return (
    <SectionComponent orange={false}>
      <div className="flex flex-col gap-10">
        <h2>Tjenester</h2>
        <div className="flex flex-col md:flex-row w-full md:justify-between gap-10">
          <div className="w-full h-60 shadow md:w-56 md:h-64">
            <h3>{content[0].title}</h3>
          </div>
          <div className="w-full h-60 shadow md:w-56 md:h-64">
            <h3>{content[1].title}</h3>
          </div>
          <div className="w-full h-60 shadow md:w-56 md:h-64">
            <h3>{content[2].title}</h3>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full md:justify-between gap-10">
          <div className="w-full h-60 shadow md:w-56 md:h-64">
            <h3>{content[3].title}</h3>
          </div>
          <div className="w-full h-60 shadow md:w-56 md:h-64">
            <h3>{content[4].title}</h3>
          </div>
          <div className="w-full h-60 shadow md:w-56 md:h-64">
            <h3>{content[5].title}</h3>
          </div>
        </div>
      </div>
    </SectionComponent>
  );
}
