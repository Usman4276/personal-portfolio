import React, { useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Context } from "@/app/provider";

const ModalComp = ({ ...rest }) => {
  const { setState } = useContext(Context);

  const links = ["services", "projects", "about", "contact"];

  return (
    <>
      <Modal isCentered isOpen={rest.isOpen} onClose={rest.onClose}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            {/* Iterating links */}
            {links.map((link, index) => {
              return (
                <div
                  key={index}
                  className="font-inherit animate-jump capitalize text-center m-4 cursor-pointer text-xl hover:bg-[#f5df4e] rounded-full transition ease-in delay-50"
                  onClick={() => {
                    setState(link);
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
