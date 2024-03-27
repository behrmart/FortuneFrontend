"use client";
import { Box } from "@chakra-ui/react";
import Footer from "../footer/page";
import Fortune from "../getfortune/page";

export default function Wall() {
  return (
    <main>
      <Box w="100">
        <Fortune />
        <Footer />
      </Box>
    </main>
  );
}
