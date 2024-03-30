"use client";

import React from "react";
import ModalComp from "@/app/ui/modal";
import { useDisclosure, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="flex justify-center sticky z-10 top-0 bg-[#f5df4e] w-full py-4">
      <div className="flex justify-between items-center px-5 w-full max-w-[1320px]">
        {/* Logo */}
        <Link href={"/"} className="font-bold text-3xl animate-fade">
          LOGO
        </Link>

        {/* Icon button to trigger modal*/}
        <IconButton
          className="animate-fade"
          aria-label="NavLinks"
          icon={<HamburgerIcon boxSize={7} />}
          size={"lg"}
          variant={"primary"}
          onClick={onOpen}
          _active={{ border: 0 }}
        />

        {/* Modal component */}
        <ModalComp isOpen={isOpen} onClose={onClose} />
      </div>
    </div>
  );
};

export default Navbar;
