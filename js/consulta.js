document.addEventListener('DOMContentLoaded', () => {
    const consultaForm = document.getElementById('consulta-viagem');
    if (consultaForm) {
        consultaForm.addEventListener('submit', function(event) {
            event.preventDefault();
    
            const busca = document.getElementById('busca').value.toLowerCase();
            const resultados = document.getElementById('resultados-consulta');
            resultados.innerHTML = '';
    
            let viagens = JSON.parse(localStorage.getItem('viagens')) || [];
            let viagensFiltradas = viagens.filter(viagem => 
                viagem.nome.toLowerCase().includes(busca) ||
                viagem.local.toLowerCase().includes(busca) ||
                viagem.detalhes.toLowerCase().includes(busca)
            );
    
            if (viagensFiltradas.length > 0) {
                viagensFiltradas.forEach(viagem => {
                    const viagemDiv = document.createElement('div');
                    viagemDiv.classList.add('viagem');
    
                    viagemDiv.innerHTML = `
                        <p><strong>Nome do Responsável:</strong> ${viagem.nome}</p>
                        <p><strong>Data:</strong> ${viagem.data}</p>
                        <p><strong>Local:</strong> ${viagem.local}</p>
                        <p><strong>Participantes:</strong> ${viagem.participantes}</p>
                        <p><strong>Detalhes:</strong> ${viagem.detalhes}</p>
                        <button onclick="excluirViagem(${viagem.id})">Excluir</button>
                    `;
    
                    resultados.appendChild(viagemDiv);
                });
            } else {
                resultados.innerHTML = '<p>Nenhuma viagem encontrada.</p>';
            }
        });
    }   
});

function excluirViagem(id) {
    let viagens = JSON.parse(localStorage.getItem('viagens')) || [];
    viagens = viagens.filter(viagem => viagem.id !== id);
    localStorage.setItem('viagens', JSON.stringify(viagens));
    alert('Viagem excluída com sucesso!');
    location.reload();
}