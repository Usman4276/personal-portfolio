"use client";

import Navbar from "@/app/ui/navbar";
import Hero from "./ui/hero";
import Services from "./ui/services";
import Projects from "./ui/projects";
import About from "./ui/about";
import Feedback from "./ui/feedback";
import Contact from "./ui/contact";
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  return (
    <>
      <ScrollToTop
        smooth
        style={{
          backgroundColor: "#f5df4e",
          borderRadius: "50%",
          textAlign: "-webkit-center",
        }}
      />
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Feedback />
      <Contact />
    </>
  );
}
