/*
Minimum

The previous chapter introduced the standard function Math.min that returns its smallest argument. We can do that ourselves now. Write a function min that takes two arguments and returns their minimum.
*/

function min(a,b){
	return a < b ? a : b;
}

console.log(min(1,2));
console.log(min(2,1));
console.log(min(2,2));