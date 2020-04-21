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
router.get("/problems", auth, getPracticeQuestions);
router.get("/compile", auth, compileProgram);
router.get("/run", auth, runProgram);

module.exports = router;
