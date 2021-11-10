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
    if (externalCounter===10){
      box=box-3;
      externalCounter=1;
    }
    if (extraExtCounter===28){
      box=4;
    }
    if (extraExtCounter===56){
      box=7;
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
  alert(array);

});


