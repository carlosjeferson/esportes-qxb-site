class EventoModel{
    constructor(id, titulo, data, local, inscricao){
        this.id = id;
        this.titulo = titulo;
        this.data = new Date(data);
        this.local = local;
        this.inscricao = inscricao;
    }
}

module.exports = EventoModel;