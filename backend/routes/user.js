const express = require('express');
const router = express.Router();
const Attendance = require('../model/attendenceMode');
const User = require('../model/userModel');


router.get('/', (req, res) => {
  res.send('hello');
});


router.post('/submit', (req, res) => {
  const location = {}
  location.latitude = req.body.latitude;
  location.longitude = req.body.longitude;
  location.name = req.body.name;


  const findUserByName = async (name) => {
    try {
      const user = await User.findOne({ name });
      if (user) {
        // console.log('Found user:', user);
        const today = new Date().setHours(0, 0, 0, 0);
        const existingAttendance = await Attendance.findOne({
          user: user._id,
          date: { $gte: today, $lt: today + 24 * 60 * 60 * 1000 },
        });
        if (!existingAttendance) {
          const newAttendence = new Attendance({
            user: user._id,
            date: new Date(),
            status: 'present'
          })
          newAttendence.save().then((saveAttendence) => {
            console.log('attendence saved, present: ', saveAttendence);
          }).catch(err => {
            console.log(err);
          })
        }else{
          console.log('attendence exist');
          res.json({message:"attendence exist already"})
        }
      }else{
        console.log('user not found');
        res.json({user:"user not found"})
      }
      return user;
    } catch (error) {
      console.error('Error finding user:', error);
      throw error;
    }
  }
  const name = location.name
  findUserByName(name)


  // const user = new User({
  //   name: location.name,
  //   dateOfJoin: new Date('2002-03-24'),
  //   netSalary:30000
  // })


  // user.save().then(() => {
  //   console.log("user saved");
  // })



  console.log('Location:', location.latitude);
  console.log('Location:', location.longitude);
  console.log('name:', location.name);

});


module.exports = router
