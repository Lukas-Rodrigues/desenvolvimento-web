 //crindo de forma literal
 function func1(){}

 //armazenar em uma variavel
 const fun2 = function (){}

 //armezar dentro de um array
 const array = [function(a,b){return a+b},fun2,func1]
console.log("O valor é : " + array[0](10,10))

//armazenar em um atributo de objeto

const objeto = {}

objeto.falar = function(){return "opa!"}
console.log(objeto.falar())

//uma funcao pode retornar ou conter uma outra função
function Soma (a,b) {
    return function (c){
        console.log(a+b+c)
    }
}
Soma(10,15)(10) 