// Imports
import { getNotes, useNotes } from "./noteProvider.js";
import { noteHTMLer } from "./note.js";

// Selectors
const eventHub = document.querySelector(".container");
const checkBox = document.querySelector(".noteFormContainer");
const noteLocation = document.querySelector(".notesContainer");

let notes = [];

export const noteList = () => {
    getNotes().then(() => {
        notes = useNotes();
        const notesToPage = notes.map(note => noteHTMLer(note)).join("")
        noteLocation.innerHTML = notesToPage;
    })
}

// Listen to see if the notes are updated and push them to the DOM when they are
eventHub.addEventListener("noteStateChanged", event =>{
    noteList();
})

// Listen for a "change" event in the checkbox
checkBox.addEventListener("change", event => {
    // Check that the event id is the checkbox
    if(event.target.id === "note--checkbox"){
        const notesContainer = document.querySelector(".notesContainer");
        // If the checkbox is checked, display the notes
        if (event.target.checked === true){
            notesContainer.style.display = "flex";
        }
        // If the checkbox is NOT checked, hide the notes
        else{
            notesContainer.style.display = "none";
        }
    }
})