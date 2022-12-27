import React from 'react';
import { Button, Box, Flex, Text, useColorMode } from '@chakra-ui/react'
import MainCard from './components/MainCard'


function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box overflow="hidden"  transitionProperty="background-color" transitionDuration="normal" >
      <Box w="100vw" minW="320px" overflow="hidden" borderBottom="1px" borderColor="#d1d1d1">
        <Flex justify="space-between" align="center" m="25px" overflow="hidden">
          <Text fontSize="22px">Ryan Gao</Text>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button>
        </Flex>
      </Box>

      <Box boxSizing="inherit" paddingTop="50px">
        <MainCard />
      </Box>

      <Flex justify="center"  p="8px" marginTop="25px" backgroundColor="#f3f3f3">
        © Ryan Gao 2023
      </Flex>
    </Box>
  );
}

export default App;
