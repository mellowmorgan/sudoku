export function Game(colArray, rowArray){
  this.colArray = colArray;
  this.rowArray = rowArray;
}
Game.prototype.checkBoxes=function(){
  this.boxArray = [];
  
  let box1=this.rowArray[0].slice(0,3).concat(this.rowArray[1].slice(0,3)).concat(this.rowArray[2].slice(0,3));
  let box2=this.rowArray[0].slice(3,6).concat(this.rowArray[1].slice(3,6)).concat(this.rowArray[2].slice(3,6));
  let box3=this.rowArray[0].slice(6,9).concat(this.rowArray[1].slice(6,9)).concat(this.rowArray[2].slice(6,9));
  let box4=this.rowArray[3].slice(0,3).concat(this.rowArray[4].slice(0,3)).concat(this.rowArray[5].slice(0,3));
  let box5=this.rowArray[3].slice(3,6).concat(this.rowArray[4].slice(3,6)).concat(this.rowArray[5].slice(3,6));
  let box6=this.rowArray[3].slice(6,9).concat(this.rowArray[4].slice(6,9)).concat(this.rowArray[5].slice(6,9));
  let box7=this.rowArray[6].slice(0,3).concat(this.rowArray[7].slice(0,3)).concat(this.rowArray[8].slice(0,3));
  let box8=this.rowArray[6].slice(3,6).concat(this.rowArray[7].slice(3,6)).concat(this.rowArray[8].slice(3,6));
  let box9=this.rowArray[6].slice(6,9).concat(this.rowArray[7].slice(6,9)).concat(this.rowArray[8].slice(6,9));
  this.boxArray.push(box1);
  this.boxArray.push(box2);
  this.boxArray.push(box3);
  this.boxArray.push(box4);
  this.boxArray.push(box5);
  this.boxArray.push(box6);
  this.boxArray.push(box7);
  this.boxArray.push(box8);
  this.boxArray.push(box9);
  for(let i=0;i<9;i++){
    let sortedBoxArray = this.boxArray[i].slice(0);
    sortedBoxArray = sortedBoxArray.sort();
    for(let i=1;i<=9;i++){
      if(sortedBoxArray[i-1]!==i){
        return false;
      }
    }
  }
  return true;
}

Game.prototype.isLegal= function() {
  if (this.colArray.length!==9){
    return false;
  }
  else if (this.rowArray.length!==9){
    return false;
  }
  else{
  for(let i=0;i<9;i++){
    if(this.colArray[i].length!==9){
      return false;
    }
    let sortedColArray = this.colArray[i].slice(0);
    sortedColArray = sortedColArray.sort();
    for(let i=1;i<=9;i++){
      if(sortedColArray[i-1]!==i){
        return false;
      }
    }
  }
  for(let i=0;i<9;i++){
    if(this.rowArray[i].length!==9){
      return false;
    }
    let sortedRowArray = this.rowArray[i].slice(0);
    sortedRowArray = sortedRowArray.sort();
    for(let i=1;i<=9;i++){
      if(sortedRowArray[i-1]!==i){
        return false;
      }
    }
    if (!this.checkBoxes()){
      return false;
    }

    
  }
 
  return true;
}


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
