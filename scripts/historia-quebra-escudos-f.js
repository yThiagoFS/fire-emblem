var hero = {
    nome: ['Viviane'],
    hp: [100],
    sprite: ['../sprites/Axe_F.gif'],
    img: ['../img/img/Axe_F.jpg'],
    ataque: [100],
    erro: [5],
    acerto: [8],
    crit: [10],
    animacao: [2900],
    dialogo: ['']
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
    switch(sel){
        
            

        case 200:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-quebra-escudos-f">
            A busca da força, o mais puro conceito de ser extraordinário em todos os aspectos possíveis, ser o melhor em quebrar crânios só com o flexionar dos músculos. Esse é o caminho do Reino do Sul. Esse, também, é o caminho da Quebra-Escudos chamada Viviane, que a vida toda acreditou que se a violência não resolvia as coisas, era porque a violência não estava sendo devidamente aplicada. 
            Teimosa, extremamente forte, porém, infelizmente, por contrapartida, também sem muito cérebro, o que lhe fazia errar seus alvos mais do que acertá-los.

            
            </p>

            <button class="botao-historia" type="button" onclick="select(201)"> Continuar </button>

            <div class="imagem-personagem"><img  src="../img/img/Axe_F.jpg"></div>

            </div>
            </div>
            `
            var titulo = document.getElementById('historia-quebra-escudos-f')
            typeWrite(titulo)
            container.style.display = 'flex'
            container.style.maxWidth = '700px';
            container.style.maxHeight = '700px';
            container.style.height= '700px';
            break;

            case 201:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="A guerra contra Ufattelig foi uma terrível guerra para todos os reinos, os cavaleiros foram dizimados, os espadachins, que meio que já estavam separados mesmo, ficaram ainda mais distantes, os lanceiros, com sua disciplina e lealdade, haviam perdido seu mártir mais valioso, seu próprio rei, e as terras além do reino ficaram ainda mais caótica do que eram antes, com o ressurgimento e ocupação de forças malignas, que impregnava as florestas como rios, e matava a plantação como se fossem um poderoso veneno. 

            
            </p>

            <div class="envelope-botoes-historia"><button class="botao-historia" type="button" onclick="select(202)"> Continuar </button></div>
            
            <div class="imagem-personagem"><img  src="../img/img/Axe_F.jpg"></div>


            </div>
            </div>
            `
            var titulo = document.getElementById('historia-quebra-escudos-f')
            typeWrite(titulo)

            container.style.display = 'flex'
            container.style.maxWidth = '700px';
            container.style.maxHeight = '700px';
            container.style.height= '700px';
            break;

            case 202:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-quebra-escudos-f">
            Os Quebra-Escudos? Óbvio que encontrar um inimigo que era incapaz de meter o soco no primeiro encontro foi algo devastador, para todos os habitantes, algo mais impactante do que perder seu rei ou seu reino inteiro. Sua honra estava completamente dizimada, o que fez a maioria deles perder o espírito de luta e lentamente aguardar a sua morte, ou apenas desistir de seguir seus princípios, resultando em vários mercenários e até mesmo recrutas novos para Ufattelig, pelo simples fato de seus espíritos estiver em pedaços.

            
            </p>

            <div class="envelope-botoes-historia"><button class="botao-historia" type="button" onclick="select(203)"> Continuar </button></div>
            
            <div class="imagem-personagem"><img  src="../img/img/Axe_F.jpg"></div>


            </div>
            </div>
            `
            var titulo = document.getElementById('historia-quebra-escudos-f')
            typeWrite(titulo)

            container.style.display = 'flex'
            container.style.maxWidth = '700px';
            container.style.maxHeight = '700px';
            container.style.height= '700px';
            break;

            case 203:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-quebra-escudos-f">
            ${hero.nome} foi uma das primeiras a levantar a bandeira de resistência contra Ufattelig, pois sabia que lutar ou desistir ainda resultaria em morte, de que importava cair lutando? Portanto, regularmente ia em expedições voluntárias com outros sobreviventes da guerra em tentativas de reconquistar território, e muitas vezes, essas pequenas batalhas resultaram em perdas para o lado da humanidade. Havia muitas poucas pessoas com habilidades em combate, pois a maioria dos guerreiros haviam morrido na grande guerra. 

            
            </p>

            <button class="botao-historia" type="button" onclick="select(204)"> Continuar </button>

            <div class="imagem-personagem"><img  src="../img/img/Axe_F.jpg"></div>


            </div>
            </div>
            `
            var titulo = document.getElementById('historia-quebra-escudos-f')
            typeWrite(titulo)
            container.style.display = 'flex'
            container.style.maxWidth = '700px';
            container.style.maxHeight = '700px';
            container.style.height= '700px';
            break;


            case 204:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-quebra-escudos-f">
            Após o fim de uma dessas batalhas sangrentas, que resultou em apenas Viviane sobrevivendo, por ser a única hábil o suficiente, a mesmo descansava na sombra de uma árvore, ensanguentada, com ambos sangue de inimigos, aliados, e o seu próprio, tão exausta, que nem ao menos percebia a presença em sua frente; um enorme ser armadurado, portanto uma lança e um escudo ambos colossais, facilmente tendo mais que o dobro de seu próprio tamanho, levando em consideração que ele era uma mulher muito robusta.
            A Quebra-Escudos se questiona sobre o que fazer a seguir.
                        
            </p>

            <button class="botao-historia" type="button" onclick="select(205)"> Atacar o Ser de armadura </button>
            <button class="botao-historia" type="button" onclick="select(206)"> Esperar e ver o que ele quer </button>
            <button class="botao-historia" type="button" onclick="select(207)"> Tentar conversar com a figura</button>
            
            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>

            </div>
            </div>
            `
            var titulo = document.getElementById('historia-quebra-escudos-f')
            typeWrite(titulo)
            container.style.display = 'flex'
            container.style.maxWidth = '700px';
            container.style.maxHeight = '700px';
            container.style.height= '700px';
            break;

            case 205:

                boss.nome[0] = 'Guardião'
                boss.hp[0] = 3000
                boss.sprite[0] = '../sprites/guardion.gif'
                boss.img[0] = '../img/img/guardion.jpg'
                boss.ataque[0] = 300
                boss.erro[0] = 0
                boss.acerto[0] = 9
                boss.crit[0] = 100 
                


                container.style.display ='flex'
                container.style.maxWidth = "1400px";
                container.style.height = '500px';
                
                combateFake('select(205)')
                ataqueFake()
                opcoesCombate.style.display = 'none'

                
                
            break;

            case 205:
                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><span class='guardion'>Guardião:</span><p id="historia-quebra-escudos-f">
                “Olha só, achei que você era só uma franguinha sem coragem de revidar o mínimo de intimidação, parece que subestimei você até demais.”</p>

                
                
                <button class="botao-historia" type="button" onclick="select(208)"> Continuar </button>
                
                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>

                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-f')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';

            break;

            case 206:
                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><span class='guardion'>Guardião:</span><p id="historia-quebra-escudos-f">
                “Nada mal. Sua forma física não decai em nenhum aspecto. Diria que até se supera, você tem um corpo muito desejável para qualquer guerreiro.”</p>

                
                
                <button class="botao-historia" type="button" onclick="select(208)"> Continuar </button>
                
                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>

                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-f')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';

            break;

            case 207:
                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-f">
                O Ser de armadura levanta a sua mão, como se interrompesse a sua fala, e mesmo ignorando tal sinal e continuando a tentar ter a comunicação, ele apenas lhe ignora</p>

                
                <button class="botao-historia" type="button" onclick="select(208)"> Continuar </button>
                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-f')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';

            break;

            case 208:
                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><span class='guardion'>Guardião:</span><p id="historia-quebra-escudos-f">
                “Perdão por demorar com as introduções, e por lhe encarar, eu sou Ru’thra, mas a senhora pode me chamar de Guardião a ponto de facilitar a sua memória. Estou em uma missão de exterminar as forças do mal, porém, minha fornalha de almas está quase no limite, caso eu continue, estou certo a perecer sem ao menos deter Ufattelig, o Rei Demônio, por eu não saber a sua localização ainda. Guerreira, eu preciso de sua ajuda.”</p>

                <button class="botao-historia" type="button" onclick="select(209)">Por quê você quer minha ajuda? </button>
                <button class="botao-historia" type="button" onclick="select(210)">Ru’thra? Esse não é o rei do reino do Oeste?</button>
                <button class="botao-historia" type="button" onclick="select(211)">Por quê eu?</button>

                

                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-f')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
            
            break;

            case 209:
                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><span class='guardion'>Guardião:</span><p id="historia-quebra-escudos-f">
                “Você foi uma dos únicas guerreiras que encontrei e é relativamente forte em comparação aos homens caídos ao redor. O último humano que vi foi um dos meus súditos, que morreu em batalha a pouco tempo. Só você consegue me ajudar a derrotar Ufattelig.” 
                </p>

                <button class="botao-historia" type="button" onclick="select(212)">Entendido. Irei lhe ajudar.</button>
                <button class="botao-historia" type="button" onclick="select(213)">Eu nunca concordei com isso! Vai se ferrar!</button>
                

                

                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-f')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
            
            break;

            case 210:
                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><span class='guardion'>Guardião:</span><p id="historia-quebra-escudos-f">
                “Sim moça. Eu sou o Rei Lanceiro, Ru’thra, o último guardião da linhagem de guardiões que foram levantados a fim de derrotar Ufattelig. Como você já deve ter adivinhado, nós falhamos com nosso propósito, mas ainda podemos cumpri-lo.”
                </p>

                <button class="botao-historia" type="button" onclick="select(212)">Entendido. Irei lhe ajudar.</button>
                <button class="botao-historia" type="button" onclick="select(213)">Eu nunca concordei com isso! Vai se ferrar!</button>
                

                

                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-f')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
            
            break;

            case 211:
                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><span class='guardion'>Guardião:</span><p id="historia-quebra-escudos-f">
                “Guerreira. Eu sou incapaz de prosseguir mais um passo. Minha fornalha de almas, minha fonte de energia, está perto de se esgotar, e com o seu fim, também chegará o meu. Eu preferiria queimar nas chamas de Tártaro ao invés de garantir que nada poderá ficar no caminho de Ufattelig, os Guardiões são os únicos seres capazes de derrotá-lo, ele é forte demais para qualquer outro ser humano.”
                </p>

                <button class="botao-historia" type="button" onclick="select(212)">Entendido. Irei lhe ajudar.</button>
                <button class="botao-historia" type="button" onclick="select(213)">Eu nunca concordei com isso! Vai se ferrar!</button>
                

                

                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-f')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
            
            break;

            case 212:
                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><span class='guardion'>Guardião:</span><p id="historia-quebra-escudos-f">
                “Vá para o Norte aventureira, onde o caído reino dos cavaleiros ainda mantém suas ruínas. Encontre um dos capatazes de Ufattelig, Lacerta, um homem-lagarto que traz escravos e prisioneiros de guerra para o exército das forças do mal, ele será seu desafio mais fácil, porém ainda será um desafio. Encontre informações da localização de Ufattelig através dele, e quando você achá-lo, eu estarei lá.”
                </p>

                <button class="botao-historia" type="button" onclick="select(215)">Continuar</button>

                
                
                

                

                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                </div>
                </div>
                `
                //Ajustar

                var titulo = document.getElementById('historia-quebra-escudos-f')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
            
            break;

            case 213:
                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><span class='guardion'>Guardião:</span><p id="historia-quebra-escudos-f">
                “Então terei que lhe matar e esperar a próxima pessoa que concorda… Você sabe demais. Não posso deixar com que meu plano vaze para Ufattelig.”
                
                </p>

                <button class="botao-historia" type="button" onclick="select(212)">E-Espera! Eu estava zoando! É só zoeira!</button>
                <button class="botao-historia" type="button" onclick="select(214)">Vamo nessa monte de lata. Eu vou te matar até você morrer</button>

                
                
                

                
                  


                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                </div>
                </div>
                `
                

                var titulo = document.getElementById('historia-quebra-escudos-f')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';

         break;

            case 214:

                boss.nome = 'Guardião'
                boss.hp = 3000
                boss.sprite = '../sprites/guardion.gif'
                boss.img = '../img/img/guardion.jpg'
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

            case 215:

                container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-quebra-escudos-f">
            Viviane então parte para os reino do Norte, encontrando vários inimigos no caminho, porém facilmente acabando com eles, e eventualmente, acabando trombando com Lacerta, imediatamente assumindo a instância de batalha, por ele ser o único homem-lagarto que havia encontrado até agora.
            
            </p>

            <button class="botao-historia" type="button" onclick="select(216)"> Continuar </button>

            <div class="imagem-personagem"><img  src="../img/img/Axe_F.jpg"></div>


            </div>
            </div>


            `
            var titulo = document.getElementById('historia-quebra-escudos-f')
            typeWrite(titulo)
            container.style.display = 'flex'
            container.style.maxWidth = '700px';
            container.style.maxHeight = '700px';
            container.style.height= '700px';

            break;

            case  216:

            hero.dialogo = `<p>Como você ousa invadir o território de Lorde Ufattelig? Você é louca?!</p> <p>Já comi lagarto queimado em expedições.. Espero que não queime esse. </p> <p>Vou te informar que eu sou descendente de um dragão de komodo, cuidado comigo!</p>`


                boss.nome = 'Lagartixa Falante'
                boss.hp = 45
                boss.sprite = '../sprites/calango.gif'
                boss.img = '../img/img/calango.jpg'
                boss.ataque = 18
                boss.erro = 5
                boss.acerto = 8
                boss.crit = 10 
                boss.animacao = 2300

                combateFake('combate()')
                
                container.style.display ='flex'
                container.style.maxWidth = "1400px";
                container.style.height = '500px';
                break;
                


                case 217:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-quebra-escudos-f">
            Após derrotar Lacerta, Viviane acaba encontrando um papel dentro de seu bolso (Lagartixa tem bolsos?) que dizia a localização de seu próximo oponente, e uma nova pista da localização de Ufattelig; a princesa do reino do Sul, corrompida pelas forças do mal. 
 
            
            </p>

            <button class="botao-historia" type="button" onclick="select(218)"> Continuar </button>

            <div class="imagem-personagem"><img  src="../img/img/Axe_F.jpg"></div>


            </div>
            </div>


            `
            var titulo = document.getElementById('historia-quebra-escudos-f')
            typeWrite(titulo)
            container.style.display = 'flex'
            container.style.maxWidth = '700px';
            container.style.maxHeight = '700px';
            container.style.height= '700px';

            break;


            case 218:
                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-f">
                Sua localização não fora a coisa mais inconspicua do mundo, por ainda utilizar o caído reino dos Quebra-Escudos como seu castelo. Voltar ao seu antigo reino caído com certeza fora algo difícil de superar, porém, salvar o mundo era mais importante do que lidar com seu emocional no momento. Ao contrário de Lacerta, a princesa, Securis, era com total certeza um desafio a altura de se superar. 
                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(219)"> Continuar </button>
    
                <div class="imagem-personagem"><img  src="../img/img/Axe_F.jpg"></div>
    
    
                </div>
                </div>
    
    
                `
                var titulo = document.getElementById('historia-quebra-escudos-f')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';
    
                break;


                case 219:

                hero.dialogo = `<p>Quem é você? Quem ousa pisar no território de Securis, serva de Ufattelig?</p> <p>Perdão, princesa, eu juro que vou te socar só um pouquinho.</p> <p>Eu te ordeno a ajoelhar-se agora perante sua princesa, relés Quebra-Escudo! </p>`
                combateFake('combate()')

                boss.nome = 'Securis'
                boss.hp = 80
                boss.sprite = '../sprites/Securis.gif'
                boss.img = '../img/img/Securis.jpg'
                boss.ataque = 40
                boss.erro = 6
                boss.acerto = 7
                boss.crit = 8
                boss.animacao = 2300


            

            container.style.display ='flex'

            container.style.maxWidth = "1400px";

            container.style.height = '500px';

            break;

            case 220:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-f">
                Após derrotar Securis, a mesma convenientemente havia dissipado as forças do mal de seu corpo (bem convenientemente, como se fosse uma história…) informando a brava "heroína" de mais uma pista da localização de Ufattelig, mais um de seus oficiais (para variar) um antigo invocador ermitão, Vocator, que foi corrompido pela maldade, servindo Ufattelig de uma forma menos agressiva, apenas lhe fornecendo unidades de batalha, por conseguir invocá-las, e não ativamente indo atrás de prisioneiros ou de vítimas de sua magia, ou seja, um covardão que não aguenta ver sangue.

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(221)"> Continuar </button>
    
                <div class="imagem-personagem"><img  src="../img/img/Axe_F.jpg"></div>
    
    
                </div>
                </div>
    
    
                `
                var titulo = document.getElementById('historia-quebra-escudos-f')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';
    
                break;


                case 221:
                    
                hero.dialogo = `<p>Como você encontrou esse lugar? Eu tive certeza de contar apenas aos oficiais de Ufattelig! Não pode ser…</p> <p>Senhor, eu preciso apenas da localização de Ufattelig, se você só me der eu posso só deixar você com o nariz intacto.</p> <p>Impossível! Você não vai passar!</p>`

                combateFake('combate()')

                boss.nome = 'Vocator'
                boss.hp = 110 
                boss.sprite = '../sprites/voLcator.gif'
                boss.img = '../img/img/volcator.jpg'
                boss.ataque = 25
                boss.erro = 4
                boss.acerto = 8
                boss.crit = 10 
                boss.animacao = 7200


        



                

                container.style.display ='flex'

                container.style.maxWidth = "1400px";

                container.style.height = '500px';

                break;

                case 222:
                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-quebra-escudos-f">
                    Vocator foi um desafio maior ainda que Securis, por suas invocações tomarem o seu lugar, lhe fornecendo segurança a maior parte do tempo. Mesmo derrotado entretanto, o mesmo não havia voltado ao seu estado normal, por estar completamente tomado pelas trevas. Aparentemente, até uma princesa tem mais força do que um mago experiente? Isso apenas comprova o quão banana era. Obviamente, era uma pena não conseguir extrair informações do mago, mas tal problema foi totalmente resolvido apenas olhando um pouco para seu esconderijo, coincidentemente, intelectuais adoravam escrever e anotar tudo o que tinham conhecimento, inclusive a localização de seus parceiros.
                    Viviane foi capaz de encontrar o próximo oficial a eliminar, ou melhor, os dois próximos.


                    
                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(223)"> Continuar </button>
        
                    <div class="imagem-personagem"><img  src="../img/img/Axe_F.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-quebra-escudos-f')
                    typeWrite(titulo)
                    container.style.display = 'flex'
                    container.style.maxWidth = '700px';
                    container.style.maxHeight = '700px';
                    container.style.height= '700px';
        
                    


                break;

                case 223:

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-quebra-escudos-f">
                    Os próximos oficiais baseiam-se em dois antigos servos reais, o segundo mais habilidoso espadachim do Reino dos espadachins, ficando para trás apenas em relação ao rei, e um dos antigos magos que construíram os Guardiões, a última tentativa da humanidade de repelir Ufattelig, infelizmente, ambos estavam completamente corrompidos pelo mal, por terem sido um dos primeiros a cair durante a grande guerra, afinal, estavam na linha de frente da aliança. 
                    Isso significava que, não haveria uma situação de tanta sorte quanto Securis, a batalha seria até a morte, não que todas até agora não fossem, mas salvá-los não era uma opção.
                    Seus nomes, mesmo que marcados na história por décadas, haviam sido perdidos, banhados por histórias de suas brutalidades enquanto na governança de Ufattelig, mesmo sendo pessoas extraordinárias, capazes de receberem posições reais, apenas suas ocupações, como “Mago” e “Espadachim” havia lhe restado. Um triste fim.



                    
                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(224)">  Irei lutar contra o segundo melhor espadachim, quero saber o quão forte o segundo mais forte espadachim é em comparação a mim. </button>

                    <button class="botao-historia" type="button" onclick="select(225)">  Irei lutar contra o mago real, é uma boa oportunidade de saber um pouco mais do porque os guardiões existem, e ver como um mago real luta. </button>
        
                    <div class="imagem-personagem"><img  src="../img/img/Axe_F.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-quebra-escudos-f')
                    typeWrite(titulo)
                    container.style.display = 'flex'
                    container.style.maxWidth = '700px';
                    container.style.maxHeight = '700px';
                    container.style.height= '700px';
                        
                break;

                case 224: 

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-quebra-escudos-f">
                    Claro, o pensamento individualista, “serei o melhor, com total certeza!”, era uma linha de decisão simples, mas que querendo ou não, iria progredir na missão de salvar o mundo. Então, Viviane partiu em direção ao seu oponente espadachim, confiante que iria ganhar, porém não sabendo o desafio que estaria por vir.


                    
                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(226)"> Continuar </button>
        
                    <div class="imagem-personagem"><img  src="../img/img/Axe_F.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-quebra-escudos-f')
                    typeWrite(titulo)
                    container.style.display = 'flex'
                    container.style.maxWidth = '700px';
                    container.style.maxHeight = '700px';
                    container.style.height= '700px';

                    break;

                    case 226: 

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-quebra-escudos-f">
                    A localização do espadachim corrompido nada mais era do que nos portões do castelo de Ufattelig, o que facilitava e muito a situação de Viviane, afinal, em sua cabeça, era só derrotar o inimigo em frente, e logo depois, derrotar Ufatellig, certo? 


                    
                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(227)"> Continuar </button>
        
                    <div class="imagem-personagem"><img  src="../img/img/Axe_F.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-quebra-escudos-f')
                    typeWrite(titulo)
                    container.style.display = 'flex'
                    container.style.maxWidth = '700px';
                    container.style.maxHeight = '700px';
                    container.style.height= '700px';

                    break;

                    case 227: 

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-quebra-escudos-f">
                    O guerreiro em sua frente, vestido de cabeça aos pés de armadura carmesim, exalando uma aura óbvia de corrupção, ficava em seu caminho, com a espada cravada em sua frente, enquanto descansava as mãos em sua maçã, como se estivesse aguardando a presença de Viviane faz um tempo. Ainda não demonstrando vontade alguma de lutar, o mesmo falava, em um tom alto e brusco, somente pela voz era perceptível que aquele homem havia lutado inúmeras batalhas em seu passado, e ele não planejava perder esta. 

                    </p>    
        
                    <button class="botao-historia" type="button" onclick="select(228)"> Continuar </button>
        
                    <div class="imagem-personagem"><img  src="../img/img/Axe_F.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-quebra-escudos-f')
                    typeWrite(titulo)
                    container.style.display = 'flex'
                    container.style.maxWidth = '700px';
                    container.style.maxHeight = '700px';
                    container.style.height= '700px';

                    break;


                    case 228: 

                    hero.dialogo = `<p>Espadachim: “Guerreira! Dê meia volta imediatamente, lhe aviso que mais um passo, e eu lhe corto em vários pedaços que nem uma melância do Fruit Ninja!“</p> <p>Olha, não tem segredo, eu afundo a sua cara, e você me deixa passar, ou, eu afundo você na terra, e você me deixa passar.</p> <p>quebra-escudos: Bela piada, vamos ver se você consegue cuspir mais palavras decapitada!</p>`
                    combateFake('combate')

                    //FAZER OS SPRITES 

                    boss.nome = 'Espadachim Corrompido'
                    boss.hp = 235
                    boss.sprite = '../sprites/Espadachim Corrompido.gif'
                    boss.img = '../img/img/Espadachim Corrompido.jpg'
                    boss.ataque = 15
                    boss.erro = 4
                    boss.acerto = 9
                    boss.crit = 10 
                    boss.animacao = 2300

                    


                    break;

                    case 229: 

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-quebra-escudos-f">
                    Não surpreendentemente, o espadachim era realmente muito feroz com seus ataques, arrastando sua espada na estrada, fazendo inúmeras faíscas a cada golpe, a cada estocada quase fazendo com que Viviane caísse no chão, porém, havia emergido vitoriosamente


                    
                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(230)"> Continuar </button>
        
                    <div class="imagem-personagem"><img  src="../img/img/Axe_F.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-quebra-escudos-f')
                    typeWrite(titulo)
                    container.style.display = 'flex'
                    container.style.maxWidth = '700px';
                    container.style.maxHeight = '700px';
                    container.style.height= '700px';

                    break;

                    case 231: 

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-quebra-escudos-f">
                    Após a batalha, faltava apenas seguir a dentro do castelo, porém, ao olhar aos arredores do castelo, havia uma área mais morta do que o normal, onde a terra era seca e extremamente preta, lembrando o carvão, se quisesse, poderia simplesmente ignorar a anormalidade sem quaisquer problemas. Quem se importa que a terra parecia carvão naquela parte? Mas um pequeno impulso pulsava na cabeça de Viviane, “O que será que tem lá? Eu quero ver o que tem lá”,mpor pura curiosidade tinha vontade de trilhar caminhos paralelos a sua jornada. 

                    
                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(41)"> Acho que vou dar uma olhada no que tem ali, com certeza não é algo de errado, né? Vai que encontro alguns pães de alho ali, com um churras e uma grelha daquelas!
                    </button>

                    <button class="botao-historia" type="button" onclick="select()"> Não posso me distrair agora, por mais que eu queira muito, muito, muito ir… Não posso! Cada segundo importa, e não sei se o Ufattelig sei lá, pula da janela pra fugir!
                    </button>
        
                    <div class="imagem-personagem"><img  src="../img/img/Sword1.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-quebra-escudos-f')
                    typeWrite(titulo)
                    container.style.display = 'flex'
                    container.style.maxWidth = '700px';
                    container.style.maxHeight = '700px';
                    container.style.height= '700px';

                    break;

                    case 225: 

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-quebra-escudos-f">
                    A curiosidade acabou sendo maior do que o desejo de ser o melhor, perguntas como por quê os guardiões existem? Como eles foram criados? Quão forte é um deles? 
                    Foram as mais comuns. Mas, talvez, enfrentar um dos criadores de tais armas de combate fosse uma experiência reveladora, além de, na cabeça de Viviane, ser uma batalha fácil de lidar, inocente de seu futuro desafio.
                    

                    
                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(232)"> Continuar
                    </button>

                   
        
                    <div class="imagem-personagem"><img  src="../img/img/Axe_F.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-quebra-escudos-f')
                    typeWrite(titulo)
                    container.style.display = 'flex'
                    container.style.maxWidth = '700px';
                    container.style.maxHeight = '700px';
                    container.style.height= '700px';

                    break;

                    case 232: 

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-quebra-escudos-f">
                    A curiosidade acabou sendo maior do que o desejo de ser o melhor, perguntas como por quê os guardiões existem? Como eles foram criados? Quão forte é um deles? 
                    Foram as mais comuns. Mas, talvez, enfrentar um dos criadores de tais armas de combate fosse uma experiência reveladora, além de, na cabeça de Greg, ser uma batalha fácil de lidar, inocente de seu futuro desafio.



                    
                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(233)"> Continuar
                    </button>

                   
        
                    <div class="imagem-personagem"><img  src="../img/img/Axe_F.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-quebra-escudos-f')
                    typeWrite(titulo)
                    container.style.display = 'flex'
                    container.style.maxWidth = '700px';
                    container.style.maxHeight = '700px';
                    container.style.height= '700px';

                    break;


                    hero.dialogo = `<p></p> <p></p> <p></p>`
                    combateFake('combate()')

                    var titulo = document.getElementById('historia-quebra-escudos-f')
                    typeWrite(titulo)
                    container.style.display = 'flex'
                    container.style.maxWidth = '700px';
                    container.style.maxHeight = '700px';
                    container.style.height= '700px';

                    break;

                    case 233: 

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-quebra-escudos-f">
                    Ao contrário do que se esperava, surpreendentemente, o mago estava em um campo completamente aberto, parecendo estar atrás da Quebra-Escudos em si, como se também estivesse ansioso para a luta, introduzindo-se formalmente.  

                    </p>    
        
                    <button class="botao-historia" type="button" onclick="select(234)"> Continuar </button>
        
                    <div class="imagem-personagem"><img  src="../img/img/Axe_F.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-quebra-escudos-f')
                    typeWrite(titulo)
                    container.style.display = 'flex'
                    container.style.maxWidth = '700px';
                    container.style.maxHeight = '700px';
                    container.style.height= '700px';

                    break;


                    case 234: 

                    hero.dialogo = `<p>Mago Corrompido: “Saudações, guerreira. Perdão pela minha falta de sutileza, porém como você derrotou vários oficiais de Ufattelig, fui encarregado de formalmente acabar com a sua raça, da forma mais rápida possível.“</p> <p>Quebra-Escudos: Ahh… Eu achei que todo mago era pamonha, mas parece que são loucos também, não tá vendo que nem arma você tem amigo?!</p> <p>Mago Corrompido: Não seja por isso “amiga”, um mago como eu nem ao menos precisa de armas contra você…</p>`
                    combateFake('combate')



        
                    boss.nome = 'Mago Corrompido'
                    boss.hp = 150
                    boss.sprite = '../sprites/Mago Corrompido.gif'
                    boss.img = '../img/img/Mago Corrompido.jpg'
                    boss.ataque = 25
                    boss.erro = 7
                    boss.acerto = 9
                    boss.crit = 10
                    boss.animacao = 2300 ;


                     

                    break;

                    case 235: 

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-quebra-escudos-f">
                    Quem diria que um mago seria tão poderoso assim? Greg que o diga. Derrotá-lo foi mais difícil do que matar barata com veneno, nem quando achava que ganharia havia ganhado de fato, e a batalha havia se alastrado demais. Obviamente, após derrotá-lo, roubar seus pertences e roupa era o mais cordial, o que um cadáver tem a dizer sobre perder o que é seu?
                    Entre seus itens, havia um mapa da localização do castelo de Ufattelig, o qual usou para seguir em frente, no caminho, acaba lembrando-se de um fator indispensável!
                    Greg: “AHH! EU NEM CONSEGUI SEQUER UMA PISTA DOS GUARDIÕES!”
                    Mesmo que tivesse seus arrependimentos, a sua jornada estava beirando ao fim.


                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(236)"> Continuar
                    </button>

                   
        
                    <div class="imagem-personagem"><img  src="../img/img/Axe_F.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-quebra-escudos-f')
                    typeWrite(titulo)
                    container.style.display = 'flex'
                    container.style.maxWidth = '700px';
                    container.style.maxHeight = '700px';
                    container.style.height= '700px';

                    break;

                    case 236: 

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-quebra-escudos-f">
                    O castelo era extremamente imponente, chegando até as nuvens com suas torres altas, com a sua grama extremamente morta, e até com alguns restos mortais espalhados por aqui e ali. Como assim, o rei do mal não limpava o quintal? Absurdo!
                    Ao olhar aos arredores do castelo, havia uma área mais morta do que o normal, onde a terra era seca e extremamente preta, lembrando o carvão, se quisesse, poderia simplesmente ignorar a anormalidade sem quaisquer problemas. Quem se importa que a terra parecia carvão naquela parte? Mas um pequeno impulso pulsava na cabeça de Greg, “O que será que tem lá? Eu quero ver o que tem lá”, por seguir seus desejos, tal escolha era algo normal em seu dia a dia, por pura curiosidade tinha vontade de trilhar caminhos paralelos a sua jornada.



                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(41)"> Acho que vou dar uma olhada no que tem ali, com certeza não é algo de errado, né? Vai que encontro alguns pães de alho ali, com um churras e uma grelha daquelas!
                    </button>

                    <button class="botao-historia" type="button" onclick="select(46)"> Não posso me distrair agora, por mais que eu queira muito, muito, muito ir… Não posso! Cada segundo importa, e não sei se o Ufattelig sei lá, pula da janela pra fugir!
                    </button>

                   
        
                    <div class="imagem-personagem"><img  src="../img/img/Axe_F.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-quebra-escudos-f')
                    typeWrite(titulo)
                    container.style.display = 'flex'
                    container.style.maxWidth = '700px';
                    container.style.maxHeight = '700px';
                    container.style.height= '700px';

                    break;

                    case 41: 

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-quebra-escudos-f">
                    A curiosidade tomou controle das ações de Greg, que lhe forçou a acabar com a aventura, simplesmente para checar uma terrinha mais preta que o normal, e então ele vagou na terra sem fim, e morreu de fome e sede por não saber para onde ir, Fim!
                    Brincadeira. 
                    O que havia encontrado de fato, era um dragão negro com escamas vermelhas espalhadas pelo seu corpo, com uma altura de cinco metros, deitado como um animal de estimação na terra queimada do local, dormindo. 
                    Sua figura era extremamente intimidadora, o espadachim sabia que, lutar com aquilo agora era suícidio, porém novamente, a curiosidade acabava lhe pressionando a tentar mais e mais, “E se eu for o primeiro espadachim a matar um dragão!?”




                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(42)"> Vamo nessa, vou ser o primeiro matador de dragões espadachim do reino!
                    </button>

                    <button class="botao-historia" type="button" onclick="select(46)"> Não posso me distrair agora, por mais que eu queira muito, muito, muito ir… Não posso! Cada segundo importa, e não sei se o Ufattelig sei lá, pula da janela pra fugir!
                    </button>

                    

                   
        
                    <div class="imagem-personagem"><img  src="../img/img/Axe_F.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-quebra-escudos-f')
                    typeWrite(titulo)
                    container.style.display = 'flex'
                    container.style.maxWidth = '700px';
                    container.style.maxHeight = '700px';
                    container.style.height= '700px';

                    break;

                    case 42: 

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-quebra-escudos-f">
                    O dragão, por estar despreparado, sofre um golpe extremamente forte e despercebido, perdendo várias de suas escamas extremamente valiosas ao ter elas forçadas fora de seu corpo, um único golpe, por tomar o dragão enquanto ainda descansava, era o suficiente para mudar a batalha a seu favor, afinal, sem truques, era improvável que ganharia.




                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(43)"> Continuar
                    </button>

                   

                   
        
                    <div class="imagem-personagem"><img  src="../img/img/Axe_F.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-quebra-escudos-f')
                    typeWrite(titulo)
                    container.style.display = 'flex'
                    container.style.maxWidth = '700px';
                    container.style.maxHeight = '700px';
                    container.style.height= '700px';

                    break;

                    case 43: 

                    // Combate Dragão vs Greg 
                    
                    /* Fala:
                    Dragão: “CRIATURA INSOLENTE, OUSASTE DESFERIR SUA L MINA FÉTIDA CONTRA MINHA NOBRE CARNE?” 
                    Greg: “Até o largartão parecia mais desafiante que você!” 
                    Dragão: “IREI LHE MOSTRAR O QUE ACONTECE QUANDO UM MERO BÍPEDE XEXELENTO DESAFIA O REI DOS CÉUS!”

                    */

                    /*No final da batalha:
                    Dragão: “Ó, Ufattelig, REI DAS TREVAS E PAI DA MALDADE, SENHOR DO CAOS E SERVENTE DA DOR, ESTE MERO SOLDADO IMPLORA POR ASSISTÊNCIA, JUNTE-SE A MIM E VAMOS TRANSFORMAR ESSE BÁRBARO EM PÓ!”
                    “Ufattelig? POR QUÉ ME IGNORAS? NÃO SOU O DRAGÃO CARMESIM, ENCARNAÇÃO DAS TREVAS, REI DOS CÉUS? POR QUÊ DESCARTASTES A MIM, Ufattelig!?” 
                    Greg: “Caraca, até o Rei do mal te deixou na mão! Você realmente vale menos do que o lagartão”
                    */

                    break;

                    case 44: 

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-quebra-escudos-f">
                    O dragão, mesmo contorcendo-se e implorando por ajuda de Ufattelig, não a recebia de jeito algum. Seu líder assistia sua derrota de ínicio ao fim, e por estar usando um elmo fechado, sua reação e olhar era impossível de distinguir, quem sabe ele estava sadicamente assistindo seu servo perecer em sua frente, ou simplesmente sentia que precisava ajudar, porém não podia mexer seu corpo por algum motivo. Havia várias variáveis, porém, todas levavam a uma única alternativa; não importava. Tudo o que importava, é que ao subir as escadas do castelo, Greg iria estar cara a cara com o rei do mal, o motivo de sua jornada, o motivo dessa calamidade estar acontecendo ao redor dos reinos.




                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(45)"> Ir para a batalha final
                    </button>

        
        
                    <div class="imagem-personagem"><img  src="../img/img/Axe_F.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-quebra-escudos-f')
                    typeWrite(titulo)
                    container.style.display = 'flex'
                    container.style.maxWidth = '700px';
                    container.style.maxHeight = '700px';
                    container.style.height= '700px';

                    break;

                    case 45: 

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-quebra-escudos-f">
                    Adentrar o castelo fora mais fácil do que parecia. Seus servos, que pareciam ser a sua força focal, alguns extremamente fortes, não estavam mais no castelo. Greg estava ocupado demais com seus próprios pensamentos de glória, do que preocupado de saber o que estava acontecendo, será mesmo que o rei do mal simplesmente decidiu desocupar o castelo? Ou seria aquele um pedido de encontro entre os dois? 	Vários cenários indicavam que algo estava errado. Ele não havia dominado o mundo por simples força, suas táticas eram impecáveis, o que ele estava pensando?




                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(46)"> Continuar
                    </button>

        
        
                    <div class="imagem-personagem"><img  src="../img/img/Axe_F.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-quebra-escudos-f')
                    typeWrite(titulo)
                    container.style.display = 'flex'
                    container.style.maxWidth = '700px';
                    container.style.maxHeight = '700px';
                    container.style.height= '700px';

                    break;

                    case 46: 

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-quebra-escudos-f">
                    Greg: “Ei Rei do mal, eu vou te encher de sopapo, ninguém precisa de guardião ou sei lá o que, eu tô muito forte já!”
                    Ufattelig: “&%^@*$%+!!, *#@^&$!%.”
                    Greg: “O que…?”

                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(47)"> Continuar
                    </button>

        
        
                    <div class="imagem-personagem"><img  src="../img/img/Axe_F.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-quebra-escudos-f')
                    typeWrite(titulo)
                    container.style.display = 'flex'
                    container.style.maxWidth = '700px';
                    container.style.maxHeight = '700px';
                    container.style.height= '700px';

                    break;
                    
                    case 47: 

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-quebra-escudos-f">
                    Greg era incapaz de entender o que o oponente estava tentando dizer, cada palavra soava como estática em seus ouvidos, mas aquilo não importava. Em sua cabeça, podia vencer sozinho sem mesmo ter que esperar pelo guardião, a vitória seria certa.

                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(47)"> Continuar
                    </button>

        
        
                    <div class="imagem-personagem"><img  src="../img/img/Axe_F.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-quebra-escudos-f')
                    typeWrite(titulo)
                    container.style.display = 'flex'
                    container.style.maxWidth = '700px';
                    container.style.maxHeight = '700px';
                    container.style.height= '700px';

                    break;

                    case 48: 

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-quebra-escudos-f">
                    Greg: “Impossível! Como?? Só com um golpe…”

                    Ufattelig estava prestes a acabar com a vida do espadachim. Uma jornada inteira, apenas para acabar logo no final, por não ser forte o suficiente, ele realmente não era o bastante? Tantos inimigos derrotados, e ele era incapaz de terminar a jornada sozinho? De que aquelas lutas bastavam, se nenhuma delas lhe deixava mais forte? Do que a vida adiantava?
                    Mas então…


                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(49)"> Continuar
                    </button>

        
        
                    <div class="imagem-personagem"><img  src="../img/img/Axe_F.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-quebra-escudos-f')
                    typeWrite(titulo)
                    container.style.display = 'flex'
                    container.style.maxWidth = '700px';
                    container.style.maxHeight = '700px';
                    container.style.height= '700px';

                    break;

                    case 49: 

                    container.innerHTML = `

                    <div class="envelope-historia-personagem">
                
                    <div class="historia-personagem"><p id="historia-quebra-escudos-f">
                    O Guardião apareceu extremamente do nada, como um relâmpago, apesar de ser extremamente alto e definido, sua velocidade não parecia diminuir nem um pouco, facilmente sendo mais rápido do que o melhor cavalo do reino. O Guardião bloqueou o caminho entre o espadachim e o inimigo, e então, apontou para a saída do castelo. Aquilo era um óbvio sinal de que, ficar ali, era apenas um estorvo para seu salvador. 
                    Entendendo o recado, o rapaz saía às pressas, deixando os dois colossos lutarem entre si.



                    </p>
        
                    <button class="botao-historia" type="button" onclick="select(49)"> Continuar
                    </button>

        
        
                    <div class="imagem-personagem"><img  src="../img/img/Axe_F.jpg"></div>
        
        
                    </div>
                    </div>
        
        
                    `
                    var titulo = document.getElementById('historia-quebra-escudos-f')
                    typeWrite(titulo)
                    container.style.display = 'flex'
                    container.style.maxWidth = '700px';
                    container.style.maxHeight = '700px';
                    container.style.height= '700px';

                    break;

                
            
    }

                


    
    
}