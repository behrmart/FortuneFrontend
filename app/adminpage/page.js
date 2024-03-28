import { Box } from "@chakra-ui/react";
import Fortunes from "../components/fetchallfortunes/Fortunes";
import Navbar from "../components/navbar/page";

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Box p="4">
        <Fortunes />
      </Box>
    </>
  );
};

export default IndexPage;
