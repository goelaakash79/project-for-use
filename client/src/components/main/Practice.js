import React, { useState, useEffect } from "react";
import { problemsService } from "../../utils/services";
import { Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

import "./style.css";
export default props => {
	const [isLoading, setIsLoading] = useState(true);
	const [problems, setProblems] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const res = await problemsService();

				setProblems(res.problems);
				setIsLoading(false);
			} catch (err) {
				console.log(err);
				setIsLoading(false);
			}
		})();
	}, []);

	return (
		<div className="container">
			<h4 className="mt-4">
				<b>CodeEra</b>
				<span
					style={{ float: "right", fontSize: 16 }}
					onClick={() => props.history.push("/dashboard")}
				>
					Dashboard
				</span>
			</h4>
			<div
				className="loader text-center"
				style={{
					marginTop: "16em"
				}}
				hidden={!isLoading}
			>
				<p className="text-center">
					<FaSpinner />
					<br />
					<span className="small">Loading</span>
				</p>
			</div>
			<div hidden={isLoading}>
				<h4 className="mt-5 fontBd">Practice Problems</h4>

				<div className="desc">
					<p>
						Try this problems to master various concepts of Data
						structures and algorithms
					</p>
				</div>
				<div className="questions-section mb-4">
					<table className="table">
						<thead>
							<tr>
								<th>#</th>
								<th>Problem</th>
								<th>Difficulty Level</th>
								<th>Division</th>
							</tr>
						</thead>

						<tbody hidden={isLoading}>
							{problems
								? problems.map((problem, i) => {
										return (
											<tr
												key={i}
												className={
													problem.status === "solved"
														? "problemsolved"
														: ""
												}
											>
												<td>{++i}</td>
												<td>
													<a
														className="problem-link"
														href={problem.link}
														target="_blank"
													>
														{problem.name}
													</a>
												</td>
												<td>{problem.level}</td>
												<td>{problem.div}</td>
											</tr>
										);
								  })
								: null}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
