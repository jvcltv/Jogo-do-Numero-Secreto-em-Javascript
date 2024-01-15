listaDeNumeros = [];
let Limite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let parag = "p";
let Titulo = "h1";
let tentativas = 1;
function textosNaTela(tag,Texto)
{ 
    let campo = document.querySelector(tag);
    campo.innerHTML = Texto; 
    responsiveVoice.speak(Texto, 'Brazilian Portuguese Female', {rate:1.2} );
}
function exibirMessagemInicial() 
{
    textosNaTela (Titulo,"Bem vindo ao jogo do número secreto"); 
    textosNaTela (parag, `escolha um número de 1 a ${Limite}`);    
}

exibirMessagemInicial();

function verificarChute() 
{
    let chute = document.querySelector("input").value; 
    if (chute == numeroSecreto)
    {
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `parabens você acertou com ${tentativas} ${palavraTentativa}`;
        textosNaTela (Titulo,"VOCÊ GANHOU!!");
        textosNaTela (parag, mensagemTentativa);
        document.getElementById ("reiniciar").removeAttribute ("disabled");
    }
    else
    {
        if (chute > numeroSecreto) 
        {
            textosNaTela (parag,"é um numero menor");
        }
        else
        {
            textosNaTela (parag,"é um numero maior");
        }
        
        tentativas++;
        limparCampo();
        }
    }
function gerarNumeroAleatorio()
{
    let numeroEscolhido = parseInt (Math.random () * Limite + 1);
    let numeroDeElementos = listaDeNumeros.length;

    if (numeroDeElementos == Limite) 
    {
        listaDeNumeros = [];
    }
    if (listaDeNumeros.includes (numeroEscolhido))
    {
    return gerarNumeroAleatorio();
    }
    else 
    {
        listaDeNumeros.push(numeroEscolhido);
        console.log (listaDeNumeros);
        return numeroEscolhido;
    }
}
function limparCampo()
 {
    chute = document.querySelector("input");
    chute.value = " ";
}

function reiniciarJogo() 
{   
    numeroSecreto = gerarNumeroAleatorio(); 
    limparCampo();
    tentativas = 1;
    exibirMessagemInicial();
    document.getElementById("reiniciar").setAttribute ("disabled","true");
}