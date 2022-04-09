var hero = {
    nome: ['Herói'],
    hp: [35],
    sprite: ['./sprites/pirate_axe.gif'],
    img: ['./img/pirate_axe.png'],
    ataque: [18],
    erro: [2],
    acerto: [8],
    crit: [4]
}

var boss = {
    nome: ['Calango Trevoso'],
    hp: [40],
    sprite: ['./sprites/lizard_axe.gif'],
    img: ['./img/lizard_axe.png'],
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


function ataqueHero(){
    //Hero
    random = Math.floor(Math.random() * 9)
    var res = document.getElementById('res')

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


    var heroImg = document.getElementById('hero')

    heroImg.setAttribute('src', hero.sprite);
    
    delay = 2700
    var timerId = setTimeout(function(){
        heroImg.setAttribute('src', hero.img);
    }, delay);

    delay = 1000
    var timerId = setTimeout(function(){
        var hpb = document.getElementById('range')
        val = hpb.value
        max = hpb.max
        min = hpb.min
        val -= dano
        
        porcent = (val - min) * 100 / (max - min)
        if( porcent <= 0){
            porcent = 0
        }

        hpb.style.backgroundSize = porcent + '% 100%'
        hpb.value = val 

        if(hpb.value == 0){
            window.alert('você destruiu o meu ovo')
        }else{
            ataqueBoss()
        }

    }, delay);
}


function ataqueBoss(){
    //boss
    var res = document.getElementById('res')

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


    var bossImg = document.getElementById('boss')

    delay = 1000
    var timerId = setTimeout(function(){
        bossImg.setAttribute('src', boss.sprite); 
        
        
        delay = 2400
        var timerId = setTimeout(function(){
            
            var hph = document.getElementById('range2')
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
            var bossImg = document.getElementById('boss')
            bossImg.setAttribute('src', boss.img);    
        }, delay);  

    }, delay);

}

function combate(){
    var body = document.getElementById('body')
    body.innerHTML = `
    <main class="container">
    <div class="row">
        <div class="col-md-4">
             <img src="${boss.img}" id="boss" alt="">
             <input type="range" value="${boss.hp}" min="0" max="${boss.hp}" id="range" disabled oninput="rangenumber.value=value"/>
             <p>${boss.nome}</p>
        </div>
        <div class="col-md-4" id="res"></div>
        <div class="col-md-4">
            <img src="${hero.img}" id="hero" alt="">
            <input type="range" value="${hero.hp}" min="0" max="${hero.hp}" id="range2" disabled oninput="rangenumber.value=value"/>
            <p>${hero.nome}</p>
        </div>
    </div>
    </main>
    <input type="button" value="atacar" onclick="atacar()">
    `
    
}

        

    


