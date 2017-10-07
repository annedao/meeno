var colVal = ["#e3e0f6", "#fce3e1", "#ffefd5", "#cd8c95", "#87ceff", "#deb3b0", "#eef3f4", "#ffb140", "#e6fff2", "#e6f2ff", "#ffebcc", "#ffdccc", "#eee6ff", "#e0ebeb", "#ff9999", "#D96F58", "#E8D0CA", "#FEFFDD", "#DDF4FF"];
var quotes = ["Only I can change my life. No one can do it for me.", 
"Stay positive and happy. Work hard and do not give up hope. Be open to criticism and keep learning. Surround yourself with happy, warm and genuine people. -Tena Desae", 
"The art of being happy lies in the power of extracting happiness from common things. -Henry Ward Beecher",
 "All our dreams can come true if we have the courage to pursue them. -Walt Disney", 
 "Opportunities do not happen, you create them. -Chris Grosser", 
 "I have not failed. I have just found 10,000 ways that will not work. -Thomas A. Edison", 
 "Do not be afraid to give up the good to go for the great. -John D. Rockefeller", 
 "Do one thing every day that scares you.", 
 "Life is not about finding yourself. Life is about creating yourself. -Lolly Daskal", 
 "Do anything, but let it produce joy. - Walt Whitman", 
 "Success is liking yourself, liking what you do, and liking how you do it. -Maya Angelou",
 "People who succeed have momentum. The more they succeed, the more they want to succeed, and the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiral that can even become a self-fulfilling prophecy. -Tony Robbins", 
 "Do not let the fear of losing be greater than the excitement of winning. -Robert Kiyosaki", 
 "To be successful you must accept all challenges that come your way. You can not just accept the ones you like. -Mike Gafka"];


var texts = ["'didactgothic'", "'hind'", "'ormont'", "'judson'", "'passion_sans_pd'"];
var headers = ["'francoisone'", "'made_waffle_soft'", "'montserrat'", "'nonchalance'","'odin_rounded'", "'quando'"];
var shadesOfGrey = ["#000000", "#151515", "#242424", "#494949", "#636262", "#212121", "#2B2B2B", "#555555", "#737373", "#3D3D3D", "#4A4A4A", "#0D0D0D"];


window.onload = function(){
	loadAll();
	//findTime();
};


function findFormat(){

	//find a way to find the filenames in the cs
	var files = ['main.css', 'css1.css', 'css2.css'];
	//console.log(files.length);
	var i = Math.floor(Math.random() * files.length);
	console.log(i);
	var file = "../css/" + files[i];
	return file;

}

function loadAll(){
	var format = findFormat();
	document.getElementsByTagName("link").item(0).setAttribute('href', format);
	console.log(findTime());
	document.getElementById("time").innerHTML = findTime();
	document.getElementById("date").innerHTML = (findDay())+ "     " + findDate();

	var element = document.getElementsByTagName("body").item(0);
	element.style.backgroundColor = colVal[Math.floor(Math.random() * colVal.length)];
	element.style.color = shadesOfGrey[Math.floor(Math.random() * shadesOfGrey.length)];

	loadFonts(element);

	var i = Math.floor(Math.random() * quotes.length);
	document.getElementById("quote").innerHTML = quotes[Math.floor(Math.random() * quotes.length)];



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
	var month = currentTime.getMonth() + 1;
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

function loadFonts(){
	var header = headers[Math.floor(Math.random() * headers.length)];
	console.log(header);
	document.getElementById("date").style.fontFamily = header;
	document.getElementById("time").style.fontFamily = header;
	document.getElementById("mood").style.fontFamily = header;
	document.getElementById("goals").style.fontFamily = header;

	var text = texts[Math.floor(Math.random() * texts.length)];
	document.getElementById("weather").style.fontFamily = text;
	document.getElementById("quote").style.fontFamily = text;
	

	
}
function findLocation(){

}
function findWeather(){

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



// function randomfile(path){
	// var fs = require('fs');
	// return fs.readdirSync(path);
// }

