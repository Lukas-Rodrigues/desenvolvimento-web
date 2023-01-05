 //factory simples
 //o que é uma factory? é uma função que retorna um novo objeto

 function CriarPessoa(){
    return{
        nome: 'lucas',
        sobrenome: 'rodrigues'
    }
 }
 console.log(CriarPessoa())

  //outra factory

function CriarProduto(name, valor) {
    return {
        name,
        valor
    }
}
console.log(CriarProduto("TV",1500))