const express = require("express");
const router = express.Router();

const { userRegister, userLogin } = require("../../controllers/authController");

router.get("/login", userLogin);
router.get("/register", userRegister);

module.exports = router;
