import React from "react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import Typewriter from "typewriter-effect";
import { Button } from "@chakra-ui/react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-dvh bg-[#f5df4e] flex flex-col justify-between items-center">
      <div className="flex justify-center gap-2 w-full h-dvh items-center animate-fade">
        <div className="flex flex-col items-center md:items-start gap-6 w-full p-4 md:pl-16">
          {/* Heading text */}
          <div>
            <p className="lg:text-5xl md:text-4xl text-2xl">GET A</p>
          </div>
          <div className="font-bold text-center md:text-start lg:text-8xl md:text-7xl text-5xl">
            <Typewriter
              options={{
                strings: ["WEBSITE", "MOBILE APP", "UI/UX"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div>
            <p className="lg:text-3xl md:text-2xl text-lg">FOR YOUR BUSINESS</p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-center gap-4 flex-wrap ">
            <Button
              textColor={"white"}
              bg={"black"}
              _hover={{ bg: "rgb(0, 0, 0, 0.80)" }}
              size={"lg"}
              _active={{ border: 0 }}
            >
              View My Work
            </Button>

            <Button colorScheme={"gray"} size={"lg"} _active={{ border: 0 }}>
              Contact Me
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="w-4/5 hidden md:block md:pr-16">
          <Image
            priority
            src="/profile.jpg"
            className="border-[1rem] border-white border-solid rounded-full"
            width={500}
            height={500}
            alt="profile picture"
          />
        </div>
      </div>

      {/* Down arrow animation */}
      <div className="flex justify-center mb-6 animate-fade">
        <ArrowDownIcon
          boxSize={8}
          className="animate-fade-down animate-infinite animate-duration-[1800ms] animate-ease-linear"
        />
      </div>
    </div>
  );
};

export default Hero;
