import { convictionSelect } from "./convictions/convictionSelection.js";
import { criminalList } from "./criminals/criminalList.js";
import { noteForm } from "./notes/noteForm.js";
import { officerSelect } from "./officers/officerSelection.js";

// Sends filter options based off convictions(crimes) to the DOM
convictionSelect();

// Sends filter options based off officers to the DOM
officerSelect();

// Sends the note form to the DOM
noteForm();

// Sends the full list of criminals to the DOM
criminalList();