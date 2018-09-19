export default function(state = false, action) {
  switch (action.type) {
		case "SHARE":
      return action.payload;
    default:
  }
  return state;
}
