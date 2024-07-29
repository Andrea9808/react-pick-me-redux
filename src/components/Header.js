import React from "react";
import { Container, Stack, Box, Button } from "./styled";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as CartIcon } from "../images/cart.svg";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <Container size='fullwidth' position='fixed' background='grey.800'
    zIndex={999}>
      <Stack direction='column' align='center'>
        <Container>
          <h2>Header</h2>
        </Container>
      </Stack>
    </Container>
  );
};

export default Header;