// Imports
import { alibiHTMLer } from "./alibi.js";

// Selectors
const eventHub = document.querySelector(".container");
const alibiElement = document.querySelector(".alibisContainer");

// ------- LISTEN FOR ALIBI BUTTON (START) -------
eventHub.addEventListener("alibisSelected", event =>{
    // Save the criminal name to a local variable
    const criminalChosen = event.detail.criminalName;

    // Save the associates and their alibis in HTML to a local variable
    const alibiList = event.detail.theAlibisChosen.map(associate => 
        alibiHTMLer(associate));

    // Convert the criminal name to HTML and attach the associates and their alibis after it in the DOM.
    alibiElement.innerHTML = `
        <section class="criminalSelected">
            <h3 class="criminalSelected__name">${criminalChosen}</h3>
        </section>
        ${alibiList}}
    `;
});
// -------- LISTEN FOR ALIBI BUTTON (END) --------

