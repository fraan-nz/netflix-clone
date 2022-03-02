import React, { useRef } from "react";
import { StyledSignUpScreen } from "./index";
import { auth } from "../../firebase/firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";

function SignUpScreen() {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const handlerRegister = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(
			auth,
			emailRef.current.value,
			passwordRef.current.value
		)
			.then((user) => console.log(user))
			.catch((error) => alert(error.message));
	};

	const handlerSignIn = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(
			auth,
			emailRef.current.value,
			passwordRef.current.value
		)
			.then((user) => console.log(user))
			.catch((error) => alert(error.message));
	};

	return (
		<StyledSignUpScreen>
			<form>
				<h1>Sign In</h1>
				<input ref={emailRef} type="email" placeholder="Email" />
				<input ref={passwordRef} type="password" placeholder="Password" />
				<button type="submit" onClick={handlerSignIn}>
					Sign In
				</button>
				<h4>
					<span>New to Netflix?</span>{" "}
					<span className="signUp__link" onClick={handlerRegister}>
						Sign Up now.
					</span>
				</h4>
			</form>
		</StyledSignUpScreen>
	);
}

export default SignUpScreen;
