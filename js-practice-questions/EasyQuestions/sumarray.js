// find sum of all the elements of an array
let arr = [1, 2, 3, 4, 5];
var i;
var sum =0;
 for(i=0; i<arr.length; i++){
    sum= sum + arr[i];
 }

 console.log('Array values: ' + arr.join(', ') + ' | Sum is: ' + sum);