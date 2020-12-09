// Converts the witnesses into HTML to be used in the DOM
export const witnessHTMLer = (witnessObject) =>{
    return `
    <section class="witness">
        <div class="witness__name"><b>Name: </b>${witnessObject.name}</div>
        <div class="witness__statement"><b>Statement: </b>${witnessObject.statements}</div>
    </section>
    `;
};