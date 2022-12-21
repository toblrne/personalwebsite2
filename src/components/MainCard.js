import React from 'react';
import { Box, Flex, VStack } from '@chakra-ui/react'

import Description from './Description'




const MainCard = () => {

    // https://imagecolorpicker.com/color-code/1a202c

    return (
        <VStack spacing="12px">
            <Box border="1px" w="100vw">
                <Description />
            </Box>


            <Flex border="2px">
                Work Experience


            </Flex>

            <Flex border="2px">
                Volunteering


            </Flex>


            <Flex border="2px">
                Projects


            </Flex>

        </VStack>
    );
}

export default MainCard

