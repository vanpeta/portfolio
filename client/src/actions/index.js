import axios from "axios";

import {
  SEARCH_TERM_ENTERED,
  CATEGORY_SELECTED,
  SEARCH_TERM,
  LINK_SELECTED,
	CONTACTING,
	SHARE,
  FORM_DATA,
  CONTACT_ME
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

export const sharing = (bool) => {
	return { type: SHARE, payload: bool };
}

export const updatingFormData = (data) => {
	return { type: FORM_DATA, payload: data };
}

export const contactMe = (data) => {
	console.log("ACTION", data);
	const request = axios.post("/api/contactme", data);
	return { type: CONTACT_ME, payload: request };
}