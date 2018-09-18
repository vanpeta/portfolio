export default function (state = {}, action) {
	switch (action.type) {
    case "FORM_DATA":
      if (action.payload === {}) {
        return {};
      }
      const obj = Object.assign({}, action.payload);
      return obj;
    default:
  }
	return state;
}