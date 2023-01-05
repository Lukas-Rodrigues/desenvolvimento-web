class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`meu nome é ${this.nome}`)
    }
}


const p1 = new Pessoa("Lucas")
p1.falar();