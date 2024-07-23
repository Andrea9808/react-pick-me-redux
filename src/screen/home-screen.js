import React from "react";
import Layout from "../components/layout";
import { Box, Container, InputWrapper, Stack } from "../components/styled";

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

            <Box mt='96px'>
                <InputWrapper placeholder='cerca' />
            </Box>

            </Container>
    </Layout>
  );
};

export default HomePage;