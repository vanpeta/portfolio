export default function (state = false, action) {
	switch (action.type) {
		case "CONTACTING":
			return action.payload;
		default:
	}
	return state;
}