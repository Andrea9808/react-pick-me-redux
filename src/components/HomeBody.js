import React, { useState, useEffect } from "react";
import { Box, Button, Container, InputWrapper, Stack } from "./styled";
import { ReactComponent as SearchIcon } from "../images/search-media.svg";
import instance from "../api";
import PhotoSection from "./Photo-Section";
import Paginator from "./Paginator";
import { overflow } from "styled-system";
const HomeBody = () => {

  useEffect(() => {
    async function prova(){
      try{
        const response = await instance.get('photos');
        console.log('RESPONSE',response);
      } catch (error){
        console.log('ERROR', error);
      }
    }
    prova();
  }, []);


  return <Container size='fullwidth'>
    <Container mt='96px'>
      <Stack justify='space-between' align='end'>
        
        <h4>search your photos</h4>
        <p
          style={{
            color: 'var(--color-grey-700)',
          }}>
            Richieste: 50/50
        </p>
      </Stack>
      <Box mt='24px'>
          
        
        <Stack width='fit-content' bg='grey.900'
          borderRadius='100px' border='1px solid'
          px='18px' style={{
            overflow: 'hidden',
          }}
        >
          <InputWrapper placeholder="cerca foto" border='none' pl='0px' value='React' 
            onChange={() => {
              return
            }}
          />

          <Button rightIcon={<SearchIcon/>} isLoading={false} disabled={false}
            variant='text' iconColor='grey.700' bg='grey.900'
          >
          </Button>
        </Stack>

      </Box>
    </Container>
  </Container>;
};

export default HomeBody;