//Math.floor(Math.random()*99 + 1); //Gerador de números aleatórios
//const getRandomIntegerInclusive = (min, max) => Math.floor(Math.random()*(max -min +1)) + min

let numeroAleatorio = 0
//let numeroDeChances = 10
let contador = 1
let min = 1
let max = 100
let situacao = ''

//selecionar elementos
let inputNumero = document.querySelector('#inputNumero') //input Numero
let btnAdivinhe = document.querySelector('#btnAdivinhe') //botao adivinhar
let aviso = document.querySelector('#aviso') //paragrafo de aviso

//CONTROLES DE JOGO
    function gerarNumeroAleatorio(){
        numeroAleatorio = Math.floor(Math.random()*(max -min +1)) + min
        //console.log(numeroAleatorio)
    }
    function bloquearBtnAdvinhe(){
        btnAdivinhe.removeAttribute('disabled', 'disabled')
        btnAdivinhe.style.cursor = 'not-allowed'
    }
    function ativarBtnAdivinhe(){
        btnAdivinhe.removeAttribute('disabled')
        btnAdivinhe.style.cursor = 'pointer'
    }
    function validarNumeroDigitado(numero){
        if(numero <= 0 || numero > 100){
            console.log('Número inválido!')
            aviso.classList.add('errou')
            mensagemRapida('Número inválido! Digite um número entre 1 e 100')
            bloquearBtnAdvinhe()
            inputNumero.value = ''
        }
        else{
            console.log('Número válido')
        }
    }   
    function jogar(){
        console.log("Jogando")
        verificarSeAcertou()
    }    
    function mensagemRapida(mensagem){
        aviso.textContent = mensagem
        setTimeout(function(){
            aviso.textContent = ""
            aviso.classList.remove('acertou')
            aviso.classList.remove('errou')
            inputNumero.value = ''
        }, 2000)
    }
    function gameover(situacao){
        switch (situacao){

            case 'Acertou':
                aviso.classList.add('acertou')
                mensagemRapida('Parabéns, você acertou! \nO número era ' + numeroAleatorio)
            break
            case 'Chute maior':
                aviso.classList.add('errou')
                mensagemRapida('Quase! Tente um número maior')
            break
            case 'Chute menor':
                aviso.classList.add('errou')
                mensagemRapida('Quase! Tente um número menor')
            break
            default:
            console.log('Informe a situação')
        }
    }
    function verificarSeAcertou(){
        tentativa = parseInt(document.querySelector('#inputNumero').value)
        console.log('Nº de tentativas' + contador)
        console.log('tentativa' + tentativa)

        if(numeroAleatorio === tentativa){
            console.log('Acertou')
            situacao = 'Acertou'
            gameover(situacao)
            gerarNumeroAleatorio()
        }else if(tentativa > numeroAleatorio){
            console.log('Chute menor')
            situacao = 'Chute menor'
            gameover(situacao)
        }else if(tentativa < numeroAleatorio){
            console.log('Chute maior')
            situacao = 'Chute maior'
            gameover(situacao)
        }else{
            console.log('Impossível verificar se você acertou!')
        }
    }