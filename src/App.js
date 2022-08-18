import styled from "styled-components";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import PinScreen from "./screens/PinScreen/PinScreen";

const pins = [
  {
    title: "Cat",
    description: "Some description...",
    sourceUrl: "http://placekitten.com",
    imageUrl: "http://placekitten.com/g/200/300",
  },
  {
    title: "Cat",
    sourceUrl: "http://placekitten.com",
    imageUrl: "http://placekitten.com/g/200/300",
  },
  {
    title: "Cat",
    description: "Some description...",
    sourceUrl: "http://placekitten.com",
    imageUrl: "http://placekitten.com/g/200/300",
  },
  {
    title: "Cat",
    description: "Some description...",
    sourceUrl: "http://placekitten.com",
    imageUrl: "http://placekitten.com/g/200/300",
  },
  {
    title: "Cat",
    description: "Some description...",
    sourceUrl: "http://placekitten.com",
    imageUrl: "http://placekitten.com/g/200/300",
  },
  {
    title: "Cat",
    description: "Some description...",
    sourceUrl: "http://placekitten.com",
    imageUrl: "http://placekitten.com/g/200/300",
  },
  {
    title: "Cat",
    description: "Some description...",
    sourceUrl: "http://placekitten.com",
    imageUrl: "http://placekitten.com/g/200/300",
  },
  {
    title: "Cat",
    description: "Some description...",
    sourceUrl: "http://placekitten.com",
    imageUrl: "http://placekitten.com/g/200/300",
  },
];

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: lightBlue;
  gap: 1rem;
  min-height: 100vh;
`;

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <Routes>
        <Route path="/" element={<PinScreen pins={pins} />} />
        <Route path="pins" element={<PinScreen pins={pins} />} />
      </Routes>
    </AppContainer>
  );
};

export default App;
