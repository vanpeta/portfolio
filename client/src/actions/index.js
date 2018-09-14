import { SEARCH_TERM_ENTERED, CATEGORY_SELECTED, SEARCH_TERM } from "./types";

export const searchTermEntered = (term) => {
	return { type: SEARCH_TERM_ENTERED, payload: term };
}

export const searchTerm = (term) => {
	return { type: SEARCH_TERM, payload: term };
}

export const categorySelected = (category) => {
	return { type: CATEGORY_SELECTED, payload: category };
}
