const express = require('express');
const router = express.Router();
const { User } = require('../models/user');

// http://localhost:4000/api/v1/users
router.get(`/`, async (req, res) => {
  const userList = await User.find();

  if (!userList) {
    res.status(500).json({success: false});
  }
  res.send(userList);
})

router.post(`/`, async (req, res) => {
  const {
    name,
    email,
    subscriptionType
  } = req.body;


  const user = new User({
    name,
    email,
    subscriptionType
  })
  console.log(user);
  
  const newUser = await user.save();
  console.log(newUser);

  if (!newUser) {
    res.status(404).send('user cannot be created');
  }
  res.send(newUser);
})


module.exports = router;