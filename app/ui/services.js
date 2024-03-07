import React from "react";
import { Card, CardHeader, CardBody, Text, Heading } from "@chakra-ui/react";
import Image from "next/image";

const Services = () => {
  const cards = [
    {
      title: "Website Development",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est eaque esse, autem deserunt repudiandae iste quia sit reiciendis ullam facilis modi sequi rerum voluptas placeat aliquam amet velit unde corporis?",
      img: "/web.jpg",
    },
    {
      title: "Mobile App Development",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est eaque esse, autem deserunt repudiandae iste quia sit reiciendis ullam facilis modi sequi rerum voluptas placeat aliquam amet velit unde corporis?",
      img: "/mobile.jpeg",
    },
    {
      title: "UI/UX Designing",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est eaque esse, autem deserunt repudiandae iste quia sit reiciendis ullam facilis modi sequi rerum voluptas placeat aliquam amet velit unde corporis?",
      img: "/uiux.jpeg",
    },
  ];

  return (
    <div className="px-16 mt-28 mb-10">
      {/* Heading */}
      <div className="text-center">
        <Heading
          as={"h4"}
          size={"lg"}
          className="border-b-4 border-[#f5df4e] inline-block"
        >
          Our Services
        </Heading>
      </div>

      {/* Cards */}
      <div className="text-center flex flex-wrap justify-center gap-4 mt-20">
        {cards.map((val, index) => {
          return (
            <>
              <Card maxW="sm" className="animate-fade" key={index}>
                <CardBody className="flex flex-col items-center justify-center">
                  <Image src={val.img} width={200} height={200} alt="web_img" />
                  <CardHeader>
                    <Heading size="md">{val.title}</Heading>
                  </CardHeader>
                  <Text fontSize={"md"}>{val.body}</Text>
                </CardBody>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
