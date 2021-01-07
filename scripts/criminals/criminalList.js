// Imports
import { getCriminals, useCriminals } from './criminalProvider.js';
import { criminalHTMLer } from './criminal.js';
import { getFacilities, useFacilities } from '../facility/facilityProvider.js';
import { getCriminalFacilities, useCriminalFacilities } from '../facility/criminalFacilityProvider.js';

// Selectors
const contentElement = document.querySelector(".criminalsContainer");
const eventHub = document.querySelector(".container");

export const criminalList = () => {
    getCriminals()
    .then(() => {
        const criminals = useCriminals();
        render(criminals);
    });
};


// Renders the criminals to the DOM that were selected based off of the selected filter
const render = (criminalCollection) => {
    getFacilities()
    .then(getCriminalFacilities)
    .then(() => {
        // Store facilities and criminal relationship to facilities
        const allFacilities = useFacilities();
        const allRelationships = useCriminalFacilities();

        // Iterate all criminals
        contentElement.innerHTML = criminalCollection.map(criminal => {

            // Filter all relationships to get the facilities for each criminal
            const relatedFacility = allRelationships.filter(cf => cf.criminalId == criminal.id)
            
            // Convert the relationships to facilities with map()
            const facilities = relatedFacility.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id == cf.facilityId)
                return matchingFacilityObject;
            })

            // Must pass the matching facilities to the criminalHTMLer component from criminal.js
            return criminalHTMLer(criminal, facilities)
        }).join("");
    })
};
    

// -------- LISTEN FOR CRIME FILTER (START) --------
// When a crime is selected from the drop down menu, execute the following code
eventHub.addEventListener("crimeSelected", event => {
    const criminals = useCriminals();
    // If anything besides the default value (All Crimes) was selected, filter based off the selection
    if (event.detail.crimeThatWasChosen !== "0"){
      const matchingCriminals = criminals.filter(criminal =>
            // Filter criminals who committed the selected crime
            criminal.conviction === event.detail.crimeThatWasChosen);

        // Render the filtered criminals to the DOM
        render(matchingCriminals);
    } 
    // If the default value was chosen (All Crimes), then show all criminals
    else {
        render(criminals);
    };
});
// -------- LISTEN FOR CRIME FILTER (END) --------


// -------- LISTEN FOR OFFICER FILTER (START) --------
// When an officer is selected from the drop down menu, execute the following code
eventHub.addEventListener("officerSelected", event => {
    const criminals = useCriminals();
    // If anything besides the default value (All Officers) was selected, filter based off the selection
    if (event.detail.officer !== "0"){
        // Filter criminals who were arrested by the selected officer
        const matchingOfficers = criminals.filter(criminal =>
            criminal.arrestingOfficer === event.detail.officer);

        // Render the filtered criminals to the DOM
        render(matchingOfficers);
    }  
    // If the default value was chosen (All Officers), then show all criminals
    else {
        render(criminals);
    }
    
    const officerName = event.detail.officer;

    // Pull criminals arrested by the selected officer
    criminals.map(
        criminalObject => criminalObject.arrestingOfficer === officerName
    );
})
// -------- LISTEN FOR OFFICER FILTER (END) --------