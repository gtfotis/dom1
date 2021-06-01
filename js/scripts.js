'use strict';
// Put this at the top of every js file
const bodyElement = document.querySelector('body');
const title = document.querySelector('#title');
const subtitle = document.querySelector('.subtitle');
const firstParagraph = document.querySelector('p');
const allParagraphs = document.querySelectorAll('p');
const clickMeButton = document.querySelector('#clickMe');
const h3Element = document.createElement('h3');
h3Element.innerText = "Hello, I am an H3 tag!";

bodyElement.append(h3Element);

let clickCount = 0;

function clickCounter() {
    clickCount = clickCount + 1;
    console.log('click count is ', clickCount);
    if (clickCount === 10) {
        return console.log("Stop clicking me!");
    }
    else if (clickCount >= 20) {
        return console.log("Seriously stop it!!");
    }
    else {
    return clickCount;
}}

clickMeButton.addEventListener('click', function() {
    clickCounter();
    title.innerText = 'Hello JavaScript!';
});
