export default function (state = "", action) {
	switch (action.type) {
    case "CONTACT_ME_REQUEST":
      if (action.error) {
        return { status: 400 };
      }
      return action.payload;
    case "CLEAR_RESPONSE":
      return action.payload;
    default:
  }
	return state;
}