// tenemos una función que tarda en ejecutarse
function calculaPrimo(limite, callback) {
  limite = limite || 100;
  for (var i = 2; i <= limite; i++) {
    var x    = i;
    var cont = 0;
    do {
      x--;
      if (x === 1) cont--;
      if (i % x === 0) cont++;
      if (cont > 0) break;
    } while (x > 2);
    // si cont === 0 i es primo
  }
  if(callback){
    callback(null, 'finalizado con limite: ' + limite);
  }else{
    console.log('finalizado con limite: ' + limite);
  }

}


// Espera como argumentos:
// 1) la definicion de una funcion
// 2) un array de argumentos para la función (opcional)
// 3) el contexto para ejecutar la funcion (opcional)
// 4) Un callback para ejecutar al finalizar la función (opcional)
// makeAsync(miFuncion);
// makeAsync(miFuncion, [argumento1, argumento2...]);
// makeAsync(miFuncion, [argumento1, argumento2...], this);
// Si no tiene argumentos pero si contexto pasar null como segundo argumento
// makeAsync(miFuncion, null, this);
// makeAsync(miFuncion, null, null, callback);
function makeAsync(miFuncion, args, context, callback) {
  args    = args || [];
  context = context || this;
  setTimeout(function () {
    miFuncion.apply(context, args);
    if(callback) callback();
  }, 0);
}

//console.log('1');
//makeAsync(calculaPrimo);
//console.log('2');
//makeAsync(calculaPrimo, [5000]);
//console.log('3');
//makeAsync(calculaPrimo, [6000], this);
//console.log('4');
//
//function obtenerResultado(err, resultado) {
//  if (err) throw err;
//  console.log(resultado);
//}
//makeAsync(calculaPrimo, [7000, obtenerResultado], this);
//console.log('5');
//
//makeAsync(calculaPrimo, [8000, obtenerResultado], null, function(){
//  console.log('He finalizado todo');
//});
//console.log('6');


// 1
// 2
// 3
// 4
// 5
// 6
// finalizado con limite: 7000
// finalizado con limite: 8000
// He finalizado todo


function asyncFactory(miFuncion, args, context, callback) {
    args    = args || [];
    context = context || this;
  return function () {
    setTimeout(function () {
      miFuncion.apply(context, args);
      if (callback) callback();
    }, 0);
  }
}

var primoSimple = asyncFactory(calculaPrimo);
var primo5000 = asyncFactory(calculaPrimo, [5000]);
var primo6000 = asyncFactory(calculaPrimo, [6000], this);
function obtenerResultado(err, resultado) {
  if (err) throw err;
  console.log(resultado);
}
var primo7000 = asyncFactory(calculaPrimo, [7000, obtenerResultado], this);
var primo8000 = asyncFactory(calculaPrimo, [8000, obtenerResultado], null, function(){
  console.log('He finalizado todo');
});


primoSimple();
primo6000();
calculaPrimo(50000);
calculaPrimo(60000);
primo5000();
primo7000();
calculaPrimo(70000);

// finalizado con limite: 50000
// finalizado con limite: 60000
// finalizado con limite: 70000
// finalizado con limite: 8000
// He finalizado todo
// finalizado con limite: 100
// finalizado con limite: 6000
// finalizado con limite: 5000
// finalizado con limite: 7000
