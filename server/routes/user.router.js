const router = require("express").Router()
const {signupController, signinController} = require("./controllers/user.controller")

router.post("/signup", signupController)
router.post("/signin", signinController)

module.exports = router