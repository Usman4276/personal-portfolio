"use client";

import Navbar from "@/app/ui/navbar";
import Hero from "./ui/hero";
import Services from "./ui/services";
import Projects from "./ui/projects";
import About from "./ui/about";
import Feedback from "./ui/feedback";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Feedback />
    </>
  );
}
