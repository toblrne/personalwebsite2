import React from 'react';
import { Box, Flex, VStack, Text } from '@chakra-ui/react'

import Description from './Description'
import Projects from './Projects'




const MainCard = () => {

    // https://imagecolorpicker.com/color-code/1a202c

    return (
        <VStack spacing="12px">
            <Box border="1px" w="100vw">
                <Description />
            </Box>

            <Box border="1px" w="100vw">
                <Text fontWeight="semibold" fontSize="28px" textAlign="center"> My Projects </Text>
                <Flex border="2px">
                    <Projects />
                </Flex>
            </Box>

        </VStack>
    );
}

export default MainCard

