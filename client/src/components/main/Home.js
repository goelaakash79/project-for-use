import React from "react";

export default props => {
	return (
		<>
			<div className="container">
				<h4 className="mt-4">
					<b>CodeEra</b>
					<span
						style={{ float: "right", fontSize: 16 }}
						onClick={() => props.history.push("/login")}
					>
						Login
					</span>
				</h4>

				<div className="row mt-5">
					<div className="col-lg-7 mt-5 pt-5">
						<h2 className="mt-4">
							Practice with us and
							<br />
							ace your next job interview
						</h2>
						<p>
							Know about latest programming contests, read the
							best editorials and blogs, solve problems on a
							single platform
						</p>
						<button
							className="btn btn-primary btn-lg mt-2"
							onClick={() => props.history.push("/register")}
						>
							Join CodeEra
						</button>
						<p className="mt-5">
							Developed by Abhishek Verma | Faizan | Depandra
							Singh
						</p>
					</div>
					<div className="col-lg-5 mt-5">
						<img
							src="https://codejudge.io/wp-content/uploads/2020/04/cj-1-2.png"
							alt=""
							width="100%"
						/>
					</div>
				</div>
			</div>
		</>
	);
};
