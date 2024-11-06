import Hero from "../../components/Hero";
import Model from "../../components/Model";
import Services from "../../components/Services";
import Books from "../../components/Books";
import Histories from "../../components/Histories";
import Team from "../../components/Team";
import Success from "../../components/Success";
import { getData } from "../../sanity/getData";
import { dummydata } from "../../components/dummydata/dummydata";

export default async function Home() {
  const data = await getData();
  // console.log(data);
  const services = data.services;
  const team = dummydata; // dummydata. Remember to replace and refactor what needs to be.

  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <Model />
      <Services content={services} />
      <Histories />
      <Books />
      <Team content={team} />
      <Success />
    </main>
  );
}
