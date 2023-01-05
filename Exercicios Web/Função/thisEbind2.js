function pessoa(){
    this.idade = 0
    //funcao dispara uma outra funcao
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this),1000)
}
new pessoa
