class EventoModel{
    constructor(id, titulo, data, local, inscricao, ocorreu, ganhadores){
        this.id = id;
        this.titulo = titulo;
        this.data = new Date(data);
        this.local = local;
        this.inscricao = inscricao;
        this.ocorreu = ocorreu;
        this.ganhadores = this.ganhadores;
    }
}

module.exports = EventoModel;