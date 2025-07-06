class NoticiaModel{
    constructor(id, titulo, dataPublicacao, autor, img, descricao){
        this.id = id;
        this.titulo = titulo;
        this.dataPublicacao = new Date(dataPublicacao);
        this.autor = autor;
        this.img = img;
        this.descricao = descricao;
    }
}

module.exports = NoticiaModel;