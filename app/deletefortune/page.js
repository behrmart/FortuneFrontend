import React from 'react';
import axios from 'axios';
import { Flex, Heading, Button, useToast } from '@chakra-ui/react';

const DeleteFortune = ({ fortuneId }) => {
  const toast = useToast();

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3001/fortune/${fortuneId}`);

      if (response.status === 200) {
        toast({
          title: 'Fortune deleted successfully!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'An error occurred.',
        description: 'There was an error deleting the fortune.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      console.error(error);
    }
  };

  return (
    <Flex align="center">
      <Button colorScheme="red" onClick={handleDelete}>Delete</Button>
    </Flex>
  );
};

export default DeleteFortune;

