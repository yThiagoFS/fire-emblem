var hero = {
    nome: ['Osvaldo'],
    hp: [35],
    sprite: ['../sprites/Sword.gif'],
    img: ['../img/img/Sword1.jpg'],
    ataque: [18],
    erro: [2],
    acerto: [8],
    crit: [4],
    animacao: [2900]
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
        
            

        case 100:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
            A busca da força, o mais puro conceito de ser extraordinário em todos os aspectos possíveis, ser o melhor em quebrar crânios só com o flexionar dos músculos. Esse é o caminho do Reino do Sul. Esse, também, é o caminho do Quebra-Escudos chamado Vigvisir, que a vida toda acreditou que se a violência não resolvia as coisas, era porque a violência não estava sendo devidamente aplicada. Teimoso, extremamente forte, porém, infelizmente, por contrapartida, também sem muito cérebro, o que lhe fazia errar seus alvos mais do que acertá-los.
            
            </p>

            <button class="botao-historia" type="button" onclick="select(101)"> Continuar </button>

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

            case 101:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
            A guerra contra Ufattelig foi uma terrível guerra para todos os reinos, os cavaleiros foram dizimados, os espadachins, que meio que já estavam separados mesmo, ficaram ainda mais distantes, os lanceiros, com sua disciplina e lealdade, haviam perdido seu mártir mais valioso, seu próprio rei, e as terras além do reino ficaram ainda mais caótica do que eram antes, com o ressurgimento e ocupação de forças malignas, que impregnava as florestas como rios, e matava a plantação como se fossem um poderoso veneno.
            
            </p>

            <div class="envelope-botoes-historia"><button class="botao-historia" type="button" onclick="select(102)"> Continuar </button></div>
            
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

            case 102:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-quebra-escudos-m">
            Os Quebra-Escudos? Óbvio que encontrar um inimigo que era incapaz de meter o soco no primeiro encontro foi algo devastador, para todos os habitantes, algo mais impactante do que perder seu rei ou seu reino inteiro. Sua honra estava completamente dizimada, o que fez a maioria deles perder o espírito de luta e lentamente aguardar a sua morte, ou apenas desistir de seguir seus princípios, resultando em vários mercenários e até mesmo recrutas novos para Ufattelig, pelo simples fato de seus espíritos estiver em pedaços.
            
            </p>

            <button class="botao-historia" type="button" onclick="select(103)"> Continuar </button>

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
            container.style.display = 'flex'
            container.style.maxWidth = '700px';
            container.style.maxHeight = '700px';
            container.style.height= '700px';
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
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';
                
                
            break;

            case 106:

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
                        
                        combate()
                        ataqueFake()
                        opcoesCombate.style.display = 'none'

                        
                        
                    break;

            case 107:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                "..."</br>
                Guardião: “Olha só, achei que você era só um franguinho sem coragem de revidar o mínimo de intimidação, parece que subestimei você até demais.”

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(109)"> Atacar o ser de armadura  </button>
                

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

            case 108:

                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-quebra-escudos-m">
                O Ser de armadura levanta a sua mão, como se interrompesse a sua fala, e mesmo ignorando tal sinal e continuando a tentar ter a comunicação, ele apenas lhe ignora.

                
                </p>
    
                <button class="botao-historia" type="button" onclick="select(109)"> Atacar o ser de armadura  </button>
                

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
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
                container.style.maxHeight = '700px';
                container.style.height= '700px';

            break;

            
    }

                
   

    
       
}