export function Game(colArray, rowArray){
  this.colArray = colArray;
  this.rowArray = rowArray;
}

Game.prototype.isLegal= function() {
  return false;
}

export function Board(){
  this.squares = {};
  this.currentId = 0;
}

export function Square(){
  this.type="input";
}
Board.prototype.assignId=function(){
  this.currentId++;
  return this.currentId;
}

Board.prototype.addSquare=function(square){
  square.id=this.assignId();
  this.squares[square.id]=square;

}
