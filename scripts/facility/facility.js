// Converts the witnesses into HTML to be used in the DOM
export const facilityHTMLer = (facilityObject, criminals) =>{
    return `
    <section class="facility">
        <h2 class="facility__name">${facilityObject.facilityName}</h2>
        <div class="facility__security"><b>Security: </b>${facilityObject.securityLevel}</div>
        <div class="facility__capacity"><b>Capacity: </b>${facilityObject.capacity}</div>
        <div class="facility__criminalsHeader"><b>Criminals:</b></div>
        <ul class="facility__criminals">
            ${criminals.map(criminal => `<li class="facility__criminals__item">${criminal.name}</li>`).join("")}
        </ul>
    </section>
    `;
};