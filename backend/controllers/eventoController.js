const EventoModel = require("../models/eventoModel");
const Eventos = require("../data/dataEvento");

let id = 4;

class EventoServices {
    static listar() {
        return Eventos;
    }

    static criar(eventoJson){
        try {
            const novoEvento = new EventoModel(
                ++id,
                eventoJson.titulo,
                eventoJson.data,
                eventoJson.local,
                eventoJson.inscricao,
                false,
                ""
            )
                Eventos.push(novoEvento);
                return novoEvento;
        } catch ( error ) {
            throw new Error (`Erro ao criar um novo evento: ${error.message}`);
        }
    }

    static recuperar(idBusca){
        for(let i = 0; i < Eventos.length; i++){
            if( Eventos[i].id == idBusca){
                return Eventos[i];
            }
        }
        return { error : "Evento não foi encontrado"};
    }

    static editar(dadosAtualizados) {
        const index = Eventos.findIndex(e => e.id == dadosAtualizados.id);

        if (index === -1) {
            return null; // evento não encontrado
        }

        try {
            const eventoAtualizado = new EventoModel(
                dadosAtualizados.id,
                dadosAtualizados.titulo,
                dadosAtualizados.data,
                dadosAtualizados.local,
                dadosAtualizados.inscricao,
                dadosAtualizados.ocorreu,
                dadosAtualizados.ganhadores
            );
            Eventos[index] = eventoAtualizado;
            console.log(eventoAtualizado);

            return eventoAtualizado;
        } catch (error) {
            throw new Error(`Erro ao editar o evento: ${error.message}`);
        }
    }

}

module.exports = EventoServices;
