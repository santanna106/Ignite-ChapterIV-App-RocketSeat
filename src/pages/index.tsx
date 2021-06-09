import {Flex, Button,Stack} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form';
import {Input} from '../components/Form/Input';

type SignInFormData = {
  email:string;
  password:string;
}

export default function Home() {
  const {register,handleSubmit, formState } = useForm();

  const {errors} = formState;

  const handleSignIn:SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve,2000))
    console.log(values)


  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input 
            type="email" 
            name="email"
            label="E-Mail"
            {...register('email',{required:"O E-mail é um campo obrigatório!"})} 
            error={errors.email}
           
          />
         
          <Input 
            type="password" 
            name="password"
            label="Senha"
            {...register("password",{required:"A senha é um campo obrigatório!"})} 
            error={errors.password}
            
          />    
        
      </Stack>
        
      <Button type="submit" mt="6" colorScheme="pink" size="lg" 
      isLoading={formState.isSubmitting}> Entrar</Button>
    </Flex>
  </Flex>
      
        
  )
}
