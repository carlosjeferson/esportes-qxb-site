async function listarEventos() {
    try {
        const { data } = await axios.get('http://localhost:3000/eventos/listar');
        console.log(data);

        const listaEventos = document.querySelector("#eventos-futuros .event-list");

        for (const evento of data) {
            const dataFormatada = new Date(evento.data).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            });

            const div = document.createElement("div");
            div.classList.add("event-item");

            div.innerHTML = `
                <h3>${evento.titulo}</h3>
                <p><strong>Data:</strong> ${dataFormatada}</p>
                <p><strong>Local:</strong> ${evento.local}</p>
                <p><strong>Inscrições:</strong> ${evento.inscricao}</p>
                <a href="#" class="btn-details">Ver Detalhes e Inscrever-se</a>
            `;

            listaEventos.appendChild(div);
        }

    } catch (error) {
        console.error("Erro ao buscar eventos:", error);
    }
}

listarEventos();
