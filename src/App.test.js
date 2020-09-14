import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

const { getByText } = render(<App />);
const linkElement = getByText(/learn from Jason/i);


describe("App Components", () => {
  
  test("renders learn react link", () => {
    expect(linkElement).toBeInTheDocument();
  });

});
