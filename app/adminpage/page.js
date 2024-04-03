import { Box } from "@chakra-ui/react";
import Fortunes from "../components/fetchallfortunes/Fortunes";
import Navbar from "../components/navbar/page";
import Footer from "../components/footer/page";

const IndexPage = () => {
  return (
    <>
      <Navbar />

      <Box p="4">
        <Fortunes />
      </Box>
      <Footer />
    </>
  );
};

export default IndexPage;
