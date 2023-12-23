const express = require('express');
const { parse } = require('path');
const app = express();
const port = 3000;
app.use(express.json());


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

app.get('/', (req, res) => {
  const msg = `Hello man!, This app it's working now!`;   
  res.send(msg)
})

app.post('/', (req, res) => {
  
  const reqNumber = req.body.number;

  const apiResponse = {
    Number: reqNumber,
    PreviousNumber: (reqNumber - 1),
    NextNumber: (reqNumber + 1)
  } 
 
  res.send(apiResponse);

})

app.post('/validatemail', (req, res) => {
  const regEx = new RegExp(/^[\a-z-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  const email = req.body.Email;
  
  if(regEx.test(email)){
    return res.json(`The email informed is valid!`);
  }
  return res.json(`The email informed is invalid. Try again!`);
})