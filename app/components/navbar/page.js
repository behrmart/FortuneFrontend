import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { Flex, Spacer, Box, Button, Center } from "@chakra-ui/react";
import { ThemeSwitcher } from "../ThemeSwitcher";

export default function Navbar() {
  return (
    <Flex
      w="100%"
      p={4}
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      color="white"
      borderRadius="md"
    >
      <Center fontSize="lg">Fortune Frontend</Center>
      <Spacer />
      <ThemeSwitcher />
      <Button colorScheme="purple" variant="solid" size="sm">
        <Link as={NextLink} href="/dashboard">
          Fortune Admin
        </Link>
      </Button>
    </Flex>
  );
}
