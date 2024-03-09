import React, { useContext, useEffect, useRef } from "react";
import { Context } from "@/app/provider";
import CountUp from "react-countup";
import { Heading } from "@chakra-ui/react";

const Projects = () => {
  const { state, setState } = useContext(Context);
  const projectsRef = useRef(null);

  useEffect(() => {
    if (state === "projects") {
      setTimeout(() => {
        projectsRef.current.scrollIntoView({
          behavior: "smooth",
        });
        setState("");
      }, 100);
    }
  }, [state]);
  return (
    <>
      <div ref={projectsRef} className="animate-fade">
        {/* Counter */}
        <div className="flex flex-wrap justify-center gap-28 items-center bg-[#f5df4e] py-16 mt-32">
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
      </div>
    </>
  );
};

export default Projects;
