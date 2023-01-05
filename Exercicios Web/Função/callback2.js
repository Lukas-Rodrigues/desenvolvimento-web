const notas = [8.4,7,6,4.4,2.2];

//sem callback
let notasBAixas = []
for(let i in notas ){
    if(notas[i]< 7){
        notasBAixas.push(notas[i])
    }
}
console.log(notasBAixas)

//com callback
//função que vai filtrar os elementos de um array em cima de um determinado criterio. retorna true ou false, sendo true
//sendo true para adicionar
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2)

//pode usar o Arrow para ficar ainda melhor 
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)