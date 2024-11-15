"use strict"
const http = require('http');
const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));


app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use( require('./routes/vistaInicial.routes'));


//Iniclializa servidor en puerto
app.listen(3000, function(err){
if (err){
  console.log(`Error al abrir el puerto 3000: ${err}`);
} else {
  console.log(`Servidor escuchando en el puerto 3000`);
}
});