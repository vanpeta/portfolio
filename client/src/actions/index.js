import { SEARCH_TERM_ENTERED } from "./types";

export const searchTermEntered = (term) => {
	return { type: SEARCH_TERM_ENTERED, payload: term };
}