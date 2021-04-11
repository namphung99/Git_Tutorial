var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var cat = new Cat();
var mouse = new Mouse("Jerry");
var dog = new Dog();

try {
    cat.eat(dog);
} catch(error){
    console.log("error while cat eating a dog")
}
console.log(cat)