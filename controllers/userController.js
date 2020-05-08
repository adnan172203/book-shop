const User = require('../models/user');


module.exports.signup = async (req, res) => {
  console.log(req.body);
  const user = new User(req.body);

  try {
    const foundUser = await User.findOne({ email: req.body.email });
    if (foundUser) return res.status(400).send('user email exist');
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(400).json({ err });
  }
};
