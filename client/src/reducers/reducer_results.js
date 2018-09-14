import searchResults from "./database/searchResults-EN";

export default function (state = "", action) {
	switch (action.type) {
		case "SEARCH_TERM_ENTERED":
		let results;
			searchResults.map(sr => {
				if (sr.searchTerms.includes(action.payload.toLowerCase())) {
					return results = sr;
				} else {
					return results;
				}
			})
			if (!results) {
				return results = "No matches"
			};
			console.log("xxxx", results);
    	return results;
    default:
  }
	return state
}