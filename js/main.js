//JS file

(function (){
	console.log("JS file loader")

//Vars
var num1 = document.querySelector("#input1");
var num2 = document.querySelector("#input2");
var equals = document.querySelector("#trigger");
var outcome = document.querySelector("#value");

// console.log(num1);
// console.log(num2);
// console.log(equals);
// console.log(outcome);



//Functions
function addStuff(){
	// console.log("from addStuff");
}



//Listeners

equals.addEventListener("click", addStuff, false);



})();