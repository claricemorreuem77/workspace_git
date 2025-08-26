// Arquivo: script.js

// Função para simular a funcionalidade de busca (apenas demonstração)
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');

    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            // Em um site real, esta parte faria uma chamada API ou filtraria o conteúdo da página.
            console.log(`Pesquisando por: "${query}"`);
            alert(`Simulando busca por: "${query}"`);
            // Limpar campo após simulação
            searchInput.value = '';
        } else {
            alert('Por favor, digite um termo para buscar.');
        }
    });

    // Função para adicionar uma animação/transição suave ao passar o mouse (exemplo no CSS)
    // O CSS já trata as transições de hover e transform, mas o JS poderia adicionar classes
    // para animações mais complexas ou efeitos de scroll.
    
    // Exemplo de Placeholder para o botão "Assistir"
    const watchButton = document.querySelector('.watch-button');
    if (watchButton) {
        watchButton.addEventListener('click', () => {
            alert('Simulando o clique em "Assistir". Redirecionaria para um vídeo ou conteúdo multimídia.');
        });
    }

});