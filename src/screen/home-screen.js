import React from "react";
import Layout from "../components/layout";
import { Box, Container, InputWrapper, Skeleton, Stack, Button} from "../components/styled";

const HomePage = () => {
  return (
    <Layout>
        <Container>

            <h1>Home</h1>
            <Stack spacing='50px'>

                <Box width='100px' height='100px' border='1px solid'
                borderColor='red' borderRadius='16px' bg='green' 
                >

                </Box>
                <Box width='100px' height='100px' border='1px solid'
                borderColor='red' borderRadius='16px' bg='green' 
                >

                </Box>
                <Box width='100px' height='100px' border='1px solid'
                borderColor='red' borderRadius='16px' bg='green' 
                >

                </Box>
                <Box width='100px' height='100px' border='1px solid'
                borderColor='red' borderRadius='16px' bg='green' 
                >

                </Box>
                
            </Stack>

            <Box my='96px'>
                <InputWrapper placeholder='cerca' />
            </Box>

            <Skeleton width='300px' height='300px' borderRadius='16px' variant="circle" />
            <Stack spacing='24px' mt='96px' align='center'>
                <Button size='xl' variant='contained'>Contained</Button>
                <Button size='md' variant='outlined'>Outlined</Button>
                <Button variant='text' size='sm'>Text</Button>
                <Button variant='disabled' size='xl'>Disabled</Button>
            </Stack>

            </Container>
    </Layout>
  );
};

export default HomePage;