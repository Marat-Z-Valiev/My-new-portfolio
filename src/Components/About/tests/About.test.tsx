import React from 'react';
import { render } from "@testing-library/react";
import About from "../About";

describe("About", () => {
  it("render correctly", () => {
    render(<About />);
  });
});
