const initialState = {
  open: false,
  title: "This is dialog title",
  text: "This is dialog text",
  type: "confirm",
};

export const dialogsReducer = (state = initialState, { payload }) => {
  return { ...state, ...payload };
};
