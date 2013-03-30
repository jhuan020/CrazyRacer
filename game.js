var player = function(x, y, id, params) {
  this.id = id;
  this.x = x;
  this.y = y;
  this.drawn = new Draw().circle({x: this.x, y: this.y, radius: 10});
}

$(document).ready(function() {
  setCanvas($("canvas"));
  createInstance(320, 240, player);
  start();
});