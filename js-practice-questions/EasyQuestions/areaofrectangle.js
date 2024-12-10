// write a function to calculate the area of a rectangle given its length and breadth

// AOR = lxb
// normal function
function areaofrectangle(length, breadth){
    return length * breadth;
}
console.log('Normal function')
console.log('Area of rectangle is: '+areaofrectangle(2,3)); // 6
let area = areaofrectangle(2,3);
console.log(area)

// arrow function
const areaofrectangle2 = (length, breadth) => {
    return length * breadth;
}
console.log('Arrow function');
console.log('Area of rectangle is: '+areaofrectangle2(10,3)); // 30