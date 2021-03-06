'use strict';

import express = require('express');
import bodyParser = require('body-parser');
import request = require('request');

let app = express();
let url: string = 'https://eu18.chat-api.com/instance19951/message?token=z4brc8usiyl6dzi8';


app.use(bodyParser.json());


app.post('/my_webhook_url', function(req, res) {
    let data = req.body; // New messages in the "body" variable
    data.messages.forEach((element: any) => { // For each message
      let message = element;
      sendChangedFlujo(message,'');
    });
    res.sendStatus(200); //Response does not matter
  });
  


let server = app.listen(9320, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log("El servidor se encuentra en el puerto " + port + " y el host es " + host);
  });
  
  
  function sendMessage(data: any) {
    request({
      url: url,
      method: "POST",
      json: data
    });
  }
  
  
  function sendChangedFlujo (nombre: string, user: string) {
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
  