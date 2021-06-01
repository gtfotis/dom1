'use strict';

const nameInput = document.querySelector('#username');
const adjectiveInput = document.querySelector('#firstAdjective');
const nounInput = document.querySelector('#firstNoun');
const verbInput = document.querySelector('#firstVerb');

const nameOutput = document.querySelector('#nameInput');
const adjectiveOutput = document.querySelector('#adjectiveInput');
const nounOutput = document.querySelector('#nounInput');
const verbOutput = document.querySelector('#verbInput');
const story = document.querySelector('#story');
const submitButton = document.querySelector('#submitMadlib');

submitButton.addEventListener("click", writeStory, false);
function DisableButton(event) {
    event.preventDefault();
}
function writeStory() {
    var launchedStory = "";
    launchedStory += "<p>When " + nameInput.value + "found a(n) ";
    launchedStory += adjectiveInput.value + " ";
    launchedStory += nounInput.value + ", Sean wanted to ";
    launchedStory += verbInput.value + " it.</p>";

    story.innerHTML = launchedStory;
}