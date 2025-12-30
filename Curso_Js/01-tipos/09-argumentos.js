//funcion:lo que esta dentro de los parentesis se le llama parametro.
function suma(a, b) {
    console.log(arguments);//Esta no es la forma recomendada de visualizar todos los argumentos.
    return a + b
}
//Cuando mandamos a llamar a la funcion lo que se encuentra dentro de los parentesis se le llama argumento.
let resultado = suma(5, 6, 1, 2, 3);
console.log(resultado);
console.log(typeof suma);