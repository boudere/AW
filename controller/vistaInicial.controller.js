const controller = {}
const mysql = require("mysql")
var express = require('express');
var router = express.Router();

controller.index = (request, response) => {
    response.render("vistaInicial");
}

controller.login = async(request, response) =>{

    const DaoVi = require("../mysql/vistaInicial")
    const dao = new DaoVi();
    const data = request.body;
    dao.login(data);

}
module.exports = controller;