let resultado = 0;
let simbolo_operacao = " ";
function TrocaCorDoFundoQuandoClicar ( e ){ 
    document.getElementById("Fundo").style.backgroundColor = getRandomColor();
}
function TrocaCorDoFundoclicando ( e ){ 
    document.getElementById("FundoSite").style.backgroundColor = getRandomcolor();
}
function getRandomColor () {
    var letras = '0123456789ABCDEF';
    var cor = '#'
    for (var i = 0; i< 6; i++) {
        cor+= letras[Math.floor(Math.random()*16)];
    }
    return cor;
}
function getRandomcolor () {
    var letras = '9876543210FEDCBA';
    var cor = '#'
    for (var i = 0; i< 6; i++) {
        cor+= letras[Math.floor(Math.random()*16)];
    }
    return cor;
}
function PegarValorBotao (objeto){
    if( objeto.innerHTML !== ".") {
        let numero = parseFloat ( objeto.innerHTML );
        document.getElementById ("calculando").value += numero;
    }
    else {
        document.getElementById ("calculando").value += ".";
    }
}
function PegarValorOperador (operador){
    simbolo_operacao = operador;
    resultado = parseFloat (document.getElementById("calculando").value);
    document.getElementById("calculando").value = " ";
}
function CalcularResultado () {
    var numero = parseFloat(document.getElementById("calculando").value);
    if (simbolo_operacao == '+') {
        resultado = resultado + numero;
    }
    if (simbolo_operacao == '-') {
        resultado = resultado - numero;
    }
    if (simbolo_operacao == '/') {
        resultado = resultado / numero;
    }
    if (simbolo_operacao == 'x') {
        resultado = resultado * numero;
    }
    document.getElementById("calculando").value = resultado;
    resultado = 0;
}
function Clean (){
    document.getElementById("calculando").value = " ";
    resultado = 0;
    simbolo_operacao = " ";
}