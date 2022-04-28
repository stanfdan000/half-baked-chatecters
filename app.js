// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');
const headElm = document.getElementById('headreports');
const middleElm = document.getElementById('middlereports');
const bottomElm = document.getElementById('bottomreports');
// set state for all of the character's catchphrases
let phrases = [];
// set state for how many times the user changes the head, middle, and bottom
let head = 0;
let middle = 0; 
let bottom = 0;

 

headDropdown.addEventListener('change', () => {
    const headval = headDropdown.value;
    head++; 
    headEl.style.backgroundImage = `url('./assets/${headval}-head.png')`;
    displayStats();

    // get the value of the head dropdown

    // increment the head change count state
    
    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)

    // update the stats to show the new count (call displayStats() to do this work)
});


middleDropdown.addEventListener('change', () => {
    const middleval = middleDropdown.value;
    middle++;
    middleEl.style.backgroundImage = `url('./assets/${middleval}-middle.png')`;
    displayStats();
    // get the value of the middle dropdown

    // increment the middle change count state
    
    // update the dom for the middle (NOTE: use style.backgroundImage on the middleEl div instead of trying to set the .src -- it's NOT an img tag!)

    // update the stats to show the new count (call displayStats() to do this work)
});


bottomDropdown.addEventListener('change', () => {
    const bottomval = bottomDropdown.value;
    bottom++;
    bottomEl.style.backgroundImage = `url('./assets/${bottomval}-pants.png')`;
    displayStats();

    
    // get the value of the bottom dropdown

    // increment the bottom change count state

    // update the dom for the bottom (NOTE use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)

    // update the stats to show the new count (call displayStats() to do this work)
});

catchphraseButton.addEventListener('click', () => {
    const catinput = catchphraseInput.value;
    phrases.push(catinput);
    displayCatchphrases();

    // get the value of the catchphrase input
    
    // push the new catchphrase to the catchphrase array in state

    // clear out the form input's value so it's empty to the user
   
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)

});

function displayStats() {
    headElm.textContent = `you have changed the head${head} times `;

    middleElm.textContent = `you have changed the middle${middle} times`;

    bottomElm.textContent = `you have changed the bottom${bottom} times`;
    
    
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
}

function displayCatchphrases() {
    catchphrasesEl.textContent = ``;

    for (let phrase of phrases) {
        const phraseli = document.createElement('li');
        phraseli.textContent = phrase;
        catchphrasesEl.append(phraseli);
    }
    // clear out the DOM for the currently displayed catchphrases

    // loop through each catchphrase in state
   
    // and for each catchphrase
    
    // create an HTML element with the catchphrase as its text content
    
    // and append that HTML element to the cleared-out DOM
}
