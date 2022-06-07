var hero = {
    nome: [''],
    hp: [0],
    sprite: [''],
    img: [''],
    perfil: [''],
    ataque: [0],
    erro: [0],
    acerto: [0],
    crit: [0],
    pocao: [0],
    animacao: [0],
    dialogo: [''],
    progresso: [0],
    chefes: [0],
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

            addStoryClass()
                hero.nome = 'Ronaldo'
                hero.hp = 60
                hero.sprite ='./sprites/Sword.gif'
                hero.img = './img/img/Sword1.jpg'
                hero.perfil = './img/rostoHero/rostoEspadachim.png'
                hero.ataque = [18]
                hero.erro = 2
                hero.acerto =6
                hero.crit = 7
                hero.pocao = 3
                hero.animacao = 2900
                
            

            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-Espadachim">
            Sua jornada fora nada além do que um desejo carnal. A simples metodologia do reino do Oeste para conseguir alcançar os seus desejos independente de lealdade, honra, ou moral, a simples ideia de seguir o que você acredita era quase como um lema para os espadachins.
            Mercenários, bandidos, aventureiros, heróis ou soldados, qualquer meio que lhe possibilitasse os resultados desejados era mais que bem vindo, independente de quais meios deveriam ser tomados, por causa disso, os espadachins eram extremamente versáteis em seus cargos.


            
            </p>

            <button class="botao-historia" type="button" onclick="select(6)"> Continuar </button>

            <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>

            </div>
            </div>
            `
            var titulo = document.getElementById('historia-Espadachim')
            typeWrite(titulo)
            
            break;

            

            case 6:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-Espadachim">
            A guerra contra Ufattelig foi uma terrível guerra para todos os reinos, os cavaleiros foram dizimados, os espadachins, que meio que já estavam separados mesmo, ficaram ainda mais distantes, os lanceiros, com sua disciplina e lealdade, haviam perdido seu mártir mais valioso, seu próprio rei, e as terras além do reino ficaram ainda mais caótica do que eram antes, com o ressurgimento e ocupação de forças malignas, que impregnava as florestas como rios, e matava a plantação como se fossem um poderoso veneno. 

            
            </p>

            <div class="envelope-botoes-historia"><button class="botao-historia" type="button" onclick="select(7)"> Continuar </button></div>
            
            <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>


            </div>
            </div>
            `
            var titulo = document.getElementById('historia-Espadachim')
            typeWrite(titulo)

            
            break;

            

            case 7:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-Espadachim">
            Os Espadachim? Óbvio que encontrar um inimigo que era incapaz de meter o soco no primeiro encontro foi algo devastador, para todos os habitantes, algo mais impactante do que perder seu rei ou seu reino inteiro. Sua honra estava completamente dizimada, o que fez a maioria deles perder o espírito de luta e lentamente aguardar a sua morte, ou apenas desistir de seguir seus princípios, resultando em vários mercenários e até mesmo recrutas novos para Ufattelig, pelo simples fato de seus espíritos estiver em pedaços.

            
            </p>

            <div class="envelope-botoes-historia"><button class="botao-historia" type="button" onclick="select(8)"> Continuar </button></div>
            
            <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>


            </div>
            </div>
            `
            var titulo = document.getElementById('historia-Espadachim')
            typeWrite(titulo)

            
            break;

            case 8:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-Espadachim">
            ${hero.nome} foi uma das primeiras a levantar a bandeira de resistência contra Ufattelig, pois sabia que lutar ou desistir ainda resultaria em morte, de que importava cair lutando? Portanto, regularmente ia em expedições voluntárias com outros sobreviventes da guerra em tentativas de reconquistar território, e muitas vezes, essas pequenas batalhas resultaram em perdas para o lado da humanidade. Havia muitas poucas pessoas com habilidades em combate, pois a maioria dos guerreiros haviam morrido na grande guerra. 

            
            </p>

            <button class="botao-historia" type="button" onclick="select(9)"> Continuar </button>

            <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>


            </div>
            </div>
            `
            var titulo = document.getElementById('historia-Espadachim')
            typeWrite(titulo)
            
            break;


            case 9:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-Espadachim">
            Portanto, havia de pensar na situação que se encontrava; um ser armadurado gigantesco, com mais ou menos quatro metros de altura, bloqueia seu caminho atualmente, encarando-o vestindo um olhar análitico e desconfiado, com ambos polegar e indicador no queixo, como se ponderasse o Espadachim de cima a baixo. Fazer uma ação desnecessária pode resultar em consequências catastróficas, ou até mesmo custar sua própria vida, portanto ${hero.nome} decide…
            
            </p>

            <button class="botao-historia" type="button" onclick="select(10)"> Atacar o Ser de armadura </button>
            <button class="botao-historia" type="button" onclick="select(11)"> Esperar e ver o que ele quer </button>
            <button class="botao-historia" type="button" onclick="select(12)"> Tentar conversar com a figura</button>
            
            <div class="imagem-personagem"><img  src="./img/img/guardion.jpg"></div>

            </div>
            </div>
            `
            var titulo = document.getElementById('historia-Espadachim')
            typeWrite(titulo)
            
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
                
                
                
                
                
                combateFake('select(11)')
                ataqueFake()
                opcoesCombate.style.display = 'block'
                
                addFightClass()
                
                
            break;

            case 11:
                
                
                
                
                opcoesCombate.style.display = 'none'
                container.innerHTML = `
                
                <div class="envelope-historia-personagem">
                
                <div class="historia-personagem"><span class='guardion'>Guardião:</span><p id="historia-Espadachim">
                “Olha só, achei que você era só um franguinho sem coragem de revidar o mínimo de intimidação, parece que subestimei você até demais.”</p>
                
                
                
                <button class="botao-historia" type="button" onclick="select(13)"> Continuar </button>
                
                <div class="imagem-personagem"><img  src="./img/img/guardion.jpg"></div>
                
                </div>
                </div>
                `
                
                var titulo = document.getElementById('historia-Espadachim')
                typeWrite(titulo)
                
                
                addStoryClass()

            break;

            case 12:
                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><span class='guardion'>Guardião:</span><p id="historia-Espadachim">
                “Nada mal. Sua forma física não decai em nenhum aspecto. Não que você seja muito bom em alguma parte, já é satisfatório saber que você não é horrível.”</p>

                
                
                <button class="botao-historia" type="button" onclick="select(13)"> Continuar </button>
                
                <div class="imagem-personagem"><img  src="./img/img/guardion.jpg"></div>

                </div>
                </div>
                `
                var titulo = document.getElementById('historia-Espadachim')
                typeWrite(titulo)
                

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
                

            break;

            case 13:
                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><span class='guardion'>Guardião:</span><p id="historia-Espadachim">
                “Perdão por demorar com as introduções, eu sou Ru’thra, mas o senhor pode me chamar de Guardião a ponto de facilitar a sua memória. Estou em uma missão de exterminar as forças do mal, porém, minha fornalha de almas está quase no limite, caso eu continue, estou certo a perecer sem ao menos deter Ufattelig, o Rei Demônio, por eu não saber a sua localização ainda. Guerreiro, eu preciso de sua ajuda.”</p>

                <button class="botao-historia" type="button" onclick="select(14)">Por quê você quer minha ajuda? </button>
                <button class="botao-historia" type="button" onclick="select(15)">Ru’thra? Esse não é o rei do reino do Oeste?</button>
                <button class="botao-historia" type="button" onclick="select(16)">Por quê eu?</button>

                

                

                <div class="imagem-personagem"><img  src="./img/img/guardion.jpg"></div>
                
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-Espadachim')
                typeWrite(titulo)
                
            
            break;

            case 14:
                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><span class='guardion'>Guardião:</span><p id="historia-Espadachim">
                “Você foi um dos únicos guerreiros que me encontrou nessas terras desertas. O último humano que vi foi um dos meus súditos, que morreu em batalha a pouco tempo. Só você consegue me ajudar a derrotar Ufattelig.” 
                </p>

                <button class="botao-historia" type="button" onclick="select(17)">Entendido. Irei lhe ajudar.</button>
                <button class="botao-historia" type="button" onclick="select(18)">Eu nunca concordei com isso! Vai se ferrar!</button>
                

                

                

                <div class="imagem-personagem"><img  src="./img/img/guardion.jpg"></div>
                
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-Espadachim')
                typeWrite(titulo)
                
            
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
                
            
            break;

            case 17:
                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><span class='guardion'>Guardião:</span><p id="historia-Espadachim">
                “Vá para o Norte aventureiro, onde o caído reino dos cavaleiros ainda mantém suas ruínas. Encontre um dos capatazes de Ufattelig, Lacerta, um homem-lagarto que traz escravos e prisioneiros de guerra para o exército das forças do mal, ele será seu desafio mais fácil, porém ainda será um desafio. Encontre informações da localização de Ufattelig através dele, e quando você achá-lo, eu estarei lá.”
                </p>

                <button class="botao-historia" type="button" onclick="select(21)">Continuar</button>

                
                
                

                

                

                <div class="imagem-personagem"><img  src="./img/img/guardion.jpg"></div>
                
                </div>
                </div>
                `
                //Ajustar

                var titulo = document.getElementById('historia-Espadachim')
                typeWrite(titulo)
                

                pause()
                stop()
            
            break;

            case 18:
                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><span class='guardion'>Guardião:</span><p id="historia-Espadachim">
                “Então terei que lhe matar e esperar a próxima pessoa que concorda… Você sabe demais. Não posso deixar com que meu plano aze para Ufattelig.”
                
                </p>

                <button class="botao-historia" type="button" onclick="select(19)">E-Espera! Eu estava zoando! É só zoeira!</button>
                <button class="botao-historia" type="button" onclick="select(20)">Vamo nessa monte de lata. Eu vou te matar até você morrer</button>

                
                
                

                
                  
                

                <div class="imagem-personagem"><img  src="./img/img/guardion.jpg"></div>
                
                </div>
                </div>
                `
                

                var titulo = document.getElementById('historia-Espadachim')
                typeWrite(titulo)
                

                pause()
                stop()
            
            break;

            case 19:
                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><span class='guardion'>Guardião:</span><p id="historia-Espadachim">
                “Imaginei que você voltaria a consciência a tempo.” 
                “Vá para o Norte aventureiro, onde o caído reino dos cavaleiros ainda mantém suas ruínas. Encontre um dos capatazes de Ufattelig, Lacerta, um homem-lagarto que traz escravos e prisioneiros de guerra para o exército das forças do mal, ele será seu desafio mais fácil, porém ainda será um desafio. Encontre informações da localização de Ufattelig através dele, e quando você achá-lo, eu estarei lá.”
                
                </p>                

                <div class="imagem-personagem"><img  src="./img/img/guardion.jpg"></div>
                
                </div>
                </div>

                <button class="botao-historia" type="button" onclick="select(21)">Continuar</button>

                `
                //Ajustar

                var titulo = document.getElementById('historia-Espadachim')
                typeWrite(titulo)
                

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
                
                
                ataqueHero()
                
                //ARRUMAR MODAL DE MORTE  
                
                addFightClass()

                
            
            break;

            case 21:
                
                
                //Trilha sonora de batalha
                
                audio = new Audio('./music/calangoMusic.mp3')
                audio.play()   
                
                
                container.innerHTML = `
                
                <div class="envelope-historia-personagem">
                
                <div class="historia-personagem"><p id="historia-Espadachim">
                ${hero.nome} então parte para o reino do Norte, encontrando vários inimigos no caminho, porém facilmente acabando com eles, e eventualmente, acabando trombando com Lacerta, imediatamente assumindo a instância de batalha, por ele ser o único homem-lagarto que havia encontrado até agora. 
                
                </p>
                
                <button class="botao-historia" type="button" onclick="select(22)"> Continuar </button>
                
                <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
                
                
                </div>
                </div>
                
                
                `
                var titulo = document.getElementById('historia-Espadachim')
            typeWrite(titulo)
            
            addStoryClass()
            
            break;
            
            case  22:
                
                
                
                
                hero.dialogo = `<p>Lagartixa Falante:<span class="bossText">Como você ousa invadir o território de Lorde Ufattelig? Você é louco?!</span></p> <p>${hero.nome}:<span class="heroText">Mas que diabos é isso? Uma lagartixa falante? </span></p> 
                <p> Largatixa Falante: <span class="bossText"> Eu irei lhe estripar e adornar seu corpo na frente das ruínas!</p>
                </span>`
                
                
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
                
                addFightClass()
                
                break;
                
                
                
                case 23:

                    
                    
                    //Parar a música
                    pause()
                    stop()
                    
                    
                    container.innerHTML = `
                    
                    <div class="envelope-historia-personagem">
                    
                    <div class="historia-personagem"><p id="historia-Espadachim">
                    Após derrotar Lacerta, ${hero.nome} acaba encontrando um papel dentro de seu bolso (Lagartos tem bolsos?) que dizia a localização de seu próximo oponente, e uma nova pista da localização de Ufattelig; a princesa do reino do Sul, corrompida pelas forças do mal. 
                    
                    </p>
                    
                    <button class="botao-historia" type="button" onclick="select(24)"> Continuar </button>
                    
                    <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
                    
                    
                    </div>
                    </div>
                    
                    
                    `
                    var titulo = document.getElementById('historia-Espadachim')
                    typeWrite(titulo)
                    
                    addStoryClass()
                    
                    break;
                    
                    
                    case 24:
                        
                
                        
                        container.innerHTML = `
                        
                        <div class="envelope-historia-personagem">
                        
                        <div class="historia-personagem"><p id="historia-Espadachim">
                        Sua localização não fora a coisa mais inconspicua do mundo, por ainda utilizar o caído reino dos Espadachim como seu castelo. Ao contrário de Lacerta, a princesa, Securis, era com total certeza um desafio a altura de se superar. 
                        
                        </p>
                        
                        <button class="botao-historia" type="button" onclick="select(25)"> Continuar </button>
                        
                        <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
                        
                        
                        </div>
                        </div>
                        
                        
                        `
                        var titulo = document.getElementById('historia-Espadachim')
                        typeWrite(titulo)
                        
                        
                        addStoryClass()
                        
                        break;


                case 25:
                    

                    
                    
                    
                    //Trilha Sonora
                    audio = new Audio('./music/princessMusic.mp3')
                    audio.play()  
                    
                    hero.dialogo = `<p>Securis:<span class="bossText">Quem é você? Quem ousa pisar no território de Securis, serva de Ufattelig?</span></p> <p>${hero.nome}: <span class="heroText">Droga, odeio bater em mulheres. Olha, você não pode só se render?</span></p> <p>Securis:<span class="bossText">MACHISTA!</span></p>`
                    
                    
                    boss.nome = 'Securis'
                    boss.hp = 80
                    boss.sprite = './sprites/princess.gif'
                    boss.img = './img/img/princess.jpg'
                    boss.ataque = 40
                    boss.erro = 7
                    boss.acerto = 8
                    boss.crit = 8
                    boss.animacao = 4800
                    
                    hero.historia = 'select(26)'
                    
                    combateFake('combate()')
                
                
                    addFightClass()
                
                
                
                
                break;

            case 26:

                
                
                //Parar a música
                pause()
                stop()
                
                
                container.innerHTML = `
                
                <div class="envelope-historia-personagem">
                
                <div class="historia-personagem"><p id="historia-Espadachim">
                Após derrotar Securis, ao extrair informações torturando-a, em seu último suspiro a mesma havia lhe dado a terceira pista da localização de Ufattelig, mais um de seus oficiais (para variar) um antigo invocador ermitão, Vocator, que foi corrompido pela maldade, servindo Ufattelig de uma forma menos agressiva, apenas lhe fornecendo unidades de batalha, por conseguir invocá-las, e não ativamente indo atrás de prisioneiros ou de vítimas de sua magia. 
                
                </p>
                
                <button class="botao-historia" type="button" onclick="select(27)"> Continuar </button>
                
                <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
                
                
                </div>
                </div>
                
                
                `
                var titulo = document.getElementById('historia-Espadachim')
                typeWrite(titulo)
                
                
                addStoryClass()
                
                break;
                
                
                case 27:
                    
                    
                    
                    
                    
                //Trilha sonora
                audio = new Audio('./music/volcatorMusic.mp3')
                audio.play()  
                
                hero.dialogo = `<p>Vocator: <span class="bossText">Como você encontrou esse lugar? Eu tive certeza de contar apenas aos oficiais de Ufattelig! Não pode ser…</span></p> <p>${hero.nome}: <span class="heroText">Ah mas pode ser sim velhote. Já foram dois, e você é o próximo.</span></p> <p>Vocator: <span class="bossText">Impossível! Você não vai passar!</span></p>`
                    
                hero.historia = 'select(28)'

                boss.nome = 'Vocator'
                boss.hp = 110 
                boss.sprite = './sprites/volcator.gif'
                boss.img = './img/img/volcator.jpg'
                boss.ataque = 25
                boss.erro = 4
                boss.acerto = 8
                boss.crit = 10 
                boss.animacao = 5100
                
                combateFake('combate()')
                
                
                addFightClass()
                
                break;
                
                case 28:

                    
                    
                    //Parar a música
                    pause()
                    stop()
                    
                    container.innerHTML = `
                    
                    <div class="envelope-historia-personagem">
                    
                    <div class="historia-personagem"><p id="historia-Espadachim">
                    Vocator foi um desafio maior ainda que Securis, por suas invocações tomarem o seu lugar, lhe fornecendo segurança a maior parte do tempo. Mesmo derrotado entretanto, o mesmo não havia voltado ao seu estado normal, por estar completamente tomado pelas trevas. Aparentemente, até uma princesa tem mais força do que um mago experiente? Isso apenas comprova o quão banana era. Obviamente, era uma pena não conseguir extrair informações do mago, mas tal problema foi totalmente resolvido apenas olhando um pouco para seu esconderijo, coincidentemente, intelectuais adoravam escrever e anotar tudo o que tinham conhecimento, inclusive a localização de seus parceiros.
                    ${hero.nome} foi capaz de encontrar o próximo oficial a eliminar, ou melhor, os dois próximos.
                    
                    
                    </p>
                    
                    <button class="botao-historia" type="button" onclick="select(29)"> Continuar </button>
                    
                    <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
                    
                    
                    </div>
                    </div>
                    
                    
                    `
                    var titulo = document.getElementById('historia-Espadachim')
                    typeWrite(titulo)
                    
                    
                    addStoryClass()
                    

                break;

                case 29:

                    
                    
                    container.innerHTML = `
                    
                    <div class="envelope-historia-personagem">
                    
                    <div class="historia-personagem"><p id="historia-Espadachim">
                    Os próximos oficiais baseiam-se em dois antigos servos reais, o segundo mais habilidoso Espadachim do Reino dos espadachins, ficando para trás apenas em relação ao rei, e um dos antigos magos que construíram os Guardiões, a última tentativa da humanidade de repelir Ufattelig, infelizmente, ambos estavam completamente corrompidos pelo mal, por terem sido um dos primeiros a cair durante a grande guerra, afinal, estavam na linha de frente da aliança. 
                    Isso significava que, não haveria uma situação de tanta sorte quanto Securis, a batalha seria até a morte, não que todas até agora não fossem, mas salvá-los não era uma opção.
                    Seus nomes, mesmo que marcados na história por décadas, haviam sido perdidos, banhados por histórias de suas brutalidades enquanto na governança de Ufattelig, mesmo sendo pessoas extraordinárias, capazes de receberem posições reais, apenas suas ocupações, como “Mago” e “Espadachim” havia lhe restado. Um triste fim.
                    
                    
                    
                    </p>
                    
                    <button class="botao-historia" type="button" onclick="select(30)">  Irei lutar contra o segundo melhor Espadachim, claro que quando eu derrotá-lo, EU me tornarei o melhor Espadachim! </button>
                    
                    <button class="botao-historia" type="button" onclick="select(36)">  Irei lutar contra o mago real, é uma boa oportunidade de saber um pouco mais do porque os guardiões existem, e também bater em mago é muito legal! </button>
                    
                    <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
                    
        
                    </div>
                    </div>
                    
                    
                    `
                    var titulo = document.getElementById('historia-Espadachim')
                    typeWrite(titulo)
                    
                    addStoryClass()
                    
                    break;
                    
                    case 30: 
                    
                    
                    
                    container.innerHTML = `
                    
                    <div class="envelope-historia-personagem">
                    
                    <div class="historia-personagem"><p id="historia-Espadachim">
                    Claro, o pensamento individualista, egoísta, e detestável de ${hero.nome} existia até no fim do mundo, “serei o melhor, com total certeza!”, uma linha de decisão simples, mas que querendo ou não, iria progredir na missão de salvar o mundo. Então, ${hero.nome} partiu em direção ao seu oponente Espadachim, confiante que iria ganhar, porém não sabendo o desafio que estaria por vir.
                    
                    
                    </p>
                    
                    <button class="botao-historia" type="button" onclick="select(31)"> Continuar </button>
                    
                    <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
                    
                    
                    </div>
                    </div>
                    
                    
                    `
                    var titulo = document.getElementById('historia-Espadachim')
                    typeWrite(titulo)
                    
                    addStoryClass()
                    
                    break;
                    
                    case 31: 
                    
                    container.innerHTML = `
                    
                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-Espadachim">
                    A localização do Espadachim corrompido nada mais era do que nos portões do castelo de Ufattelig, o que facilitava e muito a situação de ${hero.nome}, afinal, em sua cabeça, era só derrotar o inimigo em frente, e logo depois, derrotar Ufatellig, certo? 

                    
                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(32)"> Continuar </button>
        
                    <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-Espadachim')
                    typeWrite(titulo)
                   

                    break;

                    case 32: 

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-Espadachim">
                    O guerreiro em sua frente, vestido de cabeça aos pés de armadura carmesim, exalando uma aura óbvia de corrupção, ficava em seu caminho, com a espada cravada em sua frente, enquanto descansava as mãos em sua maçã, como se estivesse aguardando a presença de ${hero.nome} faz um tempo. Ainda não demonstrando vontade alguma de lutar, o mesmo falava, em um tom alto e brusco, somente pela voz era perceptível que aquele homem havia lutado inúmeras batalhas em seu passado, e ele não planejava perder esta.

                    
                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(33)"> Continuar </button>
        
                    <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-Espadachim')
                    typeWrite(titulo)
                  

                    break;


                    case 33: 

                    
                    audio = new Audio('./music/espadachimMusic.mp3')
                    audio.play()  
                    
                    hero.dialogo = `<p> Espadachim Corrompido: <span class="bossText">“Guerreiro! Dê meia volta imediatamente, lhe aviso que mais um passo, e eu lhe corto em vários pedaços que nem uma melância do Fruit Ninja!“</span></p> <p>${hero.nome}: <span class="heroText">Olha, significa que se eu ir saltitando, eu posso passar? Tecnicamente não vou dar passos.</span></p> <p>Espadachim Corrompido: <span class="bossText">Bela piada, vamos ver se você consegue cuspir mais palavras decapitado!</span></p>`
                    
                    
                    boss.nome = 'Espadachim Corrompido'
                    boss.hp = 235
                    boss.sprite = './sprites/bossEspadachim.gif'
                    boss.img = './img/img/bossEspadachim.jpg'
                    boss.ataque = 15
                    boss.erro = 4
                    boss.acerto = 9
                    boss.crit = 10 
                    boss.animacao = 3400
                    
                    hero.historia = 'select(34)'
                    
                    combateFake('combate()')
                    
                    addFightClass()

                    break;

                    case 34: 

                   
                    
                    //Parar a música 
                    pause()
                    stop()
                    
                    container.innerHTML = `
                    
                    <div class="envelope-historia-personagem">
                    
                    <div class="historia-personagem"><p id="historia-espadachim">
                    Não surpreendentemente, o espadachim era realmente muito feroz com seus ataques, arrastando sua espada na estrada, fazendo inúmeras faíscas a cada golpe, a cada estocada quase fazendo com que ${hero.nome} caísse no chão, porém, havia emergido vitoriosamente. 
                    ${hero.nome}: “MINHA NOSSA SENHORA, EU SOU O SEGUNDO MELHOR ESPADACHIM DO REINO! YEES!”
                    O espadachim restante não conseguia colocar seus dois neurônios juntos a fim de perceber que, seu reino não exatamente “existia” mais, teoricamente, ele poderia ser o último espadachim do mundo, porém caso viesse a essa realização, era capaz dele se auto-proclamar o melhor espadachim do reino, por não existir mais nenhum.
                    
                    
                    
                    </p>
                    
                    <button class="botao-historia" type="button" onclick="select(35)"> Continuar </button>
                    
                    <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
                    
                    
                    </div>
                    </div>
                    
                    
                    `
                    var titulo = document.getElementById('historia-espadachim')
                    typeWrite(titulo)
                    
                    addStoryClass()
                    
                    break;

                    case 35: 

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-espadachim">
                    Após a batalha, faltava apenas seguir a dentro do castelo, porém, ao olhar aos arredores do castelo, havia uma área mais morta do que o normal, onde a terra era seca e extremamente preta, lembrando o carvão, se quisesse, poderia simplesmente ignorar a anormalidade sem quaisquer problemas. Quem se importa que a terra parecia carvão naquela parte? Mas um pequeno impulso pulsava na cabeça de ${hero.nome}, “O que será que tem lá? Eu quero ver o que tem lá”, por seguir seus desejos, tal escolha era algo normal em seu dia a dia, por pura curiosidade tinha vontade de trilhar caminhos paralelos a sua jornada.


                    
                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(41)"> Acho que vou dar uma olhada no que tem ali, com certeza não é algo de errado, né? Vai que encontro alguns pães de alho ali, com um churras e uma grelha daquelas!
                    </button>

                    <button class="botao-historia" type="button" onclick="select(46)"> Não posso me distrair agora, por mais que eu queira muito, muito, muito ir… Não posso! Cada segundo importa, e não sei se o Ufattelig sei lá, pula da janela pra fugir!
                    </button>
        
                    <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-espadachim')
                    typeWrite(titulo)
                   

                    break;

                    case 36: 

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-espadachim">
                    Querendo ou não, ver a oposição extremamente fraca de Vocator fez com que ${hero.nome} adquirisse um pré conceito de magos, “Todos os magos são pamonhas, logo, vou acabar com esse mago bem rápido” não sabendo o que estava por vir, mas, também, como poderia? Mesmo tendo acabado com algumas forças extremamente fortes do mal, seu pensamento não passava de “Quero viver meus desejos!”. Talvez fosse sua forte ignorância, ou somente pura falta de pensamento, talvez os dois, quem sabe?


                    
                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(37)"> Continuar
                    </button>

                   
        
                    <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-espadachim')
                    typeWrite(titulo)
                   
                    break;

                    case 37: 

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-espadachim">
                    A curiosidade acabou sendo maior do que o desejo de ser o melhor, perguntas como por quê os guardiões existem? Como eles foram criados? Quão forte é um deles? 
                    Foram as mais comuns. Mas, talvez, enfrentar um dos criadores de tais armas de combate fosse uma experiência reveladora, além de, na cabeça de ${hero.nome}, ser uma batalha fácil de lidar, inocente de seu futuro desafio.



                    
                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(38)"> Continuar
                    </button>

                   
        
                    <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-espadachim')
                    typeWrite(titulo)
                   

                    break;

                    
                    case 38: 

                    
                    //Trilha sonora
                    audio = new Audio('./music/magoMusic.mp3')
                    audio.play()  
                    
                    hero.dialogo = `<p>Mago Corrompido:<span class="bossText">Saudações, guerreiro. Perdão pela minha falta de sutileza, porém como você derrotou vários oficiais de Ufattelig, fui encarregado de formalmente acabar com a sua raça, da forma mais rápida possível.</span></p> <p>${hero.nome}:<span class="heroText">Ahh… Eu achei que todo mago era pamonha, mas parece que são loucos também, não tá vendo que nem arma você tem amigo?!</span></p> <p>Mago Corrompido:<span class="bossText">Não seja por isso “amigo”, um mago como eu nem ao menos precisa de armas contra você…</span></p>`
                    
                    hero.historia = 'select(39)'
                    
                    boss.nome = 'Mago Corrompido'
                    boss.hp = 150
                    boss.sprite = './sprites/bossMago.gif'
                    boss.img = './img/img/bossMago.jpg'
                    boss.ataque = 25
                    boss.erro = 6
                    boss.acerto = 9
                    boss.crit = 10
                    boss.animacao = 4500
                    
                    combateFake('combate()')
                    
                    
                    addFightClass()
                    
                    break;
                    
                    case 39: 

                    
                    
                    //Parar a música
                    pause()
                    stop()
                    
                    container.innerHTML = `
                    
                    <div class="envelope-historia-personagem">
                    
                    <div class="historia-personagem"><p id="historia-espadachim">
                    Quem diria que um mago seria tão poderoso assim? ${hero.nome} que o diga. Derrotá-lo foi mais difícil do que matar barata com veneno, nem quando achava que ganharia havia ganhado de fato, e a batalha havia se alastrado demais. Obviamente, após derrotá-lo, roubar seus pertences e roupa era o mais cordial, o que um cadáver tem a dizer sobre perder o que é seu?
                    Entre seus itens, havia um mapa da localização do castelo de Ufattelig, o qual usou para seguir em frente, no caminho, acaba lembrando-se de um fator indispensável!
                    ${hero.nome}: “AHH! EU NEM CONSEGUI SEQUER UMA PISTA DOS GUARDIÕES!”
                    Mesmo que tivesse seus arrependimentos, a sua jornada estava beirando ao fim.
                    
                    
                    </p>
                    
                    <button class="botao-historia" type="button" onclick="select(40)"> Continuar
                    </button>
                    
                   
                    
                    <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
                    
                    
                    </div>
                    </div>
                    
                    
                    `
                    var titulo = document.getElementById('historia-espadachim')
                    typeWrite(titulo)
                    
                    addStoryClass()
                    
                    break;

                    case 40: 

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-espadachim">
                    O castelo era extremamente imponente, chegando até as nuvens com suas torres altas, com a sua grama extremamente morta, e até com alguns restos mortais espalhados por aqui e ali. Como assim, o rei do mal não limpava o quintal? Absurdo!
                    Ao olhar aos arredores do castelo, havia uma área mais morta do que o normal, onde a terra era seca e extremamente preta, lembrando o carvão, se quisesse, poderia simplesmente ignorar a anormalidade sem quaisquer problemas. Quem se importa que a terra parecia carvão naquela parte? Mas um pequeno impulso pulsava na cabeça de ${hero.nome}, “O que será que tem lá? Eu quero ver o que tem lá”, por seguir seus desejos, tal escolha era algo normal em seu dia a dia, por pura curiosidade tinha vontade de trilhar caminhos paralelos a sua jornada.



                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(41)"> Acho que vou dar uma olhada no que tem ali, com certeza não é algo de errado, né? Vai que encontro alguns pães de alho ali, com um churras e uma grelha daquelas!
                    </button>

                    <button class="botao-historia" type="button" onclick="select(46)"> Não posso me distrair agora, por mais que eu queira muito, muito, muito ir… Não posso! Cada segundo importa, e não sei se o Ufattelig sei lá, pula da janela pra fugir!
                    </button>

                   
        
                    <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-espadachim')
                    typeWrite(titulo)
                   

                    break;

                    case 41: 

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-espadachim">
                    A curiosidade tomou controle das ações de ${hero.nome}, que lhe forçou a acabar com a aventura, simplesmente para checar uma terrinha mais preta que o normal, e então ele vagou na terra sem fim, e morreu de fome e sede por não saber para onde ir, Fim!
                    Brincadeira. 
                    O que havia encontrado de fato, era um dragão negro com escamas vermelhas espalhadas pelo seu corpo, com uma altura de cinco metros, deitado como um animal de estimação na terra queimada do local, dormindo. 
                    Sua figura era extremamente intimidadora, o espadachim sabia que, lutar com aquilo agora era suícidio, porém novamente, a curiosidade acabava lhe pressionando a tentar mais e mais, “E se eu for o primeiro espadachim a matar um dragão!?”




                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(42)"> Vamo nessa, vou ser o primeiro matador de dragões espadachim do reino!
                    </button>

                    <button class="botao-historia" type="button" onclick="select(46)"> Não posso me distrair agora, por mais que eu queira muito, muito, muito ir… Não posso! Cada segundo importa, e não sei se o Ufattelig sei lá, pula da janela pra fugir!
                    </button>

                    

                   
        
                    <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-espadachim')
                    typeWrite(titulo)
                   

                    break;

                    case 42: 

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-espadachim">
                    O dragão, por estar despreparado, sofre um golpe extremamente forte e despercebido, perdendo várias de suas escamas extremamente valiosas ao ter elas forçadas fora de seu corpo, um único golpe, por tomar o dragão enquanto ainda descansava, era o suficiente para mudar a batalha a seu favor, afinal, sem truques, era improvável que ganharia.




                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(43)"> Continuar
                    </button>

                   

                   
        
                    <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-espadachim')
                    typeWrite(titulo)
                   

                    break;

                    case 43:     
                    
                    hero.dialogo = `<p>Dragão: <span class="bossText">CRIATURA INSOLENTE, OUSASTE DESFERIR SUA LÂMINA FÉTIDA CONTRA MINHA NOBRE CARNE?</span></p> <p>${hero.nome}: <span class="heroText">Até o largartão parecia mais desafiante que você!</span></p> <p>Dragão: <span class="bossText">IREI LHE MOSTRAR O QUE ACONTECE QUANDO UM MERO BÍPEDE XEXELENTO DESAFIA O REI DOS CÉUS!</span></p>` 
                    
                    hero.ataque= 0,
                    hero.erro= 0,
                    hero.acerto=0,
                    hero.crit= [9],
                    hero.historia = 'select(4333)'
                    
                    
                    
                    boss.nome = 'Dragão'
                    boss.hp = 100
                    boss.sprite = './sprites/dragon.gif'
                    boss.img = './img/img/dragon.jpeg'
                    boss.ataque = 35
                    boss.erro = 7
                    boss.acerto = 9
                    boss.crit = 10 
                    boss.animacao = 6200
                    
                    combateFake('combate()')
                    
                    addFightClass()
                    
                    break;
                    
                    case 4333: 

                    
                    
                    hero.dialogo = `<p>Dragão: <span class="bossText">“Ó, Ufattelig, REI DAS TREVAS E PAI DA MALDADE, SENHOR DO CAOS E SERVENTE DA DOR, ESTE MERO SOLDADO IMPLORA POR ASSISTÊNCIA, JUNTE-SE A MIM E VAMOS TRANSFORMAR ESSE BÁRBARO EM PÓ!”</span></p> <p>Dragão: <span class="bossText">Ufattelig? POR QUÉ ME IGNORAS? NÃO SOU O DRAGÃO CARMESIM, ENCARNAÇÃO DAS TREVAS, REI DOS CÉUS? POR QUÊ DESCARTASTES A MIM, Ufattelig!?” </span></p> <p>${hero.nome}: <span class="heroText">"Caraca, até o Rei do mal te deixou na mão! Você realmente vale menos do que o lagartão”</span></p>` 
                    combateFake('select(44)')

                    break;

                    case 44: 

                    
                    
                    container.innerHTML = `
                    
                    <div class="envelope-historia-personagem">
                    
                    <div class="historia-personagem"><p id="historia-espadachim">
                    O dragão, mesmo contorcendo-se e implorando por ajuda de Ufattelig, não a recebia de jeito algum. Seu líder assistia sua derrota de ínicio ao fim, e por estar usando um elmo fechado, sua reação e olhar era impossível de distinguir, quem sabe ele estava sadicamente assistindo seu servo perecer em sua frente, ou simplesmente sentia que precisava ajudar, porém não podia mexer seu corpo por algum motivo. Havia várias variáveis, porém, todas levavam a uma única alternativa; não importava. Tudo o que importava, é que ao subir as escadas do castelo, ${hero.nome} iria estar cara a cara com o rei do mal, o motivo de sua jornada, o motivo dessa calamidade estar acontecendo ao redor dos reinos.
                    
                    
                    
                    
                    </p>
                    
                    <button class="botao-historia" type="button" onclick="select(45)"> Ir para a batalha final
                    </button>
                    
                    
        
                    <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
                    
                    
                    </div>
                    </div>
                    
                    
                    `
                    var titulo = document.getElementById('historia-espadachim')
                    typeWrite(titulo)
                    
                    addStoryClass()
                    
                    break;

                    case 45: 

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-espadachim">
                    Adentrar o castelo fora mais fácil do que parecia. Seus servos, que pareciam ser a sua força focal, alguns extremamente fortes, não estavam mais no castelo. ${hero.nome} estava ocupado demais com seus próprios pensamentos de glória, do que preocupado de saber o que estava acontecendo, será mesmo que o rei do mal simplesmente decidiu desocupar o castelo? Ou seria aquele um pedido de encontro entre os dois? 	Vários cenários indicavam que algo estava errado. Ele não havia dominado o mundo por simples força, suas táticas eram impecáveis, o que ele estava pensando?




                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(46)"> Continuar
                    </button>

        
        
                    <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-espadachim')
                    typeWrite(titulo)
                   

                    break;

                    case 46: 

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-espadachim">
                    <p>${hero.nome}:<span class="heroText"> “Ei Rei do mal, eu vou te encher de sopapo, ninguém precisa de guardião ou sei lá o que, eu tô muito forte já!”</span></p>
                    <p>Ufattelig:<span class="bossText"> “&%^@*$%+!!, *#@^&$!%.”</span></p>
                    ${hero.nome}: “O que…?”

                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(47)"> Continuar
                    </button>

        
        
                    <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-espadachim')
                    typeWrite(titulo)
                   

                    break;
                    
                    case 47: 

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-espadachim">
                    ${hero.nome} era incapaz de entender o que o oponente estava tentando dizer, cada palavra soava como estática em seus ouvidos, mas aquilo não importava. Em sua cabeça, podia vencer sozinho sem mesmo ter que esperar pelo guardião, a vitória seria certa.

                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(4888)"> Continuar
                    </button>

        
        
                    <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-espadachim')
                    typeWrite(titulo)

                    hero.historia = 'select(48)'
                  

                    break;

                    case 4888:

                        
                        boss.nome = 'Ufattelig'
                        boss.hp = 1500
                        boss.sprite = './sprites/bossFinal.gif'
                        boss.img = './img/img/bossFinal.jpg'
                        boss.ataque = hero.hp - 1
                        boss.erro = 0
                        boss.acerto = 10
                        boss.crit = 0 
                        boss.animacao = 5800
                        
                        combateFake('combateFinal()')
                        
                        
                        
                        
                        var titulo = document.getElementById('historia-espadachim')
                        typeWrite(titulo)
                        
                        
                        addFightClass()

                    

                    break;

                    case 48: 

                    
                    
                    container.innerHTML = `
                    
                    <div class="envelope-historia-personagem">
                    
                    <div class="historia-personagem"><p id="historia-espadachim">
                    ${hero.nome}: “Impossível! Como?? Só com um golpe…”
                    
                    Ufattelig estava prestes a acabar com a vida do espadachim. Uma jornada inteira, apenas para acabar logo no final, por não ser forte o suficiente, ele realmente não era o bastante? Tantos inimigos derrotados, e ele era incapaz de terminar a jornada sozinho? De que aquelas lutas bastavam, se nenhuma delas lhe deixava mais forte? Do que a vida adiantava?
                    Mas então…
                    
                    
                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(49)"> Continuar
                    </button>
                    
                    
                    
                    <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
                    
                    
                    </div>
                    </div>
                    
                    
                    `
                    var titulo = document.getElementById('historia-espadachim')
                    typeWrite(titulo)
                    
                    addStoryClass()

                    break;

                    case 49: 

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-espadachim">
                    O Guardião apareceu extremamente do nada, como um relâmpago, apesar de ser extremamente alto e definido, sua velocidade não parecia diminuir nem um pouco, facilmente sendo mais rápido do que o melhor cavalo do reino. O Guardião bloqueou o caminho entre o espadachim e o inimigo, e então, apontou para a saída do castelo. Aquilo era um óbvio sinal de que, ficar ali, era apenas um estorvo para seu salvador. 
                    Entendendo o recado, o rapaz saía às pressas, deixando os dois colossos lutarem entre si.



                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(50)"> Guardião vs Ufatteing </button>

        
        
                    <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-espadachim')
                    typeWrite(titulo)
                  

                    break;

                    case 50: 

                    
                    
                    
                    boss.nome = 'Ufattelig'
                    boss.hp = 1500
                    boss.sprite = './sprites/bossFinal.gif'
                    boss.img = './img/img/bossFinal.jpg'
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
                    hero.historia = 'select(5000)'
                    
                    hero.dialogo = `<p>Guardião: <span class="heroText">“Ufattelig… Então esse era seu segredo, você nem mesmo é do nosso reino, você nem mesmo é “humano”, ou sequer um ser daqui…”</span></p> <p> Ufattelig:<span class="bossText"> “&%^@*$%+!!, *#@^&$!%.”</span></p>
                    </p>Guardião:<span class="heroText"> “Não importa. Tenho que lhe deter aqui, e agora.”</span></p>`
                    
                    combateFake('combate()')
                    
                    addFightClass()
       

                    break;

                    case 5000:
                    
                    hero.dialogo = `<p>Ufattelig: <span class="bossText">“Vo%ê @ão$%+!!,os *#@^im&$d!rá%..”</span></p> <p>Guardião: <span class="heroText">“Morra imediatamente, praga! Não me importo com o que você tem a dizer!”</span></p>   `
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
                    
                    
                    
                    
                    
                    <div class="imagem-personagem"><img  src="./img/img/Sword1.jpg"></div>
                    
                    
                    </div>
                    </div>
                    
                    
                    `
                    var titulo = document.getElementById('historia-espadachim')
                    typeWrite(titulo)

                    addStoryClass()
                    
                    break;    
                    
                    case 100:
                        
                        
                        
                        
                        hero.nome = 'Ronaldo'
                        hero.hp = 100
                        hero.sprite = './sprites/Axe_M.gif'
                        hero.img ='./img/img/Axe_M1.jpg'
                        hero.perfil ='./img/rostoHero/rostoQuebra-M.png'
                        hero.ataque = 100
                        hero.erro = 6 
                        hero.acerto = 8
                        hero.crit = 10
                        hero.pocao = 4
                        hero.animacao = 1100
                        
                        
                        
                        container.innerHTML = `
                        
                        <div class="envelope-historia-personagem">
                    
                        <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                        A busca da força, o mais puro conceito de ser extraordinário em todos os aspectos possíveis, ser o melhor em quebrar crânios só com o flexionar dos músculos. Esse é o caminho do Reino do Sul. Esse, também, é o caminho do Quebra-Escudos chamado Vigvisir, que a vida toda acreditou que se a violência não resolvia as coisas, era porque a violência não estava sendo devidamente aplicada. Teimoso, extremamente forte, porém, infelizmente, por contrapartida, também sem muito cérebro, o que lhe fazia errar seus alvos mais do que acertá-los.
                        
                        </p>
                        
                        <button class="botao-historia" type="button" onclick="select(101)"> Continuar </button>
                        
                        <div class="imagem-personagem"><img  src="../img/img/Axe_M1.jpg"></div>
                        
                        </div>
                        </div>
                        `
                        var titulo = document.getElementById('historia-quebra-escudos-m')
                        typeWrite(titulo)
                        
                        addStoryClass()
                        
                        break;
                        
                        case 101:
                            container.innerHTML = `
                            
                            <div class="envelope-historia-personagem">
                            
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            A guerra contra Ufattelig foi uma terrível guerra para todos os reinos, os cavaleiros foram dizimados, os espadachins, que meio que já estavam separados mesmo, ficaram ainda mais distantes, os lanceiros, com sua disciplina e lealdade, haviam perdido seu mártir mais valioso, seu próprio rei, e as terras além do reino ficaram ainda mais caótica do que eram antes, com o ressurgimento e ocupação de forças malignas, que impregnava as florestas como rios, e matava a plantação como se fossem um poderoso veneno.
                            
                        </p>
            
                        <div class="envelope-botoes-historia"><button class="botao-historia" type="button" onclick="select(102)"> Continuar </button></div>
                        
                        <div class="imagem-personagem"><img  src="../img/img/Axe_M1.jpg"></div>
            
            
                        </div>
                        </div>
                        `
                        var titulo = document.getElementById('historia-quebra-escudos-m')
                        typeWrite(titulo)
            
                        
                        break;
            
                        case 102:
                        container.innerHTML = `
            
                        <div class="envelope-historia-personagem">
                    
                        <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                        Os Quebra-Escudos? Óbvio que encontrar um inimigo que era incapaz de meter o soco no primeiro encontro foi algo devastador, para todos os habitantes, algo mais impactante do que perder seu rei ou seu reino inteiro. Sua honra estava completamente dizimada, o que fez a maioria deles perder o espírito de luta e lentamente aguardar a sua morte, ou apenas desistir de seguir seus princípios, resultando em vários mercenários e até mesmo recrutas novos para Ufattelig, pelo simples fato de seus espíritos estiver em pedaços.
                        
                        </p>
            
                        <button class="botao-historia" type="button" onclick="select(103)"> Continuar </button>
            
                        <div class="imagem-personagem"><img  src="./img/img/Axe_M1.jpg"></div>
            
            
                        </div>
                        </div>
                        `
                        var titulo = document.getElementById('historia-quebra-escudos-m')
                        typeWrite(titulo)
                        
                        break;
            
                        case 103:
                        container.innerHTML = `
            
                        <div class="envelope-historia-personagem">
                    
                        <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                        Vigvisir foi um dos primeiros a levantar a bandeira de resistência contra Ufattelig, pois sabia que lutar ou desistir ainda resultaria em morte, de que importava cair lutando? Portanto, regularmente ia em expedições voluntárias com outros sobreviventes da guerra em tentativas de reconquistar território, e muitas vezes, essas pequenas batalhas resultaram em perdas para o lado da humanidade. Havia muitas poucas pessoas com habilidades em combate, pois a maioria dos guerreiros haviam morrido na grande guerra.
                        
                        </p>
            
                        <button class="botao-historia" type="button" onclick="select(104)"> Continuar </button>
                        
                        <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
            
                        </div>
                        </div>
                        `
                        var titulo = document.getElementById('historia-quebra-escudos-m')
                        typeWrite(titulo)
                        
                        break;
            
                        case 104:
            
                           
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            Após o fim de uma dessas batalhas sangrentas, que resultou em apenas Vigvisir sobrevivendo, por ser o único hábil o suficiente, o mesmo descansava na sombra de uma árvore, ensanguentado, com ambos sangue de inimigos, aliados, e o seu próprio, tão exausto, que nem ao menos percebia a presença em sua frente; um enorme ser armadurado, portanto uma lança e um escudo ambos colossais, facilmente tendo mais que o dobro de seu próprio tamanho, levando em consideração que ele era um homem muito robusto.
                            O Quebra-Escudos se questiona sobre o que fazer a seguir.
            
                            
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(106)"> Atacar o ser de armadura  </button>
                            <button class="botao-historia" type="button" onclick="select(107)"> Esperar e ver o que ele quer  </button>
                            <button class="botao-historia" type="button" onclick="select(108)"> Tentar conversar com a figura </button>
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
                            
                            
                        break;
            
                        case 106:
                                    
                            
                            
                            boss.nome = 'Guardião'
                            boss.hp = 3000
                            boss.sprite = './sprites/guardion.gif'
                            boss.img = './img/img/guardion.jpg'
                            boss.ataque = 200
                            boss.erro = 4
                            boss.acerto = 8
                            boss.crit = 10 
                            boss.animacao = 2300
                            
                            combateFake('select(107)')
                            ataqueFake()
                            opcoesCombate.style.display = 'block'
                            
                            addFightClass()
                                    
                            break;
            
                        case 107:
                           
                            addStoryClass()
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            "..."</br>
                            Guardião: “Olha só, achei que você era só um franguinho sem coragem de revidar o mínimo de intimidação, parece que subestimei você até demais.”
            
                            
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(109)"> Continuar  </button>
                            
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 108:
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            O Ser de armadura levanta a sua mão, como se interrompesse a sua fala, e mesmo ignorando tal sinal e continuando a tentar ter a comunicação, ele apenas lhe ignora.
            
                            
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(109)"> Continuar  </button>
                            
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 109:
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            Guardião: “Perdão por demorar com as introduções, e por lhe encarar, eu sou Ru’thra, mas o senhor pode me chamar de Guardião a ponto de facilitar a sua memória. Estou em uma missão de exterminar as forças do mal, porém, minha fornalha de almas está quase no limite, caso eu continue, estou certo a perecer sem ao menos deter Ufattelig, o Rei Demônio, por eu não saber a sua localização ainda. Guerreiro, eu preciso de sua ajuda.”
            
                            
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(110)"> Por quê você quer minha ajuda  </button>
                            <button class="botao-historia" type="button" onclick="select(111)"> Ru’thra? Esse não é o rei do reino do Oeste?  </button>
                            <button class="botao-historia" type="button" onclick="select(112)"> Por quê eu?  </button>
                            
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 110:
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            Guardião: “Você foi um dos únicos guerreiros que encontrei e é relativamente forte em comparação aos homens caídos ao redor. O último humano que vi foi um dos meus súditos, que morreu em batalha a pouco tempo. Só você consegue me ajudar a derrotar Ufattelig.” 
            
                            
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(113)"> Entendido. Irei lhe ajudar.  </button>
                            <button class="botao-historia" type="button" onclick="select(114)"> Eu nunca concordei com isso! Vai catar coquinho!  </button>
                            
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 111:
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            Guardião: “Sim rapaz. Eu sou o Rei Lanceiro, Ru’thra, o último guardião da linhagem de guardiões que foram levantados a fim de derrotar Ufattelig. Como você já deve ter adivinhado, nós falhamos com nosso propósito, mas ainda podemos cumpri-lo.”
            
                            
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(113)"> Entendido. Irei lhe ajudar.  </button>
                            <button class="botao-historia" type="button" onclick="select(114)"> Eu nunca concordei com isso! Vai catar coquinho!  </button>
                            
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 112:
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            Guardião: “Guerreiro. Eu sou incapaz de prosseguir mais um passo. Minha fornalha de almas, minha fonte de energia, está perto de se esgotar, e com o seu fim, também chegará o meu. Eu preferiria queimar nas chamas de Tártaro ao invés de garantir que nada poderá ficar no caminho de Ufattelig, os Guardiões são os únicos seres capazes de derrotá-lo, ele é forte demais para qualquer outro ser humano.”
            
                            
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(113)"> Entendido. Irei lhe ajudar.  </button>
                            <button class="botao-historia" type="button" onclick="select(114)"> Eu nunca concordei com isso! Vai catar coquinho!  </button>
                            
                            
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 113:
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            Guardião: “Vá para o Norte aventureiro, onde o caído reino dos cavaleiros ainda mantém suas ruínas. Encontre um dos capatazes de Ufattelig, Lacerta, um homem-lagarto que traz escravos e prisioneiros de guerra para o exército das forças do mal, ele será seu desafio mais fácil, porém ainda será um desafio. Encontre informações da localização de Ufattelig através dele, e quando você achá-lo, eu estarei lá.”
            
                            
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(117)"> Continuar </button>
                            
                            
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 114:
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            Guardião: “Então terei que lhe matar e esperar a próxima pessoa que concorda… Você sabe demais. Não posso deixar com que meu plano vaze para Ufattelig.”
            
            
            
                            
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(115)"> E-Espera! Eu estava zoando! É só zoeira!</button>
                            <button class="botao-historia" type="button" onclick="select(116)"> Vamo nessa monte de lata. Eu vou te matar até você morrer  </button>
                            
                            
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 115:
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            Guardião: “Imaginei que você voltaria a consciência a tempo.” 
                            Guardião: “Vá para o Norte aventureiro, onde o caído reino dos cavaleiros ainda mantém suas ruínas. Encontre um dos capatazes de Ufattelig, Lacerta, um homem-lagarto que traz escravos e prisioneiros de guerra para o exército das forças do mal, ele será seu desafio mais fácil, porém ainda será um desafio. Encontre informações da localização de Ufattelig através dele, e quando você achá-lo, eu estarei lá.”
            
            
            
                            
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(117)"> E-Espera! Eu estava zoando! É só zoeira!</button>
                            
                            
                            
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 116:

                            addFightClass()
                            
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
                                    
            
                                    ataqueHero()
            
            
            
                            // COMBATE QUE FAZ O JOGADOR PERDER
            
            
            
            
            
            
                        break;    
            
                        case 117:

                            
                            addStoryClass()
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            Vigvisir então parte para os reino do Norte, encontrando vários inimigos no caminho, porém facilmente acabando com eles, e eventualmente, acabando trombando com Lacerta, imediatamente assumindo a instância de batalha, por ele ser o único homem-lagarto que havia encontrado até agora. 
                            
                            Lacerta: “Como você ousa invadir o território de Lorde Ufattelig? Você é louco?!”
                            Vigvisir: “Já comi lagarto queimado em expedições.. Espero que não queime esse.”
                            Lacerta: “Vou te informar que eu sou descendente de um dragão de komodo, cuidado comigo!”
            
            
                            
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(119)"> Continuar </button>
                            
                            
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 119:
            

                            addFightClass()
                    
                        
                           
                             hero.dialogo = `<p>Lacerta: “Como você ousa invadir o território de Lorde Ufattelig? Você é louco?!</p><p>Vigvisir: “Já comi lagarto queimado em expedições.. Espero que não queime esse.”</p><p>Lacerta: “Vou te informar que eu sou descendente de um dragão de komodo, cuidado comigo!”</p>`
                            
                            boss.nome = 'Lagartixa Falante'
                            boss.hp = 45
                            boss.sprite = './sprites/calango.gif'
                            boss.img = './img/img/calango.jpg'
                            boss.ataque = 18
                            boss.erro = 4
                            boss.acerto = 8
                            boss.crit = 10 
                            boss.animacao = 2300
    
                            hero.historia = 'select(120)'
    
                            combateFake('combate()')
              
                        break;
            
                        case 120:

                            
                            addStoryClass()
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            Após derrotar Lacerta, Vigvisir acaba encontrando um papel dentro de seu bolso (Lagartixa tem bolsos?) que dizia a localização de seu próximo oponente, e uma nova pista da localização de Ufattelig; a princesa do reino do Sul, corrompida pelas forças do mal. 
                            
                         
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(121)"> Continuar </button>
                            
                            
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 121:
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            Sua localização não fora a coisa mais inconspicua do mundo, por ainda utilizar o caído reino dos Quebra-Escudos como seu castelo. Voltar ao seu antigo reino caído com certeza fora algo difícil de superar, porém, salvar o mundo era mais importante do que lidar com seu emocional no momento. Ao contrário de Lacerta, a princesa, Securis, era com total certeza um desafio a altura de se superar.
                            
                         
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(122)"> Continuar </button>
                            
                            
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 122:
            
                            addFightClass()
                    
            
                           
                             hero.dialogo = `<p>Securis: ”Quem é você? Quem ousa pisar no território de Securis, serva de Ufattelig?”</p> <p> Vigvisir: “Perdão, princesa, eu juro que vou te socar só um pouquinho.”</p> <p> Securis: ”Eu te ordeno a ajoelhar-se agora perante sua princesa, relés Quebra-Escudo!”</p>`
            
                             boss.nome = 'Securis'
                             boss.hp = 80
                             boss.sprite = './sprites/princess.gif'
                             boss.img = './img/img/princess.jpg'
                             boss.ataque = 40
                             boss.erro = 6
                             boss.acerto = 7
                             boss.crit = 8
                             boss.animacao = 2300
                        
                            combateFake('combate()')
                            hero.historia = 'select(123)'
            
            
                        break;
            
                        case 123:

                            
                            addStoryClass()
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            Após derrotar Securis, a mesma convenientemente havia dissipado as forças do mal de seu corpo (bem convenientemente, como se fosse uma história…) informando o bravo “herói” de mais uma pista da localização de Ufattelig, mais um de seus oficiais (para variar) um antigo invocador ermitão, Vocator, que foi corrompido pela maldade, servindo Ufattelig de uma forma menos agressiva, apenas lhe fornecendo unidades de batalha, por conseguir invocá-las, e não ativamente indo atrás de prisioneiros ou de vítimas de sua magia, ou seja, um covardão que não aguenta ver sangue.
                            
                         
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(124)"> Continuar </button>
                            
                            
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 124:
            
                            addFightClass()
                    
            
                           hero.dialogo = `<p> Vocator: “Como você encontrou esse lugar? Eu tive certeza de contar apenas aos oficiais de Ufattelig! Não pode ser…”</p><p>Vigvisir: “Senhor, eu preciso apenas da localização de Ufattelig, se você só me der eu posso só deixar você com o nariz intacto.”</p><p> Vocator: “Impossível! Você não vai passar!”</p>`
            
                            boss.nome = 'Vocator'
                            boss.hp = 110 
                            boss.sprite = './sprites/voLcator.gif'
                            boss.img = './img/img/volcator.jpg'
                            boss.ataque = 25
                            boss.erro = 4
                            boss.acerto = 8
                            boss.crit = 10 
                            boss.animacao = 7200 
                         
                            combateFake('combate()')
                            hero.historia = 'select(125)'
            
                                    
                        break;
            
                        case 125:

                            
                            addStoryClass()
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            Vocator foi um desafio maior ainda que Securis, por suas invocações tomarem o seu lugar, lhe fornecendo segurança a maior parte do tempo. Mesmo derrotado entretanto, o mesmo não havia voltado ao seu estado normal, por estar completamente tomado pelas trevas. Aparentemente, até uma princesa tem mais força do que um mago experiente? Isso apenas comprova o quão banana era. Obviamente, era uma pena não conseguir extrair informações do mago, mas tal problema foi totalmente resolvido apenas olhando um pouco para seu esconderijo, coincidentemente, intelectuais adoravam escrever e anotar tudo o que tinham conhecimento, inclusive a localização de seus parceiros.
                            Vigvisir foi capaz de encontrar o próximo oficial a eliminar, ou melhor, os dois próximos.
            
                            
                         
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(126)"> Continuar </button>
                            
                            
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 126:
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            Os próximos oficiais baseiam-se em dois antigos servos reais, o segundo mais habilidoso espadachim do Reino dos espadachins, ficando para trás apenas em relação ao rei, e um dos antigos magos que construíram os Guardiões, a última tentativa da humanidade de repelir Ufattelig, infelizmente, ambos estavam completamente corrompidos pelo mal, por terem sido um dos primeiros a cair durante a grande guerra, afinal, estavam na linha de frente da aliança. 
                            Isso significava que, não haveria uma situação de tanta sorte quanto Securis, a batalha seria até a morte, não que todas até agora não fossem, mas salvá-los não era uma opção.
                            Seus nomes, mesmo que marcados na história por décadas, haviam sido perdidos, banhados por histórias de suas brutalidades enquanto na governança de Ufattelig, mesmo sendo pessoas extraordinárias, capazes de receberem posições reais, apenas suas ocupações, como “Mago” e “Espadachim” havia lhe restado. Um triste fim.
            
            
                            
                         
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(127)"> Irei lutar contra o segundo melhor espadachim, quero saber o quão forte o segundo mais forte espadachim é em comparação a mim. </button>
            
                            <button class="botao-historia" type="button" onclick="select(133)"> Irei lutar contra o mago real, é uma boa oportunidade de saber um pouco mais do porque os guardiões existem, e ver como um mago real luta. </button>
                            
                            
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 127:
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            Claro, o pensamento individualista, “serei o melhor, com total certeza!”, era uma linha de decisão simples, mas que querendo ou não, iria progredir na missão de salvar o mundo. Então, Vigvisir partiu em direção ao seu oponente espadachim, confiante que iria ganhar, porém não sabendo o desafio que estaria por vir.
            
            
                            
                         
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(128)"> Irei lutar contra o segundo melhor espadachim, quero saber o quão forte o segundo mais forte espadachim é em comparação a mim. </button>
            
                            
                            
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 128:
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            A localização do espadachim corrompido nada mais era do que nos portões do castelo de Ufattelig, o que facilitava e muito a situação de Vigvisir, afinal, em sua cabeça, era só derrotar o inimigo em frente, e logo depois, derrotar Ufatellig, certo? 
            
            
                            
                         
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(129)"> Continuar </button>
            
                            
                            
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 129:
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            O guerreiro em sua frente, vestido de cabeça aos pés de armadura carmesim, exalando uma aura óbvia de corrupção, ficava em seu caminho, com a espada cravada em sua frente, enquanto descansava as mãos em sua maçã, como se estivesse aguardando a presença de Vigvisir faz um tempo. Ainda não demonstrando vontade alguma de lutar, o mesmo falava, em um tom alto e brusco, somente pela voz era perceptível que aquele homem havia lutado inúmeras batalhas em seu passado, e ele não planejava perder esta.? 
            
            
                            
                         
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(130)"> Continuar </button>
            
                            
                            
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 130:
            
                            addFightClass()
                   
            
                         hero.dialogo = `<p>Espadachim Corrompido: “Guerreiro! Dê meia volta imediatamente, lhe aviso que mais um passo, e eu lhe corto em vários pedaços que nem uma melância do Fruit Ninja!“</p> <p>Vigvisir: “Olha, não tem segredo, eu afundo a sua cara, e você me deixa passar, ou, eu afundo você na terra, e você me deixa passar.”</p> <p>Espadachim Corrompido: “Bela piada, vamos ver se você consegue cuspir mais palavras decapitado!”</p>`

                        boss.nome = 'Espadachim Corrompido'
                        boss.hp = 235
                        boss.sprite = './sprites/bossEspadachim.gif'
                        boss.img = './img/img/bossEspadachim.jpg'
                        boss.ataque = 15
                        boss.erro = 4
                        boss.acerto = 9
                        boss.crit = 10 
                        boss.animacao = 2300

                        combateFake('combate()')
                        hero.historia = 'select(131)'
            
                                        
            
                        break;
            
                        case 131:

                            
                            addStoryClass()
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            Não surpreendentemente, o espadachim era realmente muito feroz com seus ataques, arrastando sua espada na estrada, fazendo inúmeras faíscas a cada golpe, a cada estocada quase fazendo com que Vigvisir caísse no chão, porém, havia emergido vitoriosamente. 
            
            
                            
                         
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(132)"> Continuar </button>
            
                            
                            
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 132:
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            Após a batalha, faltava apenas seguir a dentro do castelo, porém, ao olhar aos arredores do castelo, havia uma área mais morta do que o normal, onde a terra era seca e extremamente preta, lembrando o carvão, se quisesse, poderia simplesmente ignorar a anormalidade sem quaisquer problemas. Quem se importa que a terra parecia carvão naquela parte? Mas um pequeno impulso pulsava na cabeça de Vigvisir, “O que será que tem lá? Eu quero ver o que tem lá”,mpor pura curiosidade tinha vontade de trilhar caminhos paralelos a sua jornada.  
            
            
                            
                         
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(139)"> Acho que vou dar uma olhada no que tem ali, com certeza não é algo de errado, né? Vai que encontro alguns pães de alho ali, com um churras e uma grelha daquelas! </button>
            
                            <button class="botao-historia" type="button" onclick="select(140)"> Não posso me distrair agora, por mais que eu queira muito, muito, muito ir… Não posso! Cada segundo importa, e não sei se o Ufattelig sei lá, pula da janela pra fugir! </button>
            
                            
                            
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 133:
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            Querendo ou não, ver a oposição extremamente fraca de Vocator fez com que Vigvisir adquirisse um pré conceito de magos subconscientemente, “Todos os magos são pamonhas, logo, vou acabar com esse mago bem rápido” não sabendo o que estava por vir, mas, também, como poderia? Mesmo tendo acabado com algumas forças extremamente fortes do mal, sua jornada estava sendo completamente guiada, fora de seu controle. 
            
            
                            
                         
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(134)"> Continuar </button>
            
                            
                            
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 134:
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            A curiosidade acabou sendo maior do que o desejo de ser o melhor, perguntas como por quê os guardiões existem? Como eles foram criados? Quão forte é um deles? 
                            Foram as mais comuns. Mas, talvez, enfrentar um dos criadores de tais armas de combate fosse uma experiência reveladora, além de, na cabeça de Vigvisir, ser uma batalha fácil de lidar, inocente de seu futuro desafio.
             
            
            
                            
                         
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(135)"> Continuar </button>
            
                            
                            
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 135:
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            Ao contrário do que se esperava, surpreendentemente, o mago estava em um campo completamente aberto, parecendo estar atrás do Espadachim em si, como se também estivesse ansioso para a luta, introduzindo-se formalmente. 
             
            
            
                            
                         
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(136)"> Continuar </button>
            
                            
                            
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 136:
            
                            addFightClass()
                    
            
                            hero.dialogo = `<p>Mago Corrompido: “Saudações, guerreiro. Perdão pela minha falta de sutileza, porém como você derrotou vários oficiais de Ufattelig, fui encarregado de formalmente acabar com a sua raça, da forma mais rápida possível.”</p> <p>Vigvisir: “Ahh… Eu achei que todo mago era pamonha, mas parece que são loucos também, não tá vendo que nem arma você tem amigo?!”</p> <p>Mago Corrompido: “Não seja por isso “amigo”, um mago como eu nem ao menos precisa de armas contra você…”</p>`
                                        
            
                            boss.nome = 'Mago Corrompido'
                            boss.hp = 150
                            boss.sprite = './sprites/bossMago.gif'
                            boss.img = './img/img/bossMago.jpg'
                            boss.ataque = 25
                            boss.erro = 6
                            boss.acerto = 9
                            boss.crit = 10
                            boss.animacao = 2300

                            combateFake('combate()')
                            hero.historia = 'select(137)'
            
            
                        break;
            
                        case 137:

                            
                            addStoryClass()
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            Quem diria que um mago seria tão poderoso assim? Vigvisir que o diga. Derrotá-lo foi mais difícil do que matar barata com veneno, nem quando achava que ganharia havia ganhado de fato, e a batalha havia se alastrado demais. Obviamente, após derrotá-lo, roubar seus pertences e roupa era o mais cordial, o que um cadáver tem a dizer sobre perder o que é seu?
                            Entre seus itens, havia um mapa da localização do castelo de Ufattelig, o qual usou para seguir em frente, no caminho, acaba lembrando-se de um fator indispensável!
                            Vigvisir: “AHH! EU NEM CONSEGUI SEQUER UMA PISTA DOS GUARDIÕES!”
                            Mesmo que tivesse seus arrependimentos, a sua jornada estava beirando ao fim.
                            
            
            
                            
                         
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(138)"> Continuar </button>
            
                            
                            
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 138:
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            O castelo era extremamente imponente, chegando até as nuvens com suas torres altas, com a sua grama estranhamente viva, e até com alguns restos mortais espalhados por aqui e ali. Como assim, o rei do mal não limpava o quintal? Absurdo!
                            Ao olhar aos arredores do castelo, havia uma área mais morta do que o normal, onde a terra era seca e extremamente preta, lembrando o carvão, se quisesse, poderia simplesmente ignorar a anormalidade sem quaisquer problemas. Quem se importa que a terra parecia carvão naquela parte? Mas um pequeno impulso pulsava na cabeça de Vigvisir, “O que será que tem lá? Eu quero ver o que tem lá”, por seguir seus desejos, tal escolha era algo normal em seu dia a dia, por pura curiosidade tinha vontade de trilhar caminhos paralelos a sua jornada.
            
                            
            
            
                            
                         
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(139)"> Acho que vou dar uma olhada no que tem ali, com certeza não é algo de errado, né? Vai que encontro alguns pães de alho ali, com um churras e uma grelha daquelas! </button>
            
                            <button class="botao-historia" type="button" onclick="select(143)"> Não posso me distrair agora, por mais que eu queira muito, muito, muito ir… Não posso! Cada segundo importa, e não sei se o Ufattelig sei lá, pula da janela pra fugir! </button>
            
                            
                            
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 139:
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            A curiosidade tomou controle das ações de Vigvisir, que lhe forçou a acabar com a aventura, simplesmente para checar uma terrinha mais preta que o normal, e então ele vagou na terra sem fim, e morreu de fome e sede por não saber para onde ir, Fim!
                            Brincadeira. 
                            O que havia encontrado de fato, era um dragão negro com escamas vermelhas espalhadas pelo seu corpo, com uma altura de cinco metros, deitado como um animal de estimação na terra queimada do local, dormindo. 
                            Sua figura era extremamente intimidadora, o espadachim sabia que, lutar com aquilo agora era suícidio, porém novamente, a curiosidade acabava lhe pressionando a tentar mais e mais, “E se eu for o primeiro espadachim a matar um dragão!?”
            
                            
            
            
                            
                         
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(140)"> Vamo nessa, vou ser o primeiro matador de dragões do reino! </button>
            
                            <button class="botao-historia" type="button" onclick="select(143)"> Não posso me distrair agora, por mais que eu queira muito, muito, muito ir… Não posso! Cada segundo importa, e não sei se o Ufattelig sei lá, pula da janela pra fugir!
                            </button>
            
                            
                            
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 140:
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            O dragão, por estar despreparado, sofre um golpe extremamente forte e despercebido, perdendo várias de suas escamas extremamente valiosas ao ter elas forçadas fora de seu corpo, um único golpe, por tomar o dragão enquanto ainda descansava, era o suficiente para mudar a batalha a seu favor, afinal, sem truques, era improvável que ganharia.
            
                        
                         
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(141)"> continuar </button>
            
                            
            
                            
                            
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 141:

                            addFightClass()
                            
            
                          hero.dialogo = `<p> Dragão: “CRIATURA INSOLENTE, OUSASTE DESFERIR SUA LÂMINA FÉTIDA CONTRA MINHA NOBRE CARNE?” </p> <p>Vigvisir: “Até o largartão parecia mais desafiante que você!” </p> <p>Dragão: “IREI LHE MOSTRAR O QUE ACONTECE QUANDO UM MERO BÍPEDE XEXELENTO DESAFIA O REI DOS CÉUS!” </p>` 
            

                          boss.nome = 'Dragão'
                          boss.hp = 800
                          boss.sprite = './sprites/dragon.gif'
                          boss.img = './img/img/dragon.jpeg'
                          boss.ataque = 35
                          boss.erro = 7
                          boss.acerto = 9
                          boss.crit = 10 
                          boss.animacao = 6200

                          combateFake('combate()')
                          hero.historia = 'select(4333)'
            
            
                                        
            
                        break;

                        case 4333: 
            
                        hero.dialogo = `<p>Dragão: “Ó, Ufattelig, REI DAS TREVAS E PAI DA MALDADE, SENHOR DO CAOS E SERVENTE DA DOR, ESTE MERO SOLDADO IMPLORA POR ASSISTÊNCIA, JUNTE-SE A MIM E VAMOS TRANSFORMAR ESSE BÁRBARO EM PÓ!”</p> <p>Dragão: “Ufattelig? POR QUÉ ME IGNORAS? NÃO SOU O DRAGÃO CARMESIM, ENCARNAÇÃO DAS TREVAS, REI DOS CÉUS? POR QUÊ DESCARTASTES A MIM, UFATTELIG!?” </p> <p>${hero.nome}: Caraca, até o Rei do mal te deixou na mão! Você realmente vale menos do que o lagartão”</p>` 
                        combateFake('select(142)')
            
                        break;
            
                        case 142:
                            
                            addStoryClass()
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            O dragão, mesmo contorcendo-se e implorando por ajuda de Ufattelig, não a recebia de jeito algum. Seu líder assistia sua derrota de ínicio ao fim, e por estar usando um elmo fechado, sua reação e olhar era impossível de distinguir, quem sabe ele estava sadicamente assistindo seu servo perecer em sua frente, ou simplesmente sentia que precisava ajudar, porém não podia mexer seu corpo por algum motivo. Havia várias variáveis, porém, todas levavam a uma única alternativa; não importava. Tudo o que importava, é que ao subir as escadas do castelo, Vigvisir iria estar cara a cara com o rei do mal, o motivo de sua jornada, o motivo dessa calamidade estar acontecendo ao redor dos reinos.
            
                        
                         
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(143)"> Continuar </button>
            
                            
            
                            
                            
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        
            
                        case 143:

                            
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            Adentrar o castelo fora mais fácil do que parecia. Seus servos, que pareciam ser a sua força focal, alguns extremamente fortes, não estavam mais no castelo. Vigvisir estava ocupado demais com seus próprios pensamentos de glória, do que preocupado de saber o que estava acontecendo, será mesmo que o rei do mal simplesmente decidiu desocupar o castelo? Ou seria aquele um pedido de encontro entre os dois? 	Vários cenários indicavam que algo estava errado. Ele não havia dominado o mundo por simples força, suas táticas eram impecáveis, o que ele estava pensando?
            
                        
                         
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(144)"> Continuar </button>
            
                         
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 144:
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            Vigvisir: “Ei Rei do mal, eu vou te encher de sopapo, ninguém precisa de guardião ou sei lá o que, eu tô muito forte já!”
                            Ufattelig: “&%^@*$%+!!, *#@^&$!%.”
                            Vigvisir: “O que…?”
            
            
                        
                         
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(145)"> Continuar </button>
            
                         
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 145:
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            ${hero.nome} era incapaz de entender o que o oponente estava tentando dizer, cada palavra soava como estática em seus ouvidos, mas aquilo não importava. Em sua cabeça, podia vencer sozinho sem mesmo ter que esperar pelo guardião, a vitória seria certa.
            
            
                        
                         
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(4888)"> Continuar </button>
            
                         
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            

                            hero.historia = 'select(146)'
            
                        break;
        
            
                        case 146:
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            Vigvisir: “Impossível! Como?? Só com um golpe…”
            
            
                        
                         
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(147)"> Continuar </button>
            
                         
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 147:
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            Ufattelig estava prestes a acabar com a vida do quebra escudo. Uma jornada inteira, apenas para acabar logo no final, por não ser forte o suficiente, ele realmente não era o bastante? Tantos inimigos derrotados, e ele era incapaz de terminar a jornada sozinho? De que aquelas lutas bastavam, se nenhuma delas lhe deixava mais forte? Do que a vida adiantava?
                            Mas então…
            
            
            
                        
                         
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(148)"> Continuar </button>
            
                         
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;
            
                        case 148:
            
                            container.innerHTML = `
            
                            <div class="envelope-historia-personagem">
                        
                            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                            O Guardião apareceu extremamente do nada, como um relâmpago, apesar de ser extremamente alto e definido, sua velocidade não parecia diminuir nem um pouco, facilmente sendo mais rápido do que o melhor cavalo do reino. O Guardião bloqueou o caminho entre o espadachim e o inimigo, e então, apontou para a saída do castelo. Aquilo era um óbvio sinal de que, ficar ali, era apenas um estorvo para seu salvador. 
                            Entendendo o recado, o rapaz saía às pressas, deixando os dois colossos lutarem entre si.
            
                         
                            </p>
                
                            <button class="botao-historia" type="button" onclick="select(50)"> Guardião vs Ufatteing </button>
            
                         
            
                            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                            </div>
                            </div>
                            `
                            var titulo = document.getElementById('historia-quebra-escudos-m')
                            typeWrite(titulo)
                            
            
                        break;

                        case 300:

            addStoryClass()

            hero.nome = 'Ronaldo'
            hero.hp = 70
            hero.sprite ='./sprites/Lance_M.gif'
            hero.img = './img/img/Lance_M1.jpg'
            hero.perfil = './img/rostoHero/rostoLanceiro.png'
            hero.ataque = 25
            hero.erro = 3
            hero.acerto = 7
            hero.crit = 7
            hero.pocao = 2
            hero.animacao = 2900

            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-lanceiro-m">
            A busca da disciplina e lealdade, a mais importante chama da honra em relação ao seu próprio rei, a disponibilidade de fazer tudo pela realeza era um dos aspectos mais únicos dos Lanceiros. Todos os reinos focaram em ser o melhor, destacar-se entre a multidão, entretanto, o reino dos Lanceiros focava extremamente em suas crenças, onde o Rei é a absoluta entidade acima de todos, e tudo.
            
            </p>

            <button class="botao-historia" type="button" onclick="select(301)"> Continuar </button>

            <div class="imagem-personagem"><img  src="../img/img/Lance_M1.jpg"></div>

            </div>
            </div>
            `
            var titulo = document.getElementById('historia-lanceiro-m')
            typeWrite(titulo)
            
            break;

            case 301:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-lanceiro-m">
            A guerra contra Ufattelig foi uma terrível guerra para todos os reinos, os cavaleiros foram dizimados, os espadachins, que meio que já estavam separados mesmo, ficaram ainda mais distantes, os lanceiros, com sua disciplina e lealdade, haviam perdido seu mártir mais valioso, seu próprio rei, e as terras além do reino ficaram ainda mais caótica do que eram antes, com o ressurgimento e ocupação de forças malignas, que impregnava as florestas como rios, e matava a plantação como se fossem um poderoso veneno. 
            
            </p>

            <div class="envelope-botoes-historia"><button class="botao-historia" type="button" onclick="select(302)"> Continuar </button></div>
            
            <div class="imagem-personagem"><img  src="../img/img/Lance_M1.jpg"></div>


            </div>
            </div>
            `
            var titulo = document.getElementById('historia-lanceiro-m')
            typeWrite(titulo)

            
            break;

            case 302:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-lanceiro-m">
            Porém, os Lanceiros se espalharam entre si, a maioria deles perderam as esperanças, e enviaram ataques suicidas, sem chances de vitória alguma como uma falha tentativa de entrelaçar-se a um destino há muito tempo perdido. Poucos, entretanto, seguiram em frente, no futuro sem sua figura de autoridade máxima.

            
            </p>

            <button class="botao-historia" type="button" onclick="select(303)"> Continuar </button>

            <div class="imagem-personagem"><img  src="../img/img/Lance_M1.jpg"></div>


            </div>
            </div>
            `
            var titulo = document.getElementById('historia-lanceiro-m')
            typeWrite(titulo)
            
            break;

            case 303:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-lanceiro-m">
            ${hero.nome} foi o primeiro Lanceiro a aceitar que não haveria uma figura máxima em sua vida, a não ser a si mesmo. Caçando para sobreviver, salvando quem podia, e correndo quando precisava, uma vida selvagem digna de um sobrevivente de uma guerra, porém, mesmo que fosse o pior estado de sua vida, ainda era relativamente feliz por manter sua vida.  
            
            </p>

            <button class="botao-historia" type="button" onclick="select(304)"> Continuar </button>
            
            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>

            </div>
            </div>
            `
            var titulo = document.getElementById('historia-lanceiro-m')
            typeWrite(titulo)
            
            break;

            case 304:

               
                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">
                Enquanto deliciava-se de um delicioso coelho em caldo, o mesmo percebia a presença em sua frente; um enorme ser armadurado, portanto uma lança e um escudo ambos colossais, facilmente tendo mais que o dobro de seu próprio tamanho, levando em consideração que ele era um homem relativamente robusto para uma pessoa normal. O ser empurrava árvores de centenas de quilos para o lado como se fossem alfinetes a fim de ver ${hero.nome} de perto.
                O Lanceiro se questiona sobre o que fazer a seguir.

                </p>
    
                <button class="botao-historia" type="button" onclick="select(305)"> Atacar o ser de armadura  </button>
                <button class="botao-historia" type="button" onclick="select(306)"> Esperar e ver o que ele quer  </button>
                <button class="botao-historia" type="button" onclick="select(307)"> Tentar conversar com a figura </button>

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                
                
                
            break;

            case 305:

                boss.nome = 'Guardião'
                boss.hp = 3000
                boss.sprite = './sprites/guardion.gif'
                boss.img = './img/img/guardion.jpg'
                boss.ataque = 200
                boss.erro = 4
                boss.acerto = 8
                boss.crit = 10 
                boss.animacao = 2300
                
                combateFake('select(3005)')
                ataqueFake()
                opcoesCombate.style.display = 'block'

                addFightClass()
                        
            break;

            case 3005:
                addStoryClass()

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><span class='guardion'>Guardião:</span><p id="historia-Espadachim">
                “Olha só, achei que você era só um franguinho sem coragem de revidar o mínimo de intimidação, parece que subestimei você até demais.”</p>
  
                <button class="botao-historia" type="button" onclick="select(308)"> Continuar </button>
                
                <div class="imagem-personagem"><img  src="./img/img/guardion.jpg"></div>

                </div>
                </div>
                `

                var titulo = document.getElementById('historia-Espadachim')
                typeWrite(titulo)
            
            break;

            case 306:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">
                "..."</br>
                Guardião: “Nada mal. Sua forma física não decai em nenhum aspecto, você tem um corpo muito desejável para qualquer guerreiro, junto com um coração de ouro.”


                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(308)"> Continuar  </button>
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                

            break;

            case 307:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">
                O Ser de armadura levanta a sua mão, como se interrompesse a sua fala, e mesmo ignorando tal sinal e continuando a tentar ter a comunicação, ele apenas lhe ignora.

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(308)"> Continuar  </button>
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                

            break;

            case 308:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">
                Guardião: “Perdão por demorar com as introduções, e por lhe encarar, eu sou Ru’thra, mas o senhor pode me chamar de Guardião a ponto de facilitar a sua memória. Estou em uma missão de exterminar as forças do mal, porém, minha fornalha de almas está quase no limite, caso eu continue, estou certo a perecer sem ao menos deter Ufattelig, o Rei Demônio, por eu não saber a sua localização ainda. Guerreiro, eu preciso de sua ajuda.”

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(309)"> Por quê você quer minha ajuda?</button>
                <button class="botao-historia" type="button" onclick="select(310)"> Ru’thra? Esse não é o rei do reino do Oeste?  </button>
                <button class="botao-historia" type="button" onclick="select(311)"> Por quê eu?  </button>
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                

            break;

            case 309:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">
                Guardião: “Você foi um dos únicos guerreiros que encontrei e é relativamente forte em comparação aos homens espalhados por aqui. O último humano que vi foi um dos meus súditos, que morreu em batalha a pouco tempo. Só você consegue me ajudar a derrotar Ufattelig.” 

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(312)">  Entendido. Irei lhe ajudar, ser estranho!   </button>
                <button class="botao-historia" type="button" onclick="select(313)"> Eu nunca concordei com isso! Vai catar coquinho!  </button>
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                

            break;

            case 310:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">
                Guardião: “Sim rapaz. Eu sou o Rei Lanceiro, Ru’thra, o último guardião da linhagem de guardiões que foram levantados a fim de derrotar Ufattelig. Como você já deve ter adivinhado, nós falhamos com nosso propósito, mas ainda podemos cumpri-lo.
                Peço perdão por ter sumido por tanto tempo, rapaz, mas era necessário para que Ufattelig pensasse que eu estava morto e baixasse sua guarda.”


                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(312)">  Entendido. Irei lhe ajudar, ser estranho!   </button>
                <button class="botao-historia" type="button" onclick="select(313)"> Eu nunca concordei com isso! Vai catar coquinho!  </button>
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                

            break;

            case 311:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">
                Guardião: “Guerreiro. Eu sou incapaz de prosseguir mais um passo. Minha fornalha de almas, minha fonte de energia, está perto de se esgotar, e com o seu fim, também chegará o meu. Eu preferiria queimar nas chamas de Tártaro ao invés de garantir que nada poderá ficar no caminho de Ufattelig, os Guardiões são os únicos seres capazes de derrotá-lo, ele é forte demais para qualquer outro ser humano.”

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(312)">   Entendido. Irei lhe ajudar, minha Majestade!    </button>
                <button class="botao-historia" type="button" onclick="select(313)"> Meu rei, peço perdão, mas… Eu não posso… Não consigo…</button>
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                

            break;

            case 312:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">
                Guardião: “Vá para o Norte aventureiro, onde o caído reino dos cavaleiros ainda mantém suas ruínas. Encontre um dos capatazes de Ufattelig, Lacerta, um homem-lagarto que traz escravos e prisioneiros de guerra para o exército das forças do mal, ele será seu desafio mais fácil, porém ainda será um desafio. Encontre informações da localização de Ufattelig através dele, e quando você achá-lo, eu estarei lá.”

                </p>
    
                <button class="botao-historia" type="button" onclick="select(316)"> Continuar </button>

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                
            break;

            case 313:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">
                Guardião: “Então terei que lhe matar e esperar a próxima pessoa que concorda… Você sabe demais. Não posso deixar com que meu plano vaze para Ufattelig.”


                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(314)"> E-Espera! Meu Rei! Apenas duvidei de minhas habilidades por um segundo!</button>
                <button class="botao-historia" type="button" onclick="select(315)"> Parece que não há outra escolha… Já não lhe trato como majestade mais a muito tempo. </button>

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                

            break;

            case 314:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">
                Guardião: “Imaginei que você voltaria a consciência a tempo.” 
                Guardião: “Vá para o Norte aventureira, onde o caído reino dos cavaleiros ainda mantém suas ruínas. Encontre um dos capatazes de Ufattelig, Lacerta, um homem-lagarto que traz escravos e prisioneiros de guerra para o exército das forças do mal, ele será seu desafio mais fácil, porém ainda será um desafio. Encontre informações da localização de Ufattelig através dele, e quando você achá-lo, eu estarei lá.”

                </p>
    
                <button class="botao-historia" type="button" onclick="select(316)"> Continuar</button>
 
                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)

                pause()
                stop()

            break;

            case 315:
                

                boss.fala = "Nunca imaginaria que houvesse alguém tão incapaz de entender a situação…"
                combate()
 
                ataqueHero()

                addFightClass()

                //ARRUMAR MODAL DE MORTE  

            break;    
            
            case 316:

            addStoryClass()

                //Trilha sonora de batalha

                audio = new Audio('./music/calangoMusic.mp3')
                audio.play()  

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">
                ${hero.nome} então parte para os reino do Norte, encontrando vários inimigos no caminho, porém facilmente acabando com eles, e eventualmente, acabando trombando com Lacerta, imediatamente assumindo a instância de batalha, por ele ser o único homem-lagarto que havia encontrado até agora. 
                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(317)"> Continuar</button>
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                

            break;

            case 317:

            hero.dialogo = `<p>Lagartixa Falante:<span class="bossText">Como você ousa invadir o território de Lorde Ufattelig? Você é louco?!</span></p> <p>${hero.nome}:<span class="heroText">Será que lagartixa no espeto fica bom?</span></p><p> Largatixa Falante: <span class="bossText">Vou te informar que eu sou descendente de um dragão de komodo, cuidado comigo!</p></span>`

            boss.nome = 'Lagartixa Falante'
            boss.hp = 45
            boss.sprite = './sprites/calango.gif'
            boss.img = './img/img/calango.jpg'
            boss.ataque = 18
            boss.erro = 4
            boss.acerto = 8
            boss.crit = 10 
            boss.animacao = 2300

            hero.historia = 'select(318)'

            combateFake('combate()')

            addFightClass()

            break;
           

            case 318:

                addStoryClass()

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">
                Após derrotar Lacerta, ${hero.nome} acaba encontrando um papel dentro de seu bolso (Lagartixa tem bolsos?) que dizia a localização de seu próximo oponente, e uma nova pista da localização de Ufattelig; a princesa do reino do Sul, corrompida pelas forças do mal. 
                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(319)"> Continuar</button>
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                
            break;

            case 319:

            pause()
            stop()

            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-lanceiro-m">
            Sua localização não fora a coisa mais inconspicua do mundo, por ainda utilizar o caído reino dos Quebra-Escudos como seu castelo. Voltar ao seu antigo reino caído com certeza fora algo difícil de superar, porém, salvar o mundo era mais importante do que lidar com seu emocional no momento. Ao contrário de Lacerta, a princesa, Securis, era com total certeza um desafio a altura de se superar. 
            
            </p>

            <button class="botao-historia" type="button" onclick="select(320)"> Continuar</button>
            
            
            

            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>

            </div>
            </div>
            `
            var titulo = document.getElementById('historia-lanceiro-m')
            typeWrite(titulo)

            
                

            break;

            case 320:

            hero.dialogo = `<p>Securis:<span class="bossText">Quem é você? Quem ousa pisar no território de Securis, serva de Ufattelig?</span></p> <p>${hero.nome}: <span class="heroText">Perdão, princesa, tentarei fazer com que isso não doe tanto.</span></p> <p>Securis:<span class="bossText">Eu te ordeno a ajoelhar-se agora perante sua princesa, relés Lanceiro!</span></p>`
            
            boss.nome = 'Securis'
            boss.hp = 80
            boss.sprite = './sprites/princess.gif'
            boss.img = './img/img/princess.jpg'
            boss.ataque = 40
            boss.erro = 7
            boss.acerto = 8
            boss.crit = 8
            boss.animacao = 4800

            hero.historia = 'select(321)'

            combateFake('combate()')

            addFightClass()

            break;

            case 321:

                addStoryClass()

                //Trilha Sonora

                audio = new Audio('./music/princessMusic.mp3')
                audio.play()  

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">
                Após derrotar Securis, a mesma convenientemente havia dissipado as forças do mal de seu corpo (bem convenientemente, como se fosse uma história…) informando o bravo “herói” de mais uma pista da localização de Ufattelig, mais um de seus oficiais (para variar) um antigo invocador ermitão, Vocator, que foi corrompido pela maldade, servindo Ufattelig de uma forma menos agressiva, apenas lhe fornecendo unidades de batalha, por conseguir invocá-las, e não ativamente indo atrás de prisioneiros ou de vítimas de sua magia, ou seja, um covardão que não aguenta ver sangue.
                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(322)"> Continuar</button>
   
                <div class="imagem-personagem"><img  src="../img/img/Lance_M1.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                

            break;

            case 322:

               
            // Combate: Hámaval vs Magnólia

            /*

            Vocator: “Como você encontrou esse lugar? Eu tive certeza de contar apenas aos oficiais de Ufattelig! Não pode ser…”
            ${hero.nome}: “Senhor, apenas preciso de direções, não há necessidade de violência, por favor só me deixe passar…
            Vocator: “Impossível! Você não vai passar!”


            
            */

           //addFightClass()


            break;

            case 323:

                addStoryClass()

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">
                Vocator foi um desafio maior ainda que Securis, por suas invocações tomarem o seu lugar, lhe fornecendo segurança a maior parte do tempo. Mesmo derrotado entretanto, o mesmo não havia voltado ao seu estado normal, por estar completamente tomado pelas trevas. Aparentemente, até uma princesa tem mais força do que um mago experiente? Isso apenas comprova o quão banana era. Obviamente, era uma pena não conseguir extrair informações do mago, mas tal problema foi totalmente resolvido apenas olhando um pouco para seu esconderijo, coincidentemente, intelectuais adoravam escrever e anotar tudo o que tinham conhecimento, inclusive a localização de seus parceiros.
                ${hero.nome} foi capaz de encontrar o próximo oficial a eliminar, ou melhor, os dois próximos.



                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(324)"> Continuar</button>
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                

            break;

            case 324:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">

                Os próximos oficiais baseiam-se em dois antigos servos reais, o segundo mais habilidoso espadachim do Reino dos espadachins, ficando para trás apenas em relação ao rei, e um dos antigos magos que construíram os Guardiões, a última tentativa da humanidade de repelir Ufattelig, infelizmente, ambos estavam completamente corrompidos pelo mal, por terem sido um dos primeiros a cair durante a grande guerra, afinal, estavam na linha de frente da aliança. 
                Isso significava que, não haveria uma situação de tanta sorte quanto Securis, a batalha seria até a morte, não que todas até agora não fossem, mas salvá-los não era uma opção.
                Seus nomes, mesmo que marcados na história por décadas, haviam sido perdidos, banhados por histórias de suas brutalidades enquanto na governança de Ufattelig, mesmo sendo pessoas extraordinárias, capazes de receberem posições reais, apenas suas ocupações, como “Mago” e “Espadachim” havia lhe restado. Um triste fim.

    
                </p>
    
                <button class="botao-historia" type="button" onclick="select(325)"> Irei lutar contra o segundo melhor espadachim, tenho que tirá-lo de sua miséria, não duvido que esteja sofrendo sob o comando de Ufattelig.</button>

                <button class="botao-historia" type="button" onclick="select(331)">  Irei lutar contra o mago real, preciso ter qualquer pista de como meu Rei virou um Guardião.</button>
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                

            break;

            case 325:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">

                Por sua própria interpretação, o Lanceiro havia se determinado a acabar com a vida do Espadachim, como uma espécie de misericórdia.
                Então, ${hero.nome} partiu em direção ao seu oponente espadachim, confiante que iria ganhar, porém não sabendo o desafio que estaria por vir.




                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(326)"> Continuar </button>
                
                
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                

            break;

            case 326:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">

                A localização do espadachim corrompido nada mais era do que nos portões do castelo de Ufattelig, o que facilitava e muito a situação de ${hero.nome}, afinal, em sua cabeça, era só derrotar o inimigo em frente, e logo depois, derrotar Ufattelig, certo? 

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(327)"> Continuar </button>
                
                
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                

            break;

            case 327:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">

                O guerreiro em sua frente, vestido de cabeça aos pés de armadura carmesim, exalando uma aura óbvia de corrupção, ficava em seu caminho, com a espada cravada em sua frente, enquanto descansava as mãos em sua maçã, como se estivesse aguardando a presença de ${hero.nome} faz um tempo. Ainda não demonstrando vontade alguma de lutar, o mesmo falava, em um tom alto e brusco, somente pela voz era perceptível que aquele homem havia lutado inúmeras batalhas em seu passado, e ele não planejava perder esta. 


                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(328)"> Continuar </button>
                
                
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                

            break;

            case 328:

                // Combate: ${hero.nome} vs Espadachim

                /* Falas:
               Espadachim: “Guerreiro! Dê meia volta imediatamente, lhe aviso que mais um passo, e eu lhe corto em vários pedaços que nem uma melância do Fruit Ninja!“ 
               ${hero.nome}: “Não posso, nobre espadachim. Preciso acabar com toda essa loucura, preciso lhe libertar das correntes de Ufattelig!”
               Espadachim: “Bela piada, vamos ver se você consegue cuspir mais palavras decapitado!”

                */

               // addFightClass()

            break;

            case 329:

                addStoryClass()

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">

                Não surpreendentemente, o espadachim era realmente muito feroz com seus ataques, arrastando sua espada na estrada, fazendo inúmeras faíscas a cada golpe, a cada estocada quase fazendo com que ${hero.nome} caísse no chão, porém, havia emergido vitoriosamente.  



                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(330)"> Continuar </button>
                
                
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                

            break;

            case 330:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">

                Após a batalha, faltava apenas seguir a dentro do castelo, porém, ao olhar aos arredores do castelo, havia uma área mais morta do que o normal, onde a terra era seca e extremamente preta, lembrando o carvão, se quisesse, poderia simplesmente ignorar a anormalidade sem quaisquer problemas. Quem se importa que a terra parecia carvão naquela parte? Mas um pequeno impulso pulsava na cabeça de ${hero.nome}, “O que será que tem lá? Eu quero ver o que tem lá”,por pura curiosidade tinha vontade de trilhar caminhos paralelos a sua jornada. 


                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(337)"> Acho que vou dar uma olhada no que tem ali, com certeza não é algo de errado, né? Vai que encontro alguns pães de alho ali, com um churras e uma grelha daquelas! </button>

                <button class="botao-historia" type="button" onclick="select(341)"> Não posso me distrair agora, por mais que eu queira muito, muito, muito ir… Não posso! Cada segundo importa, e não sei se o Ufattelig sei lá, pula da janela pra fugir! </button>
                
                
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
               
                

            break;

            case 331:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">

                Querendo ou não, ver a oposição extremamente fraca de Vocator fez com que ${hero.nome} adquirisse um pré conceito de magos subconscientemente, “Todos os magos são pamonhas, logo, vou acabar com esse mago bem rápido”, e extrair qualquer informação possível dele enquanto ele implora pela sua vida, não sabendo o que estava por vir, mas, também, como poderia? Mesmo tendo acabado com algumas forças extremamente fortes do mal, sua jornada estava sendo completamente guiada, fora de seu controle.


                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(332)"> Continuar </button>

                
                
                
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                
            break;

            case 332:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">

                A curiosidade acabou sendo maior do que o desejo de ser o melhor, perguntas como por quê os guardiões existem? Como eles foram criados? Quão forte é um deles? 
                Foram as mais comuns. Mas, talvez, enfrentar um dos criadores de tais armas de combate fosse uma experiência reveladora, além de, na cabeça de ${hero.nome}, ser uma batalha fácil de lidar, inocente de seu futuro desafio.



               

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(333)"> Continuar </button>

                
                
                
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                

            break;

            case 333:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">


                Ao contrário do que se esperava, surpreendentemente, o mago estava em um campo completamente aberto, parecendo estar atrás do Espadachim em si, como se também estivesse ansioso para a luta, introduzindo-se formalmente.  

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(334)"> Continuar </button>

                
                
                
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                

            break;

            case 334:

                // Combate: ${hero.nome} vs Mago

                /*
                Mago: “Saudações, guerreiro. Perdão pela minha falta de sutileza, porém como você derrotou vários oficiais de Ufattelig, fui encarregado de formalmente acabar com a sua raça, da forma mais rápida possível.” 
                ${hero.nome}: “Mago! Por favor, me diga, o que aconteceu com meu Rei? O que aconteceu com todos os outros Reis, eu preciso saber!”
                Mago: “Temo que você deverá saber com o meu cadáver…”


                */

                // addFightClass()


            break;

            case 335:

                addStoryClass()

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">


                Quem diria que um mago seria tão poderoso assim? ${hero.nome} que o diga. Derrotá-lo foi mais difícil do que matar barata com veneno, nem quando achava que ganharia havia ganhado de fato, e a batalha havia se alastrado demais. Obviamente, após derrotá-lo, roubar seus pertences e roupa era o mais cordial, o que um cadáver tem a dizer sobre perder o que é seu?
                Entre seus itens, havia um mapa da localização do castelo de Ufattelig, o qual usou para seguir em frente, porém, o mesmo havia mentido, e não havia nada sobre os Guardiões nele.
                ${hero.nome}: “AHH! EU NEM CONSEGUI SEQUER UMA PISTA DOS GUARDIÕES!”
                Mesmo que tivesse seus arrependimentos, a sua jornada estava beirando ao fim.

                



                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(336)"> Continuar </button>

            
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                

            break;

            case 336:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">

                O castelo era extremamente imponente, chegando até as nuvens com suas torres altas, com a sua grama extremamente morta, e até com alguns restos mortais espalhados por aqui e ali. Como assim, o rei do mal não limpava o quintal? Absurdo!
                Ao olhar aos arredores do castelo, havia uma área mais morta do que o normal, onde a terra era seca e extremamente preta, lembrando o carvão, se quisesse, poderia simplesmente ignorar a anormalidade sem quaisquer problemas. Quem se importa que a terra parecia carvão naquela parte? Mas um pequeno impulso pulsava na cabeça de ${hero.nome}, “O que será que tem lá? Eu quero ver o que tem lá”, por seguir seus desejos, tal escolha era algo normal em seu dia a dia, por pura curiosidade tinha vontade de trilhar caminhos paralelos a sua jornada.
 


                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(337)">  Acho que vou dar uma olhada no que tem ali, com certeza não é algo de errado, né? Vai que encontro alguns pães de alho ali, com um churras e uma grelha daquelas! </button>

                <button class="botao-historia" type="button" onclick="select(341)"> Não posso me distrair agora, por mais que eu queira muito, muito, muito ir… Não posso! Cada segundo importa, e não sei se o Ufattelig sei lá, pula da janela pra fugir! </button>

            
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                

            break;

            case 337:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">

                A curiosidade tomou controle das ações de ${hero.nome}, que lhe forçou a acabar com a aventura, simplesmente para checar uma terrinha mais preta que o normal, e então ele vagou na terra sem fim, e morreu de fome e sede por não saber para onde ir, Fim!
                Brincadeira. 
                O que havia encontrado de fato, era um dragão negro com escamas vermelhas espalhadas pelo seu corpo, com uma altura de cinco metros, deitado como um animal de estimação na terra queimada do local, dormindo. 
                Sua figura era extremamente intimidadora, o Lanceiro sabia que, lutar com aquilo agora era suícidio, porém novamente, a curiosidade acabava lhe pressionando a tentar mais e mais, “E se eu for o primeiro Lanceiro a matar um dragão!?”

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(338)"> Se eu conseguir um título de caçador de dragões, terei tudo o que quero!  </button>

                <button class="botao-historia" type="button" onclick="select(341)"> Não posso me distrair agora, por mais que eu queira muito, muito, muito ir… Não posso! Cada segundo importa, e não sei se o Ufattelig sei lá, pula da janela pra fugir! </button>
                
                
                
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                

            break;

            case 338:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">

                O dragão, por estar despreparado, sofre um golpe extremamente forte e despercebido, perdendo várias de suas escamas extremamente valiosas ao ter elas forçadas fora de seu corpo, um único golpe, por tomar o dragão enquanto ainda descansava, era o suficiente para mudar a batalha a seu favor, afinal, sem truques, era improvável que ganharia.

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(339)"> Continuar </button>
  

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                

            break;

            case 339:

                // Combate: ${hero.nome} vs Dragão

                /*

               Dragão: Dragão: “CRIATURA INSOLENTE, OUSASTE DESFERIR SUA L MINA FÉTIDA CONTRA MINHA NOBRE CARNE?” 
               ${hero.nome}: “Até o largartão parecia mais desafiante que você!” 
               Dragão: “IREI LHE MOSTRAR O QUE ACONTECE QUANDO UM MERO BÍPEDE XEXELENTO DESAFIA O REI DOS CÉUS!”



                 */

                /*Diálogo final da batalha:
                
                Dragão: “Ó, Ufattelig, REI DAS TREVAS E PAI DA MALDADE, SENHOR DO CAOS E SERVENTE DA DOR, ESTE MERO SOLDADO IMPLORA POR ASSISTÊNCIA, JUNTE-SE A MIM E VAMOS TRANSFORMAR ESSE BÁRBARO EM PÓ!”
                “Ufattelig? POR QUÉ ME IGNORAS? NÃO SOU O DRAGÃO CARMESIM, ENCARNAÇÃO DAS TREVAS, REI DOS CÉUS? POR QUÊ DESCARTASTES A MIM, Ufattelig!?” 
                ${hero.nome}: “Caraca, até o Rei do mal te deixou na mão! Você realmente vale menos do que o lagartão”


                */

                // addFightClass()

            break;


            case 340:

                addStoryClass()

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">

                O dragão, mesmo contorcendo-se e implorando por ajuda de Ufattelig, não a recebia de jeito algum. Seu líder assistia sua derrota de ínicio ao fim, e por estar usando um elmo fechado, sua reação e olhar era impossível de distinguir, quem sabe ele estava sadicamente assistindo seu servo perecer em sua frente, ou simplesmente sentia que precisava ajudar, porém não podia mexer seu corpo por algum motivo. Havia várias variáveis, porém, todas levavam a uma única alternativa; não importava. Tudo o que importava, é que ao subir as escadas do castelo, ${hero.nome} iria estar cara a cara com o rei do mal, o motivo de sua jornada, o motivo dessa calamidade estar acontecendo ao redor dos reinos. 

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(341)"> Continuar </button>
  

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                

            break;

            case 341:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">

                Adentrar o castelo fora mais fácil do que parecia. Seus servos, que pareciam ser a sua força focal, alguns extremamente fortes, não estavam mais no castelo. ${hero.nome} estava ocupado demais com seus próprios pensamentos de glória, do que preocupado de saber o que estava acontecendo, será mesmo que o rei do mal simplesmente decidiu desocupar o castelo? Ou seria aquele um pedido de encontro entre os dois? 	Vários cenários indicavam que algo estava errado. Ele não havia dominado o mundo por simples força, suas táticas eram impecáveis, o que ele estava pensando?

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(342)"> Continuar </button>
  

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
               
            break;

            case 342:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">

                ${hero.nome}: “Rei do Mal, preciso que você pereça, hoje, e agora, para poupar meu rei de seu fim cruel!”
                Ufattelig: “&%^@*$%+!!, *#@^&$!%.”
                ${hero.nome}: “O que…?”


                

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(343)"> Continuar </button>
  

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                

            break;

            case 343:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">

                ${hero.nome} era incapaz de entender o que o oponente estava tentando dizer, cada palavra soava como estática em seus ouvidos, mas aquilo não importava. Em sua cabeça, podia vencer sozinho sem mesmo ter que esperar pelo guardião, a vitória seria certa.
                

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(344)"> Continuar </button>
  

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                
            break;

            case 344:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">

                ${hero.nome}: “Impossível! Como?? Só com um golpe…”

                Ufattelig estava prestes a acabar com a vida do Lanceiro. Uma jornada inteira, apenas para acabar logo no final, por não ser forte o suficiente, ele realmente não era o bastante? Tantos inimigos derrotados, e ele era incapaz de terminar a jornada sozinho? De que aquelas lutas bastavam, se nenhuma delas lhe deixava mais forte? Do que a vida adiantava?
                Mas então…


                
                

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(345)"> Continuar </button>
  

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                

            break;

            case 345:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">

                

                O Guardião apareceu extremamente do nada, como um relâmpago, apesar de ser extremamente alto e definido, sua velocidade não parecia diminuir nem um pouco, facilmente sendo mais rápido do que o melhor cavalo do reino. O Guardião bloqueou o caminho entre o espadachim e o inimigo, e então, apontou para a saída do castelo. Aquilo era um óbvio sinal de que, ficar ali, era apenas um estorvo para seu salvador. 
                Entendendo o recado, o rapaz saía às pressas, deixando os dois colossos lutarem entre si.


                
                

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(346)"> Continuar </button>
  

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                
            break;

            case 346:

                // Combate: Guardião vs Ufattelig

                /*
                Falas: 
                Guardião: “Ufattelig… Então esse era seu segredo, você nem mesmo é do nosso reino, você nem mesmo é “humano”, ou sequer um ser daqui…”
                Ufattelig: “&%^@*$%+!!, *#@^&$!%.”
                Guardião: “Não importa. Tenho que lhe deter aqui, e agora.”


                */

                /*Falas finais:
                Ufattelig: “Vo%ê @ão$%+!!,os *#@^im&$d!rá%...”
                Guardião: “Morra imediatamente, praga! Não me importo com o que você tem a dizer!”


                 */

                // addFightClass()

            break;

            case 347:

                addStoryClass()

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-lanceiro-m">

                

                Havia acabado. Tantas eras em guerra constante, tantas vidas perdidas, tantas famílias destruídas e lares queimados ao chão, tantos sonhos despedaçados e tantos reinos dizimados.
                E havia acabado.
                O Rei Lanceiro havia completado seu objetivo. Ufattelig está morto. O que quer que ele fosse, não iria mais interferir com os reinos, e tudo voltaria à paz.
                As pálpebras de Ru’thra se permitiam fechar mais uma vez, pela última vez, sua fornalha de almas, antes capaz de só permitir movimentos simples, estava completamente vazia, e ele não planejava sacrificar mais ninguém para manter sua longevidade, qual seria o motivo, reinar? Nada disso importava, o rei do mal havia caído naquele dia, a vitória era da humanidade.
                Ru’thra, ajoelhado em frente ao antigo rei do mal, lentamente fecha os olhos, e aceita o seu destino; a sua morte, que deveria ter acontecido dezenas de anos atrás, que fora empurrada até hoje por rituais e magias capazes de alimentar um ser a base de almas.



                
                

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(348)"> Continuar </button>
  

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-lanceiro-m')
                typeWrite(titulo)
                

            break;
            
            

            
    }

                


    
    
}