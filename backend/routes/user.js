const express = require('express');
const router = express.Router();
const Attendance = require('../model/attendenceMode')

router.get('/', (req, res) => {
    res.send('hello');
  });


  router.post('/submit', (req, res) => {
    const location = {}
    location.latitude = req.body.latitude;
    location.longitude = req.body.longitude;
    location.name = req.body.name;
  
  //   const findUserByName = async (name) => {
  //     try {
  //       const user = await User.findOne({ name });
  //       if (user) {
  //         console.log('Found user:', user);
          
  //       } else {
  //         console.log('User not found');
  //       }
  //       return user;
  //     } catch (error) {
  //       console.error('Error finding user:', error);
  //       throw error;
  //     }
  //   }
  //  const name = 'Fardin'
  //   findUserByName(name)
  
  
    // const user = new User({
    //   name: location.name,
    //   dateOfJoin: new Date('2002-03-24'),
    //   netSalary:30000
    // })
  
  
    // user.save().then(() => {
    //   console.log("user saved");
    // })
  
    const attendence = new Attendance({
      user: '658e1e67e2c5faa429d78c21', 
      date: new Date('2023-12-28'), 
      status: 'present' 
    })
  
    attendence.save().then((saveAttendence)=>{
      console.log('attendence saved: ', saveAttendence);
    }).catch(err=>{
      console.log(err);
    })
  
    console.log('Location:', location.latitude);
    console.log('Location:', location.longitude);
    console.log('name:', location.name);
  
    res.send('Form submitted successfully');
  });


module.exports = router
