import React, { useContext, useEffect } from "react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import Typewriter from "typewriter-effect";
import { Button, Tooltip } from "@chakra-ui/react";
import Image from "next/image";
import { Context } from "@/app/provider";
import { socialLinks } from "../utils/constants";

const Hero = () => {
  const { setContextState } = useContext(Context);

  useEffect(() => {
    import("particles.js").then((particles) => {
      if (typeof window !== "undefined" && window.particlesJS) {
        window.particlesJS.load(
          "hero-particles",
          "/particles-config.json",
          function () {
            console.log("Particles.js config loaded.");
          }
        );
      }
    });
  }, []);
  return (
    <div className="relative h-screen bg-[#f5df4e] flex flex-col justify-between items-center">
      {/* Particles Container */}
      <div
        id="hero-particles"
        className="absolute top-0 left-0 w-full h-full"
        style={{ zIndex: 0, pointerEvents: "none" }}
      ></div>

      <div className="w-full max-w-[1320px] flex justify-center gap-2 w-full h-dvh items-center animate-fade">
        <div className="animate-fade-up flex flex-col items-center md:items-start gap-6 w-full px-5">
          {/* Heading text */}
          <div>
            <p className="lg:text-5xl text-4xl">GET A</p>
          </div>
          <div className="font-bold text-center md:text-start lg:text-8xl md:text-7xl text-6xl">
            <Typewriter
              options={{
                strings: ["WEBSITE", "MOBILE APP", "UI-UX"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div>
            <p className="lg:text-3xl text-2xl">FOR YOUR BUSINESS</p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <Button
              textColor={"white"}
              bg={"black"}
              _hover={{ bg: "rgb(0, 0, 0, 0.80)" }}
              size={"lg"}
              _active={{ border: 0 }}
              onClick={() => {
                setContextState("projects");
              }}
            >
              View My Work
            </Button>

            <Button
              colorScheme={"gray"}
              size={"lg"}
              _active={{ border: 0 }}
              onClick={() => {
                setContextState("contact");
              }}
            >
              Contact Me
            </Button>
          </div>
          {/* Social Icons */}
          <div className="flex gap-[1rem] bg-[#000000] rounded-full p-2 mt-6">
            {socialLinks.map((link) => (
              <Tooltip key={link.id} label={link.name}>
                <a href={link.url} target="_blank">
                  {link.icon}
                </a>
              </Tooltip>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="w-4/5 hidden md:block pr-5 animate-jump-in">
          <Image
            priority
            src="/hero.png"
            className="border-[1rem] border-white border-solid rounded-full"
            width={500}
            height={400}
            alt="profile picture"
            placeholder="blur"
            blurDataURL="/hero.png"
          />
        </div>
      </div>

      {/* Down arrow animation */}
      <div className="flex justify-center animate-fade mb-28">
        <ArrowDownIcon
          boxSize={8}
          className="animate-fade-down animate-infinite animate-duration-[1800ms] animate-ease-linear"
        />
      </div>
    </div>
  );
};

export default Hero;
