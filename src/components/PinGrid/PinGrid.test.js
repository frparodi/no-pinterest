import { render, screen } from "@testing-library/react";

import PinGrid from "./PinGrid";

const pins = [
  {
    title: "Cat 1",
    description: "Some description...",
    sourceUrl: "http://placekitten.com",
    imageUrl: "http://placekitten.com/g/200/300",
  },
  {
    title: "Cat 2",
    sourceUrl: "http://placekitten.com",
    imageUrl: "http://placekitten.com/g/200/300",
  },
  {
    title: "Cat 3",
    description: "Some description...",
    sourceUrl: "http://placekitten.com",
    imageUrl: "http://placekitten.com/g/200/300",
  },
  {
    title: "Cat 4",
    description: "Some description...",
    sourceUrl: "http://placekitten.com",
    imageUrl: "http://placekitten.com/g/200/300",
  },
];

test("PinGrid component", async () => {
  render(<PinGrid pins={pins} />);

  const foundCats = await screen.findAllByText(/cat/i);
  expect(foundCats).toHaveLength(4);
});
