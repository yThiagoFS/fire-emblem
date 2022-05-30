var delay = 0
var val = 0
var max = 0
var min = 0
var dano = 0
const regen = 15
var random = 0
var porcent = ''


function atacar(){
    ataqueHero() 
         
}


//Ataque do herói

function ataqueFake(){

    

    random = 8

    if(random <= hero.erro){
        dano = 0
        res.innerHTML += `<p>${hero.nome}: Errou o ataque</p>`
        console.log('erro')
    }else if(random <= hero.acerto){
        dano = hero.ataque
        res.innerHTML += `<p>${hero.nome}: Acertou o ataque</p>`
    }else{
        dano = Number(hero.ataque) + Number(hero.crit)
        res.innerHTML += `<p>${hero.nome}: Dano critíco</p>`
    }


    var heroImg = document.getElementById('heroImg')

    heroImg.setAttribute('src', hero.sprite);
    
    delay = 2700
    var timerId = setTimeout(function(){
        heroImg.setAttribute('src', hero.img);
    }, delay);

    delay = 1000
    var timerId = setTimeout(function(){
        var bossVida = document.getElementById('range2')
        val = bossVida.value
        max = bossVida.max
        min = bossVida.min
        val -= dano
        
        porcent = (val - min) * 100 / (max - min)
        if( porcent <= 0){
            porcent = 0
        }

        bossVida.style.backgroundSize = porcent + '% 100%'
        bossVida.value = val 

        if(bossVida.value == 0){
            window.alert('você destruiu o meu ovo')
        }

    }, delay);
    
    
}


function ataqueHero(){
    //Hero

    

    random = Math.floor(Math.random() * 9)

    if(random <= hero.erro){
        dano = 0
        res.innerHTML += `<p>${hero.nome}: Errou o ataque</p>`
        console.log('erro')
    }else if(random <= hero.acerto){
        dano = hero.ataque
        res.innerHTML += `<p>${hero.nome}: Acertou o ataque</p>`
    }else{
        dano = Number(hero.ataque) + Number(hero.crit)
        res.innerHTML += `<p>${hero.nome}: Dano critíco</p>`
    }


    var heroImg = document.getElementById('heroImg')
    heroImg.style.border = "2px solid #2bff00"
    heroImg.setAttribute('src', hero.sprite);

    //Bloquear ataque
    
    opcoesCombate.style.display = 'none'
    
    delay = hero.animacao
    
    var timerId = setTimeout(function(){        
        heroImg.setAttribute('src', hero.img);
        heroImg.style.border = "none"
    }, delay);

    delay = 1000
    var timerId = setTimeout(function(){
        var bossVida = document.getElementById('range2')
        val = bossVida.value
        max = bossVida.max
        min = bossVida.min
        val -= dano
        
        porcent = (val - min) * 100 / (max - min)
        if( porcent <= 0){
            porcent = 0
        }

        bossVida.style.backgroundSize = porcent + '% 100%'
        bossVida.value = val 

        if(bossVida.value == 0){
            combateVitoria()
            res.innerHTML = ``
            res.innerHTML = `Vitória`
        }else{
            ataqueBoss()
        }

    }, delay);
}


//Ataque do boss

function ataqueBoss(){
    //boss

    
    
    random = Math.floor(Math.random() * 9)

    if(random <= boss.erro){
        dano = 0
        res.innerHTML += `<p>${boss.nome}: Errou o ataque</p>`
    }else if(random <= boss.acerto){
        dano = boss.ataque
        res.innerHTML += `<p>${boss.nome}: Acertou o ataque</p>`
    }else{
        dano = boss.ataque + boss.crit
        res.innerHTML += `<p>${boss.nome}: Dano critíco</p>`
    }


    var bossImg = document.getElementById('bossImg')
    

    delay = 1000
    var timerId = setTimeout(function(){
        bossImg.style.border = "2px solid #2bff00"
        bossImg.setAttribute('src', boss.sprite);
        
        
        
        delay = boss.animacao
        var timerId = setTimeout(function(){
            
            var heroVida = document.getElementById('range1')
            val = heroVida.value
            max = heroVida.max
            min = heroVida.min
            val -= dano


        porcent = (val - min) * 100 / (max - min)
        if( porcent <= 0){
            porcent = 0
        }

        heroVida.style.backgroundSize = porcent + '% 100%'
        heroVida.value = val 

        if(heroVida.value == 0){
            res.innerHTML = `<p>“${boss.fala}”</p>`
        }


        heroVida.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
        heroVida.value = val   
        
            var bossImg = document.getElementById('bossImg')
            bossImg.setAttribute('src', boss.img);   
            bossImg.style.border = "none" 

            //Bloquear ataque
            opcoesCombate.style.display = 'block' 
            
        }, delay);  


        

    }, delay);

    

}


/* Container += style align items e justify content center */
function combate(){

    

const res = document.getElementById('res')    

opcoesCombate.style.display = 'block'

opcoesCombate.innerHTML = `

            <form action="" id="opcoes-classes">
                <div class="opcoes">
                    <div class="middle">
                        <button onclick="atacar()">
                        <a href=" #" class="classe classe5">Atacar</a></button>
                        <button onclick="recuperar()">
                            <a href="#" class="classe classe6" id="vida">Poção de Vida ${hero.pocao}</a></button>
                    </div>
                </div>
            </form>

`


   
container.innerHTML = `

                <div id="hero">
                <form>
                    <input type="range" min="0" max="${hero.hp}" value="${hero.hp}" id="range1" onclick="atacar() disabled">
                </form>
                <img class="imgHero" id="heroImg" src="${hero.img}">
            </div>



            <div id="textos">

                <div id='res' class="dialogos">

                </div>

            </div>


            <div id="boss">
                <form>
                    <input type="range" min="0" max="${boss.hp}" value="${boss.hp}" id="range2" onclick="atacar()"disabled>
                </form>
                <img class="imgBoss" id="bossImg" src="${boss.img}">


            </div>

            <div class="opcoes-ataque-hero">

            </div>

            <div class="opcoes-ataque-boss">

            </div>            
                        
            `
           
                    container.style.display = 'flex'
                   

                    container.style.maxWidth = "1400px";

                    container.style.height = '500px'; 
    
}

function combateFake(selCombate){

   
                

                    const res = document.getElementById('res')    
                    
                    opcoesCombate.style.display = 'block'

                    opcoesCombate.innerHTML = `
                    
                    <form action="" id="opcoes-classes">
                    <div class="opcoes">
                        <div class="middle">

                            <button onclick="${selCombate}">
                            <a href=" #" class="classe classe5">CONTINUAR</a></button>
                            
                        </div>
                    </div>
                    </form>`
                    
                    
                    
                    
                    container.innerHTML = `
    
                    <div id="hero">
                    <form>
                        <input type="range" min="0" max="${hero.hp}" value="${hero.hp}" id="range1" onclick="atacar()" disabled>
                    </form>
                    <img class="imgHero" id="heroImg" src="${hero.img}">
                </div>
    
    
    
                <div id="textos">
    
                    <div class="dialogos" id='res'>
                        ${hero.dialogo}
                    </div>
    
                </div>
    
    
                <div id="boss">
                    <form>
                        <input type="range" min="0" max="${boss.hp}" value="${boss.hp}" id="range2" onclick="atacar()" disabled>
                    </form>
                    <img class="imgBoss" id="bossImg" src="${boss.img}">
    
    
                </div>
    
                <div class="opcoes-ataque-hero">
    
                </div>
    
                <div class="opcoes-ataque-boss">
    
                </div>            
                            
                `

                container.style.display = 'flex';
                  

                
        
    }

   
                    


    //FINAL DO JOGO

    function combateFinal(){

        

        const res = document.getElementById('res')    
        
        opcoesCombate.style.display = 'block'
        
        opcoesCombate.innerHTML = `
        
                    <form action="" id="opcoes-classes">
                        <div class="opcoes">
                            <div class="middle">
                                <button onclick="atacarFinal()">
                                <a href=" #" class="classe classe5">Atacar</a></button>
                                <button onclick="recuperar()">
                            <a href="#" class="classe classe6" id="vida">Poção de Vida ${hero.pocao}</a></button>
                            </div>
                        </div>
                    </form>
        
        `
        
        
           
        container.innerHTML = `
        
                        <div id="hero">
                        <form>
                            <input type="range" min="0" max="${hero.hp}" value="${hero.hp}" id="range1" onclick="atacar() disabled">
                        </form>
                        <img class="imgHero" id="heroImg" src="${hero.img}">
                    </div>
        
        
        
                    <div id="textos">
        
                        <div id='res' class="dialogos">
        
                        </div>
        
                    </div>
        
        
                    <div id="boss">
                        <form>
                            <input type="range" min="0" max="${boss.hp}" value="${boss.hp}" id="range2" onclick="atacar()"disabled>
                        </form>
                        <img class="imgBoss" id="bossImg" src="${boss.img}">
        
        
                    </div>
        
                    <div class="opcoes-ataque-hero">
        
                    </div>
        
                    <div class="opcoes-ataque-boss">
        
                    </div>            
                                
                    `
                   
                     
            
        }



        function atacarFinal(){
            ataqueFinalHero() 
                 
        }

        function ataqueFinalHero(){
            //Hero
            

            random = Math.floor(Math.random() * 9)
        
            if(random <= hero.erro){
                dano = 0
                res.innerHTML += `<p>${hero.nome}: Errou o ataque</p>`
                console.log('erro')
            }else if(random <= hero.acerto){
                dano = hero.ataque
                res.innerHTML += `<p>${hero.nome}: Acertou o ataque</p>`
            }else{
                dano = Number(hero.ataque) + Number(hero.crit)
                res.innerHTML += `<p>${hero.nome}: Dano critíco</p>`
            }
        
        
            var heroImg = document.getElementById('heroImg')
        
            heroImg.setAttribute('src', hero.sprite);
        
            //Bloquear ataque
            
            opcoesCombate.style.display = 'none'
            
            delay = hero.animacao
            var timerId = setTimeout(function(){
                heroImg.setAttribute('src', hero.img);
            }, delay);
        
            delay = 1000
            var timerId = setTimeout(function(){
                var bossVida = document.getElementById('range2')
                val = bossVida.value
                max = bossVida.max
                min = bossVida.min
                val -= dano
                
                porcent = (val - min) * 100 / (max - min)
                if( porcent <= 0){
                    porcent = 0
                }
        
                bossVida.style.backgroundSize = porcent + '% 100%'
                bossVida.value = val 
        
                if(bossVida.value == 0){
                    combateVitoria()
                    res.innerHTML = ``
                    res.innerHTML = `Vitória`
                }else{
                    ataqueFinal()
                }
        
            }, delay);

            
        }

       
    

        function ataqueFinal(){
            //boss
            
            

            random = Math.floor(Math.random() * 9)
        
            if(random <= boss.erro){
                dano = 0
                res.innerHTML += `<p>${boss.nome}: Errou o ataque</p>`
            }else if(random <= boss.acerto){
                dano = boss.ataque
                res.innerHTML += `<p>${boss.nome}: Acertou o ataque</p>`
            }else{
                dano = boss.ataque + boss.crit
                res.innerHTML += `<p>${boss.nome}: Dano critíco</p>`
            }
        
        
            var bossImg = document.getElementById('bossImg')
        
            delay = 1000
            var timerId = setTimeout(function(){
                bossImg.setAttribute('src', boss.sprite); 
                
                
                
                delay = boss.animacao
                var timerId = setTimeout(function(){
                    
                    var heroVida = document.getElementById('range1')
                    val = heroVida.value
                    max = heroVida.max
                    min = heroVida.min
                    val -= dano
        
        
                porcent = (val - min) * 100 / (max - min)
                if( porcent <= 0){
                    porcent = 0
                }
        
                heroVida.style.backgroundSize = porcent + '% 100%'
                heroVida.value = val 
        
                if(heroVida.value == 1){
                    res.innerHTML = `<p>“${boss.fala}”</p>`
                }
        
        
                heroVida.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
                heroVida.value = val   
                    var bossImg = document.getElementById('bossImg')
                    bossImg.setAttribute('src', boss.img);   
        
                    //Bloquear ataque
                    opcoesCombate.style.display = 'block' 
                    combateVitoria()
                    
                }, delay);  
        
                
                
        
            }, delay);
            
            
        
        }

    function combateVitoria(){

        

        opcoesCombate.style.display = 'block'

        opcoesCombate.innerHTML = `
        <form action="" id="opcoes-classes">
        <div class="opcoes">
            <div class="middle">

                <button onclick="${hero.historia}">
                <a href=" #" class="classe classe5">CONTINUAR</a></button>
                
            </div>
        </div>
        </form>`
       
    }


        //Recuperar vida
        function recuperar(){
        
                if(hero.pocao == 0){
                    res.innerHTML += `<p> As suas poções acabaram </p>`
                }else{

                    var heroVida = document.getElementById('range1')
                    val = heroVida.value
                    max = heroVida.max
                    min = heroVida.min
    
                    var contador = document.getElementById('vida')
                    hero.pocao -= 1
                    console.log(hero.pocao)

                    

                    if(val == max){
                        res.innerHTML = `${hero.nome}: HP cheio` 
                     }else{
                         //Bloquear ataque
                         opcoesCombate.style.display = 'none' 
                         
                        
                         val = Number(val) + Number(regen)
                         console.log(val)
         
                         porcent = (val - min) * 100 / (max - min)
                         window.alert(porcent)
                         if( porcent >= 100){
                             porcent = 100
                             heroVida.style.backgroundSize = porcent + '% 100%'
                             window.alert('olá')
                             val = Number(hero.hp)
                             
                             res.innerHTML += `${hero.nome}: recuperou ${regen} de HP`

                             contador.innerHTML = `${hero.pocao}`
                             
                         }else{
                             heroVida.style.backgroundSize = porcent + '% 100%'
                            
                             res.innerHTML += `${hero.nome}: recuperou ${regen} de HP`

                             contador.innerHTML = `Poção de Vida ${hero.pocao}`
                         
                             
                         }
                         heroVida.value = val 
                         ataqueBoss()
                     }
                    
                }


         
            }



    
        

    


       /*  <img src="${hero.img}" id="hero" alt="">
        <input type="range" value="${hero.hp}" min="0" max="${hero.hp}" id="range2" disabled oninput="rangenumber.value=value"/>
        <p>${hero.nome}</p>

    <img src="${boss.img}" id="boss" alt="">
    <input type="range" value="${boss.hp}" min="0" max="${boss.hp}" id="range" disabled oninput="rangenumber.value=value"/>
    <p>${boss.nome}</p> */ 