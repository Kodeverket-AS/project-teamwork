import Hero from "../../components/Hero";
import Model from "../../components/Model";
import Services from "../../components/Services";
import BooksSection from "../../components/Books";
import Histories from "../../components/Histories";
import Team from "../../components/Team";
import Success from "../../components/Success";
import { getData } from "../../sanity/getData";
// import { dummyData } from "../../components/dummydata/dummydata";

export default async function Home() {
  const data = await getData();
  console.log(data.feedback);
  const services = data.services;
  // const team = data.team;
  // const books = data.books;

  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <Model />
      <Services content={services} />
      <Histories />
      <BooksSection />
      <Team />
      <Success />
    </main>
  );
}
