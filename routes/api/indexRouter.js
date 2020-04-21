const express = require("express");
const router = express.Router();

const {
	index,
	getPracticeQuestions
} = require("../../controllers/indexController");

router.get("/", index);
router.get("/problems", getPracticeQuestions);

module.exports = router;
