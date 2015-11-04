/*
Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
*/

var ladrillo = '#';
for(var i = 0; i < 7; i++){
  console.log(ladrillo + '\n');
  ladrillo += '#';
}
