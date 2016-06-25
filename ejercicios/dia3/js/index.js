var canvas = require('./modules/canvas');
var Square = require('./modules/square')(canvas.context);
var figures = require('./modules/figures');

for (var i = 0; i < 100; i++) {
  var randomX = Math.random() * 800;
  var randomY = Math.random() * 600;
  var randomSize = Math.random() * 100;
  var randomVel = Math.random() * 2 + 1;

  var newSquare = new Square(
    randomX,
    randomY,
    randomSize,
    randomSize,
    randomVel,
    randomVel
  );

  figures.addFigure(newSquare);
}

function animate(){
  figures.drawAllFigures(canvas.clear);
  setTimeout(animate, 1);
}

animate();
