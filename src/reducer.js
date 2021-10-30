import axios from "axios";
import {
  DATA_FETCHED,
  CLOSE_MODAL_SIDE,
  OPEN_MODAL,
  WORD_CHANGE,
  FORM_SUBMIT,
  CLOSE_MSG_MODAL,
  REMOVE_CARD,
  CHECK_MEMORIZED,
} from "./actions";

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
    //console.log("modal open");
    return {
      ...state,
      isModalOpen: true,
    };
  }
  if (action.type === CLOSE_MODAL_SIDE) {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  if (action.type === WORD_CHANGE) {
    const { currVal } = action.payload;
    //console.log(currVal);
    return {
      ...state,
      word: currVal,
    };
  }
  if (action.type === FORM_SUBMIT) {
    const { msg } = action.payload;
    console.log(msg);

    return {
      ...state,
      word: "",
      isModalOpen: false,
      modalMsg: msg,
      isMsgModalOpen: true,
    };
  }
  if (action.type === CLOSE_MSG_MODAL) {
    return { ...state, isMsgModalOpen: false };
  }
  if (action.type === REMOVE_CARD) {
    const { msg } = action.payload;
    return { ...state, modalMsg: msg, isMsgModalOpen: true };
  }
  if (action.type === CHECK_MEMORIZED) {
    const { msg } = action.payload;
    return { ...state, modalMsg: msg, isMsgModalOpen: true };
  }
  return state;
};

export default reducer;
