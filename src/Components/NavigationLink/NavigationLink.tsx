import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-scroll";

interface NavigationLinkProps {
	link: any;
	label: any;
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

NavigationLink.propTypes = {
	link: PropTypes.string,
	label: PropTypes.string,
};

export default NavigationLink;
