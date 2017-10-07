var colVal = ["#e3e0f6", "#fce3e1", "#ffefd5", "#cd8c95", "#87ceff", "#deb3b0", "#eef3f4", "#ffb140", "#e6fff2", "#e6f2ff", "#ffebcc", "#ffdccc", "#eee6ff", "#e0ebeb", "#ff9999", "#D96F58", "#E8D0CA", "#FEFFDD", "#DDF4FF"];


window.onload = function(){
	loadAll();
	//findTime();
};


function findFormat(){

	//find a way to find the filenames in the cs
	var files = ['main.css', 'css1.css'];
	//console.log(files.length);
	var i = Math.floor(Math.random() * files.length);
	console.log(i);
	var file = "../css/" + files[i];
	//console.log(file);



	return file;

}

function loadAll(){
	var format = findFormat();
	document.getElementsByTagName("link").item(0).setAttribute('href', format);
	console.log(findTime());
	document.getElementById("time").innerHTML = findTime();
	document.getElementById("date").innerHTML = findDay()+ "     " + findDate();
	var element = document.getElementsByTagName("body").item(0);
	element.style.backgroundColor = colVal[Math.floor(Math.random() * colVal.length)];


	//based on the css file from link.href, go into the css file and edit 
	//document.getElementById("header").style.

};

//variables
function findDay(){
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var currentTime = new Date();
	return days[currentTime.getDay()];
}

function findDate(){
	var currentTime = new Date();
	var month = currentTime.getMonth();
	var day = currentTime.getDate();
	var yr = currentTime.getFullYear();
	return (month + "." + day + "." + yr);

}
function findTime(){

	var currentTime = new Date();
	console.log(currentTime);
	//console.log(currentTime.getMinutes());
	//console.log(currentTime.getHours());
	var month = currentTime.getMonth() + 1;
	var day = currentTime.getDate();
	var yr = currentTime.getFullYear();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();

	if (minutes < 10) {
	    minutes = "0" + minutes;
	}

	return (currentTime.getHours() + ":" + currentTime.getMinutes());

}
function findLocation(){

}
function findWeather(){

}
function findQuote(){

}

function moodSuggestion(){

}

// var requirejs = require("r.js");

// requirejs.config({
//     //Pass the top-level main.js/index.js require
//     //function to requirejs so that node modules
//     //are loaded relative to the top-level JS file.
//     nodeRequire: require
// });

// requirejs(['foo', 'bar'],
// function   (foo,   bar) {
//     //foo and bar are loaded according to requirejs
//     //config, but if not found, then node's require
//     //is used to load the module.
// });

// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
// } 
// //Get latitude and longitude;
// function successFunction(position) {
//     var lat = position.coords.latitude;
//     var long = position.coords.longitude;
// }

// function randomHeaderFont(){
	// //go to the font/header folder
	// //look at the list of directories
	// //create new style for the h

	// var newStyle = document.createElement('style');
	// newStyle.appendChild(document.createTextNode("\
	// @font-face {\
	//     font-family: " + yourFontName + ";\
	//     src: url('" + yourFontURL + "') format('yourFontFormat');\
	// }\
	// "));

	// }
	// function randomTextFont(){

	// var newStyle = document.createElement('style');
	// newStyle.appendChild(document.createTextNode("\
	// @font-face {\
	//     font-family: " + yourFontName + ";\
	//     src: url('" + yourFontURL + "') format('yourFontFormat');\
	// }\
	// "));

// }

// function findBackground(){

// }



// function randomfile(path){
	// var fs = require('fs');
	// return fs.readdirSync(path);
// }

