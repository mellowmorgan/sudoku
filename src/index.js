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

  
  
})


$("button").on("click", function(event){
  event.preventDefault();
  let arrayOfSquareValues = [];
  for(let i=1;i<=81;i++){
    if (mapSpanValues.has(i)){
      arrayOfSquareValues.push($(i.toString()).text());
      
    }
    else{
      arrayOfSquareValues.push($(i.toString()).val());
    }
    
  }

  function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}
  let arrayOfRows=sliceIntoChunks(arrayOfSquareValues,9);
 
  function transposeArray(array, arrayLength){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray.push([]);
    };

    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < arrayLength; j++){
            newArray[j].push(array[i][j]);
        };
    };

    return newArray;
  }
  let arrayOfColumns= transposeArray(arrayOfRows,9);
  let game=new Game(arrayOfColumns,arrayOfRows);
  const checkSudoku = game.isLegal();
  alert(checkSudoku);
  


});


