import { combineReducers } from "redux";

import results from "./reducer_results";
import searchTerm from "./reducer_searchTerm"
import category from "./reducer_category"
import link from "./reducer_link";

const rootReducer = combineReducers({
	results, searchTerm, category, link
});

export default rootReducer;
