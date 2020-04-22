const express = require("express");
const router = express.Router();

const {
	index,
	getPracticeQuestions,
	compileProgram,
	runProgram
} = require("../../controllers/indexController");

const { auth } = require("../../middlewares/auth");

router.get("/", index);
router.get("/problems", getPracticeQuestions);
router.post("/compile", compileProgram);
router.post("/run", runProgram);

module.exports = router;
