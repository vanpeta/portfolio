export default function (state = "", action) {
	switch (action.type) {
		case "CONTACT_ME":
			console.log("!!!!!!!", action.payload);
      return action.payload;
    default:
  }
	return state;
}