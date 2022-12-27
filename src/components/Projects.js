import React from 'react';
import { Flex, Image, Text, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'


const Projects = ({ title, image, date, description, links, technologies }) => {
    console.log(technologies)
    return (
        <Flex direction="row" border="1px" borderColor="#AEAEAE" borderRadius="30px" w="800px" m="20px" p="25px" align="center">
            {image == null ? null : <Flex w="35%" justify="center" align="center"> 
                <Image w="auto" maxHeight="200px" borderRadius="30px" src={image} />
            </Flex>}
            <Flex direction="column" marginLeft="25px" w="65%">
                <Text fontSize="20px" fontWeight="semibold"> {title} <Link href={links} isExternal> <ExternalLinkIcon paddingBottom="5px" w={7} h={7}/> </Link> </Text>
                <Text fontSize="17.5px" fontWeight="medium"> {date} </Text>
                <Text fontSize="16px" lineHeight="23px" paddingTop="15px"> {description} </Text>
                <Flex justify="row" paddingTop="10px" flexWrap="wrap"> {technologies.map((elem) => (<Flex border="2px" borderColor="#AEAEAE" borderRadius="12px" p="5px" marginRight="10px" marginTop="5px" marginBottom="5px"> {elem} </Flex>))} </Flex>

            </Flex>
        </Flex>
    );
}

export default Projects;