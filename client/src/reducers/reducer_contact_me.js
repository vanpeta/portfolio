export default function (state = "", action) {
	switch (action.type) {
		case "CONTACT_ME":
			return action.payload;
		case "CLEAR_RESPONSE":
			return action.payload;
    default:
  }
	return state;
}