import Image from "next/image";
import Hero from "../../components/Hero";
import Model from "../../components/Model";
import Services from "../../components/Services";
import Books from "../../components/Books";
import Histories from "../../components/Histories";
import Team from "../../components/Team";
import Success from "../../components/Success";
import { getData } from "../../sanity/getData";

export default async function Home() {
  const data = await getData();
  const services = data.services;
  return (
    <main className="flex flex-col items-center justify-between w-full">
      <Hero />
      <Model />
      <Services content={services} />
      <Histories />
      <Books />
      <Team />
      <Success />
    </main>
  );
}
