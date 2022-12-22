import React from 'react';
import { Button, Box, Flex, useColorMode } from '@chakra-ui/react'
import MainCard from './components/MainCard'


function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Box w="100vw" minW="320px">
        <Flex justify="space-between" align="center">
          <Box>Ryan Gao</Box>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button>
        </Flex>
      </Box>

      <Box border="1px" boxSizing="inherit">
        <MainCard />
      </Box>
    </>
  );
}

export default App;
