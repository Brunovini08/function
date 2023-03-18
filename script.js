//FUNCAO

//Essa é uma funcao sem retorno 
function saudacao(nome){
    console.log('BOMDIA' , nome)
}
saudacao('Bruno');


//Essa é uma funcao com retorno 
function soma(x, y){
    const resultado = x + y;
    return resultado;
}
console.log(soma(1, '1002'));


//Essa é uma funcao dentro de uma variavel
const raiz = function(n){
 return n ** 0.5;
};

console.log(raiz(100))

//Essa é uma arrow function

const divisao = (x, y) => {
    return x / y
};

console.log(divisao(10, 2))