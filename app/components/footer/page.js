import { Box, Center } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" mx="auto" maxW="7xl" p="5">
      <Center fontSize="sm">
        Fortune Frontend for Fortune Vaquita Server on Docker MongoDB
      </Center>
      <Center fontSize="md" color="green" p="3">
        By Bernardo F. Martinez Meave DEV.F Kata DevOps 2024
      </Center>
    </Box>
  );
}
