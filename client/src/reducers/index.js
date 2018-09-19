import { combineReducers } from "redux";

import results from "./reducer_results";
import searchTerm from "./reducer_searchTerm"
import category from "./reducer_category"
import link from "./reducer_link";
import contacting from "./reducer_contacting";
import sharing from "./reducer_sharing";
import formData from "./reducer_formData";

const rootReducer = combineReducers({
	results, searchTerm, category, link, contacting, sharing, formData
});

export default rootReducer;
