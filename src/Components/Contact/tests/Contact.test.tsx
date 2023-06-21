import React from 'react';
import { render } from "@testing-library/react";
import Contact from "../Contact";

describe("Contact", () => {
  it("should render correctly", () => {
    render(<Contact />);
  });
});
