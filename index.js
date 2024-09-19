"use strict";
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;


}

function calculate(){
    try{
    display.value = eval(display.value);
    if (display.value == NaN || display.value == Infinity || display.value == undefined){
        throw(err);
    }

}
    catch(err){
        display.value = "Error";
    }
}       

function clearDisplay(){
    display.value = "";
}