import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heading, Text, Button } from "@chakra-ui/react";
import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { projectList } from "../utils/constants";

const AllProjects = () => {
  return (
    <div className="flex flex-wrap justify-center pb-16">
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
                <Link href={val.github} target="_blank">
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
                </Link>
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
  );
};

export default AllProjects;
