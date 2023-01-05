//estrategia 1 para gerar um valor padrao
function Soma1(a,b,c) {
    a=a || 1 
    b=b || 1 
    c=c || 1 
    return a+b+c 
}

//estrategia 2 para gerar um valor padrao e mais recomendada
function Soma2(a,b,c) {
    a = a !== undefined ? a: 1
    b = 1 in arguments ? a: 1
    c = isNaN(c) ? 1:c
} 
//forma padrao
function Soma3(a=1,b=2,c=3) {
    return a+b+c
}