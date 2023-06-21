import React from 'react';
import { render } from "@testing-library/react";
import Projects from "../Projects";

describe("Projects", () => {
	it("should render correctly", () => {
		render(<Projects />);
	});
});
