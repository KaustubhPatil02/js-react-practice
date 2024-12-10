let car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
}

let model = {
    species: 'Human',
    gender: 'Male',
    planet: 'Earth',
    Age: NaN,
}
console.log(model)
console.log(car)

// method for car to start the engine
car.startEngine = function(){
    // console.log('Car Started')    1
    return 'Engine started';
}
console.log(car.startEngine());
// car.startEngine();               1







