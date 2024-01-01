const express = require('express');
const router = express.Router();
const User = require('../model/userModel');
router.get('/salary',(req,res)=>{
    
   


    // const baseslary =3000;
    // let absent = 10;
    // let sundayOfMonth 
    // let daysalary = 3000/30;
    // const finalSalary = baseslary -daysalary*absent
    // res.send("salary reciept: "+ finalSalary)
});

router.post('/salary', async (req, res) => {
    let { month, year } = req.body; 
    month = Number(month)
    console.log(month);

    const sundaysCount = countSundaysInMonth(month, year);
    
    console.log(`Number of Sundays: ${sundaysCount}`);
    
    res.send(`Received month data. Number of Sundays: ${sundaysCount}`);

    const { name } = req.query;

    const salaryFind = async (name)=>{
        let user = await User.findOne({name:name});
        if (user) {
            const baseslary = user.netSalary;
            console.log(baseslary);

        }else{
            console.log('not found');
        }
        // return User.netSalary
    }

    salaryFind(name);
});

function countSundaysInMonth(month, year) {

    const date = new Date(year, month , 1);
    console.log("date: "+date);
    let count = 0;
    
    while (date.getMonth() === month) {
        if (date.getDay() === 0) {
            count++;
        }
        date.setDate(date.getDate() + 1);
    }
    
    return count;
}


module.exports = router