import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledNavBar } from "./index";

function NavBar({ isLogged = false, setSignIn }) {
	const [showBg, setShowBg] = useState(false);
	const navigate = useNavigate();

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
				<img
					src="./images/logo.png"
					alt="Netflix logo"
					className="nav__logo"
					onClick={() => navigate("/")}
				/>
				{isLogged ? (
					<img
						src="./images/avatar.png"
						alt="profile avatar"
						className="nav__avatar"
						onClick={() => navigate("/profile")}
					/>
				) : (
					<button className="nav__button" onClick={() => setSignIn(true)}>
						Sign In
					</button>
				)}
			</div>
		</StyledNavBar>
	);
}

export default NavBar;
