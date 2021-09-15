import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Color from "./Color.js"


// есть компонент колор, внутри будет просто цвет
// есть цвет который генерируется случайно и у него должны стоять рядом, усветление, утемнение

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let arrTriadic = [];
let arrShades = [];
let arrTint = [];

let ColorChange = 0;
let ColorChange2 = 0
let ColorChange3 = 0

let hex1Triadic = getRandomInt(256);
let hex2Triadic = getRandomInt(256);
let hex3Triadic = getRandomInt(256);

let hex1Shades = getRandomInt(256);
let hex2Shades= getRandomInt(256);
let hex3Shades = getRandomInt(256);

let hex1tint = getRandomInt(256);
let hex2tint = getRandomInt(256);
let hex3tint = getRandomInt(256);

function getTriadicColor(){
  arrTriadic.push(<Color hex1={hex1Triadic} hex2={hex2Triadic} hex3={hex3Triadic}/>)
  arrTriadic.push(<Color hex1={hex3Triadic} hex2={hex1Triadic} hex3={hex2Triadic}/>)

  arrTriadic.push(<Color hex1={hex2Triadic} hex2={hex3Triadic} hex3={hex1Triadic}/>)
}
function getShadesColor(){
  let special1 = (hex1Shades-10)/6
  let special2 = (hex2Shades-10)/6
  let special3 = (hex3Shades-10)/6
  for(let i = 0;i<6;i++){
    hex1Shades = hex1Shades - special1;
    hex2Shades = hex2Shades - special2;
    hex3Shades = hex3Shades - special3;
    arrShades.push(<Color hex1={hex1Shades} hex2={hex2Shades} hex3={hex3Shades}/>)
  }
}
function getTintColor(){
  let special1 = hex1tint/6
  let special2 = hex2tint/6
  let special3 = hex3tint/6
  console.log(hex1tint)
  console.log(hex2tint)
  console.log(hex3tint)
  for(let i = 0;i<6;i++){
    if(hex1tint+special1<255){
      hex1tint = hex1tint + special1;
    }
    if(hex2tint+special2<255){
      hex2tint = hex2tint + special1;
    }if(hex3tint+special3<255){
      hex3tint = hex3tint + special1;
    }
    arrTint.push(<Color hex1={hex1tint} hex2={hex2tint} hex3={hex3tint}/>)
    console.log(hex1tint)
    console.log(hex2tint)
    console.log(hex3tint)
  }
}
// голова не работает поэтому такой ужасный говнокод, извините это самый быстрый способ которым я смог это сделать
getTintColor();

getShadesColor();

getTriadicColor();

ReactDOM.render(
  <div className="mainDiv">
    <div className="nav">
      <div className="navTxt">
        React Practice, Color stuff
      </div>
    </div>
    <div className="triadicSpace">
    <div className="zag1">
          <h1>Triadic</h1>
    </div>
    <div className="triadic">
        {
          arrTriadic
        }
    </div>
    </div>
    <div className="triadicSpace">
    <div className="zag2">
          <h1>shades</h1>
    </div>
    <div className="shades">
        {
          arrShades
        }
    </div>
    </div>
    <div className="triadicSpace">
    <div className="zag3">
          <h1>Tint</h1>
    </div>
    <div className="tint">
        {
          arrTint
        }
    </div>
    </div>
  </div>,
  document.querySelector(".app")
);