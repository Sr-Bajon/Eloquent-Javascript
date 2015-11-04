function hagoAlgoLento(segundos) {
   var inicio, fin, diferencia = 0, x = 0;
   do {
       inicio = new Date().getTime();
       while (x < 0.99999) {
           x = Math.random();
       }
       x = 0;
       fin = new Date().getTime();
       diferencia += fin - inicio;
   } while (diferencia < (segundos * 1000));
   return 5;
}

//var resultado = hagoAlgoLento(3);
//console.log('El resultado es %s', resultado);
//
//function suma(valor){
//  var valor2 = resultado || 0;
//  return valor + valor2;
//}
//console.log('La suma es %s', suma(4));  // 8


var resultado;
setTimeout(function(){
  resultado = hagoAlgoLento(3);
  console.log('El resultado es %s', resultado);
}, 0);

function suma(valor){
  var valor2 = resultado || 0;
  return valor + valor2;
}

console.log('La suma es %s', suma(4));
