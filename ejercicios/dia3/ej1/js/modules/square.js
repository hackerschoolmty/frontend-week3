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
