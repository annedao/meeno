window.onload = function(){
	findAll();
};

function loadAll(){
	link.href = findFormat();
	document.getElementById("header").style.

}

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

}
function findLocation(){

}
function findWeather(){

}
function findQuote(){

}

function moodSuggestion(){

}