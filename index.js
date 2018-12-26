'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
let url = 'https://eu9.chat-api.com/instance12079/message?token=t2sp5yanmkltwwbp';


app.use(bodyParser.json());


app.post('/my_webhook_url', function(req, res) {
    let data = req.body; // New messages in the "body" variable
    data.messages.forEach((element) => { // For each message
      let message = element;
      console.log('messege', message);
      
    });
    res.sendStatus(200); //Response does not matter
  });
  


let server = app.listen(process.env.PORT, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log("El servidor se encuentra en el puerto " + port + " y el host es " + host);
  });
  
  
  function sendMessage(data) {
    request({
      url: url,
      method: "POST",
      json: data
    });
  }
  
  
  function sendChangedFlujo (nombre, user) {
    let mensaje = '';
  
    switch (nombre) {
      case 'saludoInicial':
        mensaje = `Hola, ${user} Bienvenido a la linea de atencion de *S.O.S*.
  Por favor dime en que quieres que te ayude utiliza una de las palabras claves:
  *Certificados*📄
  *Afiliacion* 🆘
  *Subsidios* 💵
  *Cancelar* ⏹️`;
        break;
      case 'certificados':
        mensaje = `Por favor ${user} digite su numero de cedula sin puntos ni comas`;
        break;
    }
    return mensaje;
  }
  // 104.198.179.226
