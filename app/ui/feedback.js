"use client";

import React, { useContext, useEffect, useRef } from "react";
import { Context } from "@/app/provider";
import { Heading, Text, Avatar } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const Feedback = () => {
  const { contextState, setContextState } = useContext(Context);
  const feedbackRef = useRef(null);

  // Dummy data
  const carouselData = [
    {
      id: 1,
      avatar: "/c1.jpg",
      name: "Dan Abrahmov",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo modi corporis minima ipsam? Ex, fugit vero. Nulla in accusantium eum nemo voluptas ea ratione est esse! Amet libero repudiandae laboriosam!",
    },
    {
      id: 2,
      avatar: "/c1.jpg",
      name: "Dan Abrahmov",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo modi corporis minima ipsam? Ex, fugit vero. Nulla in accusantium eum nemo voluptas ea ratione est esse! Amet libero repudiandae laboriosam!",
    },
    {
      id: 3,
      avatar: "/c1.jpg",
      name: "Dan Abrahmov",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo modi corporis minima ipsam? Ex, fugit vero. Nulla in accusantium eum nemo voluptas ea ratione est esse! Amet libero repudiandae laboriosam!",
    },
    {
      id: 4,
      avatar: "/c1.jpg",
      name: "Dan Abrahmov",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo modi corporis minima ipsam? Ex, fugit vero. Nulla in accusantium eum nemo voluptas ea ratione est esse! Amet libero repudiandae laboriosam!",
    },
  ];
  useEffect(() => {
    if (contextState === "feedback") {
      setTimeout(() => {
        feedbackRef.current.scrollIntoView({
          behavior: "smooth",
        });
        setContextState("");
      }, 100);
    }
  }, [contextState]);
  return (
    <>
      <div ref={feedbackRef} className="mt-32">
        {/* Heading */}
        <div className="text-center">
          <Heading
            as={"h4"}
            size={"lg"}
            className="border-b-4 border-[#f5df4e] inline-block"
          >
            What Client Say
          </Heading>
        </div>

        {/* Carousel */}
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          data-aos-duration="600"
        >
          <Carousel
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showIndicators={false}
            showArrows={false}
            className="animate-fade"
          >
            {carouselData.map((val) => {
              return (
                <div
                  key={val.id}
                  className="flex flex-col justify-center items-center py-10 mt-14 gap-2"
                >
                  <Avatar name="Dan Abrahmov" src={val.avatar} size={"xl"} />
                  <Heading as={"h4"} size={"md"} className="mt-4">
                    {val.name}
                  </Heading>
                  <Text
                    fontSize={"md"}
                    className="w-full sm:w-1/2 text-justify px-4 sm:px-0"
                  >
                    {val.comment}
                  </Text>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Feedback;
