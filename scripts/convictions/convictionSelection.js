// The convictionSelect component, which will invoke useConvictions() and then iterate that collection to fill out the dropdown in the browser.

/*
 *   convictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
// Imports
import { getConvictions, useConvictions } from "./convictionProvider.js";

// Selectors
const contentTarget = document.querySelector(".filters__crime");
const eventHub = document.querySelector(".container");

// Get all convictions from application state
export const convictionSelect = () => 
    getConvictions().then(() => {
        let convictions = useConvictions();
        render(convictions);
    });

const render = convictionsCollection => {
    // Generate option elements
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">All Crimes</option>
            ${
                convictionsCollection.map(convictionObject => 
                    `<option value="${convictionObject.name}">${convictionObject.name}</option>`).join("") 
            }
        </select>
    `;
};

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {

    // Only do this if the "crimeSelect" element was changed
    if (event.target.id === "crimeSelect") {
        // Create custom event named "crimeChosen"
        const customEvent = new CustomEvent("crimeSelected", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        });
        // Dispatch "crimeChosen" event to event hub
        eventHub.dispatchEvent(customEvent);
    };
});