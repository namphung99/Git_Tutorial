var chalk =require('chalk')

function Dog(name){
    this.name = name;
    this.stomach = [];
}  

Dog.prototype.eat = function(Cat){
    this.stomach.push(Cat);
}

Dog.prototype.sayHi = function(){
    console.log("Hi!I am a Dog!!! My name is " + chalk.red(this.name));
}

module.exports = Dog;