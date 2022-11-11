
const AutorController = require("../controllers/autor.controllers");


module.exports = app => {
    app.get("/api/autores",AutorController.findAllAutores);
    app.get("/api/autores/:id",AutorController.findAutor);
    app.post("/api/autores/new",AutorController.createAutor);
    app.put("/api/autores/update/:id",AutorController.updateAutor);
    app.delete("/api/autores/delete/:id",AutorController.deleteAutor);

};