const bcrypt = require("bcrypt")
const User = require("../../model/User")
const jwt = require("jsonwebtoken")

const signupController = async (req, res, next) => {
    try {
      const hassedPassword = bcrypt.hashSync(req.body.password, 8);
      const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hassedPassword,
      });
      return res
        .status(201)
        .json({ user, msg: "user created successfully", success: true });
    } catch (err) {
      next(err);
    }
  };
  
  const signinController = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const validUser = await User.findOne({ email });
      if (!validUser) {
        return next(errorHandler(404, "User not found!"));
      }
      const validPassword = bcrypt.compareSync(password, validUser.password);
      if (!validPassword) {
        return next(errorHandler(401, "Wrong credentials!"));
      }
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = validUser._doc;
      return res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json({ success: true, rest });
    } catch (err) {
      next(err);
    }
  };
module.exports = {
    signupController,
    signinController
}

