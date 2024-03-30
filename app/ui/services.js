import React, { useContext, useEffect, useRef } from "react";
import { Card, CardHeader, CardBody, Text, Heading } from "@chakra-ui/react";
import Image from "next/image";
import { Context } from "@/app/provider";

const Services = () => {
  const { contextState, setContextState } = useContext(Context);
  const servicesRef = useRef(null);

  const cards = [
    {
      id: 1,
      title: "Website Development",
      body: "We will provide you exceptional web development services, which will help you to transform your business to fit in with the cross-platform reality.",
      img: "/web.jpg",
    },
    {
      id: 2,
      title: "Mobile App Development",
      body: "Mobile app are the need of every business in this era. We offer winning app strategies, stunning app designs, powerful agile app development, and stand-out launch marketing.",
      img: "/mobile.jpeg",
    },
    {
      id: 3,
      title: "UI/UX Designing",
      body: "We design world-class digital experiences that meet your branding requirements and help your business to remain one step ahead in the digital world.",
      img: "/uiux.jpeg",
    },
    {
      id: 4,
      title: "Server Management",
      body: "We streamline server management, offering peak performance, security. We will handle maintenance and monitoring, so you can focus on your business.",
      img: "/server.jpg",
    },
    {
      id: 5,
      title: "Amazon Web Services",
      body: "Experience cloud excellence with our AWS mastery—seamless performance, scalability, and robust security. Elevate your success in the digital era with us",
      img: "/cloud.jpg",
    },
    {
      id: 6,
      title: "Desktop App Development",
      body: "Empower your business with our expert desktop app development team. We blend innovation and functionality, delivering tailored solutions with cutting-edge technologies.",
      img: "/desktop.jpeg",
    },
  ];

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
      <div className="flex justify-center px-5">
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
