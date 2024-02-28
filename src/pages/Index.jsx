// src/pages/Index.jsx
import React from "react";
import { ChakraProvider, Box, Text, Button, VStack, Image, extendTheme } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "gray.100",
        color: "gray.800",
      },
    },
  },
});

const Index = () => {
  return (
    <ChakraProvider theme={theme}>
      <VStack spacing={8} p={8}>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
          <Text fontSize="xl" mb={4}>
            Welcome to the React and Chakra UI Site!
          </Text>
          <Text mb={4}>This is a simple website built with React and styled using Chakra UI components.</Text>
          <Button rightIcon={<FaArrowRight />} colorScheme="blue">
            Get Started
          </Button>
        </Box>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcwOTEwMjcyMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Employee Portrait" />
      </VStack>
    </ChakraProvider>
  );
};

export default Index;
