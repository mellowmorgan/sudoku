export function Game(colArray, rowArray, boxArray){
  this.colArray = colArray;
  this.rowArray = rowArray;
  this.boxArray = boxArray;
}

Game.prototype.isLegal= function() {
  return true;
}