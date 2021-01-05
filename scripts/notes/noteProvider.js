// Selectors
const eventHub = document.querySelector(".container");

// Local container of notes
let notes = [];

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged");

    eventHub.dispatchEvent(noteStateChangedEvent);
};

export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => notes = parsedNotes);
};

export const useNotes = () => notes.slice();

// Saves new notes to the API
export const saveNote = note => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent);
};

// Deletes notes from the API
export const deleteNote = noteId => {
    return fetch(`http://localhost:8088/notes/${noteId}`,{
        method: "DELETE"
    })
    .then(getNotes);
};