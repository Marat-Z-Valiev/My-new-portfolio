import React from "react";
import {shallow, configure} from "enzyme";
import toJSON from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import Projects from "../Projects";

configure({adapter: new Adapter()});

describe("Projects", () => {
	it("should render correctly", () => {
		const wrapper = shallow(<Projects />);
		expect(toJSON(wrapper)).toMatchSnapshot();
	});
});
