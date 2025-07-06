const express = require("express");
const EventoServices = require("../controllers/eventoController");
const router = express.Router();

router.get("/listar", (req, res) => {
    const eventos = EventoServices.listar();
    return res.status(200).json(eventos);
});

module.exports = router;