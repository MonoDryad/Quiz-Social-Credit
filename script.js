// Pegar o ano, mês, dia, horas e minutos para formar o horário de execução
const d = new Date()
let minutos = d.getMinutes()
let horas = d.getHours()
let dia = d.getDay()
let mes = d.getMonth()
let ano = d.getFullYear()
console.log(ano + "/" + mes + "/" + dia + " " + horas + ":" + minutos)

// variáveis para pegar os sons da pasta /audio/
var superidol = new Audio('audio/super-idolde-xiao-rong.mp3')
var ohmygod = new Audio('audio/oh-my-god-vine.mp3')
var vineboom = new Audio('audio/vine-boom.mp3')
var vineboombass = new Audio('audio/dam4rqxu2ywicjk1.mp3')
var ok = new Audio('audio/my-song-2_2.mp3')
var nightmare = new Audio('audio/kitchen-nightmare-dramatic-sound-effect.mp3')
var aaaa = new Audio('audio/videoplayback.mp3')
var superidolv = new Audio('audio/2.mp3')
var musica = new Audio('audio/musica.mp3')

// Boolean que vai permitir a proxima pergunta - A outra serve para mostar o resultado
let mostrarResultado = false
let resultadof = 0
let qpergunta = 0

// credito que será contado a cada pergunta
let credito = 0 
let creditohtml = document.getElementById('credito')

// o botão que vai permitir aparecer as perguntas
let começarbotao = document.getElementById('começarb')

// input das respostas e os textos
let imgok = document.getElementById('ok')
let imgverme = document.getElementById('setaverme')
let imgverde = document.getElementById('setaverde')
let imgr = document.getElementById('imgrface')
let imgrdw = document.getElementById('imgrdwface')
let imgrhappy = document.getElementById('imgrhappy')
let imgscary = document.getElementById('imgscary')
let imgbye = document.getElementById('imgbye')
let imgsuperidol = document.getElementById('imgsuperidol')
let inputresposta1 = document.getElementById('inputpresposta1')
let inputresposta2 = document.getElementById('inputpresposta2')
let inputresposta3 = document.getElementById('inputpresposta3')
let inputresposta4 = document.getElementById('inputpresposta4')
let inputresposta5 = document.getElementById('inputpresposta5')
let resposta1 = document.getElementById('resposta1')              
let resposta2 = document.getElementById('resposta2')              
let resposta3 = document.getElementById('resposta3')             
let resposta4 = document.getElementById('resposta4')            
let resposta5 = document.getElementById('resposta5')
let pergunta = document.getElementById('pergunta')
let resultado = document.getElementById('resultado')

// botões que serão adicionado a cada pergunta para que possa ler a resposta do jogador
let verificar = document.getElementById('verificarresposta')
let verificar2 = document.getElementById('verificarresposta2')
let verificar3 = document.getElementById('verificarresposta3')
let verificar4 = document.getElementById('verificarresposta4')
let verificar5 = document.getElementById('verificarresposta5')
let proximo = document.getElementById('proximaquestao')


// a função que vai começar o quiz
const começar = function () {

    // Mudança no CSS
    começarbotao.style.display = 'none'
    inputresposta1.style.display = 'inline'
    inputresposta2.style.display = 'inline'
    inputresposta3.style.display = 'inline'
    inputresposta4.style.display = 'inline'
    inputresposta5.style.display = 'inline'
    resposta1.style.display = 'inline'
    resposta2.style.display = 'inline'
    resposta3.style.display = 'inline'
    resposta4.style.display = 'inline'
    resposta5.style.display = 'inline'
    verificar.style.display = 'block'
    // Adicionando os textos necessários para a
    // primeira pergunta.
    pergunta.textContent = 'Quantas horas você passa jogando em seu computador em um dia?'
    resposta1.innerHTML = '10 horas'
    resposta2.innerHTML = '3 horas e 15 minutos'
    resposta3.innerHTML = '4 horas'
    resposta4.innerHTML = '3 horas'
    resposta5.innerHTML = '16 horas'

    // tocar super idol
    musica.play()
    musica.volume = 0.1
}

// Próxima questão
function proximaquestao(){
    // resetando a variavel credito para não ficar 15 + 15 na próxima questão e sim 0 + 15 ou 0 - 30
    credito = 0
    mostrarResultado = false

    // switch case usado para verificar qual pergunta será adicionado em seguida
    switch(qpergunta){

        // Segunda pergunta
        case 2:
            // removendo o resultado
            resultado.style.display = 'none'
            resultado.textContent = ''
            proximo.style.display = 'none'
            imgok.style.display = 'none'
            imgverde.style.display = 'none'
            imgverme.style.display = 'none'
            imgrhappy.style.display = 'none'
            imgrdw.style.display = 'none'
            imgbye.style.display = 'none'
            imgscary.style.display = 'none'
            imgr.style.display = 'none'

            // Mudança no CSS
            inputresposta1.style.display = 'inline'
            inputresposta2.style.display = 'inline'
            inputresposta3.style.display = 'inline'
            inputresposta4.style.display = 'inline'
            inputresposta5.style.display = 'inline'
            resposta1.style.display = 'inline'
            resposta2.style.display = 'inline'
            resposta3.style.display = 'inline'
            resposta4.style.display = 'inline'
            resposta5.style.display = 'inline'
            verificar2.style.display = 'block'

            // Adicionando os textos necessários para a segunda pergunta.
            pergunta.textContent = 'Quantos filhos você tem/planeja ter?'
            resposta1.innerHTML = 'Nenhum'
            resposta2.innerHTML = '1 Menino'
            resposta3.innerHTML = '3 Meninas'
            resposta4.innerHTML = '2 Meninos'
            resposta5.innerHTML = '1 Menina'
            break
        // Terceira pergunta
        case 3:

            // removendo o resultado
            resultado.style.display = 'none'
            resultado.textContent = ''
            proximo.style.display = 'none'
            imgok.style.display = 'none'
            imgverde.style.display = 'none'
            imgverme.style.display = 'none'
            imgrhappy.style.display = 'none'
            imgrdw.style.display = 'none'
            imgbye.style.display = 'none'
            imgscary.style.display = 'none'
            imgr.style.display = 'none'

            // Mudança no CSS
            inputresposta1.style.display = 'inline'
            inputresposta2.style.display = 'inline'
            inputresposta3.style.display = 'inline'
            resposta1.style.display = 'inline'
            resposta2.style.display = 'inline'
            resposta3.style.display = 'inline'
            verificar3.style.display = 'block'

            // Adicionando os textos necessários para a segunda pergunta.
            pergunta.textContent = 'Qual é língua mãe da China?'
            resposta1.innerHTML = 'Mandarim'
            resposta2.innerHTML = 'Coreano'
            resposta3.innerHTML = 'Mongol'
            break
        // Quarta pergunta
        case 4:

            // removendo o resultado
            resultado.style.display = 'none'
            resultado.textContent = ''
            proximo.style.display = 'none'
            imgok.style.display = 'none'
            imgverde.style.display = 'none'
            imgverme.style.display = 'none'
            imgrhappy.style.display = 'none'
            imgrdw.style.display = 'none'
            imgbye.style.display = 'none'
            imgscary.style.display = 'none'
            imgr.style.display = 'none'
    
            // Mudança no CSS
            inputresposta1.style.display = 'inline'
            inputresposta2.style.display = 'inline'
            inputresposta3.style.display = 'inline'
            inputresposta4.style.display = 'inline'
            inputresposta5.style.display = 'inline'
            resposta1.style.display = 'inline'
            resposta2.style.display = 'inline'
            resposta3.style.display = 'inline'
            resposta4.style.display = 'inline'
            resposta5.style.display = 'inline'
            verificar4.style.display = 'block'
    
            // Adicionando os textos necessários para a segunda pergunta.
            pergunta.textContent = 'Quem é o nosso governante supremo?'
            resposta1.innerHTML = 'Boris Johnson'
            resposta2.innerHTML = 'Vladimir Putin'
            resposta3.innerHTML = 'Xi Jinping'
            resposta4.innerHTML = 'Jair Bolsonaro'
            resposta5.innerHTML = 'Joe Biden'

        // Quinta Pergunta
        break
        case 5:

            // removendo o resultado
            resultado.style.display = 'none'
            resultado.textContent = ''
            proximo.style.display = 'none'
            imgok.style.display = 'none'
            imgverde.style.display = 'none'
            imgverme.style.display = 'none'
            imgrhappy.style.display = 'none'
            imgrdw.style.display = 'none'
            imgbye.style.display = 'none'
            imgscary.style.display = 'none'
            imgr.style.display = 'none'
    
            // Mudança no CSS
            inputresposta1.style.display = 'inline'
            inputresposta2.style.display = 'inline'
            inputresposta3.style.display = 'inline'
            inputresposta4.style.display = 'none'
            inputresposta5.style.display = 'none'
            resposta1.style.display = 'inline'
            resposta2.style.display = 'inline'
            resposta3.style.display = 'inline'
            verificar5.style.display = 'block'
    
            // Adicionando os textos necessários para a segunda pergunta.
            pergunta.textContent = 'Taiwan é um país?'
            resposta1.innerHTML = 'Sim'
            resposta2.innerHTML = 'Não'
            resposta3.innerHTML = 'Nunca vai ser'
        break
        default:
            let final = document.getElementById("final")
            resultado.style.display = 'none'
            resultado.textContent = ''
            proximo.style.display = 'none'
            imgok.style.display = 'none'
            imgverde.style.display = 'none'
            imgverme.style.display = 'none'
            imgrhappy.style.display = 'none'
            imgrdw.style.display = 'none'
            imgbye.style.display = 'none'
            imgscary.style.display = 'none'
            imgr.style.display = 'none'
            
            let execucaodia = dia + 1
            let execucaohoras = horas + 1
            let execucaominutos = '00'
            // if else para verificar se o usuario vai sair vivo ou será movido
            if (creditohtml.value >= 1){
                resultadof = 2
                console.log(resultadof, " Prestigio")
            } else if(creditohtml.value >= 60){
                resultadof = 1
                console.log(resultadof, " Normal")
            } else if(creditohtml.value <= 0){
                resultadof = 0
                console.log(resultadof, " Execução")
            }
            switch(resultadof){
                case 1:
                    final.innerHTML = 'Você conseguiu um total de ' + parseFloat(creditohtml.value) + ' créditos sociais.'
                    break
                case 2:
                    final.innerHTML = 'Você conseguiu um total de ' + parseFloat(creditohtml.value) + ' créditos sociais!'
                    imgsuperidol.style.display = 'inline'
                    imgsuperidol.style.position = 'absolute'
                    imgsuperidol.style.top = '50%'
                    imgsuperidol.style.left = '30%'
                    imgsuperidol.style.right = '70%'
                    imgsuperidol.style.bottom = '50%'
                    imgsuperidol.style.width = '240px'
                    imgsuperidol.style.height = 'auto'

                    superidolv.play()
                    break
                default:
                    final.innerHTML = '你總共有 ' + parseFloat(creditohtml.value) + ' 個社會學分。其執行將在當天進行: ' + execucaohoras + ":" + execucaominutos + " " + execucaodia + "/" + mes + "/" + ano
                    imgscary.style.display = 'inline'
                    imgscary.style.position = 'absolute'
                    imgscary.style.top = '50%'
                    imgscary.style.bottom = '50%'
                    imgscary.style.left = '65%'
                    imgscary.style.right = '35%'
                    imgverme.style.display = 'inline'
                    imgverme.style.position = 'absolute'
                    imgverme.style.top = '45%'
                    imgverme.style.left = '0%'
                    imgverme.style.right = '100%'
                    imgverme.style.bottom = '55%'
                    imgbye.style.display = 'inline'
                    imgbye.style.position = 'absolute'
                    imgbye.style.top = '50%'
                    imgbye.style.left = '30%'
                    imgbye.style.right = '70%'
                    imgbye.style.bottom = '50%'
                    imgbye.style.width = '240px'
                    imgbye.style.height = 'auto'

                    aaaa.play()
            }
    }
}

// função da primeira pergunta
const verificarresposta = function () {
    // adicionando o valor do input para conseguir verificar se a resposta do usuario está correta
    inputresposta1.value = 'errado'
    inputresposta2.value = 'errado'
    inputresposta3.value = 'errado'
    inputresposta4.value = 'certo'
    inputresposta5.value = 'errado'

    // queryselector para verificar qual input está selecionado 
    let check = document.querySelector('input[name="input"]:checked').value

    // removendo os inputs e textos
    pergunta.textContent = ''
    inputresposta1.style.display = 'none'
    inputresposta2.style.display = 'none'
    inputresposta3.style.display = 'none'
    inputresposta4.style.display = 'none'
    inputresposta5.style.display = 'none'
    resposta1.style.display = 'none'
    resposta2.style.display = 'none'
    resposta3.style.display = 'none'
    resposta4.style.display = 'none'
    resposta5.style.display = 'none'
    verificar.style.display = 'none'

    // switch case verificando se a resposta é certa ou não
    switch(check){
        case 'certo':
            // adicionando o valor ganho por acertar
            credito = 15
            creditohtml.value = credito
            
            // colocando a próxima pergunta
            mostrarResultado = true
            ok.play()

            // imagens
            imgok.style.display = 'inline'
            imgok.style.position = 'absolute'
            imgok.style.top = '50%'
            imgok.style.bottom = '50%'
            imgok.style.left = '65%'
            imgok.style.right = '35%'
            imgverde.style.display = 'inline'
            imgverde.style.position = 'absolute'
            imgverde.style.top = '45%'
            imgverde.style.left = '0%'
            imgverde.style.right = '100%'
            imgverde.style.bottom = '55%'
            imgrhappy.style.display = 'inline'
            imgrhappy.style.position = 'absolute'
            imgrhappy.style.top = '50%'
            imgrhappy.style.left = '30%'
            imgrhappy.style.right = '70%'
            imgrhappy.style.bottom = '50%'
            imgrhappy.style.width = '240px'
            imgrhappy.style.height = 'auto'
            break
        default:
            // adicionando o valor perdido por errar
            credito = -30
            creditohtml.value = credito
            
            // colocando a próxima pergunta
            mostrarResultado = false
            vineboom.play()

            // imagens
            imgscary.style.display = 'inline'
            imgscary.style.position = 'absolute'
            imgscary.style.top = '50%'
            imgscary.style.bottom = '50%'
            imgscary.style.left = '65%'
            imgscary.style.right = '35%'
            imgverme.style.display = 'inline'
            imgverme.style.position = 'absolute'
            imgverme.style.top = '45%'
            imgverme.style.left = '0%'
            imgverme.style.right = '100%'
            imgverme.style.bottom = '55%'
            imgr.style.display = 'inline'
            imgr.style.position = 'absolute'
            imgr.style.top = '50%'
            imgr.style.left = '30%'
            imgr.style.right = '70%'
            imgr.style.bottom = '50%'
            imgr.style.width = '240px'
            imgr.style.height = 'auto'
    }
    // switch case adicionando o resultado na tela
    switch(mostrarResultado){
        case true:
            // aqui vai mostrar o resultado e seu texto
            resultado.style.display = 'block'
            resultado.textContent = 'Você ganhou ' + credito + " créditos sociais!"

            // adicionando o botão para ativar a nova função
            proximo.style.display = 'block'
            qpergunta = 2
            break
        default:
            // aqui vai mostrar o resultado e seu texto
            resultado.style.display = 'block'
            resultado.textContent = 'Você recebeu ' + credito + " créditos sociais!"

            // adicionando o botão para ativar a nova função
            proximo.style.display = 'block'
            qpergunta = 2
    }
    console.log('Debug: Fim Primeira pergunta - ', credito)
    console.log('Debug: Fim Primeira pergunta - ', qpergunta)
}

const verificarresposta2 = function () {
    // adicionando o valor do input para conseguir verificar se a resposta do usuario está correta
    inputresposta1.value = 'errado'
    inputresposta2.value = 'certo'
    inputresposta3.value = 'extremoerrado'
    inputresposta4.value = 'errado'
    inputresposta5.value = 'errado'

    // queryselector para verificar qual input está selecionado 
    let check = document.querySelector('input[name="input"]:checked').value

    // removendo os inputs e textos
    pergunta.textContent = ''
    inputresposta1.style.display = 'none'
    inputresposta2.style.display = 'none'
    inputresposta3.style.display = 'none'
    inputresposta4.style.display = 'none'
    inputresposta5.style.display = 'none'
    resposta1.style.display = 'none'
    resposta2.style.display = 'none'
    resposta3.style.display = 'none'
    resposta4.style.display = 'none'
    resposta5.style.display = 'none'
    verificar2.style.display = 'none'

    // switch case verificando se a resposta é certa ou não
    switch(check){
        case 'certo':
            // adicionando o valor ganho por acertar
            credito = 15
            creditohtml.value = parseFloat(creditohtml.value) + parseFloat(credito)
            
            // colocando a próxima pergunta
            mostrarResultado = true
            ok.play()

                        // imagens
            imgok.style.display = 'inline'
            imgok.style.position = 'absolute'
            imgok.style.top = '50%'
            imgok.style.bottom = '50%'
            imgok.style.left = '65%'
            imgok.style.right = '35%'
            imgverde.style.display = 'inline'
            imgverde.style.position = 'absolute'
            imgverde.style.top = '45%'
            imgverde.style.left = '0%'
            imgverde.style.right = '100%'
            imgverde.style.bottom = '55%'
            imgrhappy.style.display = 'inline'
            imgrhappy.style.position = 'absolute'
            imgrhappy.style.top = '50%'
            imgrhappy.style.left = '30%'
            imgrhappy.style.right = '70%'
            imgrhappy.style.bottom = '50%'
            imgrhappy.style.width = '240px'
            imgrhappy.style.height = 'auto'
            break
        case 'extremoerrado':
            // adicionando o valor ganho por acertar
            credito = 30
            creditohtml.value = parseFloat(creditohtml.value) - parseFloat(credito)
            mostrarResultado = false
            vineboombass.play()

            // imagens
            imgscary.style.display = 'inline'
            imgscary.style.position = 'absolute'
            imgscary.style.top = '50%'
            imgscary.style.bottom = '50%'
            imgscary.style.left = '65%'
            imgscary.style.right = '35%'
            imgverme.style.display = 'inline'
            imgverme.style.position = 'absolute'
            imgverme.style.top = '45%'
            imgverme.style.left = '0%'
            imgverme.style.right = '100%'
            imgverme.style.bottom = '55%'
            imgrdw.style.display = 'inline'
            imgrdw.style.position = 'absolute'
            imgrdw.style.top = '50%'
            imgrdw.style.left = '30%'
            imgrdw.style.right = '70%'
            imgrdw.style.bottom = '50%'
            imgrdw.style.width = '240px'
            imgrdw.style.height = 'auto'
            break
        default:
            // adicionando o valor perdido por errar
            credito = 15
            creditohtml.value = parseFloat(creditohtml.value) - parseFloat(credito)
            mostrarResultado = false
            vineboom.play()

            // imagens
            imgscary.style.display = 'inline'
            imgscary.style.position = 'absolute'
            imgscary.style.top = '50%'
            imgscary.style.bottom = '50%'
            imgscary.style.left = '65%'
            imgscary.style.right = '35%'
            imgverme.style.display = 'inline'
            imgverme.style.position = 'absolute'
            imgverme.style.top = '45%'
            imgverme.style.left = '0%'
            imgverme.style.right = '100%'
            imgverme.style.bottom = '55%'
            imgr.style.display = 'inline'
            imgr.style.position = 'absolute'
            imgr.style.top = '50%'
            imgr.style.left = '30%'
            imgr.style.right = '70%'
            imgr.style.bottom = '50%'
            imgr.style.width = '240px'
            imgr.style.height = 'auto'
    }
    // switch case adicionando o resultado na tela
    switch(mostrarResultado){
        case true:
            // aqui vai mostrar o resultado e seu texto
            resultado.style.display = 'block'
            resultado.textContent = 'Você ganhou ' + credito + " créditos sociais!"

            // adicionando o botão para ativar a nova função
            proximo.style.display = 'block'
            qpergunta = 3
            break
        default:
            // aqui vai mostrar o resultado e seu texto
            resultado.style.display = 'block'
            resultado.textContent = 'Você recebeu -' + credito + " créditos sociais!"

            // adicionando o botão para ativar a nova função
            proximo.style.display = 'block'
            qpergunta = 3
    }
    console.log('Debug: Fim Segunda pergunta - ', credito)
    console.log('Debug: Fim Segunda pergunta - ', qpergunta)
}

const verificarresposta3 = function () {
    // adicionando o valor do input para conseguir verificar se a resposta do usuario está correta
    inputresposta1.value = 'certo'
    inputresposta2.value = 'errado'
    inputresposta3.value = 'errado'


    // queryselector para verificar qual input está selecionado 
    let check = document.querySelector('input[name="input"]:checked').value

    // removendo os inputs e textos
    pergunta.textContent = ''
    inputresposta1.style.display = 'none'
    inputresposta2.style.display = 'none'
    inputresposta3.style.display = 'none'
    inputresposta4.style.display = 'none'
    inputresposta5.style.display = 'none'
    resposta1.style.display = 'none'
    resposta2.style.display = 'none'
    resposta3.style.display = 'none'
    resposta4.style.display = 'none'
    resposta5.style.display = 'none'
    verificar3.style.display = 'none'

    // switch case verificando se a resposta é certa ou não
    switch(check){
        case 'certo':
            // adicionando o valor ganho por acertar
            credito = 15
            creditohtml.value = parseFloat(creditohtml.value) + parseFloat(credito)
            
            // colocando a próxima pergunta
            mostrarResultado = true
            ok.play()

            // imagens
            imgok.style.display = 'inline'
            imgok.style.position = 'absolute'
            imgok.style.top = '50%'
            imgok.style.bottom = '50%'
            imgok.style.left = '65%'
            imgok.style.right = '35%'
            imgverde.style.display = 'inline'
            imgverde.style.position = 'absolute'
            imgverde.style.top = '45%'
            imgverde.style.left = '0%'
            imgverde.style.right = '100%'
            imgverde.style.bottom = '55%'
            imgrhappy.style.display = 'inline'
            imgrhappy.style.position = 'absolute'
            imgrhappy.style.top = '50%'
            imgrhappy.style.left = '30%'
            imgrhappy.style.right = '70%'
            imgrhappy.style.bottom = '50%'
            imgrhappy.style.width = '240px'
            imgrhappy.style.height = 'auto'
            break
        default:
            // adicionando o valor perdido por errar
            credito = 15
            creditohtml.value = parseFloat(creditohtml.value) - parseFloat(credito)
            
            // colocando a próxima pergunta
            mostrarResultado = false
            ohmygod.play()

            // imagens
            imgscary.style.display = 'inline'
            imgscary.style.position = 'absolute'
            imgscary.style.top = '50%'
            imgscary.style.bottom = '50%'
            imgscary.style.left = '65%'
            imgscary.style.right = '35%'
            imgverme.style.display = 'inline'
            imgverme.style.position = 'absolute'
            imgverme.style.top = '45%'
            imgverme.style.left = '0%'
            imgverme.style.right = '100%'
            imgverme.style.bottom = '55%'
            imgr.style.display = 'inline'
            imgr.style.position = 'absolute'
            imgr.style.top = '50%'
            imgr.style.left = '30%'
            imgr.style.right = '70%'
            imgr.style.bottom = '50%'
            imgr.style.width = '240px'
            imgr.style.height = 'auto'
    }
    // switch case adicionando o resultado na tela
    switch(mostrarResultado){
        case true:
            // aqui vai mostrar o resultado e seu texto
            resultado.style.display = 'block'
            resultado.textContent = 'Você ganhou ' + credito + " créditos sociais!"

            // adicionando o botão para ativar a nova função
            proximo.style.display = 'block'
            qpergunta = 4
            break
        default:
            // aqui vai mostrar o resultado e seu texto
            resultado.style.display = 'block'
            resultado.textContent = 'Você recebeu -' + credito + " créditos sociais!"

            // adicionando o botão para ativar a nova função
            proximo.style.display = 'block'
            qpergunta = 4
    }
    console.log('Debug: Fim Terceira pergunta - ', credito)
    console.log('Debug: Fim Terceira pergunta - ', qpergunta)
}

const verificarresposta4 = function () {
    // adicionando o valor do input para conseguir verificar se a resposta do usuario está correta
    inputresposta1.value = 'extremoerrado'
    inputresposta2.value = 'extremoerrado'
    inputresposta3.value = 'certo'
    inputresposta4.value = 'extremoerrado'
    inputresposta5.value = 'extremoerrado'


    // queryselector para verificar qual input está selecionado 
    let check = document.querySelector('input[name="input"]:checked').value

    // removendo os inputs e textos
    pergunta.textContent = ''
    inputresposta1.style.display = 'none'
    inputresposta2.style.display = 'none'
    inputresposta3.style.display = 'none'
    inputresposta4.style.display = 'none'
    inputresposta5.style.display = 'none'
    resposta1.style.display = 'none'
    resposta2.style.display = 'none'
    resposta3.style.display = 'none'
    resposta4.style.display = 'none'
    resposta5.style.display = 'none'
    verificar4.style.display = 'none'

    // switch case verificando se a resposta é certa ou não
    switch(check){
        case 'certo':
            // adicionando o valor ganho por acertar
            credito = 40
            creditohtml.value = parseFloat(creditohtml.value) + parseFloat(credito)
            
            // colocando a próxima pergunta
            mostrarResultado = true
            ok.play()

            // imagens
            imgok.style.display = 'inline'
            imgok.style.position = 'absolute'
            imgok.style.top = '50%'
            imgok.style.bottom = '50%'
            imgok.style.left = '65%'
            imgok.style.right = '35%'
            imgverde.style.display = 'inline'
            imgverde.style.position = 'absolute'
            imgverde.style.top = '45%'
            imgverde.style.left = '0%'
            imgverde.style.right = '100%'
            imgverde.style.bottom = '55%'
            imgrhappy.style.display = 'inline'
            imgrhappy.style.position = 'absolute'
            imgrhappy.style.top = '50%'
            imgrhappy.style.left = '30%'
            imgrhappy.style.right = '70%'
            imgrhappy.style.bottom = '50%'
            imgrhappy.style.width = '240px'
            imgrhappy.style.height = 'auto'
            break
        default:
            // adicionando o valor perdido por errar
            credito = 45
            creditohtml.value = parseFloat(creditohtml.value) - parseFloat(credito)
            
            // colocando a próxima pergunta
            mostrarResultado = false
            vineboombass.play()
            nightmare.play()
            ohmygod.play()

            // imagens
            imgscary.style.display = 'inline'
            imgscary.style.position = 'absolute'
            imgscary.style.top = '50%'
            imgscary.style.bottom = '50%'
            imgscary.style.left = '65%'
            imgscary.style.right = '35%'
            imgverme.style.display = 'inline'
            imgverme.style.position = 'absolute'
            imgverme.style.top = '45%'
            imgverme.style.left = '0%'
            imgverme.style.right = '100%'
            imgverme.style.bottom = '55%'
            imgr.style.display = 'inline'
            imgr.style.position = 'absolute'
            imgr.style.top = '50%'
            imgr.style.left = '30%'
            imgr.style.right = '70%'
            imgr.style.bottom = '50%'
            imgr.style.width = '240px'
            imgr.style.height = 'auto'
    }
    // switch case adicionando o resultado na tela
    switch(mostrarResultado){
        case true:
            // aqui vai mostrar o resultado e seu texto
            resultado.style.display = 'block'
            resultado.textContent = 'Você ganhou ' + credito + " créditos sociais!"

            // adicionando o botão para ativar a nova função
            proximo.style.display = 'block'
            qpergunta = 5
            break
        default:
            // aqui vai mostrar o resultado e seu texto
            resultado.style.display = 'block'
            resultado.textContent = 'Você recebeu -' + credito + " créditos sociais!"

            // adicionando o botão para ativar a nova função
            proximo.style.display = 'block'
            qpergunta = 5
    }
    console.log('Debug: Fim Quarta pergunta - ', credito)
    console.log('Debug: Fim Quarta pergunta - ', qpergunta)
}

const verificarresposta5 = function () {
    // adicionando o valor do input para conseguir verificar se a resposta do usuario está correta
    inputresposta1.value = 'impossivel'
    inputresposta2.value = 'certo'
    inputresposta3.value = 'prestigio'


    // queryselector para verificar qual input está selecionado 
    let check = document.querySelector('input[name="input"]:checked').value

    // removendo os inputs e textos
    pergunta.textContent = ''
    inputresposta1.style.display = 'none'
    inputresposta2.style.display = 'none'
    inputresposta3.style.display = 'none'
    inputresposta4.style.display = 'none'
    inputresposta5.style.display = 'none'
    resposta1.style.display = 'none'
    resposta2.style.display = 'none'
    resposta3.style.display = 'none'
    resposta4.style.display = 'none'
    resposta5.style.display = 'none'
    verificar5.style.display = 'none'

    // switch case verificando se a resposta é certa ou não
    switch(check){
        case 'prestigio':
            // adicionando o valor ganho por acertar
            credito = 250
            creditohtml.value = parseFloat(creditohtml.value) + parseFloat(credito)
            
            // colocando a próxima pergunta
            mostrarResultado = true
            ok.play()

            // imagens
            imgok.style.display = 'inline'
            imgok.style.position = 'absolute'
            imgok.style.top = '50%'
            imgok.style.bottom = '50%'
            imgok.style.left = '65%'
            imgok.style.right = '35%'
            imgverde.style.display = 'inline'
            imgverde.style.position = 'absolute'
            imgverde.style.top = '45%'
            imgverde.style.left = '0%'
            imgverde.style.right = '100%'
            imgverde.style.bottom = '55%'
            imgrhappy.style.display = 'inline'
            imgrhappy.style.position = 'absolute'
            imgrhappy.style.top = '50%'
            imgrhappy.style.left = '30%'
            imgrhappy.style.right = '70%'
            imgrhappy.style.bottom = '50%'
            imgrhappy.style.width = '240px'
            imgrhappy.style.height = 'auto'
            break
        case 'impossivel':
            // adicionando o valor ganho por acertar
            credito = 7000
            creditohtml.value = parseFloat(creditohtml.value) - parseFloat(credito)
                
            // colocando a próxima pergunta
            mostrarResultado = false
            vineboombass.play()
            nightmare.play()
            ohmygod.play()

            // imagens
            imgscary.style.display = 'inline'
            imgscary.style.position = 'absolute'
            imgscary.style.top = '50%'
            imgscary.style.bottom = '50%'
            imgscary.style.left = '65%'
            imgscary.style.right = '35%'
            imgverme.style.display = 'inline'
            imgverme.style.position = 'absolute'
            imgverme.style.top = '45%'
            imgverme.style.left = '0%'
            imgverme.style.right = '100%'
            imgverme.style.bottom = '55%'
            imgrdw.style.display = 'inline'
            imgrdw.style.position = 'absolute'
            imgrdw.style.top = '50%'
            imgrdw.style.left = '30%'
            imgrdw.style.right = '70%'
            imgrdw.style.bottom = '50%'
            imgrdw.style.width = '240px'
            imgrdw.style.height = 'auto'
            break
        default:
            // adicionando o valor perdido por errar
            credito = 15
            creditohtml.value = parseFloat(creditohtml.value) + parseFloat(credito)
            
            // colocando a próxima pergunta
            mostrarResultado = true
            ok.play()

            // imagens
            imgok.style.display = 'inline'
            imgok.style.position = 'absolute'
            imgok.style.top = '50%'
            imgok.style.bottom = '50%'
            imgok.style.left = '65%'
            imgok.style.right = '35%'
            imgverde.style.display = 'inline'
            imgverde.style.position = 'absolute'
            imgverde.style.top = '45%'
            imgverde.style.left = '0%'
            imgverde.style.right = '100%'
            imgverde.style.bottom = '55%'
            imgrhappy.style.display = 'inline'
            imgrhappy.style.position = 'absolute'
            imgrhappy.style.top = '50%'
            imgrhappy.style.left = '30%'
            imgrhappy.style.right = '70%'
            imgrhappy.style.bottom = '50%'
            imgrhappy.style.width = '240px'
            imgrhappy.style.height = 'auto'
    }
    // switch case adicionando o resultado na tela
    switch(mostrarResultado){
        case true:
            // aqui vai mostrar o resultado e seu texto
            resultado.style.display = 'block'
            resultado.textContent = 'Você ganhou ' + credito + " créditos sociais!"

            // adicionando o botão para ativar a nova função
            proximo.style.display = 'block'
            qpergunta = 6
            break
        default:
            // aqui vai mostrar o resultado e seu texto
            resultado.style.display = 'block'
            resultado.textContent = 'Você recebeu -' + credito + " créditos sociais!"

            // adicionando o botão para ativar a nova função
            proximo.style.display = 'block'
            qpergunta = 6
            vineboombass.play()
    }
    console.log('Debug: Fim Quinta pergunta - ', credito)
    console.log('Debug: Fim Quinta pergunta - ', qpergunta)
}