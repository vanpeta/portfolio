import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import results from "./reducer_results";
import searchTerm from "./reducer_searchTerm"
import category from "./reducer_category"
import link from "./reducer_link";
import showContactForm from "./reducer_contacting";
import sharing from "./reducer_sharing";
import formData from "./reducer_formData";
import contactMe from "./reducer_contact_me";

const rootReducer = combineReducers({
  results,
  searchTerm,
  category,
  link,
  showContactForm,
  sharing,
  formData,
  contactMe,
  form: formReducer
});

export default rootReducer;