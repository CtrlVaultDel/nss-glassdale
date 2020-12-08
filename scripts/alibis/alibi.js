// Converts the relevant associate's alibi information into HTML to be used in alibiList.js
export const alibiHTMLer = (associateObject) =>{
    return `
    <section class="associate">
        <h3 class="associate__name">${associateObject.name}</h3> 
        <div class="associate__alibi"><b>Alibi:</b> ${associateObject.alibi}</div>
    </section>
    `;
};