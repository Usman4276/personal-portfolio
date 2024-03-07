import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const ModalComp = ({ ...rest }) => {
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
                  className="capitalize text-center m-4 cursor-pointer text-xl hover:text-[#f5df4e] font-semibold animate-jump"
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
