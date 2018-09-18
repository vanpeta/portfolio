import {
  SEARCH_TERM_ENTERED,
  CATEGORY_SELECTED,
  SEARCH_TERM,
  LINK_SELECTED,
  CONTACTING
} from "./types";

export const searchTermEntered = (term) => {
	return { type: SEARCH_TERM_ENTERED, payload: term };
}

export const searchTerm = (term) => {
	return { type: SEARCH_TERM, payload: term };
}

export const categorySelected = (category) => {
	return { type: CATEGORY_SELECTED, payload: category };
}

export const linkSelected = (link) => {
	return { type: LINK_SELECTED, payload: link };
}

export const contacting = (bool) => {
	return { type: CONTACTING, payload: bool };
}


