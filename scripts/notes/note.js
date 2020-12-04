// Converts the relevant note object information into HTML to be used in noteList.js
export const noteHTMLer = (noteObject) =>{
    return `
    <section class="note">
        <div class="note__text"><b>Note: </b>${noteObject.text}</div>
        <div class="note__suspect"><b>Suspect: </b>${noteObject.suspect}</div>
        <div class="note__date"><b>Date: </b>${new Date(noteObject.date).toLocaleDateString('en-US')}</div>
    </section>
    `;
};