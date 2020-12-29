// Imports
import { saveNote } from "./noteProvider.js";
import { getCriminals, useCriminals } from "../criminals/criminalProvider.js";

// Selectors
const contentTarget = document.querySelector(".noteFormContainer");
const eventHub = document.querySelector(".container");

// This renders a form onto the DOM
const render = () => {
    getCriminals().then(() => {
        const criminals = useCriminals();
        contentTarget.innerHTML = `
        <div class="noteForm">
            <textarea type="text" id="note--text" placeholder="Please enter notes here" required></textarea>
            <input type="text" id="note--author" placeholder="Author Name" required>
            <select id="note--criminal" class="criminalSelect">
            ${criminals.map(criminal => `<option value="${criminal.id}">${criminal.name}</option>`).join("")}
            </select>
            <button id="saveNote">Save Note</button>
            <div class="note--display">Display Notes: 
                <input type="checkbox" id="note--checkbox">
            </div>
        </div>
    `;
    })
};

// Export the render function so that main.js can call it
export const noteForm = () => render();

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    //console.log(clickEvent.target)
    if (clickEvent.target.id === "saveNote") {
        // Save DOM elements to local variables
        let text = document.getElementById("note--text").value;
        let author = document.getElementById("note--author").value;
        let criminalId = document.getElementById("note--criminal").value;
        let timestamp = new Date();
        console.log(text, author, criminalId, timestamp)
        if (text.length > 0 && author.length > 0 && criminalId > 0){
            // Make a new object representation of a note
            const newNote = {
                text: text,
                author: author,
                criminalId: parseInt(criminalId),
                timestamp: timestamp
            };

            // Change API state and application state
            saveNote(newNote);
        }
        else{
            alert("Please fill out all of the information before submitting a note")
        }
    };
});