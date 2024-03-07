"use client";

import React from "react";
import ModalComp from "@/app/ui/modal";
import { useDisclosure, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="flex justify-between items-center py-4 px-16 absolute z-10 w-full top-0">
      {/* Logo */}
      <div className="font-bold text-2xl animate-fade">LOGO</div>

      {/* Icon button to trigger modal*/}
      <IconButton
        className="animate-fade"
        aria-label="NavLinks"
        icon={<HamburgerIcon boxSize={7} />}
        size={"sm"}
        variant={"primary"}
        onClick={onOpen}
        _active={{ border: 0 }}
      />

      {/* Modal component */}
      <ModalComp isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default Navbar;
