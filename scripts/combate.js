var hero = {
    nome: ['Herói'],
    hp: [35],
    sprite: ['../sprites/Sword.gif'],
    img: ['../img/img/Sword1.jpg'],
    ataque: [18],
    erro: [2],
    acerto: [8],
    crit: [4]
}

var boss = {
    nome: ['Calango Trevoso'],
    hp: [40],
    sprite: ['../sprites/calango.gif'],
    img: ['../img/img/calango.jpg'],
    ataque: [16],
    erro: [3],
    acerto: [8],
    crit: [3]

}

var delay = 0
var val = 0
var max = 0
var min = 0
var dano = 0
var random = 0
var porcent = ''

function atacar(){
    ataqueHero() 
         
}


//Ataque do herói

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
        dano = hero.ataque + hero.crit
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
        bossImg.setAttribute('src', boss.sprite); 
        
        
        delay = 2400
        var timerId = setTimeout(function(){
            
            var hph = document.getElementById('range1')
            val = hph.value
            max = hph.max
            min = hph.min
            val -= dano


        porcent = (val - min) * 100 / (max - min)
        if( porcent <= 0){
            porcent = 0
        }

        hph.style.backgroundSize = porcent + '% 100%'
        hph.value = val 

        if(hph.value == 0){
            window.alert('você perdeu')
        }


        hph.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
        hph.value = val   
            var bossImg = document.getElementById('bossImg')
            bossImg.setAttribute('src', boss.img);    
        }, delay);  

    }, delay);

}


/* Container += style align items e justify content center */
function combate(){

const res = document.getElementById('res')    

opcoesCombate.style.display = 'block'


   
container.innerHTML = `

    <div id="hero">
    <form>
        <input type="range" min="0" max="${hero.hp}" value="${hero.hp}" id="range1" onclick="atacar()">
    </form>
    <img class="imgHero" id="heroImg" src="${hero.img}">
</div>



<div id="textos">

    <div class="dialogos" id='res'>

    </div>

</div>


<div id="boss">
    <form>
        <input type="range" min="0" max="${boss.hp}" value="${boss.hp}" id="range2" onclick="atacar()">
    </form>
    <img class="imgBoss" id="bossImg" src="${boss.img}">


</div>

<div class="opcoes-ataque-hero">

</div>

<div class="opcoes-ataque-boss">

</div>            
            
 `
           
            container.style.display = 'flex';
            container.style.alignItems = 'center';
            container.style.justifyContent = 'center';        
    
}

        

    


       /*  <img src="${hero.img}" id="hero" alt="">
        <input type="range" value="${hero.hp}" min="0" max="${hero.hp}" id="range2" disabled oninput="rangenumber.value=value"/>
        <p>${hero.nome}</p>

    <img src="${boss.img}" id="boss" alt="">
    <input type="range" value="${boss.hp}" min="0" max="${boss.hp}" id="range" disabled oninput="rangenumber.value=value"/>
    <p>${boss.nome}</p> */ 