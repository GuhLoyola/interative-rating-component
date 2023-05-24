const secaoAtiva = document.querySelectorAll('.card')
const btn = document.getElementById('btn')
const btnTY = document.getElementById('btn-thank-you')
const rate = document.querySelectorAll('.rate')
const rating = document.getElementById('rating')

console.log(rate)

let secaoAtual = 0

btn.addEventListener('click', function(){
    if(secaoAtual === secaoAtiva.length - 1){
        return
    }

    secaoAtual++;

    esconderCard();
    mostrarCard();
})

btnTY.addEventListener('click', function(){
    if(secaoAtual === secaoAtiva.length + 1){
        return
    }

    secaoAtual--;

    esconderCard();
    mostrarCard();
})

rate.forEach((rates) => {
    rates.addEventListener('click', () => {
        rating.innerHTML = rates.innerHTML
    })
})

function esconderCard(){
    const secaoAberta = document.querySelector('.ativo')
    secaoAberta.classList.remove('ativo')
}

function mostrarCard(){
    secaoAtiva[secaoAtual].classList.add('ativo')
}