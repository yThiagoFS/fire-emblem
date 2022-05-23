//Constantes

const container = document.getElementById('container')
const inicioTela = document.getElementById('inicio')
const opcoesCombate = document.getElementById('opcoes-combate')

//Tela de inicio do jogo


function play(){
    audio.play();
}

function pause(){
    audio.pause();
}

function stop(){
    audio.pause();
    audio.currentTime = 0;
}

function aumentar_volume(){
    if( audio.volume < 1)  audio.volume += 0.1;
}

function diminuir_volume(){
    if( audio.volume > 0)  audio.volume -= 0.1;
}
     
function mute(){
    var btnMuted = document.querySelector('.mute')
    btnMuted.classList.toggle('fa-volume-mute')



    if( audio.muted ){
        audio.muted = false;
    }else{
        audio.muted = true;
    }
}

function inicio() {
    container.style.display = 'none'
    container.innerHTML = ``
    inicioTela.innerHTML = 
    ` 
    <div class="envelope-botoes-genero">
        <div class="botoes-genero">
            <h1>
            Escolha o gênero do seu Personagem:
            </h1>
            <input type="button" id="botao-feminino" value="feminino" onclick="classF()">
            <input type="button" id="botao-masculino" value="masculino" onclick="classM()">
        </div>
    </div>
    `

    document.getElementById('audio').innerHTML =`<source src="../music/The Streets of Whiterun.mp3" type="audio/mpeg">`
    audio.play()

}

// Seletor de classes Masculinas 

function classM() {
    container.innerHTML = `
    
    <button onclick="inicio()" class="voltar-genero">Voltar</button>
    
    <div class="envelope-container">
        <div class="conteudo1">
        <h1>Lanceiro</h1>
        <p id="titulo1">Classe com uma vida mediana, porém com crítico aprimorado. Bem parecida com Guerreiro, porém focando mais no fator "sorte". Ideal para ter um gostinho de apostar sem ter que focar muito em errar ou acabar com a batalha rápido</p>
        <div class="atributo">
            <div class="vida"><div class="bg-vida"><i class="fa-solid fa-heart"></i>35</div></div>
            <div class="dano"><div class="bg-dano"><i class="fa-solid fa-sword"></i>18</div></div>
            <div class="critico"><div class="bg-critico"><i class="fa-solid fa-dice-d20"></i> 40</div></div>
            <div class="acerto"><div class="bg-acerto">80</div></div>
            <div class="erro"><div class="bg-erro">20</div></div>
        </div>
        
        </div>
        <div class="conteudo-meio">
        <h1 style="text-align: center">Quebra-Escudos</h1>
        <p id="titulo2">Classe focada em força bruta e críticos, porém com uma chance enorme de errar seus golpes, focando no fator "hit kill" quando possível, além de ter uma vida aumentada para conseguir aguentar golpes até o seu "hit kill" consiga acertar. Os verdadeiros cabeça de músculos, que só tem isso pra eles.</p>
        <div class="atributo1">
            <div class="vida1"><div class="bg-vida1"><i class="fa-solid fa-heart"></i>35</div></div>
            <div class="dano1"><div class="bg-dano1">18</div></div>
            <div class="critico1"><div class="bg-critico1">40</div></div>
            <div class="acerto1"><div class="bg-acerto1">80</div></div>
            <div class="erro1"><div class="bg-erro1">20</div></div>
        </div>
        </div>
        <div class="conteudo2">
        <h1 style="text-align: center; ">Espadachim</h1>
        <p id="titulo3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa magni accusamus modi ab incidunt facilis nobis perspiciatis veritatis, cumque facere explicabo? Odit tempore error recusandae temporibus fugit quasi soluta dolorem!</p>
        <div class="atributo2">
            <div class="vida2"><div class="bg-vida2"><i class="fa-solid fa-heart"></i>35</div></div>
            <div class="dano2"><div class="bg-dano2">18</div></div>
            <div class="critico2"><div class="bg-critico2">40</div></div>
            <div class="acerto2"><div class="bg-acerto2">80</div></div>
            <div class="erro2"><div class="bg-erro2">20</div></div>
        </div>
        </div>
        </div>

        
    </div>

    <form id="opcoes-classes">
    <div class="opcoes">
        <div class="middle">
            <button onclick="select(4)">
                <a href="#" class="classe classe1">Lanceiro</a>
            </button>

            <button onclick="select(100)">
                <a href="#" class="classe classe2">Quebra-Escudos</a>
            </button>

            <button onclick="select(5)">
                <a href="#" class="classe classe3">Espadachim</a>
            </button>
            
          </div>
    </div>
</form>
`
    container.style.display = 'flex'
    container.classList.add('classes-masculino');
    inicioTela.innerHTML = ``
    
}

// Seletor de classes Femininas

function classF() {
    container.innerHTML = `
    
    <button onclick="inicio()" class="voltar-genero">Voltar</button>

    <div class="envelope-container">
        <div class="conteudo1">
        <h1>Lanceira</h1>
        <p id="titulo1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, ducimus. Eius, aliquam. Nobis magni provident, amet quasi ut ipsam. Soluta ipsam aspernatur corporis aliquam voluptatem exercitationem deleniti et corrupti odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. A temporibus neque porro in provident ut, delectus deleniti deserunt magnam minima ratione necessitatibus odit eveniet quaerat facilis quia alias animi eaque?</p>
        <div class="atributo">
            <div class="vida"><div class="bg-vida"><i class="fa-solid fa-heart"></i>35</div></div>
            <div class="dano"><div class="bg-dano">18</div></div>
            <div class="critico"><div class="bg-critico"><i class="fa-solid fa-dice-d20"></i> 40</div></div>
            <div class="acerto"><div class="bg-acerto">80</div></div>
            <div class="erro"><div class="bg-erro">20</div></div>
        </div>
        
        </div>
        <div class="conteudo-meio">
        <h1 style="text-align: center">Caçadora</h1>
        <p id="titulo2">Classe focada em acertos e críticos, porém tendo menos vida do que as outras classes, focando bastante no fator "sorte", para sempre terminar a batalha o mais rápido possível com críticos. A famosa corre muito, bate muito, mas não aguenta um peteleco.</p>
        <div class="atributo1">
            <div class="vida1"><div class="bg-vida1"><i class="fa-solid fa-heart"></i>35</div></div>
            <div class="dano1"><div class="bg-dano1">18</div></div>
            <div class="critico1"><div class="bg-critico1">40</div></div>
            <div class="acerto1"><div class="bg-acerto1">80</div></div>
            <div class="erro1"><div class="bg-erro1">20</div></div>
        </div>
        </div>
        <div class="conteudo2">
        <h1 style="text-align: center; ">Guerreira</h1>
        <p id="titulo3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa magni accusamus modi ab incidunt facilis nobis perspiciatis veritatis, cumque facere explicabo? Odit tempore error recusandae temporibus fugit quasi soluta dolorem!</p>
        <div class="atributo2">
            <div class="vida2"><div class="bg-vida2"><i class="fa-solid fa-heart"></i>35</div></div>
            <div class="dano2"><div class="bg-dano2">18</div></div>
            <div class="critico2"><div class="bg-critico2">40</div></div>
            <div class="acerto2"><div class="bg-acerto2">80</div></div>
            <div class="erro2"><div class="bg-erro2">20</div></div>
        </div>
        </div>
        </div>
    </div>
    <form id="opcoes-classes">
                <div class="opcoes">
                    <div class="middle">

                        <button onclick="select(1)">
                            <a href="#" class="classe classe1">Lanceira</a>
                        </button>

                        <button onclick="select(2)">
                            <a href="#" class="classe classe2">Caçadora</a>
                        </button>

                        <button onclick="select(3)">
                            <a href="#" class="classe classe3">Guerreira</a>
                        </button>

                        </div>
</form>

`
    container.style.display = 'flex'
    inicioTela.innerHTML = ``
    document.querySelector(".classes-masculino").style.display = 'flex'
    container.classList.remove('classes-masculino');

}

//Tranferir para uma arquivo que só irá conter a história. 

