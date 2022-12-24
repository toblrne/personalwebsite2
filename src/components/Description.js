import React from 'react';
import { Flex, Image, Text, Box } from '@chakra-ui/react'
// import profile from './assets/profile.png'


const Description = () => {
    return (
        <Flex direction="column" minW="320px" align="center">
            <Text fontSize="48px" fontWeight="bold"> Hi, I'm Ryan 👋</Text>
            <Text fontSize="24px" w="500px" textAlign="center"> I'm a Computer Science student at the University of British Columbia. Interested in full-stack development and medical technology. </Text>
        </Flex>
    );
}

export default Description;
