import React, { useContext, useEffect, useRef } from "react";
import { Context } from "@/app/provider";
import CountUp from "react-countup";
import { Heading, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { TbWorldWww } from "react-icons/tb";
import { FaGithub, FaReact, FaNode } from "react-icons/fa";
import { SiExpress, SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const Projects = () => {
  const { contextState, setContextState } = useContext(Context);
  const projectsRef = useRef(null);

  // Dummy data
  const projectList = [
    {
      id: 1,
      title: "Project 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eos modi ullam illo id rem beatae accusamus, reprehenderit alias quo similique, culpa libero eligendi? Laborum hic tempora libero veniam possimus.",
      img: "/p1.jpg",
      tools: [
        <FaReact size={30} />,
        <FaNode size={30} />,
        <SiExpress size={30} />,
        <DiMongodb size={30} />,
        <SiTypescript size={30} />,
      ],
    },
    {
      id: 2,
      title: "Project 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eos modi ullam illo id rem beatae accusamus, reprehenderit alias quo similique, culpa libero eligendi? Laborum hic tempora libero veniam possimus.",
      img: "/p2.jpg",
      tools: [
        <FaReact size={30} />,
        <FaNode size={30} />,
        <SiExpress size={30} />,
        <DiMongodb size={30} />,
        <SiTypescript size={30} />,
      ],
    },
    {
      id: 3,
      title: "Project 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eos modi ullam illo id rem beatae accusamus, reprehenderit alias quo similique, culpa libero eligendi? Laborum hic tempora libero veniam possimus.",
      img: "/p3.jpg",
      tools: [
        <FaReact size={30} />,
        <FaNode size={30} />,
        <SiExpress size={30} />,
        <DiMongodb size={30} />,
        <SiTypescript size={30} />,
      ],
    },
    {
      id: 4,
      title: "Project 4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eos modi ullam illo id rem beatae accusamus, reprehenderit alias quo similique, culpa libero eligendi? Laborum hic tempora libero veniam possimus.",
      img: "/p4.jpg",
      tools: [
        <FaReact size={30} />,
        <FaNode size={30} />,
        <SiExpress size={30} />,
        <DiMongodb size={30} />,
        <SiTypescript size={30} />,
      ],
    },
  ];

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
    <>
      <div ref={projectsRef} className="animate-fade">
        {/* Counter */}
        <div className="flex flex-wrap justify-center gap-28 max-[865px]:gap-2 items-center bg-[#f5df4e] py-16 mt-32">
          <div className="p-6">
            <div className="text-center text-7xl font-bold">
              <CountUp
                start={0}
                end={50}
                className="bg-[#f5df4e] rounded-full p-3"
              />
              +
            </div>
            <Heading as="h6" size="md" className="mt-7">
              Projects Completed
            </Heading>
          </div>
          <div className="p-6">
            <div className="text-center text-7xl font-bold">
              <CountUp
                start={0}
                end={20}
                className="bg-[#f5df4e] rounded-full p-3"
              />
              +
            </div>
            <Heading as="h6" size="md" className="mt-7">
              Clients Globally
            </Heading>
          </div>
          <div className="p-6">
            <div className="text-center text-7xl font-bold">
              <CountUp
                start={0}
                end={5}
                className="bg-[#f5df4e] rounded-full p-3"
              />
              +
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
                    <Button colorScheme="green" leftIcon={<TbWorldWww />}>
                      Visit Site
                    </Button>
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
                  </div>
                </div>
                <div className="text-justify w-[68%] max-[1317px]:w-full pl-20 max-[1317px]:pl-0 max-[1317px]:pl-0 py-2 max-[848px]:mt-10">
                  <Heading as="h5" size="lg">
                    {val.title}
                  </Heading>
                  <div className="py-6">
                    <Text fontSize={"lg"}>{val.desc}</Text>
                  </div>
                  <div className="flex gap-6 flex-wrap">
                    {val.tools.map((val, index) => {
                      return <div key={index}>{val}</div>;
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
              className="hover:underline hover:text-blue-500"
              onClick={() => {
                setContextState("allPages");
              }}
            >
              View all
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;
