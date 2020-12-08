// Converts the relevant associate's alibi information into HTML to be used in alibiList.js
export const alibiHTMLer = (associateObject) =>{
    return `
    <section class="associate">
        <h4 class="associate__name"><b>Associate:</b>${associateObject.name}</h4> 
        <div class="associate__alibi"><b>Alibi:</b> ${associateObject.alibi}</div>
    </section>
    `;
};