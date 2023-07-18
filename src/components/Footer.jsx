import{ Box, Image, Text, Flex } from '@chakra-ui/react';
import logo from '../assets/openai.png'

const Footer = () => {
  return (
    <Box mt={50}>
        <Flex justifyContent='center' alignItems='cemter'>
            <Image src={ logo } marginRight={1}/>
            <Text>Powered by Open AI</Text>
        </Flex>
    </Box>
  )
}

export default Footer