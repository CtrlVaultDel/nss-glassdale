import { getOfficers, useOfficers } from "./officerProvider.js";

// Selectors
const contentTarget = document.querySelector(".filters__officer");
const eventHub = document.querySelector(".container");

// Get all officers from application state
export const officerSelect = () => 
    getOfficers().then(() => {
        let officers = useOfficers();
        render(officers);
    });

const render = officersCollection => {
    // Generate option elements
    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">All Officers</option>
            ${
                officersCollection.map(officerObject => 
                    `<option value="${officerObject.name}">${officerObject.name}</option>`).join("") 
            }
        </select>
    `;
};


eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value

        // Define a custom event
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
            }
        })
        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
})