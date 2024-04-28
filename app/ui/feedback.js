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
      avatar: "/sophia.png",
      name: "Sophia Simon",
      comment:
        "Hello, my name is Sophia. I am working with Usman Mustafa for a couple of months and I am very happy with the results. He have worked beyond my expectations.",
    },
    {
      id: 2,
      avatar: "/alan.png",
      name: "Alan",
      comment:
        "Great work done by this young guy. I will definitely re-consider him in future work. I got great response from my customers.",
    },
    {
      id: 3,
      avatar: "/david.png",
      name: "David",
      comment:
        "On time work delivered by Usman Mustafa, amazing work done by him as expected. I highly recommend him for future work",
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
            className="border-b-4 border-[#f5df4e] inline-block !font-medium"
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
            stopOnHover={false}
            className="animate-fade"
          >
            {carouselData.map((val) => {
              return (
                <div
                  key={val.id}
                  className="flex flex-col justify-center items-center py-10 mt-14 gap-2"
                >
                  <Avatar name="Dan Abrahmov" src={val.avatar} size={"xl"} />
                  <Heading as={"h4"} size={"md"} className="mt-2">
                    {val.name}
                  </Heading>
                  <div className="flex justify-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        shapeRendering="geometricPrecision"
                        textRendering="geometricPrecision"
                        imageRendering="optimizeQuality"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        viewBox="0 0 512 379.51"
                        width={40}
                        style={{ margin: "0 1rem" }}
                      >
                        <path d="M212.27 33.98C131.02 56.52 78.14 103.65 64.99 185.67c-3.58 22.32 1.42 5.46 16.55-5.86 49.4-36.96 146.53-23.88 160.01 60.56 27.12 149.48-159.79 175.36-215.11 92.8-12.87-19.19-21.39-41.59-24.46-66.19C-11.35 159.99 43.48 64.7 139.8 19.94c17.82-8.28 36.6-14.76 56.81-19.51 10.12-2.05 17.47 3.46 20.86 12.77 2.87 7.95 3.85 16.72-5.2 20.78zm267.78 0c-81.25 22.54-134.14 69.67-147.28 151.69-3.58 22.32 1.42 5.46 16.55-5.86 49.4-36.96 146.53-23.88 160 60.56 27.13 149.48-159.78 175.36-215.1 92.8-12.87-19.19-21.39-41.59-24.46-66.19C256.43 159.99 311.25 64.7 407.58 19.94 425.4 11.66 444.17 5.18 464.39.43c10.12-2.05 17.47 3.46 20.86 12.77 2.87 7.95 3.85 16.72-5.2 20.78z" />
                      </svg>
                    </div>
                    <Text
                      fontSize={"md"}
                      className="w-full sm:w-1/2 text-justify px-4 sm:px-0 mt-4"
                    >
                      {val.comment}
                    </Text>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        shape-rendering="geometricPrecision"
                        text-rendering="geometricPrecision"
                        image-rendering="optimizeQuality"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        viewBox="0 0 512 379.51"
                        width={40}
                        style={{ margin: "0 1rem" }}
                      >
                        <path d="M299.73 345.54c81.25-22.55 134.13-69.68 147.28-151.7 3.58-22.31-1.42-5.46-16.55 5.86-49.4 36.97-146.53 23.88-160.01-60.55C243.33-10.34 430.24-36.22 485.56 46.34c12.87 19.19 21.39 41.59 24.46 66.19 13.33 106.99-41.5 202.28-137.82 247.04-17.82 8.28-36.6 14.76-56.81 19.52-10.12 2.04-17.47-3.46-20.86-12.78-2.87-7.95-3.85-16.72 5.2-20.77zm-267.78 0c81.25-22.55 134.14-69.68 147.28-151.7 3.58-22.31-1.42-5.46-16.55 5.86-49.4 36.97-146.53 23.88-160-60.55-27.14-149.49 159.78-175.37 215.1-92.81 12.87 19.19 21.39 41.59 24.46 66.19 13.33 106.99-41.5 202.28-137.82 247.04-17.82 8.28-36.59 14.76-56.81 19.52-10.12 2.04-17.47-3.46-20.86-12.78-2.87-7.95-3.85-16.72 5.2-20.77z" />
                      </svg>
                    </div>
                  </div>
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
