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

console.log(Object.prototype.toString.call(numero));         // [object Number]
console.log(Object.prototype.toString.call(numeroDecimal));  // [object Number]
console.log(Object.prototype.toString.call(notAnumber));     // [object Number]
console.log(Object.prototype.toString.call(unString));       // [object String]
console.log(Object.prototype.toString.call(booleano));       // [object Boolean]
console.log(Object.prototype.toString.call(nulo));           // [object Null]
console.log(Object.prototype.toString.call(indefinido));     // [object Undefined]
console.log(Object.prototype.toString.call(Infinity));       // [object Number]
console.log(Object.prototype.toString.call(objeto));         // [object Object]
console.log(Object.prototype.toString.call(array));          // [object Array]
console.log(Object.prototype.toString.call(funcion));        // [object Function]
