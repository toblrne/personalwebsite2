import React from 'react';
import { Button, Box, Flex, useColorMode } from '@chakra-ui/react'
import MainCard from './components/MainCard'


function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box overflow="hidden">
      <Box w="100vw" minW="320px" overflow="hidden" >
        <Flex justify="space-between" align="center" m="25px" overflow="hidden">
          <Box>Ryan Gao</Box>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button>
        </Flex>
      </Box>

      <Box boxSizing="inherit">
        <MainCard />
      </Box>
    </Box>
  );
}

export default App;
