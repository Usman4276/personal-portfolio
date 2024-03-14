import React, { useContext, useEffect, useRef } from "react";
import { Context } from "@/app/provider";
import { FaArrowRight } from "react-icons/fa";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Heading,
  Button,
} from "@chakra-ui/react";

const Contact = () => {
  const { contextState, setContextState } = useContext(Context);
  const contactRef = useRef(null);

  useEffect(() => {
    if (contextState === "contact") {
      setTimeout(() => {
        contactRef.current.scrollIntoView({
          behavior: "smooth",
        });
        setContextState("");
      }, 100);
    }
  }, [contextState]);

  return (
    <div ref={contactRef} className="mt-32">
      {/* Heading */}
      <div className="text-center">
        <Heading
          as={"h4"}
          size={"lg"}
          className="border-b-4 border-[#f5df4e] inline-block"
        >
          Let's get in touch
        </Heading>
      </div>

      <div className="border bg-[#f5df4e] flex justify-center items-center mt-14">
        <div className="w-1/2 max-[768px]:w-full p-10">
          <FormControl>
            <FormLabel>What is Your Name:</FormLabel>
            <Input type="text" variant={"flushed"} />
            <FormLabel className="mt-6">Your Email Address:</FormLabel>
            <Input type="email" variant={"flushed"} />
            <FormLabel className="mt-6">How Can I Help You:</FormLabel>
            <Input type="text" variant={"flushed"} />
            <Button
              type="submit"
              textColor={"white"}
              bg={"black"}
              _hover={{ bg: "rgb(0, 0, 0, 0.80)" }}
              _active={{ border: 0 }}
              className="mt-6"
              rightIcon={<FaArrowRight />}
              size={"lg"}
            >
              Send
            </Button>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default Contact;
