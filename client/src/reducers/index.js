import { combineReducers } from "redux";

import results from "./reducer_results";
import searchTerm from "./reducer_searchTerm"

const rootReducer = combineReducers({
	results, searchTerm
});

export default rootReducer;
