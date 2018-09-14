import { combineReducers } from "redux";

import results from "./reducer_results";
import searchTerm from "./reducer_searchTerm"
import category from "./reducer_category"

const rootReducer = combineReducers({
	results, searchTerm, category
});

export default rootReducer;
