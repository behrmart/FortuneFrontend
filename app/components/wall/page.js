"use client";
import { Grid, GridItem } from "@chakra-ui/react";
import LeftNav from "../leftnav/page";
import Main from "../main/page";
import Footer from "../footer/page";
import Fortune from "../getfortune/page";

export default function Wall() {
  return (
    <main>
      <Grid
        templateAreas={`
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={"100% 1fr"}
        gridTemplateColumns={"20% 1fr"}
        h="100%"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="pink.100" area={"nav"}>
          <LeftNav />
        </GridItem>
        <GridItem pl="2" bg="green.100" area={"main"}>
          <Fortune />
        </GridItem>
        <GridItem pl="2" bg="blue.100" area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </main>
  );
}
