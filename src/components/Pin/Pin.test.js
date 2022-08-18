import { render, screen } from "@testing-library/react";

import Pin from "./Pin";

test("Pin component", () => {
  render(
    <Pin
      title="Funny cat"
      description="This is a picture of a cat"
      imageUrl="http://placekitten.com/g/200/300"
      sourceUrl="http://placekitten.com"
    />
  );

  const title = screen.getByText(/funny cat/i);
  const description = screen.getByText(/this is a picture/i);

  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
});
