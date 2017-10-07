// var requirejs = require("r.js");

// requirejs.config({
//     //Pass the top-level main.js/index.js require
//     //function to requirejs so that node modules
//     //are loaded relative to the top-level JS file.
//     nodeRequire: require
// });

// requirejs(['foo', 'bar'],
// function   (foo,   bar) {
//     //foo and bar are loaded according to requirejs
//     //config, but if not found, then node's require
//     //is used to load the module.
// });

// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
// } 
// //Get latitude and longitude;
// function successFunction(position) {
//     var lat = position.coords.latitude;
//     var long = position.coords.longitude;
// }

window.onload = function(){
	loadAll();
	findTime();
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


	//based on the css file from link.href, go into the css file and edit 
	//document.getElementById("header").style.

};

// function randomHeaderFont(){
// 	//go to the font/header folder
// 	//look at the list of directories
// 	//create new style for the h

// 	var newStyle = document.createElement('style');
// 	newStyle.appendChild(document.createTextNode("\
// 	@font-face {\
// 	    font-family: " + yourFontName + ";\
// 	    src: url('" + yourFontURL + "') format('yourFontFormat');\
// 	}\
// 	"));

// }
// function randomTextFont(){

// 	var newStyle = document.createElement('style');
// 	newStyle.appendChild(document.createTextNode("\
// 	@font-face {\
// 	    font-family: " + yourFontName + ";\
// 	    src: url('" + yourFontURL + "') format('yourFontFormat');\
// 	}\
// 	"));

// }

// function findBackground(){

// }



// function randomfile(path){
// 	var fs = require('fs');
// 	return fs.readdirSync(path);
// }



//variables
function findTime(){

	var currentTime = new Date();
	var month = currentTime.getMonth() + 1;
	var day = currentTime.getDate();
	var yr = currentTime.getFullYear();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();

	if (minutes < 10) {
	    minutes = "0" + minutes;
	}

	console.log(month + "/" + day + "/" + yr + ", " +hours + ":" + minutes);

}
function findLocation(){

}
function findWeather(){

}
function findQuote(){

}

function moodSuggestion(){

}