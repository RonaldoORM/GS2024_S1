document.addEventListener('DOMContentLoaded', () => {
    const relatorioDiv = document.getElementById('relatorio');
    if (relatorioDiv) {
        const viagens = JSON.parse(localStorage.getItem('viagens')) || [];
        const totalViagens = viagens.length;
        const totalParticipantes = viagens.reduce((total, viagem) => total + parseInt(viagem.participantes), 0);

        relatorioDiv.innerHTML = `
            <p><strong>Total de Viagens:</strong> ${totalViagens}</p>
            <p><strong>Total de Participantes:</strong> ${totalParticipantes}</p>
        `;
    }
});