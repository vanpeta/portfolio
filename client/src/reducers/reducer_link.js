export default function (state = "", action) {
	switch (action.type) {
		case "LINK_SELECTED":
			const obj = Object.assign({}, action.payload);
			console.log("zzzzz",obj);
			return obj;
		default:
	}
	return state;
}