const express = require("express");
const router = express.Router();

const { userRegister, userLogin } = require("../../controllers/authController");

router.post("/login", userLogin);
router.post("/register", userRegister);

module.exports = router;
