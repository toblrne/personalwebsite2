import React from 'react';
import { Button, Box, Flex, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import MainCard from './components/MainCard'



function App() {
  const { colorMode, toggleColorMode } = useColorMode()

  const border = useColorModeValue("#d1d1d1", "#3D3D3D")

  return (
    <Box overflow="hidden">
      <Box w="100vw" minW="320px" overflow="hidden" borderBottom="1px" borderColor={border}>
        <Flex justify="space-between" align="center" m="25px" overflow="hidden">
          <Text fontSize="22px" fontWeight="bold">Ryan Gao</Text>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button>
        </Flex>
      </Box>

      <Box boxSizing="inherit" paddingTop="50px">
        <MainCard />
      </Box>

      <Flex justify="center" p="8px" marginTop="25px" >
        © Ryan Gao 2023
      </Flex>
    </Box>
  );
}

export default App;
