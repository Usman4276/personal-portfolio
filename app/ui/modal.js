import React, { useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Context } from "@/app/provider";
import Link from "next/link";

const ModalComp = ({ ...rest }) => {
  const { contextState, setContextState } = useContext(Context);

  let links = ["services", "projects", "about", "feedback", "contact"];
  if (contextState === "allPages") links = ["/"];

  return (
    <>
      <Modal isCentered isOpen={rest.isOpen} onClose={rest.onClose}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            {/* Iterating links */}

            {links.map((link, index) => {
              return contextState === "allPages" ? (
                <div
                  key={index}
                  className="font-inherit animate-jump capitalize text-center m-4 cursor-pointer text-xl hover:bg-[#f5df4e] rounded-full transition ease-in delay-50"
                  onClick={() => {
                    setContextState("");
                    rest.onClose();
                  }}
                >
                  <Link href={link}>Home</Link>
                </div>
              ) : (
                <div
                  key={index}
                  className="font-inherit animate-jump capitalize text-center m-4 cursor-pointer text-xl hover:bg-[#f5df4e] rounded-full transition ease-in delay-50"
                  onClick={() => {
                    setContextState(link);
                    rest.onClose();
                  }}
                >
                  {link}
                </div>
              );
            })}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComp;
