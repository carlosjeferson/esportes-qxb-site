const NoticiaModel = require("../models/noticiaModel");
const Noticias = require("../data/dataNoticia");

let id = 4;

class NoticiaServices{
    static listar(){
        return Noticias;
    }

    static criar(noticiaJson){
        try {
            const novaNoticia =  new NoticiaModel(
                ++id,
                noticiaJson.titulo,
                noticiaJson.dataPublicacao,
                noticiaJson.autor,
                noticiaJson.img,
                noticiaJson.descricao
            );
            
            Noticias.push(novaNoticia);
            return novaNoticia;
        } catch (error) {
            throw new Error (`Erro ao criar uma nova notícia ${error}`);
        }
    }

}

module.exports = NoticiaServices;