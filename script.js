//--------------- get elements from HTML-------------
var   lvl1      = document.getElementById("lvl_1"),
      lvl2      = document.getElementById("lvl_2"),
      mybuton   = document.getElementById("buton"),
      strt      = document.getElementById("start"),
      mybuttton = document.getElementById("buttton"),
      val1      = document.getElementById("v1"),
      val2      = document.getElementById("v2"),
      val3      = document.getElementById("v3"),
      val4      = document.getElementById("v4"),
      val5      = document.getElementById("v5"),
      myval1    = document.getElementById("v1").value ,
      myval2    = document.getElementById("v2").value ,
      myval3    = document.getElementById("v3").value ,
      myval4    = document.getElementById("v4").value ,
      myval5    = document.getElementById("v5").value ;

strt.onclick = function(){
lvl1.style.visibility = "visible";
}
//-----------------for delay 1 second-----------------
var delayInMilliseconds = 1000; // delay 0.1 second
//----------at first hide level 2---------------------
window.onload = function(){
lvl1.style.visibility = "hidden";
lvl2.style.visibility = "hidden";
}
//-----------run function for first level-------------
mybuton.onclick = function (){
readOutLoud(myval1);
setTimeout(function() {
readOutLoud(myval2);
}, delayInMilliseconds);
next();
}
//-------------run function for second level---------
mybuttton.onclick = function (){
readOutLoud(myval3);
setTimeout(function() {
readOutLoud(myval4);
}, delayInMilliseconds);
setTimeout(function() {
readOutLoud(myval5);
}, delayInMilliseconds);
next2();
}
//----------- go to level 2 of the game-----------
function next (){
val2.onclick = function(){
val1.onclick = function(){
lvl2.style.visibility = "visible";
}
}
}
//-------------Winning message-------------------
function next2(){
val5.onclick = function(){
val4.onclick = function(){
val3.onclick = function(){
alert('Congratulation You Win');

}
}
}
}
//-------------to generate voice message-----------
function readOutLoud(message) {
var speech = new SpeechSynthesisUtterance();
// Set the text and voice attributes.
speech.text = message;
speech.volume = 1;
speech.rate = 1;
speech.pitch = 1;
window.speechSynthesis.speak(speech);
}