function select(sel){
    switch(sel){
        
            

        case 500:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
            A busca da disciplina e lealdade, a mais importante chama da honra em relação ao seu próprio rei, a disponibilidade de fazer tudo pela realeza era um dos aspectos mais únicos dos Lanceiros. Todos os reinos focaram em ser o melhor, destacar-se entre a multidão, entretanto, o reino dos Lanceiros focava extremamente em suas crenças, onde o Rei é a absoluta entidade acima de todos, e tudo.
            
            </p>

            <button class="botao-historia" type="button" onclick="select(501)"> Continuar </button>

            <div class="imagem-personagem"><img  src="../img/img/Sword1.jpg"></div>

            </div>
            </div>
            `
            var titulo = document.getElementById('historia-quebra-escudos-m')
            typeWrite(titulo)
            container.style.display = 'flex'
            container.style.maxWidth = '700px';
            container.style.maxHeight = '700px';
            container.style.height= '700px';
            break;

            case 501:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
            A guerra contra Ufattelig foi uma terrível guerra para todos os reinos, os cavaleiros foram dizimados, os espadachins, que meio que já estavam separados mesmo, ficaram ainda mais distantes, os lanceiros, com sua disciplina e lealdade, haviam perdido seu mártir mais valioso, seu próprio rei, e as terras além do reino ficaram ainda mais caótica do que eram antes, com o ressurgimento e ocupação de forças malignas, que impregnava as florestas como rios, e matava a plantação como se fossem um poderoso veneno.
            
            </p>

            <div class="envelope-botoes-historia"><button class="botao-historia" type="button" onclick="select(502)"> Continuar </button></div>
            
            <div class="imagem-personagem"><img  src="../img/img/Sword1.jpg"></div>


            </div>
            </div>
            `
            var titulo = document.getElementById('historia-quebra-escudos-m')
            typeWrite(titulo)

            container.style.display = 'flex'
            container.style.maxWidth = '700px';
            container.style.maxHeight = '700px';
            container.style.height= '700px';
            break;

            case 502:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
            Porém, os Lanceiros se espalharam entre si, a maioria deles perderam as esperanças, e enviaram ataques suicidas, sem chances de vitória alguma como uma falha tentativa de entrelaçar-se a um destino há muito tempo perdido. Poucos, entretanto, seguiram em frente, no futuro sem sua figura de autoridade máxima.

            
            </p>

            <button class="botao-historia" type="button" onclick="select(503)"> Continuar </button>

            <div class="imagem-personagem"><img  src="../img/img/Sword1.jpg"></div>


            </div>
            </div>
            `
            var titulo = document.getElementById('historia-quebra-escudos-m')
            typeWrite(titulo)
            container.style.display = 'flex'
            container.style.maxWidth = '700px';
            container.style.maxHeight = '700px';
            container.style.height= '700px';
            break;

            case 503:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
            Camila foi a primeira Lanceira a aceitar que não haveria uma figura máxima em sua vida, a não ser a si mesmo. Caçando para sobreviver, salvando quem podia, e correndo quando precisava, uma vida selvagem digna de um sobrevivente de uma guerra, porém, mesmo que fosse o pior estado de sua vida, ainda era relativamente feliz por manter sua vida. 
            
            </p>

            <button class="botao-historia" type="button" onclick="select(504)"> Continuar </button>
            
            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>

            </div>
            </div>
            `
            var titulo = document.getElementById('historia-quebra-escudos-m')
            typeWrite(titulo)
            container.style.display = 'flex'
            container.style.maxWidth = '700px';
            container.style.maxHeight = '700px';
            container.style.height= '700px';
            break;

            case 504:

               
                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                Enquanto deliciava-se de um delicioso coelho em caldo, a mesmo percebia a presença em sua frente; um enorme ser armadurado, portanto uma lança e um escudo ambos colossais, facilmente tendo mais que o dobro de seu próprio tamanho, levando em consideração que ela era uma mulher relativamente robusta para uma pessoa normal. O ser empurrava árvores de centenas de quilos para o lado como se fossem alfinetes a fim de ver Camila de perto.
                A Lanceira se questiona sobre o que fazer a seguir.



                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(505)"> Atacar o ser de armadura  </button>
                <button class="botao-historia" type="button" onclick="select(506)"> Esperar e ver o que ele quer  </button>
                <button class="botao-historia" type="button" onclick="select(507)"> Tentar conversar com a figura </button>

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';
                
                
            break;

            case 505:

                        // Lanceira ataca o Guardião

                        // Falas:
                        /*
                        Guardião: “Olha só, achei que você era só uma franguinha sem coragem de revidar o mínimo de intimidação, parece que subestimei você até demais.”
                         */
                        
                    break;

            case 506:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                "..."</br>
                Guardião: “Nada mal. Sua forma física não decai em nenhum aspecto, você tem um corpo muito desejável para qualquer guerreira, junto com um coração de ouro.”

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(508)"> Continuar  </button>
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 407:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                O Ser de armadura levanta a sua mão, como se interrompesse a sua fala, e mesmo ignorando tal sinal e continuando a tentar ter a comunicação, ele apenas lhe ignora.

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(508)"> Continuar  </button>
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 508:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                Guardião: “Perdão por demorar com as introduções, e por lhe encarar, eu sou Ru’thra, mas a senhora pode me chamar de Guardião a ponto de facilitar a sua memória. Estou em uma missão de exterminar as forças do mal, porém, minha fornalha de almas está quase no limite, caso eu continue, estou certo a perecer sem ao menos deter Ufattelig, o Rei Demônio, por eu não saber a sua localização ainda. Guerreiro, eu preciso de sua ajuda.”

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(509)"> Por quê você quer minha ajuda?</button>
                <button class="botao-historia" type="button" onclick="select(510)"> Ru’thra? Esse não é o rei do reino do Oeste?  </button>
                <button class="botao-historia" type="button" onclick="select(511)"> Por quê eu?  </button>
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 509:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                Guardião: “Você foi uma das únicas guerreiras que encontrei e é relativamente forte em comparação aos seres espalhados pelos arredores. O último humano que vi foi um dos meus súditos, que morreu em batalha a pouco tempo. Só você consegue me ajudar a derrotar Ufattelig.”

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(512)">  Entendido. Irei lhe ajudar, minha Majestade!    </button>
                <button class="botao-historia" type="button" onclick="select(514)"> Meu rei, peço perdão, mas… Eu não posso… Não consigo…  </button>
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 510:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                Guardião: “Sim moça. Eu sou o Rei Lanceiro, Ru’thra, o último guardião da linhagem de guardiões que foram levantados a fim de derrotar Ufattelig. Como você já deve ter adivinhado, nós falhamos com nosso propósito, mas ainda podemos cumpri-lo.
                Peço perdão por ter sumido por tanto tempo, moça, mas era necessário para que Ufattelig pensasse que eu estava morto e baixasse sua guarda.”


                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(512)">  Entendido. Irei lhe ajudar, ser estranho!   </button>
                <button class="botao-historia" type="button" onclick="select(514)"> Eu nunca concordei com isso! Vai catar coquinho!  </button>
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 511:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                Guardião: “Guerreira. Eu sou incapaz de prosseguir mais um passo. Minha fornalha de almas, minha fonte de energia, está perto de se esgotar, e com o seu fim, também chegará o meu. Eu preferiria queimar nas chamas de Tártaro ao invés de garantir que nada poderá ficar no caminho de Ufattelig, os Guardiões são os únicos seres capazes de derrotá-lo, ele é forte demais para qualquer outro ser humano.”

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(512)">  Entendido. Irei lhe ajudar, minha Majestade!    </button>
                <button class="botao-historia" type="button" onclick="select(513)"> Meu rei, peço perdão, mas… Eu não posso… Não consigo…  </button>
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 512:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                Guardião: “Vá para o Norte aventureira, onde o caído reino dos cavaleiros ainda mantém suas ruínas. Encontre um dos capatazes de Ufattelig, Lacerta, um homem-lagarto que traz escravos e prisioneiros de guerra para o exército das forças do mal, ele será seu desafio mais fácil, porém ainda será um desafio. Encontre informações da localização de Ufattelig através dele, e quando você achá-lo, eu estarei lá.”

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(516)"> Continuar </button>
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 513:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                Guardião: “Então terei que lhe matar e esperar a próxima pessoa que concorda… Você sabe demais. Não posso deixar com que meu plano vaze para Ufattelig.”


                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(514)">  E-Espera! Meu Rei! Apenas duvidei de minhas habilidades por um segundo!</button>
                <button class="botao-historia" type="button" onclick="select(515)">  Parece que não há outra escolha… Já não lhe trato como majestade mais a muito tempo.  </button>
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 514:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                Guardião: “Imaginei que você voltaria a consciência a tempo.” 
                Guardião: “Vá para o Norte aventureira, onde o caído reino dos cavaleiros ainda mantém suas ruínas. Encontre um dos capatazes de Ufattelig, Lacerta, um homem-lagarto que traz escravos e prisioneiros de guerra para o exército das forças do mal, ele será seu desafio mais fácil, porém ainda será um desafio. Encontre informações da localização de Ufattelig através dele, e quando você achá-lo, eu estarei lá.”



                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(516)"> Continuar</button>
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 515:






                //ADICIONAR A FALA: Guardião: Guardião: “Nunca imaginaria que houvesse alguém tão incapaz de entender a situação…”

                // COMBATE QUE FAZ O JOGADOR PERDER






            break;    
            
            case 516:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                Camila então parte para os reino do Norte, encontrando vários inimigos no caminho, porém facilmente acabando com eles, e eventualmente, acabando trombando com Lacerta, imediatamente assumindo a instância de batalha, por ele ser o único homem-lagarto que havia encontrado até agora.
                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(517)"> Continuar</button>
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 517:

                // Combate: Camila vs Lacerta

                /*Lacerta: “Como você ousa invadir o território de Lorde Ufattelig? Você é louca?!”
                Camila: “Será que lagartixa no espeto fica bom?”
                Lacerta: “Vou te informar que eu sou descendente de um dragão de komodo, cuidado comigo!”

                */

            break;
           

            case 518:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                Após derrotar Lacerta, Camila acaba encontrando um papel dentro de seu bolso (Lagartixa tem bolsos?) que dizia a localização de seu próximo oponente, e uma nova pista da localização de Ufattelig; a princesa do reino do Sul, corrompida pelas forças do mal. 
                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(519)"> Continuar</button>
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 519:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                Sua localização não fora a coisa mais inconspicua do mundo, por ainda utilizar o caído reino dos Quebra-Escudos como seu castelo. Voltar ao seu antigo reino caído com certeza fora algo difícil de superar, porém, salvar o mundo era mais importante do que lidar com seu emocional no momento. Ao contrário de Lacerta, a princesa, Securis, era com total certeza um desafio a altura de se superar. 
                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(520)"> Continuar</button>
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 520:

                // Combate: Camila vs Securis

                /*Falas:
               Securis: ”Quem é você? Quem ousa pisar no território de Securis, serva de Ufattelig?”
               Camila: “Perdão, princesa, tentarei fazer com que isso não doe tanto.”
               Securis: ”Eu te ordeno a ajoelhar-se agora perante sua princesa, relés Lanceira!”

                */

            break;

            case 521:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                Após derrotar Securis, a mesma convenientemente havia dissipado as forças do mal de seu corpo (bem convenientemente, como se fosse uma história…) informando a brava "heroína" de mais uma pista da localização de Ufattelig, mais um de seus oficiais (para variar) um antigo invocador ermitão, Vocator, que foi corrompido pela maldade, servindo Ufattelig de uma forma menos agressiva, apenas lhe fornecendo unidades de batalha, por conseguir invocá-las, e não ativamente indo atrás de prisioneiros ou de vítimas de sua magia, ou seja, um covardão que não aguenta ver sangue.
                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(522)"> Continuar</button>
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 522:

               
            // Combate: Vocator vs Magnólia

            /*
            Vocator: “Como você encontrou esse lugar? Eu tive certeza de contar apenas aos oficiais de Ufattelig! Não pode ser…”
            Camila: “Senhor, apenas preciso de direções, não há necessidade de violência, por favor só me deixe passar…
            Vocator: “Impossível! Você não vai passar!”

            */

            break;

            case 523:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                Vocator foi um desafio maior ainda que Securis, por suas invocações tomarem o seu lugar, lhe fornecendo segurança a maior parte do tempo. Mesmo derrotado entretanto, o mesmo não havia voltado ao seu estado normal, por estar completamente tomado pelas trevas. Aparentemente, até uma princesa tem mais força do que um mago experiente? Isso apenas comprova o quão banana era. Obviamente, era uma pena não conseguir extrair informações do mago, mas tal problema foi totalmente resolvido apenas olhando um pouco para seu esconderijo, coincidentemente, intelectuais adoravam escrever e anotar tudo o que tinham conhecimento, inclusive a localização de seus parceiros.
                Camila foi capaz de encontrar o próximo oficial a eliminar, ou melhor, os dois próximos.


                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(524)"> Continuar</button>
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 525:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                Os próximos oficiais baseiam-se em dois antigos servos reais, o segundo mais habilidoso espadachim do Reino dos espadachins, ficando para trás apenas em relação ao rei, e um dos antigos magos que construíram os Guardiões, a última tentativa da humanidade de repelir Ufattelig, infelizmente, ambos estavam completamente corrompidos pelo mal, por terem sido um dos primeiros a cair durante a grande guerra, afinal, estavam na linha de frente da aliança. 
                Isso significava que, não haveria uma situação de tanta sorte quanto Securis, a batalha seria até a morte, não que todas até agora não fossem, mas salvá-los não era uma opção.
                Seus nomes, mesmo que marcados na história por décadas, haviam sido perdidos, banhados por histórias de suas brutalidades enquanto na governança de Ufattelig, mesmo sendo pessoas extraordinárias, capazes de receberem posições reais, apenas suas ocupações, como “Mago” e “Espadachim” havia lhe restado. Um triste fim.
             
                </p>
    
                <button class="botao-historia" type="button" onclick="select(526)"> Irei lutar contra o segundo melhor espadachim, tenho que tirá-lo de sua miséria, não duvido que esteja sofrendo sob o comando de Ufattelig.</button>

                <button class="botao-historia" type="button" onclick="select(532)">  Irei lutar contra o mago real, preciso ter qualquer pista de como meu Rei virou um Guardião.</button>
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 526:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">

                Por sua própria interpretação, a Lanceira havia se determinado a acabar com a vida do Espadachim, como uma espécie de misericórdia.
                Então, Camila partiu em direção ao seu oponente espadachim, confiante que iria ganhar, porém não sabendo o desafio que estaria por vir.

           
                </p>
    
                <button class="botao-historia" type="button" onclick="select(527)"> Continuar </button>
                
                
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 527:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                A localização do espadachim corrompido nada mais era do que nos portões do castelo de Ufattelig, o que facilitava e muito a situação de Camila, afinal, em sua cabeça, era só derrotar o inimigo em frente, e logo depois, derrotar Ufattelig, certo?  

                




                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(528)"> Continuar </button>
                
                
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 528:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">

                O guerreiro em sua frente, vestido de cabeça aos pés de armadura carmesim, exalando uma aura óbvia de corrupção, ficava em seu caminho, com a espada cravada em sua frente, enquanto descansava as mãos em sua maçã, como se estivesse aguardando a presença de Camila faz um tempo. Ainda não demonstrando vontade alguma de lutar, o mesmo falava, em um tom alto e brusco, somente pela voz era perceptível que aquele homem havia lutado inúmeras batalhas em seu passado, e ele não planejava perder esta.


                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(529)"> Continuar </button>
                
                
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 529:

                // Combate: Camila vs Espadachim

                /* Falas:
               Espadachim: “Guerreira! Dê meia volta imediatamente, lhe aviso que mais um passo, e eu lhe corto em vários pedaços que nem uma melância do Fruit Ninja!“ 
               Camila: “Não posso, nobre espadachim. Preciso acabar com toda essa   loucura, preciso lhe libertar das correntes de Ufattelig!”
               Espadachim: “Bela piada, vamos ver se você consegue cuspir mais   palavras decapitado!

                */

            break;

            case 530:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">

                Não surpreendentemente, o espadachim era realmente muito feroz com seus ataques, arrastando sua espada na estrada, fazendo inúmeras faíscas a cada golpe, a cada estocada quase fazendo com que Camila caísse no chão, porém, havia emergido vitoriosamente.  


                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(531)"> Continuar </button>
                
                
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 531:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">

                Após a batalha, faltava apenas seguir a dentro do castelo, porém, ao olhar aos arredores do castelo, havia uma área mais morta do que o normal, onde a terra era seca e extremamente preta, lembrando o carvão, se quisesse, poderia simplesmente ignorar a anormalidade sem quaisquer problemas. Quem se importa que a terra parecia carvão naquela parte? Mas um pequeno impulso pulsava na cabeça de Camila, “O que será que tem lá? Eu quero ver o que tem lá”,por pura curiosidade tinha vontade de trilhar caminhos paralelos a sua jornada.  


                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(537)">  Acho que vou dar uma olhada no que tem ali, com certeza não é algo de errado, né? Vai que encontro alguns pães de alho ali, com um churras e uma grelha daquelas! </button>

                <button class="botao-historia" type="button" onclick="select(551)"> Não posso me distrair agora, por mais que eu queira muito, muito, muito ir… Não posso! Cada segundo importa, e não sei se o Ufattelig sei lá, pula da janela pra fugir! </button>
                
                
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 532:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">

                Querendo ou não, ver a oposição extremamente fraca de Vocator fez com que Camila adquirisse um pré conceito de magos subconscientemente, “Todos os magos são pamonhas, logo, vou acabar com esse mago bem rápido”, e extrair qualquer informação possível dele enquanto ele implora pela sua vida, não sabendo o que estava por vir, mas, também, como poderia? Mesmo tendo acabado com algumas forças extremamente fortes do mal, sua jornada estava sendo completamente guiada, fora de seu controle.


                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(533)"> Continuar </button>

                
                
                
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 533:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">

                A curiosidade acabou sendo maior do que o desejo de ser o melhor, perguntas como por quê os guardiões existem? Como eles foram criados? Quão forte é um deles? 
                Foram as mais comuns. Mas, talvez, enfrentar um dos criadores de tais armas de combate fosse uma experiência reveladora, além de, na cabeça de Camila, ser uma batalha fácil de lidar, inocente de seu futuro desafio.
                

                

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(534)"> Continuar </button>

                
                
                
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 534:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">


                Ao contrário do que se esperava, surpreendentemente, o mago estava em um campo completamente aberto, parecendo estar atrás do Espadachim em si, como se também estivesse ansioso para a luta, introduzindo-se formalmente. 
                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(535)"> Continuar </button>

                
                
                
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 535:

                // Combate: Camila vs Mago

                /*
                Mago: “Saudações, guerreira. Perdão pela minha falta de sutileza, porém como você derrotou vários oficiais de Ufattelig, fui encarregado de formalmente acabar com a sua raça, da forma mais rápida possível.” 
                Camila: “Mago! Por favor, me diga, o que aconteceu com meu Rei? O que aconteceu com todos os outros Reis, eu preciso saber!”
                Mago: “Temo que você deverá saber com o meu cadáver…”

                */


            break;

            case 536:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">


                Quem diria que um mago seria tão poderoso assim? Camila que o diga. Derrotá-lo foi mais difícil do que matar barata com veneno, nem quando achava que ganharia havia ganhado de fato, e a batalha havia se alastrado demais. Obviamente, após derrotá-lo, roubar seus pertences e roupa era o mais cordial, o que um cadáver tem a dizer sobre perder o que é seu?
                Entre seus itens, havia um mapa da localização do castelo de Ufattelig, o qual usou para seguir em frente, porém, o mesmo havia mentido, e não havia nada sobre os Guardiões nele.
                Camila: “AHH! EU NEM CONSEGUI SEQUER UMA PISTA DOS GUARDIÕES!”
                Mesmo que tivesse seus arrependimentos, a sua jornada estava beirando ao fim.



                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(537)"> Continuar </button>

            
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 537:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">

                O castelo era extremamente imponente, chegando até as nuvens com suas torres altas, com a sua grama extremamente morta, e até com alguns restos mortais espalhados por aqui e ali. Como assim, o rei do mal não limpava o quintal? Absurdo!
                Ao olhar aos arredores do castelo, havia uma área mais morta do que o normal, onde a terra era seca e extremamente preta, lembrando o carvão, se quisesse, poderia simplesmente ignorar a anormalidade sem quaisquer problemas. Quem se importa que a terra parecia carvão naquela parte? Mas um pequeno impulso pulsava na cabeça de Camila, “O que será que tem lá? Eu quero ver o que tem lá”, por seguir seus desejos, tal escolha era algo normal em seu dia a dia, por pura curiosidade tinha vontade de trilhar caminhos paralelos a sua jornada. 


                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(538)"> Acho que vou dar uma olhada no que tem ali, com certeza não é algo de errado, né? Vai que encontro alguns pães de alho ali, com um churras e uma grelha daquelas! </button>

                <button class="botao-historia" type="button" onclick="select(542)"> Não posso me distrair agora, por mais que eu queira muito, muito, muito ir… Não posso! Cada segundo importa, e não sei se o Ufattelig sei lá, pula da janela pra fugir! </button>

            
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 538:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">

                A curiosidade tomou controle das ações de Camila, que lhe forçou a acabar com a aventura, simplesmente para checar uma terrinha mais preta que o normal, e então ela vagou na terra sem fim, e morreu de fome e sede por não saber para onde ir, Fim!
                Brincadeira. 
                O que havia encontrado de fato, era um dragão negro com escamas vermelhas espalhadas pelo seu corpo, com uma altura de cinco metros, deitado como um animal de estimação na terra queimada do local, dormindo. 
                Sua figura era extremamente intimidadora, a Lanceira sabia que, lutar com aquilo agora era suícidio, porém novamente, a curiosidade acabava lhe pressionando a tentar mais e mais, “E se eu for a primeira Lanceira a matar um dragão!?”




                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(539)"> Se eu conseguir um título de caçador de dragões, terei tudo o que quero! </button>

                <button class="botao-historia" type="button" onclick="select(542)"> Não posso me distrair agora, por mais que eu queira muito, muito, muito ir… Não posso! Cada segundo importa, e não sei se o Ufattelig sei lá, pula da janela pra fugir! </button>
                
                
                
                
                
                

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 539:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">

                O dragão, por estar despreparado, sofre um golpe extremamente forte e despercebido, perdendo várias de suas escamas extremamente valiosas ao ter elas forçadas fora de seu corpo, um único golpe, por tomar o dragão enquanto ainda descansava, era o suficiente para mudar a batalha a seu favor, afinal, sem truques, era improvável que ganharia.

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(540)"> Continuar </button>
  

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 540:

                // Combate: Camila vs Dragão

                /*

                Dragão: “CRIATURA INSOLENTE, OUSASTE DESFERIR SUA L MINA FÉTIDA CONTRA MINHA NOBRE CARNE?” 
                Camila: “Até o largartão parecia mais desafiante que você!” 
                Dragão: “IREI LHE MOSTRAR O QUE ACONTECE QUANDO UM MERO BÍPEDE XEXELENTO DESAFIA O REI DOS CÉUS!”


                 */

                /*Diálogo final da batalha:
                
               Dragão: “Ó, Ufattelig, REI DAS TREVAS E PAI DA MALDADE, SENHOR DO CAOS E SERVENTE DA DOR, ESTE MERO SOLDADO IMPLORA POR ASSISTÊNCIA, JUNTE-SE A MIM E VAMOS TRANSFORMAR ESSE BÁRBARO EM PÓ!”
               “Ufattelig? POR QUÉ ME IGNORAS? NÃO SOU O DRAGÃO CARMESIM, ENCARNAÇÃO   DAS TREVAS, REI DOS CÉUS? POR QUÊ DESCARTASTES A MIM, Ufattelig!?” 
               Camila: “Caraca, até o Rei do mal te deixou na mão! Você realmente vale  menos do que o lagartão”

                */

            break;


            case 541:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">

                O dragão, mesmo contorcendo-se e implorando por ajuda de Ufattelig, não a recebia de jeito algum. Seu líder assistia sua derrota de ínicio ao fim, e por estar usando um elmo fechado, sua reação e olhar era impossível de distinguir, quem sabe ele estava sadicamente assistindo seu servo perecer em sua frente, ou simplesmente sentia que precisava ajudar, porém não podia mexer seu corpo por algum motivo. Havia várias variáveis, porém, todas levavam a uma única alternativa; não importava. Tudo o que importava, é que ao subir as escadas do castelo, Camila iria estar cara a cara com o rei do mal, o motivo de sua jornada, o motivo dessa calamidade estar acontecendo ao redor dos reinos.

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(542)"> Continuar </button>
  

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 542:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">

                Adentrar o castelo fora mais fácil do que parecia. Seus servos, que pareciam ser a sua força focal, alguns extremamente fortes, não estavam mais no castelo. Camila estava ocupada demais com seus próprios pensamentos de glória, do que preocupadoa de saber o que estava acontecendo, será mesmo que o rei do mal simplesmente decidiu desocupar o castelo? Ou seria aquele um pedido de encontro entre os dois? 	Vários cenários indicavam que algo estava errado. Ele não havia dominado o mundo por simples força, suas táticas eram impecáveis, o que ele estava pensando?

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(543)"> Continuar </button>
  

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 543:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">

                Camila: “Rei do Mal, preciso que você pereça, hoje, e agora, para poupar meu rei de seu fim cruel!”
                Ufattelig: “&%^@*$%+!!, *#@^&$!%.”
                Camila: “O que…?” 

                

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(544)"> Continuar </button>
  

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 544:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">

                Camila era incapaz de entender o que o oponente estava tentando dizer, cada palavra soava como estática em seus ouvidos, mas aquilo não importava. Em sua cabeça, podia vencer sozinha sem mesmo ter que esperar pelo guardião, a vitória seria certa.
                

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(545)"> Continuar </button>
  

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 545:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">

                Camila: “Impossível! Como?? Só com um golpe…”

                Ufattelig estava prestes a acabar com a vida da Lanceira. Uma jornada inteira, apenas para acabar logo no final, por não ser forte o suficiente, ela realmente não era o bastante? Tantos inimigos derrotados, e ela era incapaz de terminar a jornada sozinha? De que aquelas lutas bastavam, se nenhuma delas lhe deixava mais forte? Do que a vida adiantava?
                Mas então…

                
                

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(546)"> Continuar </button>
  

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 546:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">

                O Guardião apareceu extremamente do nada, como um relâmpago, apesar de ser extremamente alto e definido, sua velocidade não parecia diminuir nem um pouco, facilmente sendo mais rápido do que o melhor cavalo do reino. O Guardião bloqueou o caminho entre a Lanceira e o inimigo, e então, apontou para a saída do castelo. Aquilo era um óbvio sinal de que, ficar ali, era apenas um estorvo para seu salvador. 
                Entendendo o recado, a moça saía às pressas, deixando os dois colossos lutarem entre si.


                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(547)"> Continuar </button>
  

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            case 547:

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

            case 548:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">

                Havia acabado. Tantas eras em guerra constante, tantas vidas perdidas, tantas famílias destruídas e lares queimados ao chão, tantos sonhos despedaçados e tantos reinos dizimados.
                E havia acabado.
                O Rei Lanceiro havia completado seu objetivo. Ufattelig está morto. O que quer que ele fosse, não iria mais interferir com os reinos, e tudo voltaria à paz.
                As pálpebras de Ru’thra se permitiam fechar mais uma vez, pela última vez, sua fornalha de almas, antes capaz de só permitir movimentos simples, estava completamente vazia, e ele não planejava sacrificar mais ninguém para manter sua longevidade, qual seria o motivo, reinar? Nada disso importava, o rei do mal havia caído naquele dia, a vitória era da humanidade.
                Ru’thra, ajoelhado em frente ao antigo rei do mal, lentamente fecha os olhos, e aceita o seu destino; a sua morte, que deveria ter acontecido dezenas de anos atrás, que fora empurrada até hoje por rituais e magias capazes de alimentar um ser a base de almas.



                
                

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(549)"> Continuar </button>
  

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-quebra-escudos-m')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;
    }

  
       
}