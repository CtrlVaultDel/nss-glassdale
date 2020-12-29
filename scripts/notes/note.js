// Converts the relevant note object information into HTML to be used in noteList.js
export const noteHTMLer = (noteObject) =>{
    return `
    <section class="note">
        <div class="note__text"><b>Note: </b>${noteObject.text}</div>
        <div class="note__author"><b>Author: </b>${noteObject.author}</div>
        <div class="note__criminal"><b>Criminal: </b>${noteObject.criminal}</div>
        <div class="note__date"><b>Date: </b>${new Date(noteObject.timestamp).toLocaleDateString('en-US')}</div>
    </section>
    `;
};