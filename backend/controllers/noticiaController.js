const NoticiaModel = require("../controllers/eventoController");
const Noticias = require("../data/dataNoticia");

class NoticiaServices{
    static listar(){
        return Noticias;
    }
}

module.exports = NoticiaServices;