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
var userChoice = ""; //global variable. it is not assigned to a function
// console.log(num1);
// console.log(num2);
// console.log(equals);
// console.log(outcome);
// console.log(selPlus);



//Functions
function doStuff(){
	var total = "";
	console.log(userChoice);
	// console.log("from addStuff");
	// document.getElementById("input1").value;
	// document.getElementById("input2").value;
	/* because we used querySelector, we can pull the value from it*/

	// console.log (num1.value);
	// console.log (num2.value);
	/* parseInt converts the value / string to a number */
	if(userChoice == "add"){
	 total = parseInt(num1.value) + parseInt(num2.value);
	} else {
		total = parseInt(num1.value) - parseInt(num2.value);
	}
	// console.log(total);
	outcome.innerHTML = total;
	/* innerHTML will go inside the id = value where the outcome is connected to
	inside HTML and show it there */
}

function selCal(evt){
	// console.log("From selCal");
	/*if(selPlus.innerHTML == "+") {
		console.log("User clicked +");
	}
	if(selPlus.innerHTML == "-"){
		console.log("User clicked -");
	}*/
	// console.log(evt.currentTarget.id);
	if(evt.currentTarget.id == "plus"){
		// console.log("add");
		userChoice = "add";

	}else{
		// console.log("sub");
		userChoice = "sub";
	}
}
// function subtractStuff(){
// 	var total = parseInt(num1.value) - parseInt(num2.value);

// 	outcome.innerHTML = total;
// }


//Listeners


// selPlus.addEventListener("click", addStuff, false);
// selMinus.addEventListener("click", subtractStuff, false);
equals.addEventListener("click", doStuff, false);
selPlus.addEventListener("click", selCal, false);
selMinus.addEventListener("click", selCal, false);



})();