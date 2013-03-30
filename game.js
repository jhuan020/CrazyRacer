var food = function (x, y, id, params){
  this.id = id;
  this.x = x;
  this.y = y;
  this.width = 10;
  this.height = 10;
  this.params = params;
  this.drawn = new Draw().circle({x:this.x, y:this.y, radius:5});
}

food.prototype.destroy = function() {
  this.drawn.undraw();
}

var player = function(x, y, id, params) {
  this.id = id;
  this.x = x;
  this.y = y;
  this.width = 100;
  this.height = 100;

  this.params = params;
  this.drawn = new Draw().circle({x: this.x, y: this.y, radius: 10});
}


player.prototype.step = function() {
  if (keyDown("LEFT")) {
    this.x -= 5;
  }
  if (keyDown("RIGHT")) {
    this.x += 5;
  }
  if (keyDown("UP")) {
    this.y -= 5;
  }
  if (keyDown("DOWN")) {
    this.y += 5;
  }
  if (collisionObject(this, food)) {
    this.x = 320;
    this.y = 440;
    destroyInstance(food);
  }

}

player.prototype.drawObj = function() {
  this.drawn.update({x: this.x, y: this.y});
}



$(document).ready(function() {
  setCanvas($("canvas"));
  createInstance(320, 440, player);
  createInstance(300, 300, food);
  start();
});