async function criarNoticia(event) {
    event.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const dataPublicacao = document.getElementById("data").value;
    const autor = document.getElementById("autor").value;
    const img = document.getElementById("img").value;
    const descricao = document.getElementById("descricao").value;

    const dados = { titulo, dataPublicacao, autor, img, descricao };

    try {
        const resposta = await axios.post('http://localhost:3000/noticias/criar', dados);
        console.log("Evento criado com sucesso:" , resposta.data);
    } catch (error) {
        console.error("Erro ao criar noticia:", error);
    }
}