import {Flex,Text,Box,Avatar} from '@chakra-ui/react'

interface ProfileProps{
    showProfileData?:boolean;
}

export default function Profile({showProfileData}:ProfileProps){
    return (
        <Flex align="center">
            {showProfileData && (
               <Box mr="4" textAlign="right">
               <Text>Gabriel Andrade</Text>
               <Text 
                color="gray.300"
                fontSize="small"
               >
                 gabriel.santana@gmail.com
               </Text>
            </Box>
            )}
            <Avatar size="md" name="Gabriel Andrade" src="https://avatars.githubusercontent.com/u/10618397?s=60&v=4" />
        </Flex>
    );
}