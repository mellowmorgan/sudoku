import $ from 'jquery';
import { Game } from './game.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$("button").on("click", function(event){
  event.preventDefault();
  let array = [];
  for(let i=1;i<10;i++){
    for(let i2=1;i2<10;i2++){
       let s= i.toString()+i2.toString();
        array.push(s);
  }}
  //alert(array);
  let counter=1;
  let box=1;
  let externalCounter=1;
  let extraExtCounter=1;
  for(let i=0;i<array.length;i++){
    if (extraExtCounter===56){
      box=6;
      externalCounter=1;
    }
    if (externalCounter===10 && extraExtCounter!==56){
      box=box-3;
      externalCounter=1;
    }
    if (extraExtCounter===28){
      box=3;
    }
    
    if(counter===4){
      box++;
      counter=1;
    }
    array[i]=array[i]+box;
    extraExtCounter++;
    counter++;
    externalCounter++;
  }
  let  userArrayNumbers = [];
  

  array.forEach(function(stringId){
    let value;
    if ($("#"+stringId).is("input")){
      
      value = $("#"+stringId).val();
    }
    else{
       value = $("#"+stringId).text();
    }
    userArrayNumbers.push(parseInt(value));
  });
  alert(array);
  function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}
  let arrayOfRows=sliceIntoChunks(userArrayNumbers,9);
 
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
 // alert(arrayOfColumns[0]);

  // let columnCounter=0
  // let rowArrays=[];
  // let rowArray=[];
  // for(let i=0;i<userArrayNumbers.length;i++){
  //   if(columnCounter<9){
  //   rowArray.push(userArrayNumbers[i]);}
  //   if(columnCounter===8){
  //     rowArrays.push(rowArray);
  //     columnCounter=0;
  //     rowArray=[];
  //   }
  //   columnCounter++;
  // }
  // alert(rowArrays[0]);
  // alert(rowArrays[1]);
  // alert(rowArrays[2]);
  


});


