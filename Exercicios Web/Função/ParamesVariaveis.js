function Soma() {
    let soma=0  
    for (let i in arguments) 
    {
        soma+= arguments[i]
    }
        return  console.log("A soma dos argumentos passados são: " + soma);
}
Soma()
Soma(1)
Soma(16,4)
Soma(20,20,20,50)