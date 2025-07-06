const EventoModel = require("../models/eventoModel");
const Eventos = require("../data/dataEvento");

class EventoServices {
    static listar() {
        return Eventos;
    }
}

module.exports = EventoServices;
