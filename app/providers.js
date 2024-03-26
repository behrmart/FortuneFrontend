// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <ChakraProvider>
      <NextThemesProvider attribute="className" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </ChakraProvider>
  );
}
