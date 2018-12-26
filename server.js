'use strict';
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var app = express();
var url = 'https://eu18.chat-api.com/instance19951/message?token=z4brc8usiyl6dzi8';
app.use(bodyParser.json());
app.post('/my_webhook_url', function (req, res) {
    var data = req.body; // New messages in the "body" variable
    data.messages.forEach(function (element) {
        var message = element;
        sendChangedFlujo(message, '');
    });
    res.sendStatus(200); //Response does not matter
});
var server = app.listen(9320, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("El servidor se encuentra en el puerto " + port + " y el host es " + host);
});
function sendMessage(data) {
    request({
        url: url,
        method: "POST",
        json: data
    });
}
function sendChangedFlujo(nombre, user) {
    var mensaje = '';
    switch (nombre) {
        case 'saludoInicial':
            mensaje = "Hola, " + user + " Bienvenido a la linea de atencion de *S.O.S*.\n  Por favor dime en que quieres que te ayude utiliza una de las palabras claves:\n  *Certificados*\uD83D\uDCC4\n  *Afiliacion* \uD83C\uDD98\n  *Subsidios* \uD83D\uDCB5\n  *Cancelar* \u23F9\uFE0F";
            break;
        case 'certificados':
            mensaje = "Por favor " + user + " digite su numero de cedula sin puntos ni comas";
            break;
    }
    return mensaje;
}
