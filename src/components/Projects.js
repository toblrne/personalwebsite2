import React from 'react';
import { Flex, Image, Text, Link, useColorModeValue } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'


const Projects = ({ title, image, date, description, links, technologies }) => {

    const colour = useColorModeValue("white", "#2d3748")
    const border = useColorModeValue("#d1d1d1", "gray.800")

    const textColor = useColorModeValue('black', "white")

    const borderTech = useColorModeValue("#aeaeae", "#1f2834")
    
    const tech = useColorModeValue("white", "#1f2834")
    return (
        <Flex direction={["column", "column", "row", "row"]} border="1px" borderColor={border} borderRadius="30px" bg={colour} w={["350px", "350px", "800px", "800px"]} m="25px" p="25px" align="center">
            {image == null ? null : <Flex w={["300px", "300px", "300px", "300px"]} justify="center" align="center" paddingBottom={["25px", "25px", "0px", "0px"]}> 
                <Image w="auto" maxHeight="200px" borderRadius="30px" src={image} />
            </Flex>}
            <Flex direction="column" marginLeft={["0px", "0px", "25px", "25px"]} w="100%">
                <Text fontSize="21px" fontWeight="bold"> {title} <Link href={links} isExternal> <ExternalLinkIcon paddingBottom="5px" w={7} h={7}/> </Link> </Text>
                <Text fontSize="17.5px" fontWeight="medium"> {date} </Text>
                <Text fontSize="16px" lineHeight="23px" paddingTop="15px" fontWeight="medium"> {description} </Text>
                <Flex justify="row" paddingTop="10px" flexWrap="wrap"> {technologies.map((elem) => (<Flex fontWeight="medium" border="2px" color={textColor} borderColor={borderTech} bg={tech} borderRadius="12px" p="5px" marginRight="10px" marginTop="5px" marginBottom="5px"> {elem} </Flex>))} </Flex>

            </Flex>
        </Flex>
    );
}

export default Projects;