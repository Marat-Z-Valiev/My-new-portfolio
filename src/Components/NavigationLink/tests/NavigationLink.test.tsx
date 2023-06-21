
import React from 'react';
import { render } from "@testing-library/react";
import NavigationLink from "../NavigationLink";

describe("NavigationLink", () => {
  it("should render correctly", () => {
    const props = {
      activeClass: "active",
      to: "projects",
      spy: true,
      smooth: true,
      offset: -80,
      duration: 500,
      link: "test",
      label: "test",
      className: "test",
    };
    render(<NavigationLink {...props} />);
  });
});
