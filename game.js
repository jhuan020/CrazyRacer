var block = function (x, y, id, movement){
  this.id = id;
  this.x = x;
  this.y = y;
  this.width = Math.floor((Math.random()*10)+5);
  this.height = Math.floor((Math.random()*50)+2);
  this.movement = movement;
  //this.params = params;
  this.drawn = new Draw().rectangle({x:this.x, y:this.y, width:this.width, height:this.height, filled:true});
}

block.prototype.destroy = function() {
  this.drawn.undraw();
}

block.prototype.step = function(){
  this.y +=this.movement;
  if (this.y > 480){
      destroyInstance(this);
      createInstance(Math.floor((Math.random()*640)+1), 1, block,Math.floor((Math.random()*10)+1));
  }
}

block.prototype.drawObj = function() {
  this.drawn.update({x: this.x, y: this.y});
}

//=====================================PLAYER=========================================================
var player = function(x, y, id, params) {
  this.id = id;
  this.x = x;
  this.y = y;
  this.width = 30;
  this.height = 30;

  this.params = params;
  this.drawn = new Draw().rectangle({x:this.x, y:this.y, width:this.width, height:this.height});
}


player.prototype.step = function() {
  if (keyDown("LEFT")) {
    this.x -= 10;
  }
   if (keyDown("RIGHT")) {
    this.x += 10;
  }
  /*
   if (keyDown("UP")) {
    this.y -= 10;
  }
   if (keyDown("DOWN")) {
    this.y += 10;
  }*/

  if (collisionObject(this, block)) {
    destroyInstance(block);
    createInstance(320,240,gameover);
  }
}

player.prototype.drawObj = function() {
  this.drawn.update({x: this.x, y: this.y});
}


var gameover = function(x, y, id, params) {
  this.x = x;
  this.y = y;
  this.drawn = new Draw().text({x: this.x, y: this.y, text: "Game Over",
    font: "72pt Helvetica", centered: true});
}

$(document).ready(function() {
  setCanvas($("canvas"));
  createInstance(320, 440, player);
  createInstance(10, Math.floor((Math.random()*300)+1), block,Math.floor((Math.random()*10)+1));
  createInstance(100, Math.floor((Math.random()*300)+1), block,Math.floor((Math.random()*10)+1));
  createInstance(200, Math.floor((Math.random()*300)+1), block,Math.floor((Math.random()*10)+1));
  createInstance(300, Math.floor((Math.random()*300)+1), block,Math.floor((Math.random()*10)+1));
  createInstance(400, Math.floor((Math.random()*300)+1), block,Math.floor((Math.random()*10)+1));
  createInstance(500, Math.floor((Math.random()*300)+1), block,Math.floor((Math.random()*10)+1));
  createInstance(600, Math.floor((Math.random()*300)+1), block,Math.floor((Math.random()*10)+1));
  start();


});