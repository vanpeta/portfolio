export default function (state = "", action) {
	switch (action.type) {
		case "SEARCH_TERM":
			return action.payload;
		default:
	}
	return state
}