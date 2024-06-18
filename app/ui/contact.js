import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "@/app/provider";
import { FaArrowRight } from "react-icons/fa";
import {
  FormControl,
  FormLabel,
  Input,
  Heading,
  Button,
  Textarea,
} from "@chakra-ui/react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { inputValidator } from "../utils/validators";
import useToastNotification from "../components/Toast";

const Contact = () => {
  const showToast = useToastNotification();
  const { contextState, setContextState } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({
    status: false,
    message: "",
  });
  const [isSuccess, setIsSuccess] = useState({
    status: false,
    message: "",
  });
  const [Inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const contactRef = useRef(null);

  // Functions
  const onChangeHandler = (event) => {
    setInputs({
      ...Inputs,
      [event.target.name]: event.target.value,
    });
  };

  const onClickHandler = async () => {
    // Input validation
    const result = inputValidator(Inputs);
    if (result) return setIsError({ status: true, message: result });

    setIsLoading(true);
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL, {
      method: "POST",
      body: JSON.stringify(Inputs),
    });

    // Resetting states
    setInputs({
      name: "",
      email: "",
      message: "",
    });
    setIsLoading(false);

    if (!res.ok) {
      return setIsError({
        status: true,
        message: res.status + " " + "Email Sent Failed",
      });
    }

    // Trigger success notification
    setIsSuccess({ status: true, message: "Email Sent Successfully" });
  };

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

  // Success toast
  useEffect(() => {
    if (isSuccess?.status) {
      showToast(isSuccess.message, "success");

      // Resetting state
      setTimeout(() => {
        setIsSuccess({ status: false, message: "" });
      }, 100);
    }
  }, [isSuccess?.status]);

  // Error toast
  useEffect(() => {
    if (isError?.status) {
      showToast(isError.message, "error");

      // Resetting state
      setTimeout(() => {
        setIsError({ status: false, message: "" });
      }, 100);
    }
  }, [isError?.status]);

  return (
    <div ref={contactRef} className="mt-32">
      {/* Heading */}
      <div className="text-center">
        <Heading
          as={"h4"}
          size={"lg"}
          className="border-b-4 border-[#f5df4e] inline-block !font-medium"
        >
          Let's get in touch
        </Heading>
      </div>

      <div className="border bg-[#f5df4e] flex justify-center items-center mt-14">
        <div className="w-1/2 max-[768px]:w-full p-10">
          <FormControl>
            <FormLabel>What is Your Name:</FormLabel>
            <Input
              type="text"
              name="name"
              value={Inputs.name}
              variant={"flushed"}
              onChange={onChangeHandler}
            />
            <FormLabel className="mt-6">Your Email Address:</FormLabel>
            <Input
              type="email"
              name="email"
              value={Inputs.email}
              variant={"flushed"}
              onChange={onChangeHandler}
            />
            <FormLabel className="mt-6">How Can I Help You:</FormLabel>
            <Textarea
              name="message"
              value={Inputs.message}
              onChange={onChangeHandler}
            />
            <Button
              type="submit"
              textColor={"white"}
              bg={"black"}
              _hover={{ bg: "rgb(0, 0, 0, 0.80)" }}
              _active={{ border: 0 }}
              className="mt-6"
              rightIcon={!isLoading && <FaArrowRight />}
              size={"lg"}
              isLoading={isLoading ? true : false}
              spinner={<ScaleLoader color="#ffffff" height={20} width={3} />}
              onClick={onClickHandler}
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
