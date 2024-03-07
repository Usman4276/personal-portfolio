"use client";

// This file is only created for using chakra-ui, as mentioned in the chakra-ui documentation.
// This file is also created for separate code of concerns keeping in mind.
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
