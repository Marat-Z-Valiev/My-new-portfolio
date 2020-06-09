import React, {useState, useEffect} from "react";
import NavLink from "../NavigationLink/NavigationLink";
import NavStyled from "./NavigationStyled";
import headerLinks from "../../data/headerLinks";

interface NavigationProps {
	link: string;
}

const Navigation: React.FC<NavigationProps> = () => {
	let [isSticky, setStickyNav] = useState(false);

	const handleScroll = () => {
		const header = document.querySelector("header") as HTMLElement;
		const ul = document.querySelector(".menu") as HTMLElement;
		const app = document.getElementById("app") as HTMLElement;
		if (window.pageYOffset > header.offsetTop) {
			app.style.marginTop = `${ul.offsetHeight}px`;
			setStickyNav((isSticky = true));
		} else {
			app.style.marginTop = `0px`;
			setStickyNav((isSticky = false));
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => {
		const links = document.querySelector(".links") as HTMLElement;
		links.classList.toggle("open");
	};

	const closeMenu = () => {
		const hamburgerButton = document.querySelector(
			".hamburger-button"
		) as HTMLButtonElement;
		hamburgerButton.click();
	};

	const closeMenuAfterClick = () => {
		const liElements = document.querySelectorAll(".links .nav-list-item");
		liElements.forEach((element) => {
			element.addEventListener("click", closeMenu);
		});
	};

	useEffect(() => {
		closeMenuAfterClick();
	}, []);

	const stickyClass = isSticky ? "fixed" : "";

	return (
		<NavStyled>
			<header className={stickyClass}>
				<nav>
					<ul className="menu">
						<li className="logo">
							<h1>Marat Valiev</h1>
						</li>
						<li className="toggle">
							<button
								type="button"
								className="hamburger-button"
								onClick={toggleMenu}
							>
								<i className="fas fa-bars fa-3x"></i>
							</button>
						</li>
						<div className="links">
							{headerLinks.map((menuItem, index) => (
								<NavLink
									className="item"
									key={index}
									link={menuItem.link}
									label={menuItem.label}
								/>
							))}
						</div>
					</ul>
				</nav>
			</header>
		</NavStyled>
	);
};

export default Navigation;
