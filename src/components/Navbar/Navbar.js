import styled from "styled-components";

import Button from "@mui/material/Button";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AppTitle = styled.h3`
  font-weight: bold;
  font-size: 28px;
  color: red;
  margin: 0;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const Navbar = () => {
  return (
    <Container>
      <AppTitle>NotPinterest</AppTitle>
      <ButtonsContainer>
        <Button variant="contained" disabled>
          Pins
        </Button>
        <Button variant="contained" disabled>
          Home
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Navbar;
