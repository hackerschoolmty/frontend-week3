(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./modules/canvas":2,"./modules/figures":3,"./modules/square":4}],2:[function(require,module,exports){
var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d');

function clear(){
  context.clearRect(0, 0, canvas.width, canvas.height);
}

module.exports = {
  context: context,
  clear: clear
};

},{}],3:[function(require,module,exports){
var figureList = [];

var figures = {
  addFigure: function(figure){
    figureList.push(figure);
  },

  drawAllFigures: function(clearMethod){
    if(clearMethod){
        clearMethod();
    }

    for (var i = 0; i < figureList.length; i++) {
      figureList[i].move();
      figureList[i].draw();
    }
  }
}

module.exports = figures;

},{}],4:[function(require,module,exports){
function Square(context){
  
    return function(posX, posY, width, height, velX, velY) {

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
}

module.exports = Square;

},{}]},{},[1])