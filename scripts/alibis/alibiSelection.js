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

            // WHAT IS WRONG WITH THIS???????????????????????
            // allCriminals successfully saves all criminal objects but the filter fails to pull
            // anything out from it at all
            // Save the criminal object to a local variable who's id matches the one above
            const selectedCriminal = allCriminals.filter(criminal => criminal.id === identity[1])
            console.log(allCriminals)


            // Save the criminal's full name.
            const criminalName = selectedCriminal.name;

            // Save the associates and their alibis related to the criminal
            const associateObjects = selectedCriminal.map(person => person.known_associates);

            // Create custom event named "alibisSelected" and pass them the criminal's name along with their associates' alibis
            const customEvent = new CustomEvent("alibisSelected", {
                detail: {
                    theCriminalChosen: criminalName,
                    theAlibisChosen: associateObjects
                }
            })
            // Dispatch "alibisSelected" event to event hub
            eventHub.dispatchEvent(customEvent);
        })
    }
})