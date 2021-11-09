import $ from 'jquery';
import { Game } from './game.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$("button").on("click", function(event){
  event.preventDefault();
  for(let i=1;i<10;i++){
    for(let i2=1;i2<10;i2++){
       let s= i.toString()+i2.toString();
       console.log(s);
  }}

});