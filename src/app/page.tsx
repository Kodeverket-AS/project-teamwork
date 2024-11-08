import Hero from "../../components/Hero";
import Model from "../../components/Model";
import Services from "../../components/Services";
import Books from "../../components/Books";
import Histories from "../../components/Histories";
import Team from "../../components/Team";
import Success from "../../components/Success";
import { getData } from "../../sanity/getData";
import { dummyData } from "../../components/dummydata/dummydata";

export default async function Home() {
  const data = await getData();
  // console.log(data);
  const services = data.services;
  const team = dummyData.teamData; // dummydata. Replace with data when ready
  const books = dummyData.booksData; // dummydata. Replace with data when ready

  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <Model />
      <Services />
      <Histories />
      <Books content={books} />
      <Team content={team} />
      <Success />
    </main>
  );
}
