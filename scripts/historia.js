var hero = {
    nome: ['Osvaldo'],
    hp: [35],
    sprite: ['../sprites/Sword.gif'],
    img: ['../img/img/Sword1.jpg'],
    ataque: [18],
    erro: [2],
    acerto: [8],
    crit: [4]
}

var boss = {
    nome: [],
    hp: [],
    sprite: [],
    img: [],
    ataque: [],
    erro: [],
    acerto: [],
    crit: []

}

function select(sel){
    switch(sel){
        case 1:
            container.innerHTML = `
             
            <div class="envelope-historia-personagem">
           
            <div class="historia-personagem"><p id="historia-cacadora">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas accumsan facilisis. Nulla malesuada nisi dolor, quis pellentesque risus aliquam in. Nulla nec eros semper, ultrices urna vel, dictum lorem. Ut non sollicitudin augue, ut varius nulla. Etiam nec cursus mi. Aenean lacinia ex id elit mollis hendrerit. Nunc accumsan sagittis libero, non imperdiet urna ornare ac. Vestibulum condimentum justo eget ornare faucibus. Phasellus ut massa ex. Integer quis metus quam. Vivamus quis odio velit.
                    Suspendisse sit amet bibendum diam. Sed sit amet euismod velit, vestibulum pharetra felis. Aenean a tellus sem. Maecenas mauris urna, luctus eu sapien ut, convallis varius libero. Morbi vitae quam ornare, euismod urna ut, mollis ipsum. Fusce accumsan eleifend velit, eget mattis turpis. Mauris sit amet sodales odio. Suspendisse fringilla id quam vel porttitor. Praesent bibendum neque lorem. Sed sit amet neque malesuada, ultrices justo at, malesuada orci. Aliquam id accumsan dui.
                    Suspendisse sit amet bibendum diam. Sed sit amet euismod velit, vestibulum pharetra felis. Aenean a tellus sem. Maecenas mauris urna, luctus eu sapien ut, convallis varius libero. Morbi vitae quam ornare, euismod urna ut, mollis ipsum. Fusce accumsan eleifend velit, eget mattis turpis. Mauris sit amet sodales odio. Suspendisse fringilla id quam vel porttitor. Praesent bibendum neque lorem. Sed sit amet neque malesuada, ultrices justo at, malesuada orci. Aliquam id accumsan dui.
            </p>
            </div>
            </div>
            `
            container.style.display = 'flex'
            container.style.width = '700px';
            
            break;
        
        case 2:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-cacadora">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas accumsan facilisis. Nulla malesuada nisi dolor, quis pellentesque risus aliquam in. Nulla nec eros semper, ultrices urna vel, dictum lorem. Ut non sollicitudin augue, ut varius nulla. Etiam nec cursus mi. Aenean lacinia ex id elit mollis hendrerit. Nunc accumsan sagittis libero, non imperdiet urna ornare ac. Vestibulum condimentum justo eget ornare faucibus. Phasellus ut massa ex. Integer quis metus quam. Vivamus quis odio velit.
                    Suspendisse sit amet bibendum diam. Sed sit amet euismod velit, vestibulum pharetra felis. Aenean a tellus sem. Maecenas mauris urna, luctus eu sapien ut, convallis varius libero. Morbi vitae quam ornare, euismod urna ut, mollis ipsum. Fusce accumsan eleifend velit, eget mattis turpis. Mauris sit amet sodales odio. Suspendisse fringilla id quam vel porttitor. Praesent bibendum neque lorem. Sed sit amet neque malesuada, ultrices justo at, malesuada orci. Aliquam id accumsan dui.
                    Suspendisse sit amet bibendum diam. Sed sit amet euismod velit, vestibulum pharetra felis. Aenean a tellus sem. Maecenas mauris urna, luctus eu sapien ut, convallis varius libero. Morbi vitae quam ornare, euismod urna ut, mollis ipsum. Fusce accumsan eleifend velit, eget mattis turpis. Mauris sit amet sodales odio. Suspendisse fringilla id quam vel porttitor. Praesent bibendum neque lorem. Sed sit amet neque malesuada, ultrices justo at, malesuada orci. Aliquam id accumsan dui.
            </p>
            </div>
            </div>
            `
            container.style.display = 'flex'
            container.style.width = '700px';
            break;

        case 3:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-cacadora">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas accumsan facilisis. Nulla malesuada nisi dolor, quis pellentesque risus aliquam in. Nulla nec eros semper, ultrices urna vel, dictum lorem. Ut non sollicitudin augue, ut varius nulla. Etiam nec cursus mi. Aenean lacinia ex id elit mollis hendrerit. Nunc accumsan sagittis libero, non imperdiet urna ornare ac. Vestibulum condimentum justo eget ornare faucibus. Phasellus ut massa ex. Integer quis metus quam. Vivamus quis odio velit.
                    Suspendisse sit amet bibendum diam. Sed sit amet euismod velit, vestibulum pharetra felis. Aenean a tellus sem. Maecenas mauris urna, luctus eu sapien ut, convallis varius libero. Morbi vitae quam ornare, euismod urna ut, mollis ipsum. Fusce accumsan eleifend velit, eget mattis turpis. Mauris sit amet sodales odio. Suspendisse fringilla id quam vel porttitor. Praesent bibendum neque lorem. Sed sit amet neque malesuada, ultrices justo at, malesuada orci. Aliquam id accumsan dui.
                    Suspendisse sit amet bibendum diam. Sed sit amet euismod velit, vestibulum pharetra felis. Aenean a tellus sem. Maecenas mauris urna, luctus eu sapien ut, convallis varius libero. Morbi vitae quam ornare, euismod urna ut, mollis ipsum. Fusce accumsan eleifend velit, eget mattis turpis. Mauris sit amet sodales odio. Suspendisse fringilla id quam vel porttitor. Praesent bibendum neque lorem. Sed sit amet neque malesuada, ultrices justo at, malesuada orci. Aliquam id accumsan dui.
            </p>
            </div>
            </div>
            `
            container.style.display = 'flex'
            container.style.width = '700px';
            break;

        case 4:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-cacadora">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas accumsan facilisis. Nulla malesuada nisi dolor, quis pellentesque risus aliquam in. Nulla nec eros semper, ultrices urna vel, dictum lorem. Ut non sollicitudin augue, ut varius nulla. Etiam nec cursus mi. Aenean lacinia ex id elit mollis hendrerit. Nunc accumsan sagittis libero, non imperdiet urna ornare ac. Vestibulum condimentum justo eget ornare faucibus. Phasellus ut massa ex. Integer quis metus quam. Vivamus quis odio velit.
                    Suspendisse sit amet bibendum diam. Sed sit amet euismod velit, vestibulum pharetra felis. Aenean a tellus sem. Maecenas mauris urna, luctus eu sapien ut, convallis varius libero. Morbi vitae quam ornare, euismod urna ut, mollis ipsum. Fusce accumsan eleifend velit, eget mattis turpis. Mauris sit amet sodales odio. Suspendisse fringilla id quam vel porttitor. Praesent bibendum neque lorem. Sed sit amet neque malesuada, ultrices justo at, malesuada orci. Aliquam id accumsan dui.
                    Suspendisse sit amet bibendum diam. Sed sit amet euismod velit, vestibulum pharetra felis. Aenean a tellus sem. Maecenas mauris urna, luctus eu sapien ut, convallis varius libero. Morbi vitae quam ornare, euismod urna ut, mollis ipsum. Fusce accumsan eleifend velit, eget mattis turpis. Mauris sit amet sodales odio. Suspendisse fringilla id quam vel porttitor. Praesent bibendum neque lorem. Sed sit amet neque malesuada, ultrices justo at, malesuada orci. Aliquam id accumsan dui.
            </p>
            </div>
            </div>
            `
            container.style.display = 'flex'
            container.style.width = '700px';
            break;

        case 5:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-cacadora">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas accumsan facilisis. Nulla malesuada nisi dolor, quis pellentesque risus aliquam in. Nulla nec eros semper, ultrices urna vel, dictum lorem. Ut non sollicitudin augue, ut varius nulla. Etiam nec cursus mi. Aenean lacinia ex id elit mollis hendrerit. Nunc accumsan sagittis libero, non imperdiet urna ornare ac. Vestibulum condimentum justo eget ornare faucibus. Phasellus ut massa ex. Integer quis metus quam. Vivamus quis odio velit.
                    Suspendisse sit amet bibendum diam. Sed sit amet euismod velit, vestibulum pharetra felis. Aenean a tellus sem. Maecenas mauris urna, luctus eu sapien ut, convallis varius libero. Morbi vitae quam ornare, euismod urna ut, mollis ipsum. Fusce accumsan eleifend velit, eget mattis turpis. Mauris sit amet sodales odio. Suspendisse fringilla id quam vel porttitor. Praesent bibendum neque lorem. Sed sit amet neque malesuada, ultrices justo at, malesuada orci. Aliquam id accumsan dui.
                    Suspendisse sit amet bibendum diam. Sed sit amet euismod velit, vestibulum pharetra felis. Aenean a tellus sem. Maecenas mauris urna, luctus eu sapien ut, convallis varius libero. Morbi vitae quam ornare, euismod urna ut, mollis ipsum. Fusce accumsan eleifend velit, eget mattis turpis. Mauris sit amet sodales odio. Suspendisse fringilla id quam vel porttitor. Praesent bibendum neque lorem. Sed sit amet neque malesuada, ultrices justo at, malesuada orci. Aliquam id accumsan dui.
            </p>
            </div>
            </div>
            `
            
            container.style.display = 'flex'
            container.style.width = '700px';
            break;

        case 6:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-espadachim">
            Sua jornada fora nada além do que um desejo carnal. A simples metodologia do reino do Oeste para conseguir alcançar os seus desejos independente de lealdade, honra, ou moral, a simples ideia de seguir o que você acredita era quase como um lema para os espadachins.
            Mercenários, bandidos, aventureiros, heróis ou soldados, qualquer meio que lhe possibilitasse os resultados desejados era mais que bem vindo, independente de quais meios deveriam ser tomados, por causa disso, os espadachins eram extremamente versáteis em seus cargos.
            
            </p>

            <button class="botao-historia" type="button" onclick="select(7)"> Continuar </button>

            <div class="imagem-personagem"><img  src="../img/img/Sword1.jpg"></div>

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

            case 7:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-espadachim">
            Segue a história de ${hero.nome}, um espadachim mercenário que fez seu nome nas terras além dos reinos, não só ganhando o seu tão desejado dinheiro, como também arrecadando reputação e oportunidades com seu nome. A guerra contra Ufattelig não lhe abalou nem um pouco, afinal sua lealdade e patriotismo ao seu reino já se foram faz tempo, porém uma preocupação queimava em seu peito; “e se eles perderem? E se as forças do mal acabarem com o mundo? Sem o mundo, não consigo seguir meus desejos, meus objetivos de vida!” Logo, o mesmo decidiu sair em uma jornada contra as forças do mal a fim de preservar a sua vida de desejos.
            
            </p>

            <div class="envelope-botoes-historia"><button class="botao-historia" type="button" onclick="select(8)"> Continuar </button></div>
            
            <div class="imagem-personagem"><img  src="../img/img/Sword1.jpg"></div>


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

            case 8:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-espadachim">
            No começo de sua jornada, o mesmo já era consideravelmente forte o suficiente para derrotar criaturas como goblins, trolls ou até orcs, mesmo nunca tendo um talento inato, sua versatilidade era o que mais dominava o seu estilo de combate. Entretanto, e quanto a um inimigo extraordinário? Por não ser especializado em velocidade, era incapaz de correr e incapaz de uma batalha impossível de ser ganha, e por não ter uma força descomunal também não conseguia resolver os problemas com força bruta.
            
            </p>

            <button class="botao-historia" type="button" onclick="select(9)"> Continuar </button>

            <div class="imagem-personagem"><img  src="../img/img/Sword1.jpg"></div>


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

            case 9:
            container.innerHTML = `

            <div class="envelope-historia-personagem">
        
            <div class="historia-personagem"><p id="historia-espadachim">
            Portanto, havia de pensar na situação que se encontrava; um ser armadurado gigantesco, com mais ou menos quatro metros de altura, bloqueia seu caminho atualmente, encarando-o vestindo um olhar análitico e desconfiado, com ambos polegar e indicador no queixo, como se ponderasse o espadachim de cima a baixo. Fazer uma ação desnecessária pode resultar em consequências catastróficas, ou até mesmo custar sua própria vida, portanto Greg decide…
            
            </p>

            <button class="botao-historia" type="button" onclick="select(10)"> Atacar o Ser de armadura </button>
            <button class="botao-historia" type="button" onclick="select(11)"> Esperar e ver o que ele quer </button>
            <button class="botao-historia" type="button" onclick="select(12)"> Tentar conversar com a figura</button>
            
            <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>

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

            case 10:

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

            case 11:
                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><span class='guardion'>Guardião:</span><p id="historia-espadachim">
                 “Nada mal. Sua forma física não decai em nenhum aspecto. Não que você seja muito bom em alguma parte, já é satisfatório saber que você não é horrível.”</p>

                
                 
                 <button class="botao-historia" type="button" onclick="select(13)"> Continuar </button>
                 
                 <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>

                </div>
                </div>
                `
                var titulo = document.getElementById('historia-espadachim')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';

            break;

            case 12:
                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><p id="historia-espadachim">
                O Ser de armadura levanta a sua mão, como se interrompesse a sua fala, e mesmo ignorando tal sinal e continuando a tentar ter a comunicação, ele apenas lhe ignora</p>

                
                <button class="botao-historia" type="button" onclick="select(13)"> Continuar </button>
                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
    
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-espadachim')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';

            break;

            case 13:
                container.innerHTML = `

                <div class="envelope-historia-personagem">
            
                <div class="historia-personagem"><span class='guardion'>Guardião:</span><p id="historia-espadachim">
                “Perdão por demorar com as introduções, eu sou Ru’thra, mas o senhor pode me chamar de Guardião a ponto de facilitar a sua memória. Estou em uma missão de exterminar as forças do mal, porém, minha fornalha de almas está quase no limite, caso eu continue, estou certo a perecer sem ao menos deter Ufattelig, o Rei Demônio, por eu não saber a sua localização ainda. Guerreiro, eu preciso de sua ajuda.”</p>

                

                <button class="botao-historia" type="button" onclick="select(13)"> Continuar </button>

                <div class="imagem-personagem"><img  src="../img/img/guardion.jpg"></div>
                
                </div>
                </div>
                `
                var titulo = document.getElementById('historia-espadachim')
                typeWrite(titulo)
                container.style.display = 'flex'
                container.style.maxWidth = '700px';
            
            break;
                

    }
}