require("dotenv").config();
const bcrypt = require("bcryptjs");

module.exports.userLogin = async (req, res) => {
	let { email, password } = req.body;
	try {
		let user = await User.findOne({ email }).select(
			"name email phone address password"
		);
		if (user) {
			let isValidPwd = await bcrypt.compare(password, user.password);
			if (isValidPwd) {
				const token = user.generateAuthToken();
				res.status(200).header("x-auth-token", token).json({
					message: "success",
					user,
					token
				});
			} else {
				res.status(400).json({ message: "Invalid credentials!!" });
			}
		} else {
			res.status(400).json({ message: "Invalid user" });
		}
	} catch (err) {
		res.status(500).json({ message: err.message, error: true });
	}
};

module.exports.userRegister = async (req, res) => {
	let { name, email, password } = req.body;
	try {
		let user = await User.findOne({ email });
		if (user) {
			res.status(400).json({ message: "user already exists" });
		} else {
			let newUser = {
				name,
				email,
				password
			};
			const salt = await bcrypt.genSalt(10);
			newUser.password = await bcrypt.hash(newUser.password, salt);
			await User.create(newUser);
			res.status(200).json({ message: "success" });
		}
	} catch (err) {
		res.status(500).json({ message: err.message, error: true });
	}
};
