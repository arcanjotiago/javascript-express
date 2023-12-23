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
  // const previousNumber = (number - 1);
  // const nextNumber = (number + 1);

  // const apiResponse = (`The number informed is ${number}. The previous of number is ${previousNumber} and the next is ${nextNumber}`);
  
  const apiResponse = {
    Number: reqNumber,
    PreviousNumber: (reqNumber - 1),
    NextNumber: (reqNumber + 1)
  } 
 
  res.send(apiResponse); //se for usar este tenho que enviar como objeto{}
  // res.json(apiResponse) //caso vá enviar um number

})

app.post('/validatemail', (req, res) => {
  const regEx = new RegExp(/^[\a-z-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  const email = req.body.Email;
  
  if(regEx.test(email)){
    return res.json(`The email informed is valid!`);
  }
  return res.json(`The email informed is invalid. Try again!`);
})



//*EX01
// Crie um endpint que será um post no /. Este post deve receber no body uma propriedade chamada number. A resposta deve ser o antecessor e o próximo numero do recebido. Ex: O post recebe 200. A resposta deve ser 199 e 201
//*EX02
// Criar funçao para validar email e se for incorreto avisar.

//*Obs
//Padrão a partir de agora criar app....
//Ler doc https://expressjs.com/pt-br/starter/generator.html
//Proxima aula: Git
