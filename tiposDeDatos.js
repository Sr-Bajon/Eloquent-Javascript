var numero = 1;
console.log(isNumber(numero)); // true
var numeroDecimal = 1.12;
console.log(isNumber(numeroDecimal)); // true

function isNumber(variable) {
  return typeof variable === 'number';
}

/*
typeof Inifinity  = 'number'
typeof -Inifinity  = 'number
typeof NaN        = 'number'
*/

Boolean(NaN == NaN);  // false
Boolean(NaN === NaN); // false

var notAnumber = 0 / 0;
isNaN(notAnumber);  // true
isNaN(numero);  // false

var unString = 'hola';
console.log(isString(unString)); // true

function isString(cadena) {
  return typeof cadena === 'string';
}

function isEmptyString(cadena) {
  return cadena === '';
}


var booleano = true;
console.log(isBoolean(booleano));

function isBoolean(booleano) {
  return typeof booleano === 'boolean'
}

var nulo = null;
 //typeof null // 'object'
 //8 * null   // 0
 //null == undefined   // true
 //null === undefined  // false
console.log(isNull(nulo));

function isNull(nullValue) {
  return nullValue === null;
}

var indefinido = void(0);  // void(loquesea) devuelve undefined
console.log(isUndefined(indefinido));

function isUndefined(valorIndefinido) {
  return typeof valorIndefinido === 'undefined';
}


var objeto = {};  // objeto de tipo  {}, pq arrays, null, undefined y
                  // funciones son tb objetos en javascript
console.log(isObject(objeto));
function isObject(obj) {
  return obj === Object(obj);
}

function isEmptyObject(objeto) {
  return objeto.length === 0;
}

var array = [];
console.log(isArray(array));
function isArray(array) {
  return Object.prototype.toString.call(array) === '[object Array]'
}

function isEmptyArray(array) {
  return array.length === 0;
}


var funcion = function () {};

function isFunction(funcion) {
  return Object.prototype.toString.call(array) === "[object Function]";
}
