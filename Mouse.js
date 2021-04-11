function Mouse(name) {
    this.name = name;
    this.dead = false;
}

Mouse.prototype.die = function() {
    this.dead = true;
}

Mouse.prototype.sleep = function(){
    console.log("sleep")
}
module.exports = Mouse