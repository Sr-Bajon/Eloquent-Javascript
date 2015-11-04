var numero = 1;
var numeroDecimal = 1.12;
var notAnumber = 0 / 0;    // NaN
var unString = 'hola';
var booleano = true;
var nulo = null;
var indefinido = void(0);
var objeto = {};
var array = [];
var funcion = function () {};

console.log(typeof numero);         // number
console.log(typeof numeroDecimal);  // number
console.log(typeof notAnumber);     // number
console.log(typeof unString);       // string
console.log(typeof booleano);       // boolean
console.log(typeof nulo);           // object
console.log(typeof indefinido);     // undefined
console.log(typeof Infinity);       // number
console.log(typeof objeto);         // object
console.log(typeof array);          // object
console.log(typeof funcion);        // function
