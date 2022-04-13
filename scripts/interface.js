function inicio(){
    var itensInicio = document.getElementById('body');
    itensInicio.innerHTML = ` <div class="container">
    <div class="toggle">
        <input type="checkbox" id="switch" name="theme">
        <label for="switch">Toggle</label>
    </div>
</div>
<<input type="button" value="feminino" onclick="classF()">
<input type="button" value="masculino" onclick="classM()">
<div id="container" class="">
    

    
</div>
<div class="opcoes">
    <div class="middle">
        <a href="" class="classe classe1">Lanceira</a>
        <a href="" class="classe classe2">Arqueira</a>
        <a href="" class="classe classe3">Guerreira</a>
        <!--<a href="" class="btn btn4">Hover Me</a>-->
      </div>
</div>
`



}

function classM(){
    var container = document.getElementById("container")
    container.innerHTML = `<div class="conteudo1">
    <h1>Lanceira</h1>
    <p id="titulo1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, ducimus. Eius, aliquam. Nobis magni provident, amet quasi ut ipsam. Soluta ipsam aspernatur corporis aliquam voluptatem exercitationem deleniti et corrupti odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. A temporibus neque porro in provident ut, delectus deleniti deserunt magnam minima ratione necessitatibus odit eveniet quaerat facilis quia alias animi eaque?</p>

    <div class="atributo">
        <div class="vida"><div class="bg-vida">35</div></div>
        <div class="dano"><div class="bg-dano">18</div></div>
        <div class="critico"><div class="bg-critico"><i class="fa-solid fa-dice-d20"></i> 40</div></div>
        <div class="acerto"><div class="bg-acerto">80</div></div>
        <div class="erro"><div class="bg-erro">20</div></div>
    </div>
    
</div>
<div class="conteudo-meio">
    <h1 style="text-align: center">Qualquer Coisa</h1>
    <p id="titulo2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos necessitatibus sint nisi praesentium, sapiente quam laudantium amet quae corporis quisquam magnam tempore quis vel veniam, exercitationem hic odio, nam accusantium.</p>
    <div class="atributo1">
        <div class="vida1"><div class="bg-vida1">35</div></div>
        <div class="dano1"><div class="bg-dano1">18</div></div>
        <div class="critico1"><div class="bg-critico1">40</div></div>
        <div class="acerto1"><div class="bg-acerto1">80</div></div>
        <div class="erro1"><div class="bg-erro1">20</div></div>
    </div>
</div>
<div class="conteudo2">
    <h1 style="text-align: center; ">Guerreira</h1>
    <p id="titulo3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa magni accusamus modi ab incidunt facilis nobis perspiciatis veritatis, cumque facere explicabo? Odit tempore error recusandae temporibus fugit quasi soluta dolorem!</p>
    <div class="atributo2">
        <div class="vida2"><div class="bg-vida2">35</div></div>
        <div class="dano2"><div class="bg-dano2">18</div></div>
        <div class="critico2"><div class="bg-critico2">40</div></div>
        <div class="acerto2"><div class="bg-acerto2">80</div></div>
        <div class="erro2"><div class="bg-erro2">20</div></div>
    </div>
</div>
</div>
`
    document.getElementById('container').classList.add('classes-masculino');
}
function classF(){
    var container = document.querySelector("#container")
    container.innerHTML = `<div class="conteudo1">
    <h1>Lanceira</h1>
    <p id="titulo1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, ducimus. Eius, aliquam. Nobis magni provident, amet quasi ut ipsam. Soluta ipsam aspernatur corporis aliquam voluptatem exercitationem deleniti et corrupti odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. A temporibus neque porro in provident ut, delectus deleniti deserunt magnam minima ratione necessitatibus odit eveniet quaerat facilis quia alias animi eaque?</p>

    <div class="atributo">
        <div class="vida"><div class="bg-vida">35</div></div>
        <div class="dano"><div class="bg-dano">18</div></div>
        <div class="critico"><div class="bg-critico"><i class="fa-solid fa-dice-d20"></i> 40</div></div>
        <div class="acerto"><div class="bg-acerto">80</div></div>
        <div class="erro"><div class="bg-erro">20</div></div>
    </div>
    
</div>
<div class="conteudo-meio">
    <h1 style="text-align: center">Arqueira</h1>
    <p id="titulo2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos necessitatibus sint nisi praesentium, sapiente quam laudantium amet quae corporis quisquam magnam tempore quis vel veniam, exercitationem hic odio, nam accusantium.</p>
    <div class="atributo1">
        <div class="vida1"><div class="bg-vida1">35</div></div>
        <div class="dano1"><div class="bg-dano1">18</div></div>
        <div class="critico1"><div class="bg-critico1">40</div></div>
        <div class="acerto1"><div class="bg-acerto1">80</div></div>
        <div class="erro1"><div class="bg-erro1">20</div></div>
    </div>
</div>
<div class="conteudo2">
    <h1 style="text-align: center; ">Guerreira</h1>
    <p id="titulo3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa magni accusamus modi ab incidunt facilis nobis perspiciatis veritatis, cumque facere explicabo? Odit tempore error recusandae temporibus fugit quasi soluta dolorem!</p>
    <div class="atributo2">
        <div class="vida2"><div class="bg-vida2">35</div></div>
        <div class="dano2"><div class="bg-dano2">18</div></div>
        <div class="critico2"><div class="bg-critico2">40</div></div>
        <div class="acerto2"><div class="bg-acerto2">80</div></div>
        <div class="erro2"><div class="bg-erro2">20</div></div>
    </div>
</div>
</div>
`
    document.querySelector(".classes-masculino").style.display ='flex'
    document.getElementById('container').classList.remove('classes-masculino');
    
}