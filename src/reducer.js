import { DATA_FETCHED, POST_CLICKED, OPEN_MODAL } from "./actions";

const reducer = (state, action) => {
  //console.log(action);
  if (action.type === DATA_FETCHED) {
    const { data } = action.payload;
    return {
      ...state,
      data: data,
      isLoading: false,
    };
  }
  if (action.type === OPEN_MODAL) {
    console.log("modal open");
    return {
      ...state,
      isModalOpen: true,
    };
  }

  return state;
};

export default reducer;
