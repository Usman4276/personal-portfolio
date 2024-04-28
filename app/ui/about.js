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
          className="border-b-4 border-[#f5df4e] inline-block !font-medium"
        >
          Know Me More
        </Heading>
      </div>

      {/* About Me */}
      <div className="flex justify-center w-full bg-[url('/aboutbg.jpg')] bg-fixed bg-cover mt-20 py-20">
        <div
          className="max-w-[1320px] flex flex-wrap justify-evenly items-center max-[834px]:items-start gap-4 animate-fade"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          data-aos-duration="600"
        >
          <div className="max-[834px]:px-4 max-[1309px]:flex max-[1309px]:justify-center max-[1309px]:w-full">
            <Image
              priority
              src="/about.png"
              className="rounded-md border-[4px] border-[#f5df4e] border-solid max-[834px]:w-[100%] max-w-[300px]"
              width={300}
              height={300}
              alt="profile picture"
            />
          </div>
          <div className="w-[68%] max-[1309px]:w-full text-justify px-20 max-[834px]:px-4">
            <Text color="white" className="text-xl lg:text-2xl">
              👋 Hi, I'm Usman Mustafa, a full stack developer with 3 + years of
              professional experience in creating scalable web-applications,
              cross-platforms mobile apps, desktop apps, deployments and server
              management. I have worked on many projects from small to
              enterprise level. If you are in search of some tech solution for
              your business then you are at right place. Let's build something
              great together
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
