/*
Write a program that creates a string that represents an 8 × 8 grid, using
newline characters to separate lines. At each position of the grid there
is either a space or a “#” character. The characters should form a chess
board.
Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a variable
size = 8 and change the program so that it works for any size , outputting
a grid of the given width and height.
*/

var size = 8;
var caracter1 = ' ';
var caracter2 = '#';
var primerCaracter = '';
var segundoCaracter = '';

for(var i = 0; i < size; i++){
  var linea = '';

  if(i % 2 !== 0){
    primerCaracter = caracter1;
    segundoCaracter = caracter2;
  }else{
    primerCaracter = caracter2;
    segundoCaracter = caracter1;
  }

  for(var x = 0; x < size; x++){
    linea += x % 2 !== 0 ? primerCaracter : segundoCaracter;
  }

  console.log(linea + '\n');
}
