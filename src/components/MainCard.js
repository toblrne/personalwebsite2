import React from 'react';
import { Box, Flex, VStack, Text } from '@chakra-ui/react'

import Description from './Description'
import Projects from './Projects'
import data from './data'




const MainCard = () => {

    // https://imagecolorpicker.com/color-code/1a202c

    return (
        <VStack spacing="12px">
            <Box w="100vw">
                <Description />
            </Box>

            <Box w="100vw" paddingTop="30px">
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

