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
