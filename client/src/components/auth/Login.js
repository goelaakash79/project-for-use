import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import { Link } from "react-router-dom";
import Common from "./Common";
import { loginService } from "../../utils/services";

import { FaSpinner } from "react-icons/fa";

const Login = props => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (localStorage.getItem("token")) {
			props.history.push("/dashboard");
		}
	}, []);

	const handleSubmit = async e => {
		e.preventDefault();
		setIsLoading(true);

		try {
			const data = { email, password };
			const res = await loginService(data);
			if (res.error === true) {
				toast.error(res.message);
				setIsLoading(false);
			}
			if (res.message === "success") {
				toast.success("Welcome to CodeEra");
				setTimeout(() => {
					const token = res.token;
					localStorage.setItem("token", token);
					localStorage.setItem("user_id", res.user._id);
					setIsLoading(false);
					props.history.push("/dashboard");
				}, 1000);
			} else {
				toast.error(res.message);
				setIsLoading(false);
			}
		} catch (err) {
			setIsLoading(false);
			console.log(err);
		}
	};
	return (
		<div className="container">
			<ToastContainer
				position="top-right"
				autoClose={2500}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnVisibilityChange
				draggable
				pauseOnHover
			/>

			<div className="row pt-5 mt-5 mb-5 pb-5">
				<Common />
				<div className="col-md-5 mt-5 pt-5">
					<div className="card register-box p-4 mb-4">
						<h5 className="fontBd">Login to CodeEra</h5>
						<p className="fontMd mb-4 mt-4">
							Enter account details
						</p>
						<form onSubmit={handleSubmit}>
							<input
								placeholder="enter your email"
								type="email"
								name="email"
								required
								onChange={e => setEmail(e.target.value)}
								className="form-control mb-3"
							/>
							<input
								placeholder="enter your password"
								type="password"
								name="password"
								required
								onChange={e => setPassword(e.target.value)}
								className="form-control mb-4"
							/>
							<button disabled={isLoading} className="mb-2">
								<FaSpinner hidden={!isLoading} /> Login
							</button>
							<Link to="/register" style={{ color: "#424242" }}>
								Don't have an account? Register here
							</Link>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
