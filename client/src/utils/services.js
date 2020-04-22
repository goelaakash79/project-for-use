import axios from "axios";
import {
	authLogin,
	authRegister,
	runProgram,
	compileProgram,
	practiceProblems
} from "./routes";

axios.defaults.baseURL = "https://vr12-project.herokuapp.com/api/";

export const loginService = async data => {
	try {
		const response = await axios.post(authLogin, data);
		return response.data;
	} catch (err) {
		// console.log(err.response);
		return err.response.data;
	}
};

export const registerService = async data => {
	try {
		const response = await axios.post(authRegister, data);
		return response.data;
	} catch (err) {
		// console.log(err.response);
		return err.response.data;
	}
};

export const problemsService = async () => {
	try {
		let AUTH_TOKEN = localStorage.getItem("token");
		if (AUTH_TOKEN) {
			const response = await axios.get(practiceProblems, {
				headers: { "x-auth-token": AUTH_TOKEN }
			});

			return response.data;
		}
	} catch (err) {
		console.log(err.response);
		return err.response.data;
	}
};

export const runProgramService = async ({ source }) => {
	try {
		let AUTH_TOKEN = localStorage.getItem("token");
		if (AUTH_TOKEN) {
			const response = await axios.post(
				runProgram,
				{ source }
				// {
				// 	headers: { "x-auth-token": AUTH_TOKEN }
				// }
			);
			return response.data;
		}
	} catch (err) {
		console.log(err.response);
		return err.response.data;
	}
};

export const compileProgramService = async ({ source }) => {
	try {
		let AUTH_TOKEN = localStorage.getItem("token");
		if (AUTH_TOKEN) {
			const response = await axios.post(
				compileProgram,
				// {
				// 	headers: { "x-auth-token": AUTH_TOKEN }
				// },
				{ source }
			);
			return response.data;
		}
	} catch (err) {
		console.log(err.response);
		return err.response.data;
	}
};
