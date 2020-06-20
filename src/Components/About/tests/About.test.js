import React from "react";
import {shallow, configure} from "enzyme";
import toJSON from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import About from "../About";

configure({adapter: new Adapter()});

describe("About", () => {
	it("render correctly", () => {
		const wrapper = shallow(<About />);
		expect(toJSON(wrapper)).toMatchSnapshot();
	});
});
