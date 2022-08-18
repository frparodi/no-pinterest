import styled from "styled-components";

import Pin from "../Pin/Pin";

const Container = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

const PinGrid = ({ pins }) => {
  return (
    <Container>
      {pins.map((pin, index) => (
        <Pin
          key={index}
          title={pin.title}
          description={pin.description}
          sourceUrl={pin.sourceUrl}
          imageUrl={pin.imageUrl}
        />
      ))}
    </Container>
  );
};

export default PinGrid;
