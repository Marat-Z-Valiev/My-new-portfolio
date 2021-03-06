import React from "react";
import {shallow, configure} from "enzyme";
import toJSON from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import SkillSets from "../SkillSets";

configure({adapter: new Adapter()});

describe("SkillSets", () => {
	it("should render correctly", () => {
		const wrapper = shallow(<SkillSets />);
		expect(toJSON(wrapper)).toMatchSnapshot();
	});
});
