
// 생성자 함수는 비워둠
function Person(){

}

Person.prototype.name = 'Nicholas'
Person.prototype.age = 30
Person.prototype.job = 'Software Engineer'
Person.prototype.sayName = function() {
  console.log(this.name)
}

const person1 = new Person()
person1.sayName()

const person2 = new Person()
person2.sayName()

console.log(person1.sayName === person2.sayName)


// Inheritance using prototype chain
function SuperType() {
  this.property = true
}

SuperType.prototype.getSuperValue = function(){
  return this.property
}

function SubType(){
  this.subproperty = false
}

// Inherit SuperType
SubType.prototype = new SuperType()
SubType.prototype.getSubValue = function() {
  return this.subproperty
}

const instance = new SubType()
console.log(instance.getSuperValue()) // true
