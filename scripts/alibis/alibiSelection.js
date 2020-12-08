// Imports
import { getCriminals, useCriminals } from '../criminals/criminalProvider.js';

// Selectors
const eventHub = document.querySelector(".container");

// On the event hub, listen for a "click" event.
eventHub.addEventListener("click", event => {
    // Only do this if the "criminal__button" (Associate Alibis button) element was clicked
    if (event.target.classList.contains("criminal__button")) {
        let allCriminals = [];
        getCriminals().then(() => allCriminals = useCriminals()).then(() => {
            // Split the id from the button in order to use the number. E.g. Associates--2 -> Associates & 2
            const identity = event.target.id.split("--");
            
            // Save the criminal object to a local variable who's id matches the one above
            const selectedCriminal = allCriminals.find(criminal => criminal.id === parseInt(identity[1]));

            // Save the criminal's full name.
            const criminalName = selectedCriminal.name;

            // Save the associates and their alibis related to the criminal
            const associateObjects = selectedCriminal.known_associates.slice();

            // Create custom event named "alibisSelected" and pass them the criminal's name along with their associates' alibis
            const customEvent = new CustomEvent("alibisSelected", {
                detail: {
                    theCriminalChosen: criminalName,
                    theAlibisChosen: associateObjects
                }
            })
            // Dispatch "alibisSelected" event to event hub
            eventHub.dispatchEvent(customEvent);
        });
    };
});