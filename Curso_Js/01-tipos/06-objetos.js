// Personaje de TV
let nombre = "Goku";
let anime = "Dragon Ball Z";
let edad = 42;

let personaje = {
    nombre: 'Goku',
    anime: 'Dragon Ball Z',
    edad: 42, 
};
console.log(personaje); 
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 53;

let llave = 'edad';
personaje['edad'] = 59;

delete personaje.anime;

console.log(personaje);