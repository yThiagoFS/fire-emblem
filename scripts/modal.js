var containerPerfil = document.getElementById('perfil')

function modalPerfil(){
    containerPerfil.innerHTML = `
    <button class="fechar">X</button>
    <h1>Perfil</h1>
    <div class="foto-perfil">
        <img class="imagem-perfil" src="${hero.perfil}">
    </div>
    <div class="nome-jogador">
        <h1 class="">${hero.nome}</h1>
    </div>
    <div class="progresso-jogador">
        <h2>Progresso: ${hero.progresso}%</h2>
    </div>
    <div class="bosses-derrotados">
        <h2>Quantidade de chefões derrotados: ${hero.chefes}</h2>
    </div>`
}

