function isNumber(variable) {
  if (isNaN(variable)) return false;
  return typeof variable === 'number';
}

function isString(cadena) {
  return Object.prototype.toString.call(cadena) === "[object String]"
}

function isEmptyString(cadena) {
  return cadena === '';
}

function isBoolean(booleano) {
  return typeof booleano === 'boolean'
}

function isNull(nullValue) {
  return nullValue === null;
}

function isUndefined(valorIndefinido) {
  return typeof valorIndefinido === 'undefined';
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

function isArray(array) {
  return Object.prototype.toString.call(array) === '[object Array]'
}

function isEmptyArray(array) {
  return array.length === 0;
}

function isFunction(funcion) {
  return Object.prototype.toString.call(funcion) === "[object Function]";
}

function isNotAnumber(posibleNaN) {
  // isNaN() tambien valora arrays, si el array contiene un solo elemento y es un numero
  // isNaN() devuelve false, si el array contiene mas de un elmento numerico o el unico elemento
  // no es un numero devolverá true, este comportamiento no es el esperado normalmente
  // isNaN('1') false
  // isNan(1)   false
  // isNaN(undefined) true
  // NaN == NaN  es false
  if (isArray(posibleNaN) || isUndefined(posibleNaN) ||
    isString(posibleNaN) || isObject(posibleNaN) ||
    isFunction(posibleNaN)) return false;
  return isNaN(posibleNaN);
}

var tipos = {
  numero    : 'number',
  cadena    : 'string',
  booleano  : 'boolean',
  nulo      : 'null',
  notAnumber: 'NaN',
  indefinido: 'undefined',
  objeto    : 'object',
  array     : 'array',
  funcion   : 'function'
};

function typeOf(variable) {
  var retorno;

  if (isNull(variable)) return tipos.nulo;

  if (isUndefined(variable))retorno = tipos.indefinido;

  if (isNumber(variable)) retorno = tipos.numero;

  if (isNotAnumber(variable)) retorno = tipos.notAnumber;

  if (isString(variable)) retorno = tipos.cadena;

  if (isBoolean(variable)) retorno = tipos.booleano;

  if (isObject(variable)) retorno = tipos.objeto;

  if (isArray(variable)) retorno = tipos.array;

  if (isFunction(variable)) retorno = tipos.funcion;

  return retorno;
}


function typeAndState(variable) {
  var retorno  = {};
  retorno.tipo = typeOf(variable);

  if (retorno.tipo === tipos.cadena) {
    retorno.vacio = isEmptyString(variable);
  }

  if (retorno.tipo === tipos.objeto) {
    retorno.vacio = isEmptyObject(variable);
  }

  if (retorno.tipo === tipos.array) {
    retorno.vacio = isEmptyArray(variable);
  }
  return retorno;
}


// Pruebas
var tiposDeDatos = {
  numero       : 1,
  numeroDecimal: 1.12,
  notAnumber   : 0 / 0,    // NaN
  unString     : 'hola',
  unStringVacio: '',
  booleano     : true,
  nulo         : null,
  indefinido   : void(0),
  objeto       : {x: 'a'},
  objetoVacio  : {},
  array        : ['a', 'b'],
  arrayVacio   : [],
  funcion      : function () {
  }
};

console.groupCollapsed('Probando typeOf');
var key;
for (key in tiposDeDatos) {
  if (tiposDeDatos.hasOwnProperty(key)) {
    console.log('Para el dato %s: %s', tiposDeDatos[key], typeOf(tiposDeDatos[key]));
  }
}
console.groupEnd('Probando typeOf');

console.groupCollapsed('Probando typeAndState');
for (key in tiposDeDatos) {
  if (tiposDeDatos.hasOwnProperty(key)) {
    console.log('Para el dato %s', tiposDeDatos[key]);
    console.log(typeAndState(tiposDeDatos[key]));
  }
}
console.groupEnd('Probando typeAndState');

console.groupCollapsed('Probando Funciones de Tipo');
for (key in tiposDeDatos) {
  if (tiposDeDatos.hasOwnProperty(key)) {
    console.groupCollapsed('Para el dato %s', tiposDeDatos[key]);
    console.log('IsNumber: ' + isNumber(tiposDeDatos[key]));
    console.log('isNotAnumber: ' + isNotAnumber(tiposDeDatos[key]));
    console.log('isString: ' + isString(tiposDeDatos[key]));
    console.log('isBoolean: ' + isBoolean(tiposDeDatos[key]));
    console.log('isNull: ' + isNull(tiposDeDatos[key]));
    console.log('isUndefined: ' + isUndefined(tiposDeDatos[key]));
    console.log('isObject: ' + isObject(tiposDeDatos[key]));
    console.log('isArray: ' + isArray(tiposDeDatos[key]));
    console.log('isFunction: ' + isFunction(tiposDeDatos[key]));
    console.groupEnd('Para el dato %s', tiposDeDatos[key]);
  }
}
console.groupEnd('Probando Funciones de Tipo');

