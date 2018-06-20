//JS file

(function (){
	console.log("JS file loader")

//Vars
var num1 = document.querySelector("#input1");
var num2 = document.querySelector("#input2");
var equals = document.querySelector("#trigger");
var outcome = document.querySelector("#value");
var selPlus = document.querySelector("#plus");
var selMinus = document.querySelector("#minus");
// console.log(num1);
// console.log(num2);
// console.log(equals);
// console.log(outcome);
// console.log(selPlus);



//Functions
function addStuff(){
	// console.log("from addStuff");
	// document.getElementById("input1").value;
	// document.getElementById("input2").value;
	/* because we used querySelector, we can pull the value from it*/

	// console.log (num1.value);
	// console.log (num2.value);
	/* parseInt converts the value / string to a number */
	var total = parseInt(num1.value) + parseInt(num2.value);
	// console.log(total);
	outcome.innerHTML = total;
	/* innerHTML will go inside the id = value where the outcome is connected to
	inside HTML and show it there */
}

function subtractStuff(){
	var total = parseInt(num1.value) - parseInt(num2.value);

	outcome.innerHTML = total;
}


//Listeners

selPlus.addEventListener("click", addStuff, false);
selMinus.addEventListener("click", subtractStuff, false);
// equals.addEventListener("click", addStuff, false);



})();