"use client";

// This file contains all the providers
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createContext, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";

export const Context = createContext();

export function Providers({ children }) {
  const [contextState, setContextState] = useState("");

  const theme = extendTheme({
    fonts: {
      heading: "Poppins",
      body: "Poppins",
    },
  });

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Context.Provider value={{ contextState, setContextState }}>
        {children}
      </Context.Provider>
    </ChakraProvider>
  );
}
