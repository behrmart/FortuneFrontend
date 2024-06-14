import { Box, Button, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import Fortunes from "../components/fetchallfortunes/Fortunes";
import Navbar from "../components/navbar/page";
import Footer from "../components/footer/page";

const IndexPage = () => {
  return (
    <>
      <Navbar />

      <Fortunes />

      <Footer />
    </>
  );
};

export default IndexPage;
