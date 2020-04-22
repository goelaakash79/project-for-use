const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.auth = (req, res, next) => {
	const token = req.body.headers["x-auth-token"];
	if (!token) {
		return res
			.status(401)
			.json({ message: "Access denied. No Token provided" });
	} else {
		const decodedPayload = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
		req.user = decodedPayload;
		return next();
	}
};
