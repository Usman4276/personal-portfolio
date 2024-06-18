"use client";

import Navbar from "@/app/ui/navbar";
import Hero from "./ui/hero";
import Services from "./ui/services";
import Projects from "./ui/projects";
import Technologies from "./ui/technologies";
import About from "./ui/about";
import Feedback from "./ui/feedback";
import Contact from "./ui/contact";
import ScrollToTop from "react-scroll-to-top";
import { useEffect, useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

export default function Home() {
  const [preLoader, setPreloader] = useState(true);

  // Running a pre-loader on component mounting
  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 2000);
  }, []);

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
      {preLoader ? (
        <div className="bg-[#f5df4e] h-screen flex justify-center items-center animate-fade">
          <ClimbingBoxLoader color="#020202" size={20} />
        </div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <Services />
          <Projects />
          <Technologies />
          <About />
          <Feedback />
          <Contact />
        </>
      )}
    </>
  );
}
