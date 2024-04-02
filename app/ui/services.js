import React, { useContext, useEffect, useRef } from "react";
import { Card, CardHeader, CardBody, Text, Heading } from "@chakra-ui/react";
import Image from "next/image";
import { Context } from "@/app/provider";
import { cards } from "../utils/constants";

const Services = () => {
  const { contextState, setContextState } = useContext(Context);
  const servicesRef = useRef(null);

  useEffect(() => {
    if (contextState === "services") {
      setTimeout(() => {
        servicesRef.current.scrollIntoView({
          behavior: "smooth",
        });
        setContextState("");
      }, 100);
    }
  }, [contextState]);

  return (
    <div ref={servicesRef} className="mt-28 animate-fade">
      {/* Heading */}
      <div className="text-center">
        <Heading
          as={"h4"}
          size={"lg"}
          className="border-b-4 border-[#f5df4e] inline-block"
        >
          Services
        </Heading>
      </div>

      {/* Cards */}
      <div
        className="flex justify-center px-5"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        data-aos-duration="600"
        data-aos-offset="300"
      >
        <div className="text-center flex flex-wrap justify-center gap-6 mt-20 max-w-[1320px]">
          {cards.map((val) => {
            return (
              <Card key={val.id} maxW="sm" className="animate-fade">
                <CardBody className="flex flex-col items-center justify-center">
                  <Image src={val.img} width={200} height={200} alt="img" />
                  <CardHeader>
                    <Heading size="md">{val.title}</Heading>
                  </CardHeader>
                  <Text fontSize={"md"}>{val.body}</Text>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
