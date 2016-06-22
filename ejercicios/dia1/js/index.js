var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext('2d');
var figures = [];

function clearCanvas(){
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawAllFigures(){
  clearCanvas();
  for (var i = 0; i < figures.length; i++) {
    figures[i].move();
    figures[i].draw();
  }
}

function Square(posX, posY, width, height, velX, velY) {

  this.draw = function(){
    context.fillStyle = "red";
    context.fillRect(posX, posY, width, height);
  }

  this.move = function() {
    this.validations();
    posX += velX;
    posY += velY;
  }

  this.validations = function(){
    if(posX > canvas.width - width || posX < 0){
      velX = -velX;
    }

    if(posY > canvas.height - height || posY < 0){
      velY = -velY;
    }

  }
}

function animate(){
  drawAllFigures();
  setTimeout(animate, 1);
}

animate();

for (var i = 0; i < 100; i++) {
  var randomX = Math.random() * 800;
  var randomY = Math.random() * 600;
  var randomSize = Math.random() * 100;
  var randomVel = Math.random() * 2 + 1;

  figures.push(new Square(randomX, randomY, randomSize, randomSize, randomVel, randomVel));
}
