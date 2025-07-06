const express = require("express");
const router = express.Router();
const NoticiasServices = require("../controllers/noticiaController");

router.get("/listar", (req, res) => {
    const noticias = NoticiasServices.listar();
    return res.status(200).json(noticias);
})

module.exports = router;