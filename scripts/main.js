let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/moonphases.png') {
      myImage.setAttribute('src','images/eclipse.jpg');
    } else {
      myImage.setAttribute('src','images/moonphases.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Lua Hoje, ' + myName; 
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Lua Hoje, ' + storedName;
}

myButton.onclick = function() {
    setUserName ();
}
