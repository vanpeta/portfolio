import { SEARCH_TERM_ENTERED } from "./types";
import { SEARCH_TERM } from "./types";

export const searchTermEntered = (term) => {
	return { type: SEARCH_TERM_ENTERED, payload: term };
}

export const searchTerm = (term) => {
	return { type: SEARCH_TERM, payload: term };
}