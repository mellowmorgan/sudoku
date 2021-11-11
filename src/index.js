import $ from 'jquery';
import { Game, Board, Square } from './game.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
let board = new Board();
for(let i=0;i<81;i++){
  let square = new Square();
  board.addSquare(square);
}   
let mapSpanValues = new Map([[2,9],[3,6],[5,4],[8,3],[11,5],[12,7],[13,8], [14,2],[19,1],[22,9],[25,5],[30,9],[32,1],[36,8],[37,5],[45,2],[46,4],[50,9],[52,6],[57,4],[60,3],[63,1],[68,7],[69,9],[70,2],[71,6],[74,2],[77,5],[79,9],[80,8]]);
Object.keys(board.squares).forEach(function(key){
  
  if (mapSpanValues.has(parseInt(key))){
    $("ul").append("<li><span id=" + key + ">"+mapSpanValues.get(parseInt(key))+"<span/></li>");
    
  }
  else{$("ul").append("<li><input id=" + key + " type='number' min='1' max='9' step='1' /></li>");}

  
  
});


function sliceIntoChunks(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
  }
  return res;
}
function transposeArray(array, arrayLength){
  let newArray = [];
  for(let i = 0; i < array.length; i++){
      newArray.push([]);
  }

  for(let i = 0; i < array.length; i++){
      for(let j = 0; j < arrayLength; j++){
          newArray[j].push(array[i][j]);
      }
  }

return newArray;
}
// let testGame = [2,9,6,1,4,5,8,3,7,3,5,7,8,2,6,1,4,9,1,4,8,9,3,7,5,2,6,6,3,9,5,1,2,4,7,8,5,8,1,7,6,4,3,9,2,4,7,2,3,9,8,6,1,5,9,6,4,2,8,3,7,5,1,8,1,5,4,7,9,2,6,3,7,2,3,6,5,1,9,8,4];




$("button").on("click", function(event){
  event.preventDefault();
  let arrayOfSquareValues = [];
  for(let i=1;i<=81;i++){
    if (mapSpanValues.has(i)){
      arrayOfSquareValues.push(parseInt($("#"+i.toString()).text()));
      
    }
    else{
      arrayOfSquareValues.push(parseInt($("#"+i.toString()).val()));
    }
    
  }

 
  let arrayOfRows=sliceIntoChunks(arrayOfSquareValues,9);
 

  let arrayOfColumns= transposeArray(arrayOfRows,9);
  console.log(arrayOfColumns);
  console.log(arrayOfRows);
  let game=new Game(arrayOfColumns,arrayOfRows);
  const checkSudoku = game.isLegal();
  if(checkSudoku){
    $("#result").text("You won!");
  }
  else{
    $("#result").text("Your board isn't quite right!");
  }

});