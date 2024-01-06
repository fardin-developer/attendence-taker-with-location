const express = require('express')
const router = express.Router();
const User = require('../model/userModel');

router.post('/create-user',(req,res)=>{
    console.log(req.body);
    // res.send("hello");
    const{name,baseSalary,password,confirmPassword,phone}=req.body
    console.log("name ;"+name);
    // console.log(baseSalary);
    // console.log(password);
    // console.log(phone);


    const findByName = async (name) => { 
        try {
          const user = await User.findOne({ name });
          if (!user) {

            if (password==confirmPassword) {
                const user = new User({
                    name: name,
                    phone:phone,
                    password:password,
                    dateOfJoin: new Date(),
                    baseSalary:baseSalary
                  })       
                  user.save().then(() => {
                    console.log("user saved");
                  })
            }
                  
          } else {
            console.log('user already exist ,please change the name');
            res.json({ 
                message: "user already exist",
                message1: "please change the name",

             })
          }
          return user;
        } catch (error) {
          console.error('Error finding user:', error);
          throw error;
        }
      }
      findByName(name)






})
module.exports = router
