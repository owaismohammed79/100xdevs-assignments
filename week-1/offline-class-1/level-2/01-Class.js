
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs` //the dollar sign is used to interpolate the variables and the backticks are used to enclose the string. By interpolating the variables, we can use them in the string otherwise we would have to concatenate them using the + operator
  }
}

let dog = new Animal('Dog', 4)
console.log(dog.describe())
