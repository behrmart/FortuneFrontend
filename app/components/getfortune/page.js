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
    <Card align="center">
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
  );
};

export default Fortune;
