// check whether the year is leap year or not
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !==0) || year % 400 === 0) {
      console.log(year + " is a leap year");
    return true;
  } else {
      console.log(year + " is not a leap year");
    return false;
  }
}
console.log(isLeapYear(2020));
console.log(isLeapYear(1457));
console.log(isLeapYear(7658));

console.log('Arrow Functions')
// arrow function
const isLeapYear2 = (year) => {
    if ((year % 4 === 0 && year % 100 !==0) || year % 400 === 0) {
        console.log(year + " is a leap year");
      return true;
    } else {
        console.log(year + " is not a leap year");
      return false;
    }
}
console.log(isLeapYear2(2022));
console.log(isLeapYear2(2034));
console.log(isLeapYear2(1992));
