async function criarEvento(event) {
        event.preventDefault();

        const titulo = document.getElementById("titulo").value;
        const data = document.getElementById("data").value;
        const local = document.getElementById("local").value;
        const inscricao = document.getElementById("inscricao").value;

        const dados = { titulo, data, local, inscricao };

        try {
            const resposta = await axios.post('http://localhost:3000/eventos/criar', dados);
            console.log("Evento criado com sucesso:", resposta.data);
        } catch (error) {
            console.error("Erro ao criar evento:", error);
        }
    }