// Imports
import { getNotes, useNotes, deleteNote} from "./noteProvider.js";
import { getCriminals, useCriminals } from "../criminals/criminalProvider.js";
import { renderNotes } from "./note.js";

// Selectors
const eventHub = document.querySelector(".container");
const checkBox = document.querySelector(".noteFormContainer");
const notesContainer = document.querySelector(".notesContainer");

let notes = [];
let criminals = [];

// Displays the notes on the DOM (if the display notes box is checked)
export const noteList = () => {
    getNotes()
        .then(getCriminals)
        .then(() => {
            notes = useNotes();
            criminals = useCriminals();

            // Renders notes to the page
            renderNotes(notes, criminals);
    });
};

// Listen to see if the notes are updated and push them to the DOM when they are
eventHub.addEventListener("noteStateChanged", () => noteList());

// Listen for a "change" event in the checkbox
checkBox.addEventListener("change", event => {
    // Check that the event id is the checkbox
    if(event.target.id === "note--checkbox"){
        // If the checkbox is checked, display the notes
        if (event.target.checked) {
            notesContainer.style.display = "flex";
        }

        // If the checkbox is NOT checked, hide the notes
        else{
            notesContainer.style.display = "none";
        };
    };
});

// Listens for a delete event
eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        // Invoke the delete operation
        deleteNote(id).then(() =>{
            const updatedNotes = useNotes();
            const criminals = useCriminals();
            
            // Renders notes to the page
            renderNotes(updatedNotes, criminals);
        });
    };
});