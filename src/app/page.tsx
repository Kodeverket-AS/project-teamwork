import Hero from "../../components/Hero";
import Model from "../../components/Model";
import Services from "../../components/Services";
import Books from "../../components/Books";
import Histories from "../../components/Histories";
import Team from "../../components/Team";
import Success from "../../components/Success";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-full">
      <Hero />
      <Model />
      <Services />
      <Histories />
      <Books />
      <Team />
      <Success />
    </main>
  );
}
