/*
The sum of a range
The introduction of this book alluded to the following as a nice way to
compute the sum of a range of numbers:

console . log ( sum ( range (1 , 10) ));

Write a range function that takes two arguments, start and end , and
returns an array containing all the numbers from start up to (and in-
cluding) end .

Next, write a sum function that takes an array of numbers and returns
the sum of these numbers. Run the previous program and see whether
it does indeed return 55.

As a bonus assignment, modify your range function to take an optional
third argument that indicates the “step” value used to build up the
array. If no step is given, the array elements go up by increments of
one, corresponding to the old behavior. The function call range(1, 10, 2)
should return [1, 3, 5, 7, 9] . Make sure it also works with negative step
values so that range(5, 2, -1) produces [5, 4, 3, 2] .
 */

function range(start, end){
  //devuelve un array que contiene todos los numeros desde el primero al ultimo
  // ambos inclusive
  var arrayRange = [];
  for(start; start <= end; start++){
    arrayRange.push(start);
  }
  return arrayRange;
}

console.log(range(1,10));


function sum(arrayNumbers){
  var sum = 0;
  for(var i in arrayNumbers){
    sum += parseInt(arrayNumbers[i]);
  }
  return sum;
}

console.log(sum(range(1,10)));
console.log(sum(range(1,5)));


function rangeModified(start, end, step){
  step = step !== void(0) ? step : 1;

  var arrayRange = [];
  for(start; start <= end; start++){
    arrayRange.push(start);
    start += step-1;
  }
  return arrayRange;
}

console.log(rangeModified(1, 10));
console.log(rangeModified(1, 10, 1));




function rangeStep(start, end, step) {
  step = step !== void(0) ? step : 1;

  var arrayRange = [];
  for (var i = start; i <= end; i += step) {
    arrayRange.push(i);
  }
  return arrayRange;
}

console.log(rangeStep(1, 10, 3));


function createArray(start, end) {
  var arrayComposed = [];
  for (var i = start; i <= end; i++) {
    arrayComposed.push(i);
  }
  return arrayComposed;
}

function stepArray(array, step) {
  step = step !== void(0) ? step : 1;

  if (step < 0){
    step *= -1;
    array.reverse();
  }

  var ArrayStep = [];

  for (var index = 0; index < array.length; index += step) {
    ArrayStep.push(array[index]);
  }

  return ArrayStep;
}

console.log(stepArray(createArray(1, 15), 2));

function rangeStepHighOrder(start, end, step) {
  return stepArray(createArray(start, end), step);
}


console.log(rangeStepHighOrder(1, 20, 3));
console.log(rangeStepHighOrder(1, 30, -3));
