// Converts the relevant associate's alibi information into HTML to be used in alibiList.js
export const alibiHTMLer = (criminal, associate) =>{
    return `
    <section class="criminalSelected">
        <h3 class="criminalSelected__name">
            ${criminal}
        </h3>
    </section>
    <section class="associate">
        <h4 class="associate__name">
            ${associate.name}
        </h4> 
        <div class="associate__alibi">
            <b>Alibi:</b> ${associate.alibi}
        </div>
    </section>
    `;
};