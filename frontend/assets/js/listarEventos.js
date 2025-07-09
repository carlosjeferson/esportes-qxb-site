async function listarEventos() {
    const eventListContainer = document.querySelector('.event-list');

    if (!eventListContainer) {
        console.error('Elemento .event-list não encontrado no DOM.');
        return;
    }

    try {
        const { data } = await axios.get('http://localhost:3000/eventos/listar');
        const eventos = data;

        if( eventos.length === 0 ){
            eventListContainer.innerHTML = '<p>Nenhum evento encontrada no momento.</p>';
            return;
        }

        const listaFuturos = document.querySelector("#eventos-futuros .event-list");
        const listaPassados = document.querySelector("#eventos-passados .event-list");

        for (const evento of data) {
            const dataFormatada = new Date(evento.data).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            });

            const div = document.createElement("div");
            div.classList.add("event-item");

            if (evento.ocorreu) {
                // Evento passado
                div.classList.add("past");
                div.innerHTML = `
                    <h3>${evento.titulo}</h3>
                    <p><strong>Data:</strong> ${dataFormatada}</p>
                    <p><strong>Ganhadores:</strong> ${evento.ganhadores || "Em breve"}</p>
                    <a href="#" class="btn-details">Ver Retrospectiva</a>
                `;
                listaPassados.appendChild(div);
            } else {
                // Evento futuro
                div.innerHTML = `
                    <h3>${evento.titulo}</h3>
                    <p><strong>Data:</strong> ${dataFormatada}</p>
                    <p><strong>Local:</strong> ${evento.local}</p>
                    <p><strong>Inscrições:</strong> ${evento.inscricao}</p>
                    <a href="#" class="btn-details">Ver Detalhes e Inscrever-se</a>
                `;
                listaFuturos.appendChild(div);
            }
        }

    } catch (error) {
        console.error("Erro ao buscar eventos:", error);
        eventListContainer.innerHTML = '<p>Não foi possível carregar os eventos. Tente novamente mais tarde.</p>';
    }
}

listarEventos();
