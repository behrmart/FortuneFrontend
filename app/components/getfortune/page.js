// pages/Fortune.js

import React, { useState, useEffect } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";

const Fortune = () => {
  const [fortune, setFortune] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://192.168.100.23:3001/fortune/random",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data);
      setFortune(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleNewFortune = () => {
    fetchData();
  };

  return (
    <Box p="6">
      <Card align="center" p="6">
        <CardHeader>
          <Heading size="md">{fortune && fortune.fortune_id}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{fortune && fortune.fortune_message}</Text>
        </CardBody>
        <CardFooter>
          <Button colorScheme="blue" onClick={handleNewFortune}>
            New Fortune
          </Button>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default Fortune;
