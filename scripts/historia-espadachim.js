        var hero = {
            nome: ['Greg'],
            hp: [60],
            sprite: ['./sprites/Sword.gif'],
            img: ['./img/img/Sword1.jpg'],
            perfil: ['./img/rostoHero/rostoEspadachim.png'],
            ataque: [18],
            erro: [2],
            acerto: [8],
            crit: [9],
            animacao: [2900],
            dialogo: [''],
            progresso: [15],
            chefes: [3],
            historia: ['']
            
        }

        var boss = {
            nome: [],
            hp: [],
            sprite: [],
            img: [],
            ataque: [],
            erro: [],
            acerto: [],
            crit: [],
            animacao: [],
            fala: []


        }

        function select(sel){

            opcoesCombate.style.display = 'none'

            switch(sel){
                
                    

                case 5:
                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-Espadachim">
                    Sua jornada fora nada além do que um desejo carnal. A simples metodologia do reino do Oeste para conseguir alcançar os seus desejos independente de lealdade, honra, ou moral, a simples ideia de seguir o que você acredita era quase como um lema para os espadachins.
                    Seguir seus desejos era extremamente importante, ao ponto que, as únicas coisas que lhe faziam voltar atrás com uma decisão geralmente eram desejos de outras pessoas, ou a sua motivação para seguir sua decisão não era mais tão intensa.


                    
                    </p>

                    <button class="botao-historia" type="button" onclick="select(6)"> Continuar </button>

                    <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>

                    </div>
                    </div>
                    `
                    var titulo = document.getElementById('historia-Espadachim')
                    typeWrite(titulo)
                    container.style.display = 'flex'
                    container.style.maxWidth = '700px';
                    container.style.maxHeight = '700px';
                    container.style.height= '700px';
                    break;

                    //

                    case 6:
                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-Espadachim">
                    Mercenários, bandidos, aventureiros, heróis ou soldados, qualquer meio que lhe possibilitasse os resultados desejados era mais que bem vindo, independente de quais meios deveriam ser tomados, por causa disso, os espadachins eram extremamente versáteis em seus cargos, e normalmente impossíveis de se prever. Ver um espadachim andando por aí, era extremamente raro dizer se era um guerreiro que segue a luz, e ajuda velhinhas a levarem suas compras, ou um rufião que rouba doce de criança e bate na denominada velhinha, as variedades eram imprevisíveis! 
                    
                    </p>

                    <div class="envelope-botoes-historia"><button class="botao-historia" type="button" onclick="select(7)"> Continuar </button></div>
                    
                    <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>


                    </div>
                    </div>
                    `
                    var titulo = document.getElementById('historia-Espadachim')
                    typeWrite(titulo)

                    container.style.display = 'flex'
                    container.style.maxWidth = '700px';
                    container.style.maxHeight = '700px';
                    container.style.height= '700px';
                    break;

                    

                    case 7:
                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-Espadachim">
                    Segue a história de Greg, um espadachim mercenário que fez seu nome nas terras além dos reinos, não só ganhando o seu tão desejado dinheiro, como também arrecadando reputação e oportunidades com seu nome. A guerra contra Ufattelig não lhe abalou nem um pouco, afinal sua lealdade e patriotismo ao seu reino já se foram faz tempo, porém uma preocupação queimava em seu peito; “e se eles perderem? E se as forças do mal acabarem com o mundo? Sem o mundo, não consigo seguir meus desejos, meus objetivos de vida!” Logo, o mesmo decidiu sair em uma jornada contra as forças do mal a fim de preservar a sua vida de desejos.

                    
                    </p>

                    <div class="envelope-botoes-historia"><button class="botao-historia" type="button" onclick="select(8)"> Continuar </button></div>
                    
                    <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>


                    </div>
                    </div>
                    `
                    var titulo = document.getElementById('historia-Espadachim')
                    typeWrite(titulo)

                    container.style.display = 'flex'
                    container.style.maxWidth = '700px';
                    container.style.maxHeight = '700px';
                    container.style.height= '700px';
                    break;

                    case 8:
                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-Espadachim">
                    No começo de sua jornada, o mesmo já era consideravelmente forte o suficiente para derrotar criaturas como goblins, trolls ou até orcs, mesmo nunca tendo um talento inato, sua versatilidade era o que mais dominava o seu estilo de combate. Entretanto, e quanto a um inimigo extraordinário? Por não ser especializado em velocidade, era incapaz de correr e incapaz de uma batalha impossível de ser ganha, e por não ter uma força descomunal também não conseguia resolver os problemas com força bruta.
                    
                    </p>

                    <button class="botao-historia" type="button" onclick="select(9)"> Continuar </button>

                    <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>


                    </div>
                    </div>
                    `
                    var titulo = document.getElementById('historia-Espadachim')
                    typeWrite(titulo)
                    container.style.display = 'flex'
                    container.style.maxWidth = '700px';
                    container.style.maxHeight = '700px';
                    container.style.height= '700px';
                    break;


                    case 9:
                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-Espadachim">
                    Portanto, havia de pensar na situação que se encontrava; um ser armadurado gigantesco, com mais ou menos quatro metros de altura, bloqueia seu caminho atualmente, encarando-o vestindo um olhar análitico e desconfiado, com ambos polegar e indicador no queixo, como se ponderasse o Espadachim de cima a baixo. Fazer uma ação desnecessária pode resultar em consequências catastróficas, ou até mesmo custar sua própria vida, portanto Greg decide…
                    
                    </p>

                    <button class="botao-historia" type="button" onclick="select(10)"> Atacar o ser de armadura </button>
                    <button class="botao-historia" type="button" onclick="select(11)"> Esperar e ver o que ele quer </button>
                    <button class="botao-historia" type="button" onclick="select(12)"> Tentar conversar com a figura</button>
                    
                    <div class="imagem-personagem"><img  src="./img/img/guardion.jpg"></div>

                    </div>
                    </div>
                    `
                    var titulo = document.getElementById('historia-Espadachim')
                    typeWrite(titulo)
                    container.style.display = 'flex'
                    container.style.maxWidth = '700px';
                    container.style.maxHeight = '700px';
                    container.style.height= '700px';
                    break;

                    case 10:

                        boss.nome = 'Guardião'
                        boss.hp = 3000
                        boss.sprite = './sprites/guardion.gif'
                        boss.img = './img/img/guardion.jpg'
                        boss.ataque = 200
                        boss.erro = 4
                        boss.acerto = 8
                        boss.crit = 10 
                        boss.animacao = 2300
                        


                        container.style.display ='flex'
                        container.style.maxWidth = "1400px";
                        container.style.height = '500px';
                        
                        combateFake('select(11)')
                        ataqueFake()
                        opcoesCombate.style.display = 'block'

                        
                        
                    break;

                    case 11:
                        opcoesCombate.style.display = 'none'
                        container.innerHTML = `

                        <div class="envelope-historia-personagem">
                    
                        <div class="historia-personagem"><span class='guardion'>Guardião:</span><p id="historia-Espadachim">
                        Guardião: “Olha só, achei que você era só um franguinho sem coragem de revidar o mínimo de intimidação, parece que subestimei você até demais.”</p>

                        
                        
                        <button class="botao-historia" type="button" onclick="select(13)"> Continuar </button>
                        
                        <div class="imagem-personagem"><img  src="./img/img/guardion.jpg"></div>

                        </div>
                        </div>
                        `
                        var titulo = document.getElementById('historia-Espadachim')
                        typeWrite(titulo)
                        container.style.display = 'flex'
                        container.style.maxWidth = '700px';

                    break;

                    case 12:
                        container.innerHTML = `

                        <div class="envelope-historia-personagem">
                    
                        <div class="historia-personagem"><span class='guardion'>Guardião:</span><p id="historia-Espadachim">
                        Guardião: “Nada mal. Sua forma física não decai em nenhum aspecto. Não que você seja muito bom em alguma parte, já é satisfatório saber que você não é horrível.”</p>

                        
                        
                        <button class="botao-historia" type="button" onclick="select(13)"> Continuar </button>
                        
                        <div class="imagem-personagem"><img  src="./img/img/guardion.jpg"></div>

                        </div>
                        </div>
                        `
                        var titulo = document.getElementById('historia-Espadachim')
                        typeWrite(titulo)
                        container.style.display = 'flex'
                        container.style.maxWidth = '700px';

                    break;

                    case 12:
                        container.innerHTML = `

                        <div class="envelope-historia-personagem">
                    
                        <div class="historia-personagem"><p id="historia-Espadachim">
                        O Ser de armadura levanta a sua mão, como se interrompesse a sua fala, e mesmo ignorando tal sinal e continuando a tentar ter a comunicação, ele apenas lhe ignora</p>

                        
                        <button class="botao-historia" type="button" onclick="select(13)"> Continuar </button>
                        <div class="imagem-personagem"><img  src="./img/img/guardion.jpg"></div>
                        
            
                        </div>
                        </div>
                        `
                        var titulo = document.getElementById('historia-Espadachim')
                        typeWrite(titulo)
                        container.style.display = 'flex'
                        container.style.maxWidth = '700px';

                    break;

                    case 13:
                        container.innerHTML = `

                        <div class="envelope-historia-personagem">
                    
                        <div class="historia-personagem"><span class='guardion'>Guardião:</span><p id="historia-Espadachim">
                        Guardião: “Perdão por demorar com as introduções, eu sou Ru’thra, mas o senhor pode me chamar de Guardião a ponto de facilitar a sua memória. Estou em uma missão de exterminar as forças do mal, porém, minha fornalha de almas está quase no limite, caso eu continue, estou certo a perecer sem ao menos deter Ufattelig, o Rei Demônio, por eu não saber a sua localização ainda. Guerreiro, eu preciso de sua ajuda.”</p>

                        <button class="botao-historia" type="button" onclick="select(14)">Por quê você quer minha ajuda? </button>
                        <button class="botao-historia" type="button" onclick="select(15)">Ru’thra? Esse não é o rei do reino do Oeste?</button>
                        <button class="botao-historia" type="button" onclick="select(16)">Por quê eu?</button>

                        

                        

                        <div class="imagem-personagem"><img  src="./img/img/guardion.jpg"></div>
                        
                        </div>
                        </div>
                        `
                        var titulo = document.getElementById('historia-Espadachim')
                        typeWrite(titulo)
                        container.style.display = 'flex'
                        container.style.maxWidth = '700px';
                    
                    break;

                    case 14:
                        container.innerHTML = `

                        <div class="envelope-historia-personagem">
                    
                        <div class="historia-personagem"><span class='guardion'>Guardião:</span><p id="historia-Espadachim">
                        Guardião: “Você foi um dos únicos guerreiros que me encontrou nessas terras desertas. O último humano que vi foi um dos meus súditos, que morreu em batalha a pouco tempo. Só você consegue me ajudar a derrotar Ufattelig.” 
                        </p>

                        <button class="botao-historia" type="button" onclick="select(17)">Entendido. Irei lhe ajudar.</button>
                        <button class="botao-historia" type="button" onclick="select(18)">Eu nunca concordei com isso! Vai se ferrar!</button>
                        

                        

                        

                        <div class="imagem-personagem"><img  src="./img/img/guardion.jpg"></div>
                        
                        </div>
                        </div>
                        `
                        var titulo = document.getElementById('historia-Espadachim')
                        typeWrite(titulo)
                        container.style.display = 'flex'
                        container.style.maxWidth = '700px';
                    
                    break;

                    case 15:
                        container.innerHTML = `

                        <div class="envelope-historia-personagem">
                    
                        <div class="historia-personagem"><span class='guardion'>Guardião:</span><p id="historia-Espadachim">
                        “Sim rapaz. Eu sou o Rei Lanceiro, Ru’thra, o último guardião da linhagem de guardiões que foram levantados a fim de derrotar Ufattelig. Como você já deve ter adivinhado, nós falhamos com nosso propósito, mas ainda podemos cumpri-lo.”
                        </p>

                        <button class="botao-historia" type="button" onclick="select(17)">Entendido. Irei lhe ajudar.</button>
                        <button class="botao-historia" type="button" onclick="select(18)">Eu nunca concordei com isso! Vai se ferrar!</button>
                        

                        

                        

                        <div class="imagem-personagem"><img  src="./img/img/guardion.jpg"></div>
                        
                        </div>
                        </div>
                        `
                        var titulo = document.getElementById('historia-Espadachim')
                        typeWrite(titulo)
                        container.style.display = 'flex'
                        container.style.maxWidth = '700px';
                    
                    break;

                    case 16:
                        container.innerHTML = `

                        <div class="envelope-historia-personagem">
                    
                        <div class="historia-personagem"><span class='guardion'>Guardião:</span><p id="historia-Espadachim">
                        “Guerreiro. Eu sou incapaz de prosseguir mais um passo. Minha fornalha de almas, minha fonte de energia, está perto de se esgotar, e com o seu fim, também chegará o meu. Eu preferiria queimar nas chamas de Tártaro ao invés de garantir que nada poderá ficar no caminho de Ufattelig, os Guardiões são os únicos seres capazes de derrotá-lo, ele é forte demais para qualquer outro ser humano.”
                        </p>

                        <button class="botao-historia" type="button" onclick="select(17)">Entendido. Irei lhe ajudar.</button>
                        <button class="botao-historia" type="button" onclick="select(18)">Eu nunca concordei com isso! Vai se ferrar!</button>
                        

                        

                        

                        <div class="imagem-personagem"><img  src="./img/img/guardion.jpg"></div>
                        
                        </div>
                        </div>
                        `
                        var titulo = document.getElementById('historia-Espadachim')
                        typeWrite(titulo)
                        container.style.display = 'flex'
                        container.style.maxWidth = '700px';
                    
                    break;

                    case 17:
                        container.innerHTML = `

                        <div class="envelope-historia-personagem">
                    
                        <div class="historia-personagem"><span class='guardion'>Guardião:</span><p id="historia-Espadachim">
                        Guardião: “Vá para o Norte aventureiro, onde o caído reino dos cavaleiros ainda mantém suas ruínas. Encontre um dos capatazes de Ufattelig, Lacerta, um homem-lagarto que traz escravos e prisioneiros de guerra para o exército das forças do mal, ele será seu desafio mais fácil, porém ainda será um desafio. Encontre informações da localização de Ufattelig através dele, e quando você achá-lo, eu estarei lá.”
                        </p>

                        <button class="botao-historia" type="button" onclick="select(21)">Continuar</button>

                        
                        
                        

                        

                        

                        <div class="imagem-personagem"><img  src="./img/img/guardion.jpg"></div>
                        
                        </div>
                        </div>
                        `
                        //Ajustar

                        var titulo = document.getElementById('historia-Espadachim')
                        typeWrite(titulo)
                        container.style.display = 'flex'
                        container.style.maxWidth = '700px';

                        pause()
                        stop()
                    
                    break;

                    case 18:
                        container.innerHTML = `

                        <div class="envelope-historia-personagem">
                    
                        <div class="historia-personagem"><span class='guardion'>Guardião:</span><p id="historia-Espadachim">
                        Guardião: “Então terei que lhe matar e esperar a próxima pessoa que concorda… Você sabe demais. Não posso deixar com que meu plano vaze para Ufattelig.”
                        
                        </p>

                        <button class="botao-historia" type="button" onclick="select(19)">E-Espera! Eu estava zoando! É só zoeira!</button>
                        <button class="botao-historia" type="button" onclick="select(20)">Vamo nessa monte de lata. Eu vou te matar até você morrer</button>

                        
                        
                        

                        
                          
                        

                        <div class="imagem-personagem"><img  src="./img/img/guardion.jpg"></div>
                        
                        </div>
                        </div>
                        `
                        

                        var titulo = document.getElementById('historia-Espadachim')
                        typeWrite(titulo)
                        container.style.display = 'flex'
                        container.style.maxWidth = '700px';

                        pause()
                        stop()
                    
                    break;

                    case 19:
                        container.innerHTML = `

                        <div class="envelope-historia-personagem">
                    
                        <div class="historia-personagem"><span class='guardion'>Guardião:</span><p id="historia-Espadachim">
                        Guardião: “Imaginei que você voltaria a consciência a tempo.” 
                        Guardião: “Vá para o Norte aventureiro, onde o caído reino dos cavaleiros ainda mantém suas ruínas. Encontre um dos capatazes de Ufattelig, Lacerta, um homem-lagarto que traz escravos e prisioneiros de guerra para o exército das forças do mal, ele será seu desafio mais fácil, porém ainda será um desafio. Encontre informações da localização de Ufattelig através dele, e quando você achá-lo, eu estarei lá.”
                        
                        </p>                

                        <div class="imagem-personagem"><img  src="./img/img/guardion.jpg"></div>
                        
                        </div>
                        </div>

                        <button class="botao-historia" type="button" onclick="select(21)">Continuar</button>

                        `
                        //Ajustar

                        var titulo = document.getElementById('historia-Espadachim')
                        typeWrite(titulo)
                        container.style.display = 'flex'
                        container.style.maxWidth = '700px';

                        pause()
                        stop()
                    
                    break;

                    case 20:

                        boss.nome = 'Guardião'
                        boss.hp = 3000
                        boss.sprite = './sprites/guardion.gif'
                        boss.img = './img/img/guardion.jpg'
                        boss.ataque = 300
                        boss.erro = 0
                        boss.acerto = 10
                        boss.crit = 100 
                        boss.animacao = 8500
                        boss.fala = 'Guardião: “Nunca imaginaria que houvesse alguém tão incapaz de entender a situação…”'

                        combate()
                        container.style.display ='flex'
                        container.style.maxWidth = "1400px";
                        container.style.height = '500px';

                        ataqueHero()

                        //ARRUMAR MODAL DE MORTE  


                        
                    
                    break;

                    case 21:
                        
                        audio.innerHTML = ``
                        audio.innerHTML =`<source src="../music/calangoMusic.mp3" type="audio/mpeg">`
                        play()
                        

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-Espadachim">
                    Greg então parte para os reino do Norte, encontrando vários inimigos no caminho, porém facilmente acabando com eles, e eventualmente, acabando trombando com Lacerta, imediatamente assumindo a instância de batalha, por ele ser o único homem-lagarto que havia encontrado até agora. 
                    
                    </p>

                    <button class="botao-historia" type="button" onclick="select(22)"> Continuar </button>

                    <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>


                    </div>
                    </div>


                    `
                    var titulo = document.getElementById('historia-Espadachim')
                    typeWrite(titulo)
                    container.style.display = 'flex'
                    container.style.maxWidth = '700px';
                    container.style.maxHeight = '700px';
                    container.style.height= '700px';

                    break;

                    case  22:


                        hero.dialogo = `<p>Lacerta: “Como você ousa invadir o território de Lorde Ufattelig? Você é louco?!”</p> <p>Greg: “Mas que diabos é isso? Uma lagartixa falante?”</p> <p>Lacerta: “Vou te informar que eu sou descendente de um dragão de komodo, cuidado comigo!”</p>`


                        boss.nome = 'Lagartixa Falante'
                        boss.hp = 45
                        boss.sprite = './sprites/calango.gif'
                        boss.img = './img/img/calango.jpg'
                        boss.ataque = 18
                        boss.erro = 4
                        boss.acerto = 8
                        boss.crit = 10 
                        boss.animacao = 2300

                        hero.historia = 'select(23)'

                        combateFake('combate()')
                        
                        container.style.display ='flex'
                        container.style.maxWidth = "1400px";
                        container.style.height = '500px';
                        break;
                        


                        case 23:

                        
                        container.innerHTML = `

                        <div class="envelope-historia-personagem">
                    
                        <div class="historia-personagem"><p id="historia-Espadachim">
                        Após derrotar Lacerta, Greg acaba encontrando um papel dentro de seu bolso (Lagartos tem bolsos?) que dizia a localização de seu próximo oponente, e uma nova pista da localização de Ufattelig; a princesa do reino do Sul, corrompida pelas forças do mal. 
                        
                        </p>

                        <button class="botao-historia" type="button" onclick="select(24)"> Continuar </button>

                        <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>


                        </div>
                        </div>


                        `
                    var titulo = document.getElementById('historia-Espadachim')
                    typeWrite(titulo)
                    container.style.display = 'flex'
                    container.style.maxWidth = '700px';
                    container.style.maxHeight = '700px';
                    container.style.height= '700px';

                    break;


                    case 24:
                        container.innerHTML = `

                        <div class="envelope-historia-personagem">
                    
                        <div class="historia-personagem"><p id="historia-Espadachim">
                        Sua localização não fora a coisa mais inconspicua do mundo, por ainda utilizar o caído reino dos Quebra-Escudos como seu castelo. Ao contrário de Lacerta, a princesa, Securis, era com total certeza um desafio a altura de se superar. 
                        
                        </p>
            
                        <button class="botao-historia" type="button" onclick="select(25)"> Continuar </button>
            
                        <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
            
            
                        </div>
                        </div>
            
            
                        `
                        var titulo = document.getElementById('historia-Espadachim')
                        typeWrite(titulo)
                        container.style.display = 'flex'
                        container.style.maxWidth = '700px';
                        container.style.maxHeight = '700px';
                        container.style.height= '700px';
            
                        break;


                        case 25:

                        hero.dialogo = `<p>Securis: “Quem é você? Quem ousa pisar no território de Securis, serva de Ufattelig?”</p> <p>Greg: “Pra uma princesa, seu cabelo é bem uó, sua bruaca!”</p> <p>Securis: “ABSURDO! SE LIGA HEIN ESPADACHIM!”</p>`
                        combateFake('combate()')

                        boss.nome = 'Securis'
                        boss.hp = 80
                        boss.sprite = './sprites/Securis.gif'
                        boss.img = './img/img/Securis.jpg'
                        boss.ataque = 40
                        boss.erro = 6
                        boss.acerto = 7
                        boss.crit = 8
                        boss.animacao = 2300


                    

                    container.style.display ='flex'

                    container.style.maxWidth = "1400px";

                    container.style.height = '500px';

                    break;

                    case 26:

                        container.innerHTML = `

                        <div class="envelope-historia-personagem">
                    
                        <div class="historia-personagem"><p id="historia-Espadachim">
                        Após derrotar Securis, a mesma convenientemente havia dissipado as forças do mal de seu corpo (bem convenientemente, como se fosse uma história…) informando o bravo “herói” de mais uma pista da localização de Ufattelig, mais um de seus oficiais (para variar) um antigo invocador ermitão, Vocator, que foi corrompido pela maldade, servindo Ufattelig de uma forma menos agressiva, apenas lhe fornecendo unidades de batalha, por conseguir invocá-las, e não ativamente indo atrás de prisioneiros ou de vítimas de sua magia, ou seja, um covardão que não aguenta ver sangue.
                        
                        </p>
            
                        <button class="botao-historia" type="button" onclick="select(27)"> Continuar </button>
            
                        <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
            
            
                        </div>
                        </div>
            
            
                        `
                        var titulo = document.getElementById('historia-Espadachim')
                        typeWrite(titulo)
                        container.style.display = 'flex'
                        container.style.maxWidth = '700px';
                        container.style.maxHeight = '700px';
                        container.style.height= '700px';
            
                        break;


                        case 27:
                            
                        hero.dialogo = `<p>Vocator: “Como você encontrou esse lugar? Eu tive certeza de contar apenas aos oficiais de Ufattelig! Não pode ser…”</p> <p>Greg: “Ah mas pode ser sim velhote. Já foram dois, e você é o próximo.”</p> <p>Vocator: “Impossível! Você não vai passar!”</p>`

                        combateFake('combate()')

                        boss.nome = 'Vocator'
                        boss.hp = 110 
                        boss.sprite = './sprites/voLcator.gif'
                        boss.img = './img/img/volcator.jpg'
                        boss.ataque = 25
                        boss.erro = 4
                        boss.acerto = 8
                        boss.crit = 10 
                        boss.animacao = 7200


                



                        

                        container.style.display ='flex'

                        container.style.maxWidth = "1400px";

                        container.style.height = '500px';

                        break;

                        case 28:
                            container.innerHTML = `

                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-Espadachim">
                            Vocator foi um desafio maior ainda que Securis, por suas invocações tomarem o seu lugar, lhe fornecendo segurança a maior parte do tempo. Mesmo derrotado entretanto, o mesmo não havia voltado ao seu estado normal, por estar completamente tomado pelas trevas. Aparentemente, até uma princesa tem mais força do que um mago experiente? Isso apenas comprova o quão banana era. Obviamente, era uma pena não conseguir extrair informações do mago, mas tal problema foi totalmente resolvido apenas olhando um pouco para seu esconderijo, coincidentemente, intelectuais adoravam escrever e anotar tudo o que tinham conhecimento, inclusive a localização de seus parceiros.
                            Greg foi capaz de encontrar o próximo oficial a eliminar, ou melhor, os dois próximos.
        
                            
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(29)"> Continuar </button>
                
                            <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
                
                
                            </div>
                            </div>
                
                
                            `
                            var titulo = document.getElementById('historia-Espadachim')
                            typeWrite(titulo)
                            container.style.display = 'flex'
                            container.style.maxWidth = '700px';
                            container.style.maxHeight = '700px';
                            container.style.height= '700px';
                
                            


                        break;

                        case 29:

                            container.innerHTML = `

                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-Espadachim">
                            Os próximos oficiais baseiam-se em dois antigos servos reais, o segundo mais habilidoso Espadachim do Reino dos espadachins, ficando para trás apenas em relação ao rei, e um dos antigos magos que construíram os Guardiões, a última tentativa da humanidade de repelir Ufattelig, infelizmente, ambos estavam completamente corrompidos pelo mal, por terem sido um dos primeiros a cair durante a grande guerra, afinal, estavam na linha de frente da aliança. 
                            Isso significava que, não haveria uma situação de tanta sorte quanto Securis, a batalha seria até a morte, não que todas até agora não fossem, mas salvá-los não era uma opção.
                            Seus nomes, mesmo que marcados na história por décadas, haviam sido perdidos, banhados por histórias de suas brutalidades enquanto na governança de Ufattelig, mesmo sendo pessoas extraordinárias, capazes de receberem posições reais, apenas suas ocupações, como “Mago” e “Espadachim” havia lhe restado. Um triste fim.

        
                            
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(30)">  Irei lutar contra o segundo melhor Espadachim, claro que quando eu derrotá-lo, EU me tornarei o segundo melhor Espadachim! </button>

                            <button class="botao-historia" type="button" onclick="select(36)">  Irei lutar contra o mago real, é uma boa oportunidade de saber um pouco mais do porque os guardiões existem, e também bater em mago é muito legal! </button>
                
                            <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
                
                
                            </div>
                            </div>
                
                
                            `
                            var titulo = document.getElementById('historia-Espadachim')
                            typeWrite(titulo)
                            container.style.display = 'flex'
                            container.style.maxWidth = '700px';
                            container.style.maxHeight = '700px';
                            container.style.height= '700px';
                                
                        break;

                        case 30: 

                            container.innerHTML = `

                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-Espadachim">
                            Claro, o pensamento individualista, egoísta, e detestável de Greg existia até no fim do mundo, “serei o melhor, com total certeza!”, uma linha de decisão simples, mas que querendo ou não, iria progredir na missão de salvar o mundo. Então, Greg partiu em direção ao seu oponente Espadachim, confiante que iria ganhar, porém não sabendo o desafio que estaria por vir.
        
                            
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(31)"> Continuar </button>
                
                            <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
                
                
                            </div>
                            </div>
                
                
                            `
                            var titulo = document.getElementById('historia-Espadachim')
                            typeWrite(titulo)
                            container.style.display = 'flex'
                            container.style.maxWidth = '700px';
                            container.style.maxHeight = '700px';
                            container.style.height= '700px';

                            break;

                            case 31: 

                            container.innerHTML = `

                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-Espadachim">
                            A localização do Espadachim corrompido nada mais era do que nos portões do castelo de Ufattelig, o que facilitava e muito a situação de Greg, afinal, em sua cabeça, era só derrotar o inimigo em frente, e logo depois, derrotar Ufatellig, certo? 
        
                            
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(32)"> Continuar </button>
                
                            <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
                
                
                            </div>
                            </div>
                
                
                            `
                            var titulo = document.getElementById('historia-Espadachim')
                            typeWrite(titulo)
                            container.style.display = 'flex'
                            container.style.maxWidth = '700px';
                            container.style.maxHeight = '700px';
                            container.style.height= '700px';

                            break;

                            case 32: 

                            container.innerHTML = `

                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-Espadachim">
                            O guerreiro em sua frente, vestido de cabeça aos pés de armadura carmesim, exalando uma aura óbvia de corrupção, ficava em seu caminho, com a espada cravada em sua frente, enquanto descansava as mãos em sua maçã, como se estivesse aguardando a presença de Greg faz um tempo. Ainda não demonstrando vontade alguma de lutar, o mesmo falava, em um tom alto e brusco, somente pela voz era perceptível que aquele homem havia lutado inúmeras batalhas em seu passado, e ele não planejava perder esta.
        
                            
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(33)"> Continuar </button>
                
                            <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg.jpg"></div>
                
                
                            </div>
                            </div>
                
                
                            `
                            var titulo = document.getElementById('historia-Espadachim')
                            typeWrite(titulo)
                            container.style.display = 'flex'
                            container.style.maxWidth = '700px';
                            container.style.maxHeight = '700px';
                            container.style.height= '700px';

                            break;


                            case 33: 

                            hero.dialogo = `<p>Espadachim Corrompido: “Guerreiro! Dê meia volta imediatamente, lhe aviso que mais um passo, e eu lhe corto em vários pedaços que nem uma melância do Fruit Ninja!“</p> <p>Greg: “Olha, significa que se eu ir saltitando, eu posso passar? Tecnicamente não vou dar passos.”</p> <p>Espadachim Corrompido: “Bela piada, vamos ver se você consegue cuspir mais palavras decapitado!”</p>`
                            combateFake('combate')

                            //FAZER OS SPRITES 

                            boss.nome = 'Espadachim Corrompido'
                            boss.hp = 235
                            boss.sprite = './sprites/Espadachim Corrompido.gif'
                            boss.img = './img/img/Espadachim Corrompido.jpg'
                            boss.ataque = 15
                            boss.erro = 4
                            boss.acerto = 9
                            boss.crit = 10 
                            boss.animacao = 2300

                            


                            break;

                            case 34: 

                            container.innerHTML = `

                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-espadachim">
                            Não surpreendentemente, o espadachim era realmente muito feroz com seus ataques, arrastando sua espada na estrada, fazendo inúmeras faíscas a cada golpe, a cada estocada quase fazendo com que Greg caísse no chão, porém, havia emergido vitoriosamente. 
                            Greg: “MINHA NOSSA SENHORA, EU SOU O SEGUNDO MELHOR ESPADACHIM DO REINO! YEES!”
                            O espadachim restante não conseguia colocar seus dois neurônios juntos a fim de perceber que, seu reino não exatamente “existia” mais, teoricamente, ele poderia ser o último espadachim do mundo, porém caso viesse a essa realização, era capaz dele se auto-proclamar o melhor espadachim do reino, por não existir mais nenhum.

        
                            
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(35)"> Continuar </button>
                
                            <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg.jpg"></div>
                
                
                            </div>
                            </div>
                
                
                            `
                            var titulo = document.getElementById('historia-espadachim')
                            typeWrite(titulo)
                            container.style.display = 'flex'
                            container.style.maxWidth = '700px';
                            container.style.maxHeight = '700px';
                            container.style.height= '700px';

                            break;

                            case 35: 

                            container.innerHTML = `

                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-espadachim">
                            Após a batalha, faltava apenas seguir a dentro do castelo, porém, ao olhar aos arredores do castelo, havia uma área mais morta do que o normal, onde a terra era seca e extremamente preta, lembrando o carvão, se quisesse, poderia simplesmente ignorar a anormalidade sem quaisquer problemas. Quem se importa que a terra parecia carvão naquela parte? Mas um pequeno impulso pulsava na cabeça de Greg, “O que será que tem lá? Eu quero ver o que tem lá”, por seguir seus desejos, tal escolha era algo normal em seu dia a dia, por pura curiosidade tinha vontade de trilhar caminhos paralelos a sua jornada.

        
                            
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(41)"> Acho que vou dar uma olhada no que tem ali, com certeza não é algo de errado, né? Vai que encontro alguns pães de alho ali, com um churras e uma grelha daquelas!
                            </button>

                            <button class="botao-historia" type="button" onclick="select(45)"> Não posso me distrair agora, por mais que eu queira muito, muito, muito ir… Não posso! Cada segundo importa, e não sei se o Ufattelig sei lá, pula da janela pra fugir!
                            </button>
                
                            <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg.jpg"></div>
                
                
                            </div>
                            </div>
                
                
                            `
                            var titulo = document.getElementById('historia-espadachim')
                            typeWrite(titulo)
                            container.style.display = 'flex'
                            container.style.maxWidth = '700px';
                            container.style.maxHeight = '700px';
                            container.style.height= '700px';

                            break;

                            case 36: 

                            container.innerHTML = `

                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-espadachim">
                            Querendo ou não, ver a oposição extremamente fraca de Vocator fez com que Greg adquirisse um pré conceito de magos, “Todos os magos são pamonhas, logo, vou acabar com esse mago bem rápido” não sabendo o que estava por vir, mas, também, como poderia? Mesmo tendo acabado com algumas forças extremamente fortes do mal, seu pensamento não passava de “Quero viver meus desejos!”. Talvez fosse sua forte ignorância, ou somente pura falta de pensamento, talvez os dois, quem sabe?

        
                            
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(37)"> Continuar
                            </button>

                           
                
                            <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg.jpg"></div>
                
                
                            </div>
                            </div>
                
                
                            `
                            var titulo = document.getElementById('historia-espadachim')
                            typeWrite(titulo)
                            container.style.display = 'flex'
                            container.style.maxWidth = '700px';
                            container.style.maxHeight = '700px';
                            container.style.height= '700px';

                            break;

                            case 37: 

                            container.innerHTML = `

                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-espadachim">
                            A curiosidade acabou sendo maior do que o desejo de ser o melhor, perguntas como por quê os guardiões existem? Como eles foram criados? Quão forte é um deles? 
                            Foram as mais comuns. Mas, talvez, enfrentar um dos criadores de tais armas de combate fosse uma experiência reveladora, além de, na cabeça de Greg, ser uma batalha fácil de lidar, inocente de seu futuro desafio.


        
                            
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(38)"> Continuar
                            </button>

                           
                
                            <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg.jpg"></div>
                
                
                            </div>
                            </div>
                
                
                            `
                            var titulo = document.getElementById('historia-espadachim')
                            typeWrite(titulo)
                            container.style.display = 'flex'
                            container.style.maxWidth = '700px';
                            container.style.maxHeight = '700px';
                            container.style.height= '700px';

                            break;

                            
                            case 38: 

                            hero.dialogo = `<p>Mago Corrompido: “Saudações, guerreiro. Perdão pela minha falta de sutileza, porém como você derrotou vários oficiais de Ufattelig, fui encarregado de formalmente acabar com a sua raça, da forma mais rápida possível.”</p> <p>Greg: “Ahh… Eu achei que todo mago era pamonha, mas parece que são loucos também, não tá vendo que nem arma você tem amigo?!</p> <p>Mago Corrompido: “Não seja por isso “amigo”, um mago como eu nem ao menos precisa de armas contra você…”</p>`
                            combateFake('combate()')

                            boss.nome = 'Mago Corrompido'
                            boss.hp = 150
                            boss.sprite = './sprites/Mago Corrompido.gif'
                            boss.img = './img/img/Mago Corrompido.jpg'
                            boss.ataque = 25
                            boss.erro = 7
                            boss.acerto = 9
                            boss.crit = 10
                            boss.animacao = 2300

                            break;

                            case 39: 

                            container.innerHTML = `

                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-espadachim">
                            Quem diria que um mago seria tão poderoso assim? Greg que o diga. Derrotá-lo foi mais difícil do que matar barata com veneno, nem quando achava que ganharia havia ganhado de fato, e a batalha havia se alastrado demais. Obviamente, após derrotá-lo, roubar seus pertences e roupa era o mais cordial, o que um cadáver tem a dizer sobre perder o que é seu?
                            Entre seus itens, havia um mapa da localização do castelo de Ufattelig, o qual usou para seguir em frente, no caminho, acaba lembrando-se de um fator indispensável!
                            Greg: “AHH! EU NEM CONSEGUI SEQUER UMA PISTA DOS GUARDIÕES, O IDIOTA MORREU SÓ ME AMEAÇANDO!”
                            Mesmo que tivesse seus arrependimentos, a sua jornada estava beirando ao fim.


                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(40)"> Continuar
                            </button>

                           
                
                            <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg.jpg"></div>
                
                
                            </div>
                            </div>
                
                
                            `
                            var titulo = document.getElementById('historia-espadachim')
                            typeWrite(titulo)
                            container.style.display = 'flex'
                            container.style.maxWidth = '700px';
                            container.style.maxHeight = '700px';
                            container.style.height= '700px';

                            break;

                            case 40: 

                            container.innerHTML = `

                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-espadachim">
                            O castelo era extremamente imponente, chegando até as nuvens com suas torres altas, com a sua grama estranhamente viva, e até com alguns restos mortais espalhados por aqui e ali. Como assim, o rei do mal não limpava o quintal? Absurdo!
                            Ao olhar aos arredores do castelo, havia uma área mais morta do que o normal, onde a terra era seca e extremamente preta, lembrando o carvão, se quisesse, poderia simplesmente ignorar a anormalidade sem quaisquer problemas. Quem se importa que a terra parecia carvão naquela parte? Mas um pequeno impulso pulsava na cabeça de Greg, “O que será que tem lá? Eu quero ver o que tem lá”, por seguir seus desejos, tal escolha era algo normal em seu dia a dia, por pura curiosidade tinha vontade de trilhar caminhos paralelos a sua jornada.



                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(41)"> Acho que vou dar uma olhada no que tem ali, com certeza não é algo de errado, né? Vai que encontro alguns pães de alho ali, com um churras e uma grelha daquelas!
                            </button>

                            <button class="botao-historia" type="button" onclick="select(46)"> Não posso me distrair agora, por mais que eu queira muito, muito, muito ir… Não posso! Cada segundo importa, e não sei se o Ufattelig sei lá, pula da janela pra fugir!
                            </button>

                           
                
                            <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg.jpg"></div>
                
                
                            </div>
                            </div>
                
                
                            `
                            var titulo = document.getElementById('historia-espadachim')
                            typeWrite(titulo)
                            container.style.display = 'flex'
                            container.style.maxWidth = '700px';
                            container.style.maxHeight = '700px';
                            container.style.height= '700px';

                            break;

                            case 41: 

                            container.innerHTML = `

                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-espadachim">
                            A curiosidade tomou controle das ações de Greg, que lhe forçou a acabar com a aventura, simplesmente para checar uma terrinha mais preta que o normal, e então ele vagou na terra sem fim, e morreu de fome e sede por não saber para onde ir, Fim!
                            Brincadeira. 
                            O que havia encontrado de fato, era um dragão negro com escamas vermelhas espalhadas pelo seu corpo, com uma altura de cinco metros, deitado como um animal de estimação na terra queimada do local, dormindo. 
                            Sua figura era extremamente intimidadora, o espadachim sabia que, lutar com aquilo agora era suícidio, porém novamente, a curiosidade acabava lhe pressionando a tentar mais e mais, “E se eu for o primeiro espadachim a matar um dragão!?”




                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(42)"> Vamo nessa, vou ser o primeiro matador de dragões espadachim do reino!
                            </button>

                            <button class="botao-historia" type="button" onclick="select(46)"> Não posso me distrair agora, por mais que eu queira muito, muito, muito ir… Não posso! Cada segundo importa, e não sei se o Ufattelig sei lá, pula da janela pra fugir!
                            </button>

                            

                           
                
                            <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg.jpg"></div>
                
                
                            </div>
                            </div>
                
                
                            `
                            var titulo = document.getElementById('historia-espadachim')
                            typeWrite(titulo)
                            container.style.display = 'flex'
                            container.style.maxWidth = '700px';
                            container.style.maxHeight = '700px';
                            container.style.height= '700px';

                            break;

                            case 42: 

                            container.innerHTML = `

                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-espadachim">
                            O dragão, por estar despreparado, sofre um golpe extremamente forte e despercebido, perdendo várias de suas escamas extremamente valiosas ao ter elas forçadas fora de seu corpo, um único golpe, por tomar o dragão enquanto ainda descansava, era o suficiente para mudar a batalha a seu favor, afinal, sem truques, era improvável que ganharia.




                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(43)"> Continuar
                            </button>

                           

                           
                
                            <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg.jpg"></div>
                
                
                            </div>
                            </div>
                
                
                            `
                            var titulo = document.getElementById('historia-espadachim')
                            typeWrite(titulo)
                            container.style.display = 'flex'
                            container.style.maxWidth = '700px';
                            container.style.maxHeight = '700px';
                            container.style.height= '700px';

                            break;

                            case 43: 

                            hero.dialogo = `<p> Dragão: “CRIATURA INSOLENTE, OUSASTE DESFERIR SUA LÂMINA FÉTIDA CONTRA MINHA NOBRE CARNE?” </p> <p>Greg: “Até o largartão parecia mais desafiante que você!” </p> <p>Dragão: “IREI LHE MOSTRAR O QUE ACONTECE QUANDO UM MERO BÍPEDE XEXELENTO DESAFIA O REI DOS CÉUS!” </p>` 

                            combateFake('combate()')


                            boss.nome = 'Dragão'
                            boss.hp = 800
                            boss.sprite = './sprites/dragon.gif'
                            boss.img = './img/img/dragon1.jpg'
                            boss.ataque = 35
                            boss.erro = 7
                            boss.acerto = 9
                            boss.crit = 10 
                            boss.animacao = 6200

                            break;

                            case 4333: 

                            hero.dialogo = `<p>Dragão: “Ó, Ufattelig, REI DAS TREVAS E PAI DA MALDADE, SENHOR DO CAOS E SERVENTE DA DOR, ESTE MERO SOLDADO IMPLORA POR ASSISTÊNCIA, JUNTE-SE A MIM E VAMOS TRANSFORMAR ESSE BÁRBARO EM PÓ!”</p> <p>Dragão: “Ufattelig? POR QUÉ ME IGNORAS? NÃO SOU O DRAGÃO CARMESIM, ENCARNAÇÃO DAS TREVAS, REI DOS CÉUS? POR QUÊ DESCARTASTES A MIM, UFATTELIG!?” </p> <p>${hero.nome}: “Caraca, até o Rei do mal te deixou na mão! Você realmente vale menos do que o lagartão”</p>` 
                            combateFake('select(44)')

                            break;

                            case 44: 

                            container.innerHTML = `

                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-espadachim">
                            O dragão, mesmo contorcendo-se e implorando por ajuda de Ufattelig, não a recebia de jeito algum. Seu líder assistia sua derrota de ínicio ao fim, e por estar usando um elmo fechado, sua reação e olhar era impossível de distinguir, quem sabe ele estava sadicamente assistindo seu servo perecer em sua frente, ou simplesmente sentia que precisava ajudar, porém não podia mexer seu corpo por algum motivo. Havia várias variáveis, porém, todas levavam a uma única alternativa; não importava. Tudo o que importava, é que ao subir as escadas do castelo, Greg iria estar cara a cara com o rei do mal, o motivo de sua jornada, o motivo dessa calamidade estar acontecendo ao redor dos reinos.




                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(45)"> Ir para a batalha final
                            </button>

                
                
                            <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg.jpg"></div>
                
                
                            </div>
                            </div>
                
                
                            `
                            var titulo = document.getElementById('historia-espadachim')
                            typeWrite(titulo)
                            container.style.display = 'flex'
                            container.style.maxWidth = '700px';
                            container.style.maxHeight = '700px';
                            container.style.height= '700px';

                            break;

                            case 45: 

                            container.innerHTML = `

                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-espadachim">
                            Adentrar o castelo fora mais fácil do que parecia. Seus servos, que pareciam ser a sua força focal, alguns extremamente fortes, não estavam mais no castelo. Greg estava ocupado demais com seus próprios pensamentos de glória, do que preocupado de saber o que estava acontecendo, será mesmo que o rei do mal simplesmente decidiu desocupar o castelo? Ou seria aquele um pedido de encontro entre os dois? 	Vários cenários indicavam que algo estava errado. Ele não havia dominado o mundo por simples força, suas táticas eram impecáveis, o que ele estava pensando?




                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(46)"> Continuar
                            </button>

                
                
                            <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg.jpg"></div>
                
                
                            </div>
                            </div>
                
                
                            `
                            var titulo = document.getElementById('historia-espadachim')
                            typeWrite(titulo)
                            container.style.display = 'flex'
                            container.style.maxWidth = '700px';
                            container.style.maxHeight = '700px';
                            container.style.height= '700px';

                            break;

                            case 46: 

                            container.innerHTML = `

                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-espadachim">
                            Greg: “Ei Rei do mal, eu vou te encher de sopapo, ninguém precisa de guardião ou sei lá o que, eu tô muito forte já!”
                            Ufattelig: “&%^@*$%+!!, *#@^&$!%.”
                            Greg: “O que…?”

                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(47)"> Continuar
                            </button>

                
                
                            <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg.jpg"></div>
                
                
                            </div>
                            </div>
                
                
                            `
                            var titulo = document.getElementById('historia-espadachim')
                            typeWrite(titulo)
                            container.style.display = 'flex'
                            container.style.maxWidth = '700px';
                            container.style.maxHeight = '700px';
                            container.style.height= '700px';

                            break;
                            
                            case 47: 

                            container.innerHTML = `

                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-espadachim">
                            Greg era incapaz de entender o que o oponente estava tentando dizer, cada palavra soava como estática em seus ouvidos, mas aquilo não importava. Em sua cabeça, podia vencer sozinho sem mesmo ter que esperar pelo guardião, a vitória seria certa.

                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(4888)"> Continuar
                            </button>

                
                
                            <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg.jpg"></div>
                
                
                            </div>
                            </div>
                
                
                            `
                            var titulo = document.getElementById('historia-espadachim')
                            typeWrite(titulo)
                            container.style.display = 'flex'
                            container.style.maxWidth = '700px';
                            container.style.maxHeight = '700px';
                            container.style.height= '700px';

                            break;

                            case 4888: 

                            boss.nome = 'Ufattelig'
                            boss.hp = 1500
                            boss.sprite = './sprites/Ufattelig.gif'
                            boss.img = './img/img/Ufattelig.jpg'
                            boss.ataque = hero.hp - 1
                            boss.erro = 0
                            boss.acerto = 10
                            boss.crit = 0 
                            boss.animacao = 2300

                            combateFake('select(48)')
                            ataqueFake()

                            var titulo = document.getElementById('historia-espadachim')
                            typeWrite(titulo)
                            container.style.display = 'flex'
                            container.style.maxWidth = '700px';
                            container.style.maxHeight = '700px';
                            container.style.height= '700px';

                            break;

                            case 48: 

                            container.innerHTML = `

                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-espadachim">
                            Greg: “Impossível! Como?? Só com um golpe…”

                            Ufattelig estava prestes a acabar com a vida do espadachim. Uma jornada inteira, apenas para acabar logo no final, por não ser forte o suficiente, ele realmente não era o bastante? Tantos inimigos derrotados, e ele era incapaz de terminar a jornada sozinho? De que aquelas lutas bastavam, se nenhuma delas lhe deixava mais forte? Do que a vida adiantava?
                            Mas então…


                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(49)"> Continuar
                            </button>

                
                
                            <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg.jpg"></div>
                
                
                            </div>
                            </div>
                
                
                            `
                            var titulo = document.getElementById('historia-espadachim')
                            typeWrite(titulo)
                            container.style.display = 'flex'
                            container.style.maxWidth = '700px';
                            container.style.maxHeight = '700px';
                            container.style.height= '700px';

                            break;

                            case 49: 

                            container.innerHTML = `

                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-espadachim">
                            O Guardião apareceu extremamente do nada, como um relâmpago, apesar de ser extremamente alto e definido, sua velocidade não parecia diminuir nem um pouco, facilmente sendo mais rápido do que o melhor cavalo do reino. O Guardião bloqueou o caminho entre o espadachim e o inimigo, e então, apontou para a saída do castelo. Aquilo era um óbvio sinal de que, ficar ali, era apenas um estorvo para seu salvador. 
                            Entendendo o recado, o rapaz saía às pressas, deixando os dois colossos lutarem entre si.



                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(50)"> Continuar
                            </button>

                
                
                            <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg.jpg"></div>
                
                
                            </div>
                            </div>
                
                
                            `
                            var titulo = document.getElementById('historia-espadachim')
                            typeWrite(titulo)
                            container.style.display = 'flex'
                            container.style.maxWidth = '700px';
                            container.style.maxHeight = '700px';
                            container.style.height= '700px';

                            break;

                            case 50: 

                            boss.nome = 'Ufattelig'
                            boss.hp = 1500
                            boss.sprite = './sprites/Ufattelig.gif'
                            boss.img = './img/img/Ufattelig.jpg'
                            boss.ataque = 150
                            boss.erro = 5
                            boss.acerto = 8
                            boss.crit = 10 
                            boss.animacao = 2300

                            hero.nome = 'Guardião'
                            hero.hp = 1000
                            hero.sprite = './sprites/guardion.gif'
                            hero.img = './img/img/guardion.jpg'
                            hero.ataque = 200
                            hero.erro = 4
                            hero.acerto = 8
                            hero.crit = 10 
                            hero.animacao = 2300

                            hero.dialogo = `<p>Guardião: “Ufattelig… Então esse era seu segredo, você nem mesmo é do nosso reino, você nem mesmo é “humano”, ou sequer um ser daqui…”</p> <p> Ufattelig: “&%^@*$%+!!, *#@^&$!%.”
                            Guardião: “Não importa. Tenho que lhe deter aqui, e agora.”</p>`

                            typeWrite(titulo)
                            container.style.display = 'flex'
                            container.style.maxWidth = '700px';
                            container.style.maxHeight = '700px';
                            container.style.height= '700px';

                            
                            

                            break;

                            case 5000:

                            hero.dialogo = `<p>Ufattelig: “Vo%ê @ão$%+!!,os *#@^im&$d!rá%..”</p> <p>Guardião: “Morra imediatamente, praga! Não me importo com o que você tem a dizer!”</p>   `
                            combateFake('select(51)')

                            break;

                            case 51: 

                            container.innerHTML = `

                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-espadachim">
                            Havia acabado. Tantas eras em guerra constante, tantas vidas perdidas, tantas famílias destruídas e lares queimados ao chão, tantos sonhos despedaçados e tantos reinos dizimados.
                            E havia acabado.
                            O Rei Lanceiro havia completado seu objetivo. Ufattelig está morto. O que quer que ele fosse, não iria mais interferir com os reinos, e tudo voltaria à paz.
                            As pálpebras de Ru’thra se permitiam fechar mais uma vez, pela última vez, sua fornalha de almas, antes capaz de só permitir movimentos simples, estava completamente vazia, e ele não planejava sacrificar mais ninguém para manter sua longevidade, qual seria o motivo, reinar? Nada disso importava, o rei do mal havia caído naquele dia, a vitória era da humanidade.
                            Ru’thra, ajoelhado em frente ao antigo rei do mal, lentamente fecha os olhos, e aceita o seu destino; a sua morte, que deveria ter acontecido dezenas de anos atrás, que fora empurrada até hoje por rituais e magias capazes de alimentar um ser a base de almas.
    

                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(50)"> Continuar
                            </button>

                
                
                            <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg.jpg"></div>
                
                
                            </div>
                            </div>
                
                
                            `
                            var titulo = document.getElementById('historia-espadachim')
                            typeWrite(titulo)
                            container.style.display = 'flex'
                            container.style.maxWidth = '700px';
                            container.style.maxHeight = '700px';
                            container.style.height= '700px';

                            break;

                        
                    
            }

                        
        

            
            
        }
