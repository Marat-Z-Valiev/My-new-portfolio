import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-scroll";

type NavigationLinkProps = {
	link: string;
	label: string;
	className: string
}

const NavigationLink: React.FC<NavigationLinkProps & {className: string}> = ({
	link,
	label,
}) => {
	return (
		<li className="nav-list-item">
			<Link
				activeClass="active"
				to={link}
				spy={true}
				smooth={true}
				offset={-80}
				duration={500}
			>
				{label}
			</Link>
		</li>
	);
};

export default NavigationLink;
