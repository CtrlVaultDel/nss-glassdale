// Converts the relevant object information into HTML for criminalList.js
export const criminalHTMLer = (criminalObject) =>{
    return `
    <section class="criminal">
        <h3 class="criminal__name">${criminalObject.name}</h3>
        <div class="criminal__age"><b>Age:</b> ${criminalObject.age}</div>
        <div class="criminal__crime"><b>Crime:</b> ${criminalObject.conviction}</div>
        <div class="criminal__incarceration-start"><b>Term start:</b> ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</div>
        <div class="criminal__incarceration-end"><b>Term end:</b> ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</div>
    </section>
    `;
}