const controller = {}


controller.index = (request, response) => {
    response.render("vistaInicial");
}

module.exports = controller;