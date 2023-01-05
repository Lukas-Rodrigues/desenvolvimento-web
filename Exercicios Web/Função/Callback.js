const fabricante = ["mercedes","ferrrari","BMW"]

function Impirmir(nome,indice) {
     console.log(`${indice+1}.${nome}`)
}
fabricante.forEach(Impirmir)