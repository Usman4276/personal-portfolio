import React, { useContext, useEffect, useRef } from "react";
import { Context } from "@/app/provider";
import CountUp, { useCountUp } from "react-countup";
import { Heading, Text, Button, Tooltip } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { TbWorldWww } from "react-icons/tb";
import { projectList } from "../utils/constants";

const Projects = () => {
  const { contextState, setContextState } = useContext(Context);
  const projectsRef = useRef(null);

  // Setting up counter viewport references
  useCountUp({
    ref: "counter1",
    end: 20,
    enableScrollSpy: true,
  });
  useCountUp({
    ref: "counter2",
    end: 10,
    enableScrollSpy: true,
  });
  useCountUp({
    ref: "counter3",
    end: 3,
    enableScrollSpy: true,
  });

  useEffect(() => {
    if (contextState === "projects") {
      setTimeout(() => {
        projectsRef.current.scrollIntoView({
          behavior: "smooth",
        });
        setContextState("");
      }, 100);
    }
  }, [contextState]);

  return (
    <div ref={projectsRef} className="animate-fade">
      {/* Counter */}
      <div className="flex flex-wrap justify-center gap-28 max-[865px]:gap-2 items-center bg-[#f5df4e] py-16 mt-32">
        <div
          className="p-6"
          data-aos="zoom-out"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <div className="flex justify-evenly">
            <div className="text-center text-7xl font-bold" id="counter1">
              <CountUp className="bg-[#f5df4e] rounded-full p-3" />
            </div>
            <div className="text-7xl font-bold">+</div>
          </div>
          <Heading as="h6" size="md" className="mt-7">
            Projects Completed
          </Heading>
        </div>
        <div
          className="p-6"
          data-aos="zoom-out"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <div className="flex justify-evenly">
            <div className="text-center text-7xl font-bold" id="counter2">
              <CountUp className="bg-[#f5df4e] rounded-full p-3" />
            </div>
            <div className="text-7xl font-bold">+</div>
          </div>
          <Heading as="h6" size="md" className="mt-7">
            Clients Globally
          </Heading>
        </div>
        <div
          className="p-6"
          data-aos="zoom-out"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <div className="flex justify-evenly">
            <div className="text-center text-7xl font-bold" id="counter3">
              <CountUp className="bg-[#f5df4e] rounded-full p-3" />
            </div>
            <div className="text-7xl font-bold">+</div>
          </div>

          <Heading as="h6" size="md" className="mt-7">
            Years Experience
          </Heading>
        </div>
      </div>

      {/* Projects List */}
      <div className="flex flex-wrap justify-center">
        {projectList.map((val) => {
          return (
            <div
              key={val.id}
              className="flex max-w-[1320px] flex-wrap justify-start gap-2 mt-16 sm:mt-40 px-5"
              data-aos={val.animate}
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              data-aos-duration="600"
            >
              <div className="relative group">
                <Image
                  priority
                  className="rounded-md cursor-pointer transition group-hover:scale-105 group-hover:blur-sm max-[848px]:w-[500px] max-[848px]:w-[500px]"
                  src={val.img}
                  width={400}
                  height={400}
                  alt="project_image"
                />

                <div className="absolute invisible group-hover:visible top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4">
                  <Link href={val.url} target="_blank">
                    <Button colorScheme="green" leftIcon={<TbWorldWww />}>
                      Visit Site
                    </Button>
                  </Link>
                  {/* <Link href={val.github} target="_blank">
                    <Button
                      variant={"solid"}
                      bg={"black"}
                      _active={{ border: 0 }}
                      textColor={"white"}
                      _hover={{ bg: "#1f2937" }}
                      leftIcon={<FaGithub />}
                    >
                      Github
                    </Button>
                  </Link> */}
                </div>
              </div>
              <div className="text-justify w-[68%] max-[1317px]:w-full pl-20 max-[1317px]:pl-0 max-[1317px]:pl-0 py-2 max-[848px]:mt-10">
                <Heading as="h5" size="lg">
                  {val.title}
                </Heading>
                <div className="py-6">
                  <Text fontSize={"lg"}>{val.desc}</Text>
                </div>
                <div className="flex gap-6 flex-wrap items-center">
                  <div className="font-bold">Build with :</div>
                  {val.tools.map((val, index) => {
                    return (
                      <Tooltip label={val.name}>
                        <div key={index}>{val.icon}</div>
                      </Tooltip>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {projectList.length > 3 && (
        <div className="text-center py-5 mt-20">
          <Link
            href={"/projects"}
            className="hover:underline"
            onClick={() => {
              setContextState("allPages");
            }}
          >
            View all
          </Link>
        </div>
      )}
    </div>
  );
};

export default Projects;
