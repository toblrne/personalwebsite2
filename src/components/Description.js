import React from 'react';
import { Flex, Image, Text, Box } from '@chakra-ui/react'
// import profile from './assets/profile.png'


const Description = () => {
    return (
        <Box minW="320px">
            <Flex align="center" gap="20px">
                <Text fontSize="24px" fontWeight="bold" border="1px"> Hi, I'm Ryan</Text>
                <Flex> Resume</Flex>
            </Flex>
            <Flex>
                Links
            </Flex>
            <Flex>
                computer science @ ubc
            </Flex>
            <Flex>
                About
            </Flex>
        </Box>
    );
}

export default Description;
