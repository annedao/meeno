var counter = 0;
chrome.browserAction.onClicked.addListener(function(tab){
  counter++;
  if (counter == 5) {
    alert("Hi");
  }
});