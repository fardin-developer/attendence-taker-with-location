const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

// Enable CORS
app.use(cors());

// Parse JSON bodies
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.post('/submit', (req, res) => {
//   const inputValue = req.body.myInput;
const location={}
   location.latitude = req.body.latitude;
   location.longitude = req.body.longitude;

//   console.log('Form submitted with value:', inputValue);
  console.log('Location:',location.latitude);
  console.log('Location:',location.longitude);

  res.send('Form submitted successfully');
});

app.listen(4000, () => {
  console.log("Server running at port 3000");
});
