import React, { useContext, useEffect, useRef } from "react";
import { Context } from "@/app/provider";
import { Heading } from "@chakra-ui/react";

const About = () => {
  const { contextState, setContextState } = useContext(Context);
  const aboutRef = useRef(null);

  useEffect(() => {
    if (contextState === "about") {
      setTimeout(() => {
        aboutRef.current.scrollIntoView({
          behavior: "smooth",
        });
        setContextState("");
      }, 100);
    }
  }, [contextState]);

  return (
    <div ref={aboutRef}>
      <div className="text-center">
        <Heading
          as={"h4"}
          size={"lg"}
          className="border-b-4 border-[#f5df4e] inline-block"
        >
          Know Me More
        </Heading>
      </div>
    </div>
  );
};

export default About;
