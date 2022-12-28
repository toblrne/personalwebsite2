import React from 'react';
import { Flex, Image, Text, Link, useColorModeValue } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'


const Projects = ({ title, image, date, description, links, technologies }) => {

    const colour = useColorModeValue("white", "#2d3748")
    const border = useColorModeValue("#d1d1d1", "gray.800")
    return (
        <Flex direction={["column", "column", "row", "row"]} border="1px" borderColor={border} borderRadius="30px" bg={colour} w={["350px", "350px", "800px", "800px"]} m="25px" p="25px" align="center">
            {image == null ? null : <Flex w={["300px", "300px", "300px", "300px"]} justify="center" align="center" paddingBottom={["25px", "25px", "0px", "0px"]}> 
                <Image w="auto" maxHeight="200px" borderRadius="30px" src={image} />
            </Flex>}
            <Flex direction="column" marginLeft={["0px", "0px", "25px", "25px"]} w="100%">
                <Text fontSize="20px" fontWeight="semibold"> {title} <Link href={links} isExternal> <ExternalLinkIcon paddingBottom="5px" w={7} h={7}/> </Link> </Text>
                <Text fontSize="17.5px" fontWeight="medium"> {date} </Text>
                <Text fontSize="16px" lineHeight="23px" paddingTop="15px"> {description} </Text>
                <Flex justify="row" paddingTop="10px" flexWrap="wrap"> {technologies.map((elem) => (<Flex border="2px" borderColor="#AEAEAE" borderRadius="12px" p="5px" marginRight="10px" marginTop="5px" marginBottom="5px"> {elem} </Flex>))} </Flex>

            </Flex>
        </Flex>
    );
}

export default Projects;