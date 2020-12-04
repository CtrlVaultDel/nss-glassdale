// Imports
import { saveNote } from "./noteProvider.js";

// Selectors
const contentTarget = document.querySelector(".noteFormContainer");
const eventHub = document.querySelector(".container");

// This renders a form onto the DOM
const render = () => {
    contentTarget.innerHTML = `
        <div class="noteForm">
            <input type="text" id="note--text" placeholder="Please enter notes here">
            <input type="text" id="note--suspect" placeholder="Suspect Name">
            <input type="date" id="note--date">
            <button id="saveNote">Save Note</button>
            <div class="note--display">Display Notes: 
                <input type="checkbox" checked="true" id="note--checkbox">
            </div>
        </div>
    `;
};

// Export the render function so that main.js can call it
export const noteForm = () => render();

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    //console.log(clickEvent.target)
    if (clickEvent.target.id === "saveNote") {

        // ISSUE IS HERE
        let text = document.getElementById("note--text").value;
        let suspect = document.getElementById("note--suspect").value;
        let date = document.getElementById("note--date").value;

        console.log(text)
        console.log(suspect)
        console.log(date)

        // Make a new object representation of a note
        const newNote = {
            text: text,
            suspect: suspect,
            date: date
        };

        // Change API state and application state
        saveNote(newNote);
    };
});