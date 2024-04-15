function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    let sorteados = [];
    let numero;

    if (de > ate || ate - de < quantidade) {
        alert('Atenção! O campo "Do número" deve ser maior que o campo "Até o número" e a diferença entre estes deve ser maior que o campo "quantidade de números"');
        aterarStatusBotao();
    } else {
        for ( let i = 0; i < quantidade; i++){
            numero = obterNumeroAleatorio(de, ate);
    
            while (sorteados.includes(numero)) {
                numero = obterNumeroAleatorio(de, ate);
            }
    
            sorteados.push(numero);
        }
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    
        aterarStatusBotao();
    }
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function aterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';

    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    aterarStatusBotao();
}

