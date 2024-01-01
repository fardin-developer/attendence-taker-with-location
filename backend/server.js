const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./config/conndecDB')
const User = require('./model/userModel');
const userRoute = require('./routes/user');
const salary = require('./routes/slary')

connectDB();

const user = new User({
  name: 'john doe'
})


app.use(cors());
app.use(bodyParser.json());
app.use('/', userRoute)
app.use('/', salary)

app.get('/new', (req, res) => {
  res.send("hello")
})


app.listen(4000, () => {
  console.log("Server running at port 4000");
});

