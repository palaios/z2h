var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.png') {
	myImage.setAttribute ('src', 'images/chrome.png');
    }else {
	myImage.setAttribute ('src', 'images/firefox.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('Please enter yur name.');
    localStorage.setItem('name', myName);
    myHeading.textCOntent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUSerName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function(){
    setUserName();s}
