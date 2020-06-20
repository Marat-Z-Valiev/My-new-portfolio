import React from "react";
import {shallow, configure} from "enzyme";
import toJSON from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import Project from "../Project";

configure({adapter: new Adapter()});

describe("Project", () => {
	it("should render correctly", () => {
		const props = {
			project: {technologies: ["test"]},
		};
		const wrapper = shallow(<Project {...props} />);
		expect(toJSON(wrapper)).toMatchSnapshot();
	});
});
