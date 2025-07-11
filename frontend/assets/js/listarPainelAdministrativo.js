async function listarEventos() {
    const eventListContainer = document.getElementById("eventos-body");

    if (!eventListContainer) {
        console.error('Elemento #event-body não encontrado no DOM.');
        return;
    }

    try {
        const { data } = await axios.get('http://localhost:3000/eventos/listar');

        for (const evento of data) {
            const dataFormatada = new Date(evento.data).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            });

            const tr = document.createElement("tr");
            const tdID = document.createElement("td");
            const tdTitulo = document.createElement("td");
            const tdData = document.createElement("td");
            const tdLocal = document.createElement("td");
            const tdInscricao = document.createElement("td");
            const tdOcorreu = document.createElement("td");
            const tdGanhadores = document.createElement("td");
            const tdEditar = document.createElement("td");
            const tdApagar = document.createElement("td");


            tdEditar.innerHTML = `<img src='https://img.icons8.com/windows/32/create-new.png' onclick='editarEvento(${evento.id})' style="cursor: pointer;">`
            tdApagar.innerHTML = `<img src='https://img.icons8.com/material-outlined/24/filled-trash.png' onclick='apagarEvento(${evento.id})' style="cursor: pointer;">`

    
            tdID.innerHTML = evento.id;
            tdTitulo.innerHTML = evento.titulo;
            tdData.innerHTML = evento.data;
            tdLocal.innerHTML = evento.local;
            tdInscricao.innerHTML = evento.inscricao;

            if(!evento.ocorreu){
                tdOcorreu.innerHTML = 'Não';
            } else {
                tdOcorreu.innerHTML = 'Sim';
            }

            if(evento.ganhadores == ""){
                tdGanhadores.innerHTML = "-x-";
            } else {
                tdGanhadores.innerHTML = evento.ganhadores;
            }
            

            tr.appendChild(tdID);
            tr.appendChild(tdTitulo);
            tr.appendChild(tdData);
            tr.appendChild(tdLocal);
            tr.appendChild(tdInscricao);
            tr.appendChild(tdOcorreu);
            tr.appendChild(tdGanhadores);
            tr.appendChild(tdEditar);
            tr.appendChild(tdApagar);
            eventListContainer.appendChild(tr);

        }

    } catch (error) {
        console.error("Erro ao buscar eventos:", error);
        eventListContainer.innerHTML = '<p>Não foi possível carregar os eventos. Tente novamente mais tarde.</p>';
    }
}

async function listarNoticias() {
    const newsListContainer = document.getElementById("noticias-body")
    if (!newsListContainer) {
        console.error('Elemento .news-list não encontrado no DOM.');
        return;
    }
    

    try {
        const { data } = await axios.get("http://localhost:3000/noticias/listar");

        if (data.length === 0) {
            newsListContainer.innerHTML = '<p>Nenhuma notícia encontrada no momento.</p>';
            return;
        }

        for(const noticia of data ){
            const dataPublicacao = new Date(noticia.dataPublicacao);
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const dataFormatada = dataPublicacao.toLocaleDateString('pt-BR', options);

            const tr = document.createElement("tr");
            const tdID = document.createElement("td");
            const tdTitulo = document.createElement("td");
            const tdData = document.createElement("td");
            const tdAutor = document.createElement("td");
            const tdImg = document.createElement("td");
            const tdDescricao = document.createElement("td");
            const tdEditar = document.createElement("td");
            const tdApagar = document.createElement("td");

            tdEditar.innerHTML = `<img src='https://img.icons8.com/windows/32/create-new.png' onclick='editarNoticia(${noticia.id})' style="cursor: pointer;">`
            tdApagar.innerHTML = `<img src='https://img.icons8.com/material-outlined/24/filled-trash.png' onclick='apagarNoticia(${noticia.id})' style="cursor: pointer;">`

            tdID.innerHTML = noticia.id;
            tdTitulo.innerHTML = noticia.titulo;
            tdData.innerHTML = dataFormatada;
            tdAutor.innerHTML = noticia.autor;
            tdImg.innerHTML = noticia.img;
            tdDescricao.innerHTML = noticia.descricao;


            tr.appendChild(tdID);
            tr.appendChild(tdTitulo);
            tr.appendChild(tdData);
            tr.appendChild(tdAutor);
            tr.appendChild(tdImg);
            tr.appendChild(tdDescricao);
            tr.appendChild(tdEditar);
            tr.appendChild(tdApagar);
            newsListContainer.appendChild(tr);

            console.log(noticia)

        }

    } catch (error) {
        console.error('Erro ao buscar notícias:', error);
        newsListContainer.innerHTML = '<p>Não foi possível carregar as notícias. Tente novamente mais tarde.</p>';
    }
}

listarNoticias();

listarEventos();
