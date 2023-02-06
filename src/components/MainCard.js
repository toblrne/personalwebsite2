import React from 'react';
import { Box, Flex, VStack, Text } from '@chakra-ui/react'

import Description from './Description'
import Projects from './Projects'
import data from './data'




const MainCard = () => {

    


    return (
        <VStack spacing="12px">
            <Flex w="100vw" align="center" justify="center">
                <Description />
            </Flex>

            <Box w="100vw" paddingTop="100px" >
                <Text fontWeight="semibold" fontSize="28px" textAlign="center"> Projects </Text>
                <Flex justify="center" align="center" direction="column">

                    {data.map((elem) => (
                        <Projects key={elem.title} title={elem.title} image={elem.image} date={elem.date} description={elem.description} links={elem.links} technologies={elem.technologies} />
                    ))}
                </Flex>
            </Box>

        </VStack>
    );
}

export default MainCard

