import React from 'react';
import { Flex, Link, Text, } from '@chakra-ui/react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'


const Description = () => {
    return (
        <Flex direction="column" minW="320px" align="center">
            <Text fontSize="48px" fontWeight="bold"> Hi, I'm Ryan 👋</Text>
            <Flex p="10px" gap="15px"> <Link href="https://www.linkedin.com/in/ryangao01/" isExternal><FaLinkedin size="40px"/></Link> <Link href="https://github.com/toblrne" isExternal><FaGithub size="40px"/></Link> <Link href="mailto:ryantchgao@gmail.com" isExternal><FiMail size="40px"/></Link> </Flex>
            <Text fontSize="24px" w="500px" textAlign="center"> I'm a Computer Science student at the University of British Columbia. Interested in full-stack development and medical technology. </Text>
        </Flex>
    );
}

export default Description;
