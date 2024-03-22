import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { Flex, Spacer, Box, Button, Center } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex
      w="100%"
      p={4}
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      color="white"
      borderRadius="md"
    >
      <Center fontSize="lg">HobbitTalk</Center>
      <Spacer />
      <Button colorScheme="purple" variant="solid" size="sm">
        <Link as={NextLink} href="/dashboard">
          Dashboard
        </Link>
      </Button>
    </Flex>
  );
}
