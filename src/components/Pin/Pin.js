import styled from "styled-components";

import Card from "@mui/material/Card";

const Container = styled.a`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 1rem;
  width: 10rem;
  height: 100%;
  text-decoration: none;
  color: black;

  :hover {
    background-color: lightGrey;
  }
`;

const PinImage = styled.img`
  max-width: 100%;
`;

const PinTitle = styled.h3`
  font-weight: bold;
  font-size: 14px;
`;

const Pin = ({ title, description, sourceUrl, imageUrl }) => {
  return (
    <Card>
      <Container href={sourceUrl} target="_blank">
        <PinImage src={imageUrl} alt={title} />
        <PinTitle>{title}</PinTitle>
        {description && <span>{description}</span>}
      </Container>
    </Card>
  );
};

export default Pin;
