"use client";

import Navbar from "@/app/ui/navbar";
import Hero from "./ui/hero";
import Services from "./ui/services";
import Projects from "./ui/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
    </>
  );
}
