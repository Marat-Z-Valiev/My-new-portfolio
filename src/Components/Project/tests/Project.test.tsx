import React from 'react';
import { render } from "@testing-library/react";
import Project from "../Project";

describe("Project", () => {
  it("should render correctly", () => {
    const props = {
      project: { technologies: ["test"] },
    };
    render(<Project {...props} />);
  });
});
