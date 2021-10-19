let q1 = 0
let q2 = 0
let q3 = 0
let q4 = 0
let concluida = 0
let cert = 0

let quests = [q1, q2, q3, q4]
let contdquest = 0
//lights area:
function q(){
    if(concluida == 0){
        concluida ++
    }
    let acerto = document.getElementById('cert')
    let erro1 = document.getElementById('erro1')
    let erro2 = document.getElementById('erro2')
    let erro3 = document.getElementById('erro3')
    let avanc = document.getElementById('avante')
    
    erro1.style.backgroundColor = 'red'
    erro1.style.color = 'white'

    erro2.style.backgroundColor = 'red'
    erro2.style.color = 'white'

    erro3.style.backgroundColor = 'red'
    erro3.style.color = 'white'

    acerto.style.backgroundColor = 'green'
    acerto.style.color = 'white'

    avanc.style.backgroundColor = 'green'
}
//verificação certa:
function cc(){
    q()
    cert ++ 
}

//errors area:
function errada1(){
    if(cert == 0){
        q()
        if(q1 == 0){
            q1++
        }  
    }
}
function errada2(){
    if(cert == 0){
        q()
        if(q2 == 0){
            q2++
        }  
    }
}
function errada3(){
    if(cert == 0){
        q()
        if(q3 == 0){
            q3++
        }  
    }
}
function errada4(){
    if(cert == 0){
        q()
        if(q4 == 0){
            q4++
        }  
    }
}


//questoes area:
function avancar1(){
    if(concluida == 1){
        concluida = 0
        cert = 0
        let elemento = document.getElementById('geral')
        elemento.innerText = null
        elemento.innerHTML += '<h2>Segunda pergunta:</h2>'
        elemento.innerHTML += '<div class="pergunta">'
        elemento.innerHTML += '<p>Porque eles se chamavam Tigres asiáticos?</p>'
    
        elemento.innerHTML += '<input class="me" type="button" value="a) Porque são países grandes" onclick="errada2()" id="erro1">'
    
        elemento.innerHTML += '<input class="me" type="button" value="b) Porque são países que tem muitos tigres" onclick="errada2()" id="erro2">'
    
        elemento.innerHTML += '<input class="me" type="button" value="c) Porque são países pequenos" onclick="errada2()" id="erro3">'
        
        elemento.innerHTML += '<input class="me" type="button" value="d) Porque são países que cresceram rapidamente" onclick="cc()" id="cert">'

        elemento.innerHTML += '<div id="av"><input id="avante" class="btf" type="button" value="Avançar" onclick="avancar2()"></div>'
    }
 
}

function avancar2(){
    if(concluida == 1){
        concluida = 0
        cert = 0
        let elemento = document.getElementById('geral')
        elemento.innerText = null

        elemento.innerHTML += '<h2>Terceira pergunta:</h2>'
        elemento.innerHTML += '<div class="pergunta">'
        elemento.innerHTML += '<p>Sobre o que o plano colombo se tratava?</p>'

        elemento.innerHTML += '<input class="me" type="button" value="a) Auxilio bélico para os países destruídos" onclick="errada3()" id="erro1">'

        elemento.innerHTML += '<input class="me" type="button" value="b) Auxilio econômico para os países destruídos" onclick="cc()" id="cert">'

        elemento.innerHTML += '<input class="me" type="button" value="c) Sorteio de iphone entre os países destruídos" onclick="errada3()" id="erro2">'
    
        elemento.innerHTML += '<input class="me" type="button" value="d) Todas estão erradas" onclick="errada3()" id="erro3">'

        elemento.innerHTML += '<div id="av"><input id="avante" class="btf" type="button" value="Avançar" onclick="avancar3()"></div>'
    }

}
function avancar3(){
    if(concluida == 1){
        concluida = 0
        cert = 0
        let elemento = document.getElementById('geral')
        elemento.innerText = null

        elemento.innerHTML += '<h2>Quarta pergunta:</h2>'
        elemento.innerHTML += '<div class="pergunta">'
        elemento.innerHTML += '<p>Quais são os novos tigres asiáticos?</p>'

        elemento.innerHTML += '<input class="me" type="button" value="a) Indonésia, Vietnã, Malásia, Tailândia e Filipinas" onclick="cc()" id="cert">'

        elemento.innerHTML += '<input class="me" type="button" value="b) Brasil, Russia, Argentina, Bolívia e França" onclick="errada4()" id="erro1">'

        elemento.innerHTML += '<input class="me" type="button" value="c) Coreia do norte, Paquistão, Catar, Israel e Síria" onclick="errada4()" id="erro2">'
    
        elemento.innerHTML += '<input class="me" type="button" value="d) Todas estão erradas" onclick="errada4()" id="erro3">'

        elemento.innerHTML += '<div id="av"><input id="avante" class="btf" type="button" value="Avançar" onclick="final()"></div>'
    }

}

function final(){
    if(concluida == 1){
        concluida = 0
        cert = 0
        let elemento = document.getElementById('geral')
        let soma = q1 + q2 + q3 + q4
        elemento.innerText = null
        if(soma == 0){
           elemento.innerHTML += '<h2 class="ttfinal">Parabéns!</h2>'
           elemento.innerHTML += '<p>Você terminou o exercício com nenhum erro, Farofa está muito orgulhoso de você!</p>' 
        }else if(soma == 1){
            elemento.innerHTML += '<h2 class="ttfinal">Parabéns!</h2>'
            elemento.innerHTML += '<p>Você terminou o exercício com apenas 1 erro, Farofa está feliz contigo!</p>'
        }else if(soma == 2){
            elemento.innerHTML += '<h2 class="ttfinal">Parabéns!</h2>'
            elemento.innerHTML += '<p>Você terminou o exercício com 2 erros, mas podia ser melhor!</p>'
        }else if(soma == 3){
            elemento.innerHTML += '<h2 class="ttfinal">Fim do exercício!</h2>'
            elemento.innerHTML += '<p>Você terminou o exercício com 3 erros, Farofa está desapontado com você!</p>'
        }else if(soma == 4){
            elemento.innerHTML += '<h2 class="ttfinal">Que pena!</h2>'
            elemento.innerHTML += '<p>Você errou o exercício inteiro, Você não leva muito jeito pra isso em!</p>'
        }
        elemento.innerHTML += '<div id="btffinal"><a href="index.html"><button class="botfinal">Refazer</button></a></div>'
    }
 
}