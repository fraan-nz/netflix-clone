import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SignUpScreen from "../SignUpScreen/SignUpScreen";
import { StyledLoginScreen } from "./index";

function LoginScreen() {
	const [signIn, setSignIn] = useState(false);

	return (
		<StyledLoginScreen>
			<NavBar setSignIn={setSignIn} />

			{signIn ? (
				<SignUpScreen />
			) : (
				<div className="loginScreen__content">
					<h1>Unlimited films, TV programmes and more.</h1>
					<h2>Watch anywhere. Cancel at any time.</h2>
					<h3>
						Ready to watch? Enter your email to create or restart your
						membership.
					</h3>
					<div className="logginScreen__input">
						<form>
							<input type="email" placeholder="Email Address" />
							<button
								className="loginScreen__inputBtn"
								onClick={() => setSignIn(true)}
							>
								get started
							</button>
						</form>
					</div>
				</div>
			)}
			<div className="loginScreen__gradient"></div>
		</StyledLoginScreen>
	);
}

export default LoginScreen;
