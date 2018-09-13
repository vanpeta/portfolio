import searchResults from "./database/searchResults-EN";

export default function (state = "", action) {
	switch (action.type) {
		case "SEARCH_TERM_ENTERED":
		let results;
			searchResults.map(x => {
				if (x.searchTerms.includes(action.payload)) {
					return results = x;
				} else {
					return results = "No matches"
				}
			});
			console.log("xxxx", results);
    	return results;
    default:
  }
	return state
}