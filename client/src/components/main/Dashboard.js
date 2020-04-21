import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/javascript/javascript";
import Axios from "axios";

// import "./style.css";
export default props => {
	const [code, setCode] = useState("//write your code here");

	const handleSubmit = async () => {
		const res = await Axios.post(
			"https://cors-anywhere.herokuapp.com/https://api.hackerearth.com/v3/code/compile/",
			{
				client_secret: "1c8a5f77adbc988489913a7660c27bb542ffb7b6",
				source: code,
				lang: "JAVASCRIPT_NODE",
				async: 1
			}
		);
		console.log(res);
	};

	return (
		<>
			<div className="container">
				<h4 className="mt-4">
					<b>CodeEra</b>
					<span style={{ float: "right", fontSize: 16 }}>
						<span
							className="mr-4"
							onClick={() => props.history.push("/practice")}
						>
							Practice
						</span>
						<span
							className="mr-4"
							onClick={() => props.history.push("/contest")}
						>
							Contests
						</span>
						<span
							onClick={() => {
								localStorage.clear();
								props.history.push("/login");
							}}
						>
							Logout
						</span>
					</span>
				</h4>

				<div className="row mt-5">
					<div className="col-lg-8">
						<div>
							<CodeMirror
								class="react-codemirror2"
								value={code}
								options={{
									mode: "javascript",
									theme: "material",
									lineNumbers: true
								}}
								onBeforeChange={(editor, data, value) => {
									setCode(value);
								}}
								autoCursor={true}
								autoScroll={true}
								onChange={(editor, data, value) => {}}
							/>
							<button className="mt-4" onClick={handleSubmit}>
								Run Code
							</button>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="outputBox card p-4">
							<h5>Output</h5>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
