/*
Recursion

We’ve seen that % (the remainder operator) can be used to test whether a number
is even or odd by using % 2 to check whether it’s divisible by two. Here’s
another way to define whether a positive whole number is even or odd:

 Zero is even.     // even es par

 One is odd.       // odd es impar

 For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description.
The function should accept a number parameter and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way
to fix this?
*/

/*
Restar -2 al numero dado hasta que sea 0 o 1, determinando asi si es par o impar
 */

function isEven(numero){
  if(numero === 0) return true;
  if(numero === 1) return false;
  var operacion = numero < 0 ? +2 : -2;
  var resultado = isEven(numero + operacion);
  if (resultado !== void(0)) return resultado;
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
