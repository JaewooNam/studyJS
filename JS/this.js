// stephengrider.github.io/playgrounds
class Car {
  setDriveSound(sound) {
    this.sound = sound
  }

  drive() {
    return this.sound
  }
}

const car = new Car()
car.setDriveSound('vroom')

const drive = car.drive

drive() // undefined err

//////////// solution //////////////
// 1.Using arrow function
// 2. Binding this
// constructor() {
//   this.drive = this.drive.bind(this)
// }
