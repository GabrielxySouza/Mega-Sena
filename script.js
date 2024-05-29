let num = document.querySelector('input#fnum')
let nome = document.querySelector('input#Inome')
let lista = document.querySelector('select#flist')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number (n) <= 60){ //teste se número está entre 1 e 100
        return true
    }else{
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) { //teste para saber se o número está na lista
        return true
    }else{ 
        return false
    }
}

function adicionar(){ 
    if(valores.length >=6 ){
        alert('Limite de números alcançado!')
    }else
    if(isNumero(num.value) && !inLista(num.value, valores)){ //colocando os valores no vetor e na lista
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Escolheu o número: ${num.value} `
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        window.alert('Valor inválido ou já escolhido!')
    }
    num.value = ''
    num.focus()   
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random()*(max - min + 1)) + min
}

let numerosSorteados = []
while (numerosSorteados.length < 6) {
    let numeroAleatorio = gerarNumeroAleatorio(1,60)

    if (!numerosSorteados.includes(numeroAleatorio)) {
        numerosSorteados.push(numeroAleatorio)
    }
}

let acertos = 0
for (let numAcertos = 0; numAcertos < numerosSorteados.length; numAcertos++) { 
    if (numerosSorteados[numAcertos] == valores[numAcertos]) {
        acertos++
    }   
}

function finalizar(){ //finalizando, analisando e mostrando dados   
    if(valores.length == 0 || valores.length < 6){
        window.alert('Adicione mais números antes de finalizar!')
    }else{
        valores.sort((a,b) => a - b)
        numerosSorteados.sort((a,b) => a - b)
        let Nacertos = acertos    
        switch(Nacertos){
            case 6:
              alert("Parabéns! Você acertou 6 números e ganhou a SENA! Sua aposta foi " + valores + " e os números sorteados foram " + numerosSorteados);
              break;
            case 5:
              alert("Parabéns! Você acertou 6 números e ganhou a QUINA! Sua aposta foi " + valores + " e os números sorteados foram " + numerosSorteados);
              break;
            case 4:
              alert("Parabéns! Você acertou 6 números e ganhou a QUADRA! Sua aposta foi " + valores + " e os números sorteados foram " + numerosSorteados);
              break;
            default:
              alert("Você acertou menos de 4 números. Boa sorte  na  próxima. Sua aposta foi " + valores + " e os números sorteados foram " + numerosSorteados);
          }
        res.innerHTML = ''
        res.innerHTML += `<p> ${nome}Você escolheu os números: ${valores} .</p> `
        res.innerHTML += `<p> Os números sorteados foram ${numerosSorteados}.</p>`
        res.innerHTML += `<p> Você acertou ${Nacertos} números.</p>`
    }
}
//cods trocado - refazer    