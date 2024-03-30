import React, { useContext, useEffect, useRef } from "react";
import { Context } from "@/app/provider";
import { Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

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
    <div ref={aboutRef} className="mt-32">
      {/* Heading */}
      <div className="text-center">
        <Heading
          as={"h4"}
          size={"lg"}
          className="border-b-4 border-[#f5df4e] inline-block"
        >
          Know Me More
        </Heading>
      </div>

      {/* About Me */}
      <div className="flex justify-center w-full bg-[url('/aboutbg.jpg')] bg-fixed bg-cover mt-20 py-20">
        <div className="max-w-[1320px] flex flex-wrap justify-between items-center max-[834px]:items-start gap-4 animate-fade">
          <div className="max-[834px]:px-4 max-[1309px]:flex max-[1309px]:justify-center max-[1309px]:w-full">
            <Image
              priority
              src="/about.jpg"
              className="rounded-md border-[1rem] border-[#f5df4e] border-solid max-[834px]:w-[100%]"
              width={400}
              height={400}
              alt="profile picture"
            />
          </div>
          <div className="w-[68%] max-[1309px]:w-full text-justify px-20 max-[834px]:px-4">
            <Text fontSize={"2xl"} color="white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              sequi recusandae libero culpa, neque dignissimos accusantium
              voluptatem dolorum voluptatibus nulla fugiat odio modi eos earum!
              Soluta voluptatibus debitis modi laboriosam? Laboriosam qui
              voluptate reiciendis labore facilis quia et. Voluptas nostrum id
              corporis quam perspiciatis amet maxime aperiam sit officiis
              doloribus blanditiis magni, voluptatum, architecto laborum veniam
              laboriosam ipsum. Corporis, hic.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
