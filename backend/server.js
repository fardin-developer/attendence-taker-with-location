const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./conndecDB')
const User = require('./model/userModel')

connectDB();

const user = new User({
  name:'john doe'
})
//  user.save().then(()=>{
//   console.log("user saved");
//  })

app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Hello World");

});

app.post('/submit', (req, res) => {
const location={}
   location.latitude = req.body.latitude;
   location.longitude = req.body.longitude;
   location.name = req.body.name;

  console.log('Location:',location.latitude);
  console.log('Location:',location.longitude);
  console.log('name:',location.name);

  res.send('Form submitted successfully');
});

app.listen(4000, () => {
  console.log("Server running at port 3000");
});
