import styled from "styled-components";

import PinGrid from "../../components/PinGrid/PinGrid";

const Container = styled.div`
  border: 1px solid black;
  padding: 2rem;
  background-color: white;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 0 0 20px 0;
  color: black;
`;

const PinScreen = ({ pins }) => {
  return (
    <Container>
      <Title>My Pins</Title>
      <PinGrid pins={pins} />
    </Container>
  );
};

export default PinScreen;
