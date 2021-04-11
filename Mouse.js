function Mouse(name) {
    this.name = name;
    this.dead = false;
}

Mouse.prototype.die = function() {
    this.dead = true;
}

Mouse.prototype.run = function(){
    console.log("Running")
}
Mouse.prototype.sleep = function(){
    console.log("sleep")
}
module.exports = Mouse