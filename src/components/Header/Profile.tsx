import {Flex,Text,Box,Avatar} from '@chakra-ui/react'

export default function Profile(){
    return (
        <Flex align="center">
               <Box mr="4" textAlign="right">
               <Text>Gabriel Andrade</Text>
               <Text 
                color="gray.300"
                fontSize="small"
               >
                 gabriel.santana@gmail.com
               </Text>
            </Box>
            <Avatar size="md" name="Gabriel Andrade" src="https://avatars.githubusercontent.com/u/10618397?s=60&v=4" />
        </Flex>
    );
}