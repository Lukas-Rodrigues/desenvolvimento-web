function pessoa(){
    this.idade = 0
    //funcao dispara uma outra funcao
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    },1000)
}
new pessoa