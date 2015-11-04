// Un closure es un tipo especial de objeto que combina dos cosas: una función, y el
// entorno en que se creó esa función. El entorno está formado por las variables locales
// que estaban dentro del alcance en el momento que se creó el closure.

// ejemplo 1
// observa como creaFunc() devuelve la función muestraNombre que puede acceder
// a la variable local definida dentro de creaFunc.
function creaFunc() {
  var nombre = "Mozilla";
  function muestraNombre() {
    alert(nombre);
  }
  return muestraNombre;
}

var miFunc = creaFunc();
miFunc();


// ejemplo 2
// en este ejemplo creaSumador recibe un parametro y devuelve una función que usa ese
// parametro recibido, ademas la funcion devuelta espera otro parametro para completar
// la suma
// a esta estructura se la llama fabrica de funciones
function creaSumador(x) {
  return function(y) {
    return x + y;
  };
}

var suma5 = creaSumador(5);
var suma10 = creaSumador(10);

console.log(suma5(2));  // muestra 7
console.log(suma10(2)); // muestra 12


// patron modulo
// se trata de usar un closure para crear una namespace, de forma que se puedan usar
// variables de forma privada sin ensuciar el espacio de nombres global
// vemos que Counter devuelve un objeto con tres funciones,
// estas funciones utilizan una funcion privada del closure, changeBy, que no puede ser accedida desde fuera
// changeBy a su vez, cambia o devuelve el valor de una variable privada, privateCounter,
// definida dentro del closure.
// observa tambien que se trata de una funcion anonima, por lo que la variable Counter se puede
// usar directamente
var Counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }
})();

alert(Counter.value()); /* Muestra 0 */
Counter.increment();
Counter.increment();
alert(Counter.value()); /* Muestra 2 */
Counter.decrement();
alert(Counter.value()); /* Muestra 1 */



// patron modulo, ejemplo 2
// este ejemplo es igual que el anterior, pero ahora no es una funcion anonima, por lo que permite
// crear variables independientes entre si, se trata de una factoria de funciones con el patron modulo

var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }
};

// observa que cada variable creada de makeCounter es independiente y por lo tanto pueden
// tener valores diferentes en el mismo momento.
var Counter1 = makeCounter();
var Counter2 = makeCounter();
alert(Counter1.value()); /* Muestra 0 */
Counter1.increment();
Counter1.increment();
alert(Counter1.value()); /* Muestra 2 */
Counter1.decrement();
alert(Counter1.value()); /* Muestra 1 */
alert(Counter2.value()); /* Muestra 0 */


// Un error comun, crear loops dentro un closure
// consideremos el siguiente ejemplo
// la intención es asignar a tres elementos del dom buscando por id un texto de
// ayuda
// pero el caso es que no funciona, los tres textos mostrarán 'Edad (debes tener mas de 16 años)'
// ¿esto porque? Por que las tres funciones se han creado dentro del closure y comparten el mismo
// entorno por lo que sería como si las tres se llamaran con los mismos argumentos en vez de con tres
// argumentos diferentes, se llamaría a las 3 con el ultimo argumento asignado
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Dirección de correo electrónico'},
      {'id': 'name', 'help': 'Nombre completo'},
      {'id': 'age', 'help': 'Edad (debes tener más de 16 años)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
  }
}

setupHelp();

// una solucion al anterior ejemplo es usar mas closures
// aqui en vez de crear tres funciones que compartirian el mismo entorno se llama a otro
// closure fabrica de funciones, que recibe un parametro y devuelve una funcion, cada una
// de ellas independiente y creada con el parametro que ha recibido makeHelpCallback
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function makeHelpCallback(help) {
  return function() {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Dirección de correo electrónico'},
      {'id': 'name', 'help': 'Nombre completo'},
      {'id': 'age', 'help': 'Edad (debes tener más de 16 años)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}

setupHelp();
