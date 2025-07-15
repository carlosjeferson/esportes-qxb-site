const express = require("express");
const EventoServices = require("../controllers/eventoController");
const router = express.Router();

router.get("/listar", (req, res) => {
    try {
        const eventos = EventoServices.listar();
        return res.status(200).json(eventos);
    } catch (error) {
        return res.status(500).json({ mensagem: error.message});
    }
});

router.post("/criar", (req, res) => {
    try {
        const evento = EventoServices.criar(req.body);
        return res.status(201).json(evento);
    } catch (error) {
        return res.status(500).json({ mensagem : error.message });
    }
});

router.get("/recuperar/:id", (req, res) => {
    const evento = EventoServices.recuperar(req.params.id);
    if (!evento) {
        return res.status(404).json({ erro: "Evento não encontrado" });
    }
    return res.status(200).json(evento);
});

router.put("/editar/:id", (req, res) => {
    try {
        const evento = EventoServices.editar(req.body);
        if (!evento) {
            return res.status(404).json({ erro: "Evento não encontrado" });
        }
        return res.status(200).json(evento);
    } catch (error) {
        return res.status(400).json({ erro: error.message });
    }
});

module.exports = router;