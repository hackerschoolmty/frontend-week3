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
