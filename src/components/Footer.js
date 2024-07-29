import React from "react";
import { ReactComponent as Logo } from "../images/logo-footer.svg";
import { Container, Stack, Box } from "./styled";

const Footer = () => {
  return (
    <Container size='fullwidth' mt={['36px', '96px']} pb='72px'>
       <Container>
        <Stack direction='column' align='center'>
          <Container>
            <Stack width='100%' justify='flex-start' >
              <Stack align='start' spacing='20px'>
                <Box>
                  <Logo />
                </Box>
                <Stack direction='column' align='start' height='100px' spacing='20px'>
                  <Box>pick me</Box>
                  <Box color='grey.600'>Lorem ipsum dolor sit.</Box>
                </Stack>  
              </Stack>
            </Stack>
          </Container>
        </Stack>
        </Container>
    </Container>
  )
};

export default Footer;