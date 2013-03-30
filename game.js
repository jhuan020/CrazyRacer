var player = function(x, y, id, params) {
  this.id = id;
  this.x = x;
  this.y = y;
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
}



$(document).ready(function() {
  setCanvas($("canvas"));
  createInstance(320, 240, player);
  start();
});