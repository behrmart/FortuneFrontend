"use client";
import { useEffect, useState } from "react";
import { Code, Flex, Spinner } from "@chakra-ui/react";
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
        <Spinner size="lg" />
      </Flex>
    );
  }

  return (
    <Flex direction="column" align="start">
      {fortunes.map((fortune, index) => (
        <Code key={index} mb={2}>
          {fortune.fortune_message}
        </Code>
      ))}
    </Flex>
  );
};

export default Fortunes;
