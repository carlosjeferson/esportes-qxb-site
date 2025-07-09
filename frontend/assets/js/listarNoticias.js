async function listarNoticias() {
    const newsListContainer = document.querySelector('.news-list');
    if (!newsListContainer) {
        console.error('Elemento .news-list não encontrado no DOM.');
        return;
    }

    try {
        const { data } = await axios.get("http://localhost:3000/noticias/listar");
        const noticias = data; 

        if (noticias.length === 0) {
            newsListContainer.innerHTML = '<p>Nenhuma notícia encontrada no momento.</p>';
            return;
        }

        noticias.forEach(noticia => {
            const article = document.createElement('article');
            article.classList.add('news-item');

            const dataPublicacao = new Date(noticia.dataPublicacao);
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const dataFormatada = dataPublicacao.toLocaleDateString('pt-BR', options);

            article.innerHTML = `
                <h3>${noticia.titulo}</h3>
                <p class="news-meta">Publicado em ${dataFormatada} por ${noticia.autor || 'Secretaria de Esportes'}</p>
                <img src="${noticia.img}" alt="Imagem da Notícia">
                <p>${noticia.descricao || 'Sem resumo disponível.'}</p>
                <a href="#" class="btn-read-more">Leia Mais</a>
            `;

            newsListContainer.appendChild(article);
        });

    } catch (error) {
        console.error('Erro ao buscar notícias:', error);
        newsListContainer.innerHTML = '<p>Não foi possível carregar as notícias. Tente novamente mais tarde.</p>';
    }
}

listarNoticias();