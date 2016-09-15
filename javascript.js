/*
CIS166AA: Case Project
Author: Kevin Ward
Date: 9/12/2016
Filename: javascript.js
*/

//	Define any variables I will need in my page.
//	Legend of Zelda copyright Nintendo.
var crest = "images/hyrulecrest.png";
var rinku = "images/link.jpg";
var zelda = "images/zelda.jpg";
var ganon = "images/ganon.jpg";
var armor = "images/BotWArmor.jpg";
//	Star Wars characters copyright Disney.
var sw = "images/sw.jpg";
var luke = "images/luke.jpg";
var leia = "images/leia.jpg";
var vader = "images/vader.jpg";
//	Video Game toons copyright their respective owners.
var xal1 = "images/xal1.png";
var xal2 = "images/xal2.jpg";
var xal3 = "images/xal3.jpg";

//	Variables for my DragonBall Z Power Level function.
var totalPwrLvl = 0;
var pwrLvlCost = 0;
var plage = 0;
var plfriends = 1;
var over9k = false;
var alien = false;

//	Arrays for the if/else/switch/while statement.
var whoType = ["Classic Doctor Who", "-", "Rebooted Doctor Who"]
var docWho = ["William Hartnell", "Patrick Troughton", "Jon Pertwee", "Tom Baker", 
				"Peter Davison", "Colin Baker", "Sylvester McCoy", "Paul McGann", 
				"John Hurt", "Christopher Eccleston", "David Tennant", "Matt Smith", "Peter Capaldi"];
var whoYrs = ["1963-66", "1966-69", "1970-74", "1974-81", "1982-84", "1984-86", 
				"1987-89", "1996", "2013", "2005", "2005-10", "2010-13", "2014-present"];
var docType = ["classic", "classic", "classic", "classic", "classic", "classic", 
				"classic", "classic", "reboot", "reboot", "reboot", "reboot", "reboot"];



//	Calculates your DragonBall Z Power Level.
function calcPwrLvl() {
	var age = document.getElementById("plage");
	var friends = document.getElementById("plfriends");
	totalPwrLvl -= pwrLvlCost;
	pwrLvlCost = age.value * 20 * friends.value;
	totalPwrLvl += pwrLvlCost;
	document.getElementById("powerlvl").innerHTML = "#" + totalPwrLvl;
}

//	Adds/subtracts over 9000 Power Levels.
function toggle9K() {
	(document.getElementById("over9k").checked === false) ? totalPwrLvl -= 9000 : totalPwrLvl += 9000;
	document.getElementById("powerlvl").innerHTML = "#" + totalPwrLvl;
}

//	Adds/subtracts if they are an alien or not.
function toggleAlien() {
	(document.getElementById("alien").checked === false) ? totalPwrLvl -= 250 : totalPwrLvl += 250;
	document.getElementById("powerlvl").innerHTML = "#" + totalPwrLvl;
}

//	Creates event listeners for my Power Level form.
function createEventListeners() {
	document.getElementById("plage").addEventListener("change", calcPwrLvl, false);
	document.getElementById("plfriends").addEventListener("change", calcPwrLvl, false);
	document.getElementById("over9k").addEventListener("change", toggle9K, false);
	document.getElementById("alien").addEventListener("change", toggleAlien, false);
}


//	This will set all the Power Level form field values to defaults.
function resetLvl() {
	document.getElementById("plage").value = 18;
	document.getElementById("plfriends").value = 1;
	document.getElementById("over9k").checked = over9k;
	document.getElementById("alien").checked = alien;
	calcPwrLvl();
	createEventListeners();
}


//	Function to place whoType values in header row cells. Works!
function addWhoTitle() {
	var i = 0;
	while (i < whoType.length) {
		document.getElementsByTagName("th")[i].innerHTML = whoType[i];
		i++;
	}
}


//	This switch statement should add the Doctor Who names and dates.
function addYrs() {
	var	docYrs = "";
	for (var i = 0; i < 13; i++) {
		var tableCell = document.getElementsByTagName("td");
		switch (docType[i]) {
			case "classic":
				tableCell[0].innerHTML = "<p>" + docWho[0] + "<br />" + whoYrs[0] + "</p>";
				tableCell[3].innerHTML = "<p>" + docWho[1] + "<br />" + whoYrs[1] + "</p>";
				tableCell[6].innerHTML = "<p>" + docWho[2] + "<br />" + whoYrs[2] + "</p>";
				tableCell[9].innerHTML = "<p>" + docWho[3] + "<br />" + whoYrs[3] + "</p>";
				tableCell[12].innerHTML = "<p>" + docWho[4] + "<br />" + whoYrs[4] + "</p>";
				tableCell[15].innerHTML = "<p>" + docWho[5] + "<br />" + whoYrs[5] + "</p>";
				tableCell[18].innerHTML = "<p>" + docWho[6] + "<br />" + whoYrs[6] + "</p>";
				tableCell[21].innerHTML = "<p>" + docWho[7] + "<br />" + whoYrs[7] + "</p>";
				break;
			case "reboot":
				tableCell[2].innerHTML	= "<p>" + docWho[9] + "<br />" + whoYrs[9] + "</p>";
				tableCell[5].innerHTML	= "<p>" + docWho[10] + "<br />" + whoYrs[10] + "</p>";
				tableCell[8].innerHTML	= "<p>" + docWho[11] + "<br />" + whoYrs[11] + "</p>";
				tableCell[11].innerHTML	= "<p>" + docWho[8] + "<br />" + whoYrs[8] + "</p>";
				tableCell[14].innerHTML	= "<p>" + docWho[12] + "<br />" + whoYrs[12] + "</p>";
				tableCell[17].innerHTML	= "<p>" + docWho[13] + "<br />" + whoYrs[13] + "</p>";
				tableCell[20].innerHTML	= "<p>" + docWho[14] + "<br />" + whoYrs[14] + "</p>";
				tableCell[23].innerHTML	= "<p>" + docWho[15] + "<br />" + whoYrs[15] + "</p>";
				break;
		} // end switch
//		tableCell[i].innerHTML += whoYrs[i]; //Not needed anymore.
	} // end for
} // end function

/*
//	This function should add the classic Doctor Who names and dates
function addDoc() {
	var docName = "";
	var tableCells = document.getElementsByTagName("td");
	docName = tableCells.getElementsByTagName("p");
	if (docType[i] === "classic") {
		docName[1].innerHTML = docWho[i]
		i++;
	}
	else if (docType[i] === "reboot") {
		docType[1].innerHTML = docWho[i]
		i++;
	}
	docName[1].innerHTML += docWho[i];
	
	for (var i = 0; i < 13; i++) {
		var tableCells = document.getElementsByTagName("td");
		docName = tableCells.getElementsByTagName("p");
		if (docType[i] === "classic") {
			docName[1].innerHTML = docWho[1]
			i++;
		}
		else if (docType[i] === "reboot") {
			docType[1].innerHTML = docWho[8]
			i++;
		}
		docName[1].innerHTML += docWho[i];
	}
}
*/

/*
//	This function should add the classic Doctor Who dates.
function addClasYrs() {
	var docYr = "";
	for (var i = 1; i < 8; i++) {
//		var dates = i + 1;
		var tableCells = document.getElementById("19b");
		docYr = tableCells.getElementsByTagName("p");
		if (classicYrs[i] === "19b") {
			docYr[1].innerHTML = classicYrs[1]
		}
	}
}


//	This function should add the reboot Doctor Who dates.
function addRebootYrs() {
	var docYr = "";
	for (var i = 1; i < 5; i++) {
//		var dates = i + 1;
		var tableCells = document.getElementById("20b");
		docYr = tableCells.getElementsByTagName("p");
		if (rebootYrs[i] === "20b") {
			docYr[1].innerHTML = rebootYrs[1]
		}
	}
}
*/

//	This function will populate the page and reset the form.

function setUpPage() {
	addWhoTitle();
//	addDoc();
	addYrs();
//	convertF2C();
	document.getElementById("button").addEventListener("click", convertF2C, false);
	resetLvl();
}

//	This is a F to C converter.
function convertF2C() {
	var degF = document.getElementById("fValue").value;
	var degC = (degF - 32) * (5 / 9);
	document.getElementById("cValue").innerHTML = degC;
}
//document.getElementById("button").addEventListener("click", convertF2C, false);


//	This will reset the Power Level form when the page is reloaded.
/*
window.addEventListener("load", resetLvl, false);
*/

// runs setUpPage() function when page loads
if (window.addEventListener) {
	window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", setUpPage);
}



