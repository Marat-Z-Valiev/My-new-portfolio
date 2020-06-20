import React from "react";
import {shallow, configure} from "enzyme";
import toJSON from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import Contact from "../Contact";

configure({adapter: new Adapter()});

describe("Contact", () => {
	it("should render correctly", () => {
		const wrapper = shallow(<Contact />);
		expect(toJSON(wrapper)).toMatchSnapshot();
	});
});
