const pessoa = {
    saudacao: 'bom dia',
    falar(){
   console.log(this.saudacao)
    }
}
pessoa.falar()

//conflito entre paradigmas funcional e OO
//const falar = pessoa.falar()
//falar()

//passa um objeto no qual você quer que seja resolvido o this

const falarDepessoa = pessoa.falar.bind(pessoa)
falarDepessoa()
falarDepessoa()