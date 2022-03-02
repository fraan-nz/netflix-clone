import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import NavBar from "../../components/NavBar/NavBar";
import { StyledProfileScreen } from "./index";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

function ProfileScreen() {
	const user = useSelector(selectUser);

	return (
		<StyledProfileScreen>
			<NavBar isLogged />
			<div className="profileScreen__content">
				<h1>Edit Profile</h1>
				<div className="profileScreen__info">
					<img src="./images/avatar.png" alt="Avatar" />
					<div className="profileScreen__details">
						<h2>{user.email}</h2>
						<div className="profileScreen__plans">
							<h3>Plans</h3>
							<button
								className="profileScreen__signOut"
								onClick={() => signOut(auth)}
							>
								Sign Out
							</button>
						</div>
					</div>
				</div>
			</div>
		</StyledProfileScreen>
	);
}

export default ProfileScreen;
