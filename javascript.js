/*
CIS166AA Chapter 1 Case Project
Author: Kevin Ward
Date: 8/28/2016
Filename: javascript.js
*/

//define any variables I will need in my page.
// Legend of Zelda copyright Nintendo.
var crest = "images/hyrulecrest.png";
var rinku = "images/link.jpg";
var zelda = "images/zelda.jpg";
var ganon = "images/ganon.jpg";
var armor = "images/BotWArmor.jpg";
// Star Wars characters copyright Disney.
var sw = "images/sw.jpg";
var luke = "images/luke.jpg";
var leia = "images/leia.jpg";
var vader = "images/vader.jpg";
// Video Game toons copyright their respective owners.
var xal1 = "images/xal1.png";
var xal2 = "images/xal2.jpg";
var xal3 = "images/xal3.jpg";

// Variables for my DBZ Power Level function.
var totalPwrLvl = 0;
var pwrLvlCost = 0;
var plage = 0;
var plfriends = 1;
var over9k = false;
var gender = false;

// Calculates your power level.
function calcPwrLvl() {
	var age = document.getElementById("plage");
	var friends = document.getElementById("plfriends");
	totalPwrLvl -= pwrLvlCost;
	pwrLvlCost = age.value * 20 * friends.value;
	totalPwrLvl += pwrLvlCost;
	document.getElementById("powerlvl").innerHTML = "#" + totalPwrLvl;
}

//adds/subtracts over 9000 power lvls.
function toggle9K() {
	(document.getElementById("over9k").checked === false) ? totalPwrLvl -= 9000 : totalPwrLvl += 9000;
	document.getElementById("powerlvl").innerHTML = "#" + totalPwrLvl;
}

//adds/subtracts if they are a boy or girl.
function toggleGender() {
	(document.getElementById("gender").checked === false) ? totalPwrLvl -= 250 : totalPwrLvl += 250;
	document.getElementById("powerlvl").innerHTML = "#" + totalPwrLvl;
}

// Creates event listeners for my power level form.
function createEventListeners() {
	document.getElementById("plage").addEventListener("change", calcPwrLvl, false);
	document.getElementById("plfriends").addEventListener("change", calcPwrLvl, false);
	document.getElementById("over9k").addEventListener("change", toggle9K, false);
	document.getElementById("gender").addEventListener("change", toggleGender, false);
}

// This will set all the field values to defaults.
function resetLvl() {
	document.getElementById("plage").value = 18;
	document.getElementById("plfriends").value = 1;
	document.getElementById("over9k").checked = over9k;
	document.getElementById("gender").checked = gender;
	calcPwrLvl();
	createEventListeners();
}

// This will reset the Power Level form when the page is reloaded.
window.addEventListener("load", resetLvl, false);








/*
// variables for this project
var photographerCost = 0;
var totalCost = 0;
var memoryBook = false;
var repoductionRights = false;

// calculates all costs based on staff and adds to total cost
function calcStaff() {
	var num = document.getElementById("photognum");
	var hrs = document.getElementById("photoghrs");
	var distance = document.getElementById("distance");
	totalCost -= photographerCost;
	photographerCost = num.value * 100 * hrs.value + distance.value * num.value;
	totalCost += photographerCost;
	document.getElementById("estimate").innerHTML = "$" + totalCost;
}

// adds/subtracts cost of memory book from total cost
function toggleMembook() {
	(document.getElementById("membook").checked === false) ? totalCost -= 250 : totalCost += 250;
	document.getElementById("estimate").innerHTML = "$" + totalCost;
}
// adds/subtracts cost of reproduction rights from total cost
function toggleRights() {
	(document.getElementById("reprodrights").checked === false) ? totalCost -= 1250 : totalCost += 1250;
	document.getElementById("estimate").innerHTML = "$" + totalCost;
}

// sets all form field values to defaults
function resetForm() {
	document.getElementById("photognum").value = 1;
	document.getElementById("photoghrs").value = 2;
	document.getElementById("membook").checked = memoryBook;
	document.getElementById("reprodrights").checked = repoductionRights;
	document.getElementById("distance").value = 0;
	calcStaff();
	createEventListeners();
}

// creates event listeners
function createEventListeners() {
	document.getElementById("photognum").addEventListener("change", calcStaff, false);
	document.getElementById("photoghrs").addEventListener("change", calcStaff, false);
	document.getElementById("membook").addEventListener("change", toggleMembook, false);
	document.getElementById("reprodrights").addEventListener("change", toggleRights, false);
	document.getElementById("distance").addEventListener("change", calcStaff, false);
}

// resets form when page is reloaded
window.addEventListener("load", resetForm, false);
*/
