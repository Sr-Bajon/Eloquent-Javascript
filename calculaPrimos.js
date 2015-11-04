// numero mayor que 1 que solo es divisible por si mismo y por 1
function calculaPrimoConSalida(limite){
  console.groupCollapsed('Calculo de numeros primos');
  for(var i = 2; i <= limite; i++){
    var x = i;
    var cont = 0;
    do{
      x--;
      if(x === 1) cont--;
      if(i%x === 0) cont++;
      if(cont > 0) break;
    }while(x > 2);

    if(cont === 0) console.log('El numero %s es primo', i);
  }
  console.groupEnd('Calculo de numeros primos');
}

console.time('Calculo numeros primos con salida');
calculaPrimoConSalida(30000);
console.timeEnd('Calculo numeros primos con salida');



function calculaPrimo(limite){
  for(var i = 2; i <= limite; i++){
    var x = i;
    var cont = 0;
    do{
      x--;
      if(x === 1) cont--;
      if(i%x === 0) cont++;
      if(cont > 0) break;
    }while(x > 2);
    // si cont === 0 i es primo
  }
}

console.time('Calculo numeros primos');
calculaPrimo(30000);
console.timeEnd('Calculo numeros primos');
