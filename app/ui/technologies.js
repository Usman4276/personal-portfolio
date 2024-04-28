import React, { useContext, useEffect, useRef } from "react";
import { Context } from "@/app/provider";
import { Heading } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import Image from "next/image";

const Technologies = () => {
  const { contextState, setContextState } = useContext(Context);
  const aboutRef = useRef(null);
  const imageData = [
    "/html.png",
    "/css3.png",
    "/js.png",
    "/sass.png",
    "/react.png",
    "/node.png",
    "/nest.svg",
    "/express.png",
    "/redux.png",
    "/mongodb.png",
    "/typescript.png",
    "/reactnative.png",
    "/electron.png",
    "/vue.png",
    "/angular.png",
    "/firebase.png",
    "/psql.png",
    "/mysql.png",
    "/next.png",
    "/aws.png",
    "/apache.png",
    "/nginx.png",
  ];

  useEffect(() => {
    if (contextState === "technologies") {
      setTimeout(() => {
        aboutRef.current.scrollIntoView({
          behavior: "smooth",
        });
        setContextState("");
      }, 100);
    }
  }, [contextState]);

  return (
    <>
      <div ref={aboutRef} className="mt-32">
        {/* Heading */}
        <div className="text-center">
          <Heading
            as={"h4"}
            size={"lg"}
            className="border-b-4 border-[#f5df4e] inline-block !font-medium"
          >
            Technologies
          </Heading>
        </div>

        <div className="bg-[#f5df4e] bg-cover mt-20 py-20 flex justify-center">
          <div className="max-w-[1024px] flex justify-center gap-4 flex-wrap px-4">
            {imageData.map((val, index) => {
              return (
                <Image
                  key={index}
                  className="bg-white p-2 rounded-lg"
                  borderRadius="full"
                  width={80}
                  height={80}
                  src={val}
                  alt="react"
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
