import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectUser } from "./features/userSlice";
import ProfileScreen from "./pages/ProfileScreen/ProfileScreen";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(
					login({
						uid: user.uid,
						email: user.email,
					})
				);
			} else {
				dispatch(logout());
			}
		});
		return () => unsubscribe();
	}, [dispatch]);

	return (
		<div className="app">
			{!user ? (
				<LoginScreen />
			) : (
				<Routes>
					<Route path="/home" element={<HomeScreen />} />
					<Route path="/profile" element={<ProfileScreen />} />
					<Route path="*" element={<Navigate replace to="/home" />} />
				</Routes>
			)}
		</div>
	);
}

export default App;
