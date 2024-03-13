"use client";

// This file is only created for using chakra-ui, as mentioned in the chakra-ui documentation.
// This file is also created for separate code of concerns keeping in mind.
import { ChakraProvider } from "@chakra-ui/react";
import { createContext, useState } from "react";

export const Context = createContext();

export function Providers({ children }) {
  const [contextState, setContextState] = useState("");

  return (
    <ChakraProvider>
      <Context.Provider value={{ contextState, setContextState }}>
        {children}
      </Context.Provider>
    </ChakraProvider>
  );
}
