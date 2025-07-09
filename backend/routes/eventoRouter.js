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

module.exports = router;