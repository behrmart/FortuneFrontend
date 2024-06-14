"use client";
import React, { useState } from "react";
import axios from "axios";
import {
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  useToast,
} from "@chakra-ui/react";

const AddFortunes = () => {
  const [fortuneMessage, setFortuneMessage] = useState("");
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/fortune", {
        fortune_message: fortuneMessage,
      });
      if (response.status === 200) {
        setFortuneMessage("");
        toast({
          title: "Fortune created successfully!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "An error occurred.",
        description: "There was an error creating the fortune.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.error(error);
    }
  };

  return (
    <Flex direction="column" maxW="md" mx="auto" mt="8">
      <Heading mb="4">Create New Fortune</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="fortuneMessage" mb="4">
          <FormLabel>Fortune Message:</FormLabel>
          <Input
            type="text"
            value={fortuneMessage}
            onChange={(e) => setFortuneMessage(e.target.value)}
            placeholder="Enter your fortune message"
          />
        </FormControl>
        <Button type="submit" colorScheme="teal">
          Create Fortune
        </Button>
      </form>
    </Flex>
  );
};

export default AddFortunes;
