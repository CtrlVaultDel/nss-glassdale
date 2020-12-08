// Imports
import { getCriminals, useCriminals } from './criminalProvider.js';
import { criminalHTMLer } from './criminal.js';

// Selectors
const contentElement = document.querySelector(".criminalsContainer");
const eventHub = document.querySelector(".container");

// Will be filled after calling the criminalList() function
export let criminals = [];

export const criminalList = () => {
    /* 
    We can use .then on the getCriminals() function because it returns a promise object.
    As soon as the promise has been resolved, this then calls on useCriminals() which
    returns a copied array of objects that is then stored into the empty criminals array.
    the criminals array is then converted into HTML and joined together via the reduce method
    and criminalHTMLer() function from ./criminal.js
    */
    getCriminals().then(() => {
        criminals = useCriminals();
        contentElement.innerHTML = criminals.reduce(
            (accumulator, currentValue) => accumulator + criminalHTMLer(currentValue),""
        )
    });
};


// Renders the criminals to the DOM that were selected based off of the selected filter
const render = criminalCollection => 
    contentElement.innerHTML = criminalCollection.map(criminal => 
        criminalHTMLer(criminal)).join("");


// -------- LISTEN FOR CRIME FILTER (START) --------
// When a crime is selected from the drop down menu, execute the following code
eventHub.addEventListener("crimeSelected", event => {
    const criminals = useCriminals()
    // If anything besides the default value (All Crimes) was selected, filter based off the selection
    if (event.detail.crimeThatWasChosen !== "0"){
      const matchingCriminals = criminals.filter(criminal =>
            // Filter criminals who committed the selected crime
            criminal.conviction === event.detail.crimeThatWasChosen);

        // Render the filtered criminals to the DOM
        render(matchingCriminals);
    } 
    // If the default value was chosen (All Crimes), then show all criminals
    else {
        render(criminals);
    };
});
// -------- LISTEN FOR CRIME FILTER (END) --------


// -------- LISTEN FOR OFFICER FILTER (START) --------
// When an officer is selected from the drop down menu, execute the following code
eventHub.addEventListener("officerSelected", event => {
    // If anything besides the default value (All Officers) was selected, filter based off the selection
    if (event.detail.officer !== "0"){
        // Filter criminals who were arrested by the selected officer
        const matchingOfficers = criminals.filter(criminal =>
            criminal.arrestingOfficer === event.detail.officer);

        // Render the filtered criminals to the DOM
        render(matchingOfficers);
    }  
    // If the default value was chosen (All Officers), then show all criminals
    else {
        render(criminals);
    }
    
    const officerName = event.detail.officer;

    // Pull criminals arrested by the selected officer
    criminals.map(
        criminalObject => criminalObject.arrestingOfficer === officerName
    );
})
// -------- LISTEN FOR OFFICER FILTER (END) --------