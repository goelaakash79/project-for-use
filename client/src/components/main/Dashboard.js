import React, { useState, useEffect } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/javascript/javascript";
import { runProgramService, compileProgramService } from "../../utils/services";
import { FaSpinner, FaSyncAlt } from "react-icons/fa";

// import "./style.css";
export default props => {
	const [code, setCode] = useState("//write your code javascript here");
	const [compiled, setCompiled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [output, setOutput] = useState(null);

	useEffect(() => {
		if (!localStorage.getItem("token")) {
			props.history.push("/login");
		}
	}, []);

	const handleCompile = async () => {
		setIsLoading(true);
		setOutput("/*** compiling ***/");

		try {
			const res = await compileProgramService({ source: code });

			if (
				res.result.compile_status === "OK" &&
				res.message === "success"
			) {
				setIsLoading(false);
				setCompiled(true);
				setOutput(null);
			}
		} catch (err) {}
	};
	const handleRun = async () => {
		setIsLoading(true);
		setOutput("/*** executing ***/");
		try {
			const res = await runProgramService({ source: code });

			if (
				res.result.compile_status === "OK" &&
				res.result.run_status.status === "AC"
			) {
				setIsLoading(false);
				setOutput(res.result.run_status.output);
			}
		} catch (err) {}
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
							<button
								disabled={isLoading}
								className="mt-4 mb-4"
								hidden={compiled}
								onClick={handleCompile}
							>
								<FaSpinner hidden={!isLoading} /> Compile
							</button>

							<button
								disabled={isLoading}
								className="mt-4 mb-4"
								onClick={handleRun}
								hidden={!compiled}
							>
								<FaSpinner hidden={!isLoading} /> Run
							</button>

							<span
								className="mt-4 mb-4 ml-4"
								onClick={() => window.location.reload()}
							>
								<FaSyncAlt hidden={isLoading} />{" "}
								<FaSpinner hidden={!isLoading} />
							</span>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="outputBox card p-4">
							<h5>Output</h5>
							{output}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
