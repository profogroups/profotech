import React from "react";
import PageTransition from "../components/PageTransition";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import SelectedWork from "../sections/SelectedWork";
import About from "../sections/About";
import Process from "../sections/Process";
import Technologies from "../sections/Technologies";
import Courses from "../sections/Courses";
import FinalCTA from "../sections/FinalCTA";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Services />
      <SelectedWork />
      <About />
      <Process />
      <Technologies />
      <Courses />
      <FinalCTA />
    </PageTransition>
  );
}
