import { getCriminals, useCriminals } from './criminalProvider.js';
import { criminalHTMLer } from './criminal.js';

// Selectors
const contentElement = document.querySelector(".criminalsContainer");
const eventHub = document.querySelector(".container");

let criminals = [];

export const criminalList = () => {
    // Call the getCriminals function and attach another callback function to it that calls 
    // useCriminals in order to save the criminals array to a local variable. After that, use
    // reduce on the array along with criminalHTMLer to convert the entire array to a string that
    // will be added to the DOM.

    // We can use .then because the getCriminals() function returns a promise object
    // As soon as the promise has been resolved, continue with the following code
    getCriminals().then(() => {
        criminals = useCriminals();
        contentElement.innerHTML = criminals.reduce(
            (accumulator, currentValue) => accumulator + criminalHTMLer(currentValue),""
        )
    });
};

// Listen for the custom event dispatched from convictionSelect
eventHub.addEventListener("crimeChosen", event => {
    
    // If the selection was anything besides the default id, filter based off that result.
    if (event.detail.crimeThatWasChosen !== "0"){
      const matchingCriminals = criminals.filter(criminal =>
            // Filter criminals to only those who committed the selected crime
            criminal.conviction === event.detail.crimeThatWasChosen);

        // Pass the filtered criminals to render() as an argument
        render(matchingCriminals);

    // If the selection is the default id, just render all criminals on the page
    } else {
        render(criminals);
    }
})

// Render to the DOM the criminals that were selected based off of the crime filter
const render = criminalCollection => 
    contentElement.innerHTML = criminalCollection.map(criminal => 
        criminalHTMLer(criminal)).join("");