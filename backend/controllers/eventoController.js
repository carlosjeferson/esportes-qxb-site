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
        for(let i = 0; i < Eventos; i++){
            if( Eventos[i].id == idBusca){
                return Eventos[i];
            }
        }
        return false;
    }
}

module.exports = EventoServices;
