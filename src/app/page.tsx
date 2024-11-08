"use client"
import Hero from "@/components/Hero";
import Model from "@/components/Model";
import Services from "@/components/Services";
import Books from "@/components/Books";
import Histories from "@/components/Histories";
import TeamMembers from "@/components/Team";
import Success from "@/components/Success";
import { useSanityContext } from "@/context/sanity";

export default async function Home() {
  const { services, books, team, feedback } = useSanityContext()

  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <Model />
      <Services content={services}/>
      <Histories />
      <Books content={books}/>
      <TeamMembers content={team}/>
      <Success content={feedback}/>
    </main>
  );
}
