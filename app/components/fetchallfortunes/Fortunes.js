"use client";
import { useEffect, useState } from "react";
import { Code, Flex, Spinner, Stack, Heading } from "@chakra-ui/react";
import fetchFortunes from "../../../utils/fetchFortunes";

const Fortunes = () => {
  const [fortunes, setFortunes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFortunes = async () => {
      try {
        const data = await fetchFortunes();
        setFortunes(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching fortunes:", error);
        setLoading(false);
      }
    };

    getFortunes();
  }, []);

  if (loading) {
    return (
      <Flex justify="center" align="center" h="200px">
        <Spinner size="lg" color="purple.500" />
      </Flex>
    );
  }

  return (
    <Flex direction="column" align="start">
      <Heading as="h3" size="md" p="2">
        All Fortunes in MongoDB Server
      </Heading>
      {fortunes.map((fortune, index) => (
        <>
          <Stack direction="row">
            <Code key={index} mb={2} colorScheme="purple">
              {fortune.fortune_id}
            </Code>
            <Code colorScheme="green">{fortune.fortune_message}</Code>
          </Stack>
        </>
      ))}
    </Flex>
  );
};

export default Fortunes;
