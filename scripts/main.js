import { convictionSelect } from "./convictions/convictionSelection.js";
import { criminalList } from "./criminals/criminalList.js";
import { noteForm } from "./notes/noteForm.js";
import { noteList } from "./notes/noteList.js";
import { officerSelect } from "./officers/officerSelection.js";
import "./alibis/alibiSelection.js";
import "./alibis/alibiList.js";
import { witnessList } from "./witnesses/witnessList.js";
import "./switchPage.js";
import { facilityList } from "./facility/facilityList.js";

// Sends filter options based off convictions(crimes) to the DOM
convictionSelect();

// Sends filter options based off officers to the DOM
officerSelect();

// Sends the note form to the DOM
noteForm();

// Initialize notes
noteList();

// Sends the full list of criminals to the DOM
criminalList();

// Prepares the full list of witnesses to be displayed on the DOM (Initially hidden)
witnessList();

// Prepares the full list of facilities to be displayed on the DOM (initially hidden)
facilityList();