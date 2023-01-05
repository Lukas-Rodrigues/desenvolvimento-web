const soma = function(a,b){return a+b}
const ImprimirResultado = function (a,b,operacao=soma){
    console.log(operacao(a,b))
}
ImprimirResultado(4,6)