// Converts the relevant criminal object information into HTML to be used in criminalList.js
export const criminalHTMLer = (criminalObject, facilities) =>{
    return `
    <section class="criminal">
        <h3 class="criminal__name">${criminalObject.name}</h3>
        <div class="button--container">
            <button class="criminal__button" id="associates--${criminalObject.id}">
                Associate Alibis
            </button>
        </div>
        <div class="criminal__age">
            <b>Age:</b> ${criminalObject.age}
        </div>
        <div class="criminal__crime">
            <b>Crime:</b> ${criminalObject.conviction}
        </div>
        <div class="criminal__incarceration-start">
            <b>Term start:</b> ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}
        </div>
        <div class="criminal__incarceration-end">
            <b>Term end:</b> ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}
        </div>
        <div class = "criminal__facilities">
            <h4 class="criminal__facilities__header">---  Facilities  ---</h4>
            <ul>
                ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
            </ul>
        </div>
    </section>
    `;
};