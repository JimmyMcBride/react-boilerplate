// Initial state is in it's own file to be imported in reducer files
const initialState = {
  error: "",
  items: [],
  item: [],
  count: 0,
  getting: false,
  got: false,
  adding: false,
  added: false,
  updating: false,
  updated: false,
  deleting: false,
  deleted: false
};

export default initialState;
