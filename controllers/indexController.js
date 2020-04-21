require("dotenv").config();

module.exports.index = (req, res) => {
	return res.status(200).json({ message: "" });
};

module.exports.getPracticeQuestions = async (req, res) => {
	try {
		const result = await Problem.find({});
		if (result)
			return res
				.status(200)
				.json({ message: "success", problems: result, error: false });
		else
			return res
				.status(404)
				.json({ message: "no data", error: false, data: [] });
	} catch (err) {
		return res
			.status(400)
			.json({ message: err.message, error: true, data: null });
	}
};
