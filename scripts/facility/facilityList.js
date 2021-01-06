// Imports
import { facilityHTMLer } from "./facility.js";
import { getFacilities, useFacilities } from "./facilityProvider.js";
import { getCriminals, useCriminals } from "../criminals/criminalProvider.js";
import { getCriminalFacilities, useCriminalFacilities } from "./criminalFacilityProvider.js";

// Selectors
const contentElement = document.querySelector(".facilityContainer");

// To be used to initialize the witnesses on the DOM (Will be hidden initially)
export const facilityList = () => {
    getFacilities()
    .then(getCriminalFacilities)
    .then(getCriminals)
    .then(() => {
        const allFacilities = useFacilities();
        const allRelationships = useCriminalFacilities();
        const allCriminals = useCriminals();

        contentElement.innerHTML = allFacilities.map(facility => {
            const relatedCriminals = allRelationships.filter(cf => cf.facilityId == facility.id)
            const criminals = relatedCriminals.map(cf => {
                const matchingCriminalObject = allCriminals.find(criminal => criminal.id == cf.criminalId)
                return matchingCriminalObject
            })
            return facilityHTMLer(facility, criminals)
        }).join("");
    });
};