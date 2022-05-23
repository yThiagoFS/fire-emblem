function select(sel){
    switch(sel){
        
            

        case 400:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-cacadora">
            Todos os quatro reinos mantinham um preconceito enorme contra todos os nativos das terras além dos reinos, afinal, nos seus olhos, eram todos bárbaros, ainda utilizando paus e pedras para caçarem, usando túnicas de pano e couro para cobrirem seus corpos finos e leves, ao invés de utilizarem metal e aço para lhe fornecerem defesas. O real motivo, entretanto, era o seu vasto uso de armas de caça, como baladeiras, fundas, e arcos, os quais os reinos odiavam, consideravam medíocres e instrumentos para covardes, enquanto aplicavam a supremacia do combate corpo a corpo ser o melhor tipo de combate. Os Magos, obviamente, obtinham tratamento VIP entretanto, por serem capazes de dizimarem campos de batalha inteiramente sozinhos, encontrarem formas de burlarem a vida, e até mesmo de trazer as capacidades máximas de um corpo físico ao seu auge.
            
            </p>

            <button class="botao-historia" type="button" onclick="select(401)"> Continuar </button>

            <div class="imagem-personagem"><img  src="../img/img/Sword1.jpg"></div>

            </div>
            </div>
            `
            var titulo = document.getElementById('historia-cacadora')
            typeWrite(titulo)
            container.style.display = 'flex'
            container.style.maxWidth = '700px';
            container.style.maxHeight = '700px';
            container.style.height= '700px';
            break;

            case 401:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-cacadora">
            A guerra contra Ufattelig foi uma terrível guerra para todos os reinos, os cavaleiros foram dizimados, os espadachins, que meio que já estavam separados mesmo, ficaram ainda mais distantes, os lanceiros, com sua disciplina e lealdade, haviam perdido seu mártir mais valioso, seu próprio rei, e as terras além do reino ficaram ainda mais caótica do que eram antes, com o ressurgimento e ocupação de forças malignas, que impregnava as florestas como rios, e matava a plantação como se fossem um poderoso veneno. Inúmeras tribos das terras além do reino se juntaram sob uma única bandeira; a bandeira da liberdade, marchando com seus melhores guerreiros lado a lado com os serventes dos reinos, que mesmo em maus termos, ambos os lados sabiam que, aquilo era uma guerra de sobrevivência.
            
            </p>

            <div class="envelope-botoes-historia"><button class="botao-historia" type="button" onclick="select(402)"> Continuar </button></div>
            
            <div class="imagem-personagem"><img  src="../img/img/Sword1.jpg"></div>


            </div>
            </div>
            `
            var titulo = document.getElementById('historia-cacadora')
            typeWrite(titulo)

            container.style.display = 'flex'
            container.style.maxWidth = '700px';
            container.style.maxHeight = '700px';
            container.style.height= '700px';
            break;

            case 402:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-cacadora">
            A tribo dos Caçadores foi uma das únicas que não participou da grande guerra, pela sua maioria respeitou o ciclo da vida; humanos haviam dominado a terra por milhares de anos, agora, era a sua vez de perecerem diante a uma ameaça descomunal. Magnólia, entretanto, não fazia parte da maioria, rebelando-se contra as crenças de seus compatriotas, “Como vocês podem simplesmente sentarem e aguardarem a morte? Pessoas estão morrendo neste exato momento enquanto estamos isolados aqui!” Porém, quase todos não a escutavam, e os que escutavam, partiam da vila a fim de trazer alguma mudança, porém nunca mais voltavam.

            
            </p>

            <button class="botao-historia" type="button" onclick="select(403)"> Continuar </button>

            <div class="imagem-personagem"><img  src="../img/img/Sword1.jpg"></div>


            </div>
            </div>
            `
            var titulo = document.getElementById('historia-cacadora')
            typeWrite(titulo)
            container.style.display = 'flex'
            container.style.maxWidth = '700px';
            container.style.maxHeight = '700px';
            container.style.height= '700px';
            break;

            case 403:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-cacadora">
            Magnólia sabia que a cada dia que passava em sua vila reclusa da grande guerra, várias vidas eram tomadas, escravizadas, e comercializadas pelo exército maligno de Ufattelig, portanto, criou coragem para arrumar as suas coisas, e partiu em direção ao mundo com o seu arco de caça, as roupas de seu corpo, e o mínimo de esperança que conseguiria fazer alguma coisa nessa realidade apocalíptica, ou ao menos, morreria tentando.
            
            </p>

            <button class="botao-historia" type="button" onclick="select(404)"> Continuar </button>
            
            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>

            </div>
            </div>
            `
            var titulo = document.getElementById('historia-cacadora')
            typeWrite(titulo)
            container.style.display = 'flex'
            container.style.maxWidth = '700px';
            container.style.maxHeight = '700px';
            container.style.height= '700px';
            break;

            case 404:

               
                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">
                Magnólia andou por vários dias na densa floresta, raramente encontrando criaturas do mal para combater, e ocasionalmente encontrando algum sobrevivente ou dois, com poucos sendo honoráveis o suficiente para não se tornarem rufiões, enquanto deparou-se com uma cena em sua frente; um enorme ser armadurado, portanto uma lança e um escudo ambos colossais, facilmente tendo mais que o dobro de seu próprio tamanho, levando em consideração que ela era uma mulher relativamente robusta por estar sempre caçando. O ser empurrava árvores de centenas de quilos para o lado como se fossem alfinetes a fim de ver Magnólia de perto.
                A Caçadora se questiona sobre o que fazer a seguir.


                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(405)"> Atacar o ser de armadura  </button>
                <button class="botao-historia" type="button" onclick="select(406)"> Esperar e ver o que ele quer  </button>
                <button class="botao-historia" type="button" onclick="select(407)"> Tentar conversar com a figura </button>

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';
                
                
            break;

            case 405:

                        // Caçadora ataca o Guardião

                        // Falas:
                        /*
                        Guardião: “Olha só, achei que você era só uma franguinha sem coragem de revidar o mínimo de intimidação, parece que subestimei você até demais.”
                         */
                        
                    break;

            case 406:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">
                "..."</br>
                Guardião: “Nada mal. Você tem um corpo de uma guerreira, mesmo sendo uma simples caçadora das terras sem lei, extraordinário.”

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(408)"> Continuar  </button>
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 407:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">
                O Ser de armadura levanta a sua mão, como se interrompesse a sua fala, e mesmo ignorando tal sinal e continuando a tentar ter a comunicação, ele apenas lhe ignora.

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(408)"> Continuar  </button>
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 408:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">
                Guardião: “Perdão por demorar com as introduções, e por lhe intimidar, eu sou Ru’thra, mas a senhora pode me chamar de Guardião a ponto de facilitar a sua memória. Estou em uma missão de exterminar as forças do mal, porém, minha fornalha de almas está quase no limite, caso eu continue, estou certo a perecer sem ao menos deter Ufattelig, o Rei Demônio, por eu não saber a sua localização ainda. Guerreiro, eu preciso de sua ajuda.”

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(409)"> Por quê você quer minha ajuda?</button>
                <button class="botao-historia" type="button" onclick="select(410)"> Ru’thra? Esse não é o rei do reino do Oeste?  </button>
                <button class="botao-historia" type="button" onclick="select(411)"> Por quê eu?  </button>
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 409:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">
                Guardião: “Você foi uma das únicas guerreiras que encontrei e é relativamente forte em comparação aos seres espalhados pelos arredores. O último humano capaz que vi foi um dos meus súditos, que morreu em batalha a pouco tempo. Só você consegue me ajudar a derrotar Ufattelig.”

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(412)">  Entendido. Irei lhe ajudar, ser estranho!   </button>
                <button class="botao-historia" type="button" onclick="select(413)"> Eu nunca concordei com isso! Vai catar coquinho!  </button>
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 410:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">
                Guardião: “Eu sou o Rei Lanceiro, Ru’thra, o último guardião da linhagem de guardiões que foram levantados a fim de derrotar Ufattelig. Como você já deve ter adivinhado, nós falhamos com nosso propósito, mas ainda podemos cumpri-lo.

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(412)">  Entendido. Irei lhe ajudar, ser estranho!   </button>
                <button class="botao-historia" type="button" onclick="select(413)"> Eu nunca concordei com isso! Vai catar coquinho!  </button>
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 411:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">
                Guardião: “Guerreira. Eu sou incapaz de prosseguir mais um passo. Minha fornalha de almas, minha fonte de energia, está perto de se esgotar, e com o seu fim, também chegará o meu. Eu preferiria queimar nas chamas de Tártaro ao invés de garantir que nada poderá ficar no caminho de Ufattelig, os Guardiões são os únicos seres capazes de derrotá-lo, ele é forte demais para qualquer outro ser humano.”

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(412)">  Entendido. Irei lhe ajudar, ser estranho!   </button>
                <button class="botao-historia" type="button" onclick="select(413)"> Eu nunca concordei com isso! Vai catar coquinho!  </button>
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 412:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">
                Guardião: “Vá para o Norte aventureira, onde o caído reino dos cavaleiros ainda mantém suas ruínas. Encontre um dos capatazes de Ufattelig, Lacerta, um homem-lagarto que traz escravos e prisioneiros de guerra para o exército das forças do mal, ele será seu desafio mais fácil, porém ainda será um desafio. Encontre informações da localização de Ufattelig através dele, e quando você achá-lo, eu estarei lá.”

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(416)"> Continuar </button>
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 413:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">
                Guardião: “Então terei que lhe matar e esperar a próxima pessoa que concorda… Você sabe demais. Não posso deixar com que meu plano vaze para Ufattelig.”
                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(414)"> E-Espera! Eu estava zoando! É só zoeira!</button>
                <button class="botao-historia" type="button" onclick="select(415)"> Vamo nessa monte de lata. Eu vou te matar até você morrer  </button>
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 414:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">
                Guardião: “Imaginei que você voltaria a consciência a tempo.” 
                Guardião: “Vá para o Norte aventureiro, onde o caído reino dos cavaleiros ainda mantém suas ruínas. Encontre um dos capatazes de Ufattelig, Lacerta, um homem-lagarto que traz escravos e prisioneiros de guerra para o exército das forças do mal, ele será seu desafio mais fácil, porém ainda será um desafio. Encontre informações da localização de Ufattelig através dele, e quando você achá-lo, eu estarei lá.”



                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(416)"> Continuar</button>
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 415:






                //ADICIONAR A FALA: Guardião: “Nunca imaginaria que houvesse alguém tão incapaz de entender a situação…”

                // COMBATE QUE FAZ O JOGADOR PERDER






            break;    
            
            case 416:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">
                Magnólia então parte para os reino do Norte, encontrando vários inimigos no caminho, porém facilmente acabando com eles, e eventualmente, acabando trombando com Lacerta, imediatamente assumindo a instância de batalha, por ele ser o único homem-lagarto que havia encontrado até agora.”
                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(417)"> Continuar</button>
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 417:

                // Combate: Magnólia vs Lacerta

                /*Lacerta: “Como você ousa invadir o território de Lorde Ufattelig? Você é louca?!”
                Magnólia: “Olha só, nunca vi um animal falante!”
                Lacerta: “Vou te informar que eu sou descendente de um dragão de komodo, cuidado comigo!”
                */

            break;
           

            case 418:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">
                Após derrotar Lacerta, Magnólia acaba encontrando um papel dentro de seu bolso (Lagartixa tem bolsos?) que dizia a localização de seu próximo oponente, e uma nova pista da localização de Ufattelig; a princesa do reino do Sul, corrompida pelas forças do mal. 
                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(419)"> Continuar</button>
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 419:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">
                Sua localização não fora a coisa mais inconspicua do mundo, por ainda utilizar o caído reino dos Quebra-Escudos como seu castelo. Voltar ao seu antigo reino caído com certeza fora algo difícil de superar, porém, salvar o mundo era mais importante do que lidar com seu emocional no momento. Ao contrário de Lacerta, a princesa, Securis, era com total certeza um desafio a altura de se superar. 
                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(421)"> Continuar</button>
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 421:

                // Combate: Magnólia vs Securis

                /*Falas:
                Securis: ”Quem é você? Quem ousa pisar no território de Securis, serva de Ufattelig?”
                Magnólia: “Uau, suas roupas são muito lindas, e limpas! Posso pegar?”
                Securis: ”Eu te ordeno a ajoelhar-se agora perante sua princesa, relés bárbara!
                */

            break;

            case 422:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">
                Após derrotar Securis, a mesma convenientemente havia dissipado as forças do mal de seu corpo (bem convenientemente, como se fosse uma história…) informando a brava "heroína" de mais uma pista da localização de Ufattelig, mais um de seus oficiais (para variar) um antigo invocador ermitão, Vocator, que foi corrompido pela maldade, servindo Ufattelig de uma forma menos agressiva, apenas lhe fornecendo unidades de batalha, por conseguir invocá-las, e não ativamente indo atrás de prisioneiros ou de vítimas de sua magia, ou seja, um covardão que não aguenta ver sangue.
                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(423)"> Continuar</button>
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 423:

               
            // Combate: Vocator vs Magnólia

            /*
            Vocator: “Como você encontrou esse lugar? Eu tive certeza de contar apenas aos oficiais de Ufattelig! Não pode ser…”
            Magnólia: “Velhinho, eu não quero bater em você, só quero matar um tal de Ufafa lá”
            Vocator: “Impossível! Você não vai passar!”
            */

            break;

            case 424:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">
                Vocator foi um desafio maior ainda que Securis, por suas invocações tomarem o seu lugar, lhe fornecendo segurança a maior parte do tempo. Mesmo derrotado entretanto, o mesmo não havia voltado ao seu estado normal, por estar completamente tomado pelas trevas. Aparentemente, até uma princesa tem mais força do que um mago experiente? Isso apenas comprova o quão banana era. Obviamente, era uma pena não conseguir extrair informações do mago, mas tal problema foi totalmente resolvido apenas olhando um pouco para seu esconderijo, coincidentemente, intelectuais adoravam escrever e anotar tudo o que tinham conhecimento, inclusive a localização de seus parceiros.
                Magnólia foi capaz de encontrar o próximo oficial a eliminar, ou melhor, os dois próximos

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(425)"> Continuar</button>
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 425:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">
                Os próximos oficiais baseiam-se em dois antigos servos reais, o segundo mais habilidoso espadachim do Reino dos espadachins, ficando para trás apenas em relação ao rei, e um dos antigos magos que construíram os Guardiões, a última tentativa da humanidade de repelir Ufattelig, infelizmente, ambos estavam completamente corrompidos pelo mal, por terem sido um dos primeiros a cair durante a grande guerra, afinal, estavam na linha de frente da aliança. 
                Isso significava que, não haveria uma situação de tanta sorte quanto Securis, a batalha seria até a morte, não que todas até agora não fossem, mas salvá-los não era uma opção.
                Seus nomes, mesmo que marcados na história por décadas, haviam sido perdidos, banhados por histórias de suas brutalidades enquanto na governança de Ufattelig, mesmo sendo pessoas extraordinárias, capazes de receberem posições reais, apenas suas ocupações, como “Mago” e “Espadachim” havia lhe restado. Um triste fim.


                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(426)"> Irei lutar contra o segundo melhor espadachim, quero dar um pouco de retribuição de todo esse tempo que fomos isolados!</button>

                <button class="botao-historia" type="button" onclick="select(432)">  Irei lutar contra o mago real, tenho umas coisas para acertar com esse privilegiado.</button>
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 426:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">
                Claro, por ter passado tanto tempo sofrendo preconceito simplesmente por sua escolha de armas, algum tipo de complexo de vingança iria vir para a superfície.
                Então, Magnólia partiu em direção ao seu oponente espadachim, confiante que iria ganhar, porém não sabendo o desafio que estaria por vir.



                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(427)"> Continuar </button>
                
                
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 427:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">
                A localização do espadachim corrompido nada mais era do que nos portões do castelo de Ufattelig, o que facilitava e muito a situação de Magnólia, afinal, em sua cabeça, era só derrotar o inimigo em frente, e logo depois, derrotar Ufattelig, certo? 

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(428)"> Continuar </button>
                
                
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 428:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">

                O guerreiro em sua frente, vestido de cabeça aos pés de armadura carmesim, exalando uma aura óbvia de corrupção, ficava em seu caminho, com a espada cravada em sua frente, enquanto descansava as mãos em sua maçã, como se estivesse aguardando a presença de Magnólia faz um tempo. Ainda não demonstrando vontade alguma de lutar, o mesmo falava, em um tom alto e brusco, somente pela voz era perceptível que aquele homem havia lutado inúmeras batalhas em seu passado, e ele não planejava perder esta. 


                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(429)"> Continuar </button>
                
                
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 429:

                // Combate: Magnólia vs Espadachim

                /* Falas:
                Espadachim: “Guerreira! Dê meia volta imediatamente, lhe aviso que mais um passo, e eu lhe corto em vários pedaços que nem uma melância do Fruit Ninja!“ 
                Magnólia: “Ei, armadura feiosa, cadê seu chefe, eu desafio ele para um x1!”
                Espadachim: “Bela piada, vamos ver se você consegue cuspir mais palavras decapitada!”
                */

            break;

            case 430:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">

                Não surpreendentemente, o espadachim era realmente muito feroz com seus ataques, arrastando sua espada na estrada, fazendo inúmeras faíscas a cada golpe, a cada estocada quase fazendo com que Magnólia caísse no chão, porém, havia emergido vitoriosamente. 


                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(431)"> Continuar </button>
                
                
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 431:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">

                Após a batalha, faltava apenas seguir a dentro do castelo, porém, ao olhar aos arredores do castelo, havia uma área mais morta do que o normal, onde a terra era seca e extremamente preta, lembrando o carvão, se quisesse, poderia simplesmente ignorar a anormalidade sem quaisquer problemas. Quem se importa que a terra parecia carvão naquela parte? Mas um pequeno impulso pulsava na cabeça de Magnólia, “O que será que tem lá? Eu quero ver o que tem lá”,por pura curiosidade tinha vontade de trilhar caminhos paralelos a sua jornada. 


                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(437)"> Acho que vou dar uma olhada no que tem ali, com certeza não é algo de errado, né? Vai que encontro alguns pães de alho ali, com um churras e uma grelha daquelas! </button>

                <button class="botao-historia" type="button" onclick="select(442)"> Não posso me distrair agora, por mais que eu queira muito, muito, muito ir… Não posso! Cada segundo importa, e não sei se o Ufattelig sei lá, pula da janela pra fugir! </button>
                
                
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 432:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">

                Querendo ou não, ver a oposição extremamente fraca de Vocator fez com que Magnólia adquirisse um pré conceito de magos subconscientemente, “Todos os magos são pamonhas, logo, vou acabar com esse mago bem rápido”, e acertar umas contas históricas, não sabendo o que estava por vir, mas, também, como poderia? Mesmo tendo acabado com algumas forças extremamente fortes do mal, sua jornada estava sendo completamente guiada, fora de seu controle. 


                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(433)"> Continuar </button>

                
                
                
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 433:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">

                A curiosidade acabou sendo maior do que o desejo de ser o melhor, perguntas como por quê os guardiões existem? Como eles foram criados? Quão forte é um deles? 
                Foram as mais comuns. Mas, talvez, enfrentar um dos criadores de tais armas de combate fosse uma experiência reveladora, além de, na cabeça de Magnólia, ser uma batalha fácil de lidar, inocente de seu futuro desafio.

                Ao contrário do que se esperava, surpreendentemente, o mago estava em um campo completamente aberto, parecendo estar atrás do Espadachim em si, como se também estivesse ansioso para a luta, introduzindo-se formalmente. 

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(434)"> Continuar </button>

                
                
                
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 434:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">


                Ao contrário do que se esperava, surpreendentemente, o mago estava em um campo completamente aberto, parecendo estar atrás do Espadachim em si, como se também estivesse ansioso para a luta, introduzindo-se formalmente. 

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(435)"> Continuar </button>

                
                
                
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 435:

                // Combate: Magnólia vs Mago

                /*
                Mago: “Saudações, guerreira. Perdão pela minha falta de sutileza, porém como você derrotou vários oficiais de Ufattelig, fui encarregado de formalmente acabar com a sua raça, da forma mais rápida possível.” 
                Magnólia: “Mago! Vamos acertar as contas, seu privilegiado mimado, você nunca teve dificuldades na sociedade por causa do seu jeito de lutar!”
                Mago: “Absurdo, eu só tive um empréstimo pequeno de um milhão, o resto foi tudo eu que adquiri!”
                */


            break;

            case 436:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">


                Quem diria que um mago seria tão poderoso assim? Magnólia que o diga. Derrotá-lo foi mais difícil do que matar barata com veneno, nem quando achava que ganharia havia ganhado de fato, e a batalha havia se alastrado demais. Obviamente, após derrotá-lo, roubar seus pertences e roupa era o mais cordial, o que um cadáver tem a dizer sobre perder o que é seu?
                Entre seus itens, havia um mapa da localização do castelo de Ufattelig, o qual usou para seguir em frente, pronta para acabar com essa insolência do Rei Demônio.


                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(437)"> Continuar </button>

            
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 437:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">

                O castelo era extremamente imponente, chegando até as nuvens com suas torres altas, com a sua grama extremamente morta, e até com alguns restos mortais espalhados por aqui e ali. Como assim, o rei do mal não limpava o quintal? Absurdo!
                Ao olhar aos arredores do castelo, havia uma área mais morta do que o normal, onde a terra era seca e extremamente preta, lembrando o carvão, se quisesse, poderia simplesmente ignorar a anormalidade sem quaisquer problemas. Quem se importa que a terra parecia carvão naquela parte? Mas um pequeno impulso pulsava na cabeça de Magnólia, “O que será que tem lá? Eu quero ver o que tem lá”, por seguir seus desejos, tal escolha era algo normal em seu dia a dia, por pura curiosidade tinha vontade de trilhar caminhos paralelos a sua jornada.

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(438)"> Acho que vou dar uma olhada no que tem ali, com certeza não é algo de errado, né? Vai que encontro alguns pães de alho ali, com um churras e uma grelha daquelas! </button>

                <button class="botao-historia" type="button" onclick="select(442)"> Não posso me distrair agora, por mais que eu queira muito, muito, muito ir… Não posso! Cada segundo importa, e não sei se o Ufattelig sei lá, pula da janela pra fugir! </button>

            
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 438:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">

                A curiosidade tomou controle das ações de Magnólia, que lhe forçou a acabar com a aventura, simplesmente para checar uma terrinha mais preta que o normal, e então ela vagou na terra sem fim, e morreu de fome e sede por não saber para onde ir, Fim!
                Brincadeira. 
                O que havia encontrado de fato, era um dragão negro com escamas vermelhas espalhadas pelo seu corpo, com uma altura de cinco metros, deitado como um animal de estimação na terra queimada do local, dormindo. 
                Sua figura era extremamente intimidadora, a Caçadora sabia que, lutar com aquilo agora era suícidio, porém novamente, a curiosidade acabava lhe pressionando a tentar mais e mais, “E se eu for a primeira Caçadora a matar um dragão!?”



                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(439)"> Se eu conseguir um título de caçador de dragões, terei tudo o que quero! </button>

                <button class="botao-historia" type="button" onclick="select(442)"> Não posso me distrair agora, por mais que eu queira muito, muito, muito ir… Não posso! Cada segundo importa, e não sei se o Ufattelig sei lá, pula da janela pra fugir! </button>
                
                
                
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 439:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">

                O dragão, por estar despreparado, sofre um golpe extremamente forte e despercebido, perdendo várias de suas escamas extremamente valiosas ao ter elas forçadas fora de seu corpo, um único golpe, por tomar o dragão enquanto ainda descansava, era o suficiente para mudar a batalha a seu favor, afinal, sem truques, era improvável que ganharia.

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(440)"> Continuar </button>
  

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 440:

                // Combate: Manglóia vs Dragão

                /*

                Dragão: “CRIATURA INSOLENTE, OUSASTE DESFERIR SUA L MINA FÉTIDA CONTRA MINHA NOBRE CARNE?” 
                Magnólia: “Até o largartão parecia mais desafiante que você!” 
                Dragão: “IREI LHE MOSTRAR O QUE ACONTECE QUANDO UM MERO BÍPEDE XEXELENTO DESAFIA O REI DOS CÉUS!”

                 */

                /*Diálogo final da batalha:
                
                Dragão: “Ó, Ufattelig, REI DAS TREVAS E PAI DA MALDADE, SENHOR DO CAOS E SERVENTE DA DOR, ESTE MERO SOLDADO IMPLORA POR ASSISTÊNCIA, JUNTE-SE A MIM E VAMOS TRANSFORMAR ESSE BÁRBARO EM PÓ!”
                “Ufattelig? POR QUÉ ME IGNORAS? NÃO SOU O DRAGÃO CARMESIM, ENCARNAÇÃO DAS TREVAS, REI DOS CÉUS? POR QUÊ DESCARTASTES A MIM, Ufattelig!?” 
                Magnólia: “Caraca, até o Rei do mal te deixou na mão! Você realmente vale menos do que o lagartão”
                */

            break;


            case 441:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">

                O dragão, mesmo contorcendo-se e implorando por ajuda de Ufattelig, não a recebia de jeito algum. Seu líder assistia sua derrota de ínicio ao fim, e por estar usando um elmo fechado, sua reação e olhar era impossível de distinguir, quem sabe ele estava sadicamente assistindo seu servo perecer em sua frente, ou simplesmente sentia que precisava ajudar, porém não podia mexer seu corpo por algum motivo. Havia várias variáveis, porém, todas levavam a uma única alternativa; não importava. Tudo o que importava, é que ao subir as escadas do castelo, Magnólia iria estar cara a cara com o rei do mal, o motivo de sua jornada, o motivo dessa calamidade estar acontecendo ao redor dos reinos.

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(442)"> Continuar </button>
  

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 442:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">

                Adentrar o castelo fora mais fácil do que parecia. Seus servos, que pareciam ser a sua força focal, alguns extremamente fortes, não estavam mais no castelo. Magnólia estava ocupada demais com seus próprios pensamentos de glória, do que preocupadoa de saber o que estava acontecendo, será mesmo que o rei do mal simplesmente decidiu desocupar o castelo? Ou seria aquele um pedido de encontro entre os dois? 	Vários cenários indicavam que algo estava errado. Ele não havia dominado o mundo por simples força, suas táticas eram impecáveis, o que ele estava pensando?

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(443)"> Continuar </button>
  

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 443:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">

                Magnólia: “Rei do Mal, preciso que você pereça, hoje, e agora, para poupar meu rei de seu fim cruel!”
                Ufattelig: “&%^@*$%+!!, *#@^&$!%.”
                Magnólia: “O que…?” 
                

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(444)"> Continuar </button>
  

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 444:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">

                Magnólia era incapaz de entender o que o oponente estava tentando dizer, cada palavra soava como estática em seus ouvidos, mas aquilo não importava. Em sua cabeça, podia vencer sozinha sem mesmo ter que esperar pelo guardião, a vitória seria certa. 
                

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(445)"> Continuar </button>
  

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 445:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">

                Magnólia: “Impossível! Como?? Só com um golpe…”

                Ufattelig estava prestes a acabar com a vida da Caçadora. Uma jornada inteira, apenas para acabar logo no final, por não ser forte o suficiente, ele realmente não era o bastante? Tantos inimigos derrotados, e ela era incapaz de terminar a jornada sozinha? De que aquelas lutas bastavam, se nenhuma delas lhe deixava mais forte? Do que a vida adiantava?
                Mas então…
                
                

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(446)"> Continuar </button>
  

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 446:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">

                

                O Guardião apareceu extremamente do nada, como um relâmpago, apesar de ser extremamente alto e definido, sua velocidade não parecia diminuir nem um pouco, facilmente sendo mais rápido do que o melhor cavalo do reino. O Guardião bloqueou o caminho entre a Caçadora e o inimigo, e então, apontou para a saída do castelo. Aquilo era um óbvio sinal de que, ficar ali, era apenas um estorvo para seu salvador. 
                Entendendo o recado, a moça saía às pressas, deixando os dois colossos lutarem entre si.

                
                

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(447)"> Continuar </button>
  

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 447:

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

            break;

            case 448:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-cacadora">

                

                Havia acabado. Tantas eras em guerra constante, tantas vidas perdidas, tantas famílias destruídas e lares queimados ao chão, tantos sonhos despedaçados e tantos reinos dizimados.
                E havia acabado.
                O Rei Lanceiro havia completado seu objetivo. Ufattelig está morto. O que quer que ele fosse, não iria mais interferir com os reinos, e tudo voltaria à paz.
                As pálpebras de Ru’thra se permitiam fechar mais uma vez, pela última vez, sua fornalha de almas, antes capaz de só permitir movimentos simples, estava completamente vazia, e ele não planejava sacrificar mais ninguém para manter sua longevidade, qual seria o motivo, reinar? Nada disso importava, o rei do mal havia caído naquele dia, a vitória era da humanidade.
                Ru’thra, ajoelhado em frente ao antigo rei do mal, lentamente fecha os olhos, e aceita o seu destino; a sua morte, que deveria ter acontecido dezenas de anos atrás, que fora empurrada até hoje por rituais e magias capazes de alimentar um ser a base de almas.


                
                

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(449)"> Continuar </button>
  

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-cacadora')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;
    }

  
       
}