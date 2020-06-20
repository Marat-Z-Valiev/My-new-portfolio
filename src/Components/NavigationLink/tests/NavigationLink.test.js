import React from "react";
import {shallow, configure} from "enzyme";
import toJSON from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import NavigationLink from "../NavigationLink";

configure({adapter: new Adapter()});

describe("NavigationLink", () => {
	it("should render correctly", () => {
		const props = {
			activeClass: "active",
			to: "projects",
			spy: true,
			smooth: true,
			offset: -80,
			duration: 500,
		};
		const wrapper = shallow(<NavigationLink {...props} />);
		expect(toJSON(wrapper)).toMatchSnapshot();
	});
});
