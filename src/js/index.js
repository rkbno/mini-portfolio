/* 

    OBJETIVO - quando clicarmos na aba temos que mostrar o conteúdo da aba que foi clicada pelo usuário e esconder o conteúdo da aba anterior

    - passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML

    - passo 2 - dar um jeito de identificar o clique no elemento da aba

 	- passo 3 - quando o usuário clicar, desmarcar a aba selecionada

	- passo 4 - marcar a aba clicada como selecionado

	- passo 5 - esconder o conteúdo anterior

	- passo 6 - mostrar o conteúdo da aba selecionada

*/

// passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    // passo 2 - dar um jeito de identificar o clique no elemento da aba
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba) {
    // passo 3 - quando o usuário clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    // passo 4 - marcar a aba clicada como selecionado
    aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba){
    // passo 5 - esconder o conteúdo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    // passo 6 - mostrar o conteúdo da aba selecionada
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}

/* OBJETIVO DOS PROJETOS!! TEM QUE MOSTRAR O PROJETO(IMAGEM) SEGUINTE QUANDO CLICAR EM CIMA DA SETA, OU ENTÃO VOLTAR A IMAGEM QUANDO CLICAR EM CIMA DA SETA DE VOLTAR 

- passo 1 - dar um jeito de pegar os elementos que representam as imagens no HTML

- passo 2 - dar um jeito de identificar o clique no elemento da aba

 - passo 3 - quando o usuário clicar, desmarcar a aba selecionada

- passo 4 - marcar a aba clicada como selecionado

- passo 5 - esconder o conteúdo anterior

- passo 6 - mostrar o conteúdo da aba selecionada

*/


//- passo 1 - dar um jeito de pegar os elementos que representam o carrossel no HTML
const botoesCarossel = document.querySelectorAll(".botao")
const imagens = document.querySelectorAll(".imagem")

//- passo 2 - dar um jeito de identificar o clique no botao
botoesCarossel.forEach ((botao, i)=> {
    botao.addEventListener("click", function () {

        // - passo 3 - quando o usuário clicar, desmarcar a seleção do botão
        desativarBotaoSelecionado()  
        //- passo 4 - marcar o botao clicado como selecionado
        marcarBotaoSelecionado(botao)
        //- passo 5 - esconder o conteúdo anterior
        esconderImagemAtiva()
        //- passo 6 - mostrar a proxima imagem
        mostrarImagem(i)   
    })
}) 
    

function desativarBotaoSelecionado(){
    const botaoSelecionado = document.querySelector(".on")
    botaoSelecionado.classList.remove("on")
  }  



  function marcarBotaoSelecionado(botao){
    botao.classList.add("on")
  }


  function esconderImagemAtiva(){
    const imagemAtiva = document.querySelector(".ativa")
    imagemAtiva.classList.remove("ativa")
}

function mostrarImagem(i){
    imagens[i].classList.add("ativa")
}    

// OBEJETIVO: mostrar uma mensagem quando o mouse passar por cima da imagem 

// chamar o bloco
const bloco = document.querySelector('.bloco')
const p = document.querySelector('.paragrafo')

// 1 - criação do forEach
imagens.forEach((element, index)=>{
    // 2 - quando passa o mouse por cima da imagem mostra um bloco com uma mensagem
    element.addEventListener('mouseover', ()=>{
        // 3 - mostrar a mensagem de cada imagem
        mostrarMensagem(index);
    });
    // 4 - quando o mouse sair de cima da imagem ocultar a mensagem e o bloco 
    element.addEventListener('mouseout', () => {
        ocultarMensagem();
    });
});
// 4 - criação da função mostrarMensagem chamada
function mostrarMensagem(index){
    // 5 - chamar o bloco da mensagem 
    const mensagens = [
        'Como jogar: clicando em 1 carta, ela irá virar, ache a combinação dessa carta e curta o video de backgroud, o jogo foi desenvolvido em HTML, CSS, JavaScript e BootStrap.',

        'Um Web site que fiz em homenagem ao meu héroi de infância, desenvolvido em HTML, CSS e JavaScript.',

        'Na minha opinião uma das melhores séries já feitas, desenvolvido em HTML, CSS e JavaScript.',

        'Site criado como freelancer, fiz ele totalmente do zero, sem nem mesmo pegar referencia na internet, desenvolvido em HTML, CSS e JavaScript.',
    ];
    
    // 6 - fazer o bloco ficar visivel
    bloco.style.opacity = '70%';
    // 7 - adicionar a mensagem dentro do bloco 
    p.innerHTML = mensagens[index];
};

// 7 - criação da função de ocultarMensagem chamada
function ocultarMensagem(){
    bloco.style.opacity = '0';
};






