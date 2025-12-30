// Short-circuit 

// Falso 
// false
// 0
// ''  cadena vacia
// null
// undefined
// NaN
let nombre = 'Maximiliano';
let username = nombre || 'Anonimo';
console.log(username);

function fn1() {
    console.log('Soy la funcion 1');
    return false;
}

function fn2() {
    console.log('Soy la funcion 2');
    return true;
}

let x = fn1() && fn2();