import React, { useEffect, useState } from "react";
import { StyledNavBar } from "./index";

function NavBar() {
	const [showBg, setShowBg] = useState(false);

	const transitionNavBar = () => {
		if (window.scrollY > 68) {
			setShowBg(true);
		} else {
			setShowBg(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", transitionNavBar);

		return () => window.removeEventListener("scroll", transitionNavBar);
	}, []);

	return (
		<StyledNavBar bg={showBg}>
			<div className="nav__container">
				<img src="./images/logo.png" alt="Netflix logo" className="nav__logo" />
				<img
					src="./images/avatar.png"
					alt="profile avatar"
					className="nav__avatar"
				/>
			</div>
		</StyledNavBar>
	);
}

export default NavBar;
