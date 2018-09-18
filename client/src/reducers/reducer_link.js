export default function (state = "", action) {
	switch (action.type) {
		case "LINK_SELECTED":
		if (action.payload === null) {
			return null;
		}
			const obj = Object.assign({}, action.payload);
			return obj;
		default:
	}
	return state;
}