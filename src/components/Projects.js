import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react'
import figma from './images/figma.png'


const Projects = () => {
    return ( 
        <Flex direction="row">
            <Image w="150px" h="auto" src={figma}/>
            <Flex direction="column">
                <Text> Title </Text>
                <Text> Date </Text>
                <Text> Description </Text>
                <Text> Tech Stack </Text>
                <Text> Links </Text>


            </Flex>
        </Flex>
     );
}
 
export default Projects;