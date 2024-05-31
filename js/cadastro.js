document.addEventListener('DOMContentLoaded', () => {
    const cadastroForm = document.getElementById('cadastro-viagem');
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', function(event) {
            event.preventDefault();
    
            const nome = document.getElementById('nome').value;
            const data = document.getElementById('data').value;
            const local = document.getElementById('local').value;
            const participantes = document.getElementById('participantes').value;
            const detalhes = document.getElementById('detalhes').value;
    
            const viagem = {
                id: Date.now(),
                nome,
                data,
                local,
                participantes,
                detalhes
            };
    
            let viagens = JSON.parse(localStorage.getItem('viagens')) || [];
            viagens.push(viagem);
            localStorage.setItem('viagens', JSON.stringify(viagens));
    
            alert('Viagem cadastrada com sucesso!');
            this.reset();
        });
    }
});