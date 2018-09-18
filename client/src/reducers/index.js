import { combineReducers } from "redux";

import results from "./reducer_results";
import searchTerm from "./reducer_searchTerm"
import category from "./reducer_category"
import link from "./reducer_link";
import contacting from "./reducer_contacting";

const rootReducer = combineReducers({
	results, searchTerm, category, link, contacting
});

export default rootReducer;
