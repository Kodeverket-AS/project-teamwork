"use client"
import Hero from "@/components/Hero";
import Model from "@/components/Model";
import Services from "@/components/Services";
import BooksSection from "@/components/Books";
import Histories from "@/components/Histories";
import Team from "@/components/Team";
import Success from "@/components/Success";
import { useSanityContext } from "@/context/sanity";

export default function Home() {
  const { books, customers, feedback, services, team } = useSanityContext()
  
  return (
    <main className="flex flex-col items-center justify-between w-full">
      <Hero />
      <Model />
      <Services content={services} />
      <Histories />
      <BooksSection content={books} />
      <Team content={team} />
      <Success content={feedback} />
      {/* <Customers content={customers} /> */}
    </main>
  );
}
