const express = require("express");
const router = express.Router();
const NoticiasServices = require("../controllers/noticiaController");

router.get("/listar", (req, res) => {
    try {
        const noticias = NoticiasServices.listar();
        return res.status(200).json(noticias);
    } catch (error) {
        return res.status(500).json({ messagem : error.message});
    }
})

router.post("/criar", (req, res) =>{
    try {
        const noticias = NoticiasServices.criar(req.body);
        return res.status(201).json(noticias);
    } catch (error) {
        return res.status(500).json({ messagem : error.message });
    }
});

module.exports = router;