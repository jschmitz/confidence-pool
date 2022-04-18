import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import MashProvider from "./MashProvider";

test("renders Confidence Pool title", () => {
  render(
    <MashProvider>
      <App />
    </MashProvider>
  );
  const element = screen.getByText(/Confidence Pool/i);
  expect(element).toBeInTheDocument();
});
