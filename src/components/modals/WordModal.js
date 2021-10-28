import axios from "axios";
import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";

import { CLOSE_MODAL_SIDE, WORD_CHANGE, FORM_SUBMIT } from "../../actions";

Modal.setAppElement("#root");
function WordModal({
  isModalOpen,
  handleSubmit,
  handleClose,
  handleChange,
  word,
}) {
  return (
    <Modal
      className="word-modal"
      isOpen={isModalOpen}
      onRequestClose={handleClose}
    >
      <form onSubmit={(e) => handleSubmit(e, word)}>
        <input
          id="word"
          name="word"
          value={word}
          type="text"
          placeholder="search word"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <div className="form-button">
          <button onClick={handleClose}>Cancel</button>
          <button type="submit">Add</button>
        </div>
      </form>
    </Modal>
  );
}
const mapStateToProp = (state) => {
  //console.log(state);
  const { isModalOpen, dispatch, word } = state;
  return { isModalOpen, dispatch, word };
};

const mapDispatcToProps = (dispatch) => {
  return {
    handleSubmit: async (e, word) => {
      e.preventDefault();

      await axios
        .post("http://localhost:8000/api/v1/dictionary", {
          wordID: word,
        })
        .then((response) => {
          return dispatch({
            type: FORM_SUBMIT,
            payload: { msg: response.data },
          });
        })
        .catch((error) => {
          return dispatch({
            type: FORM_SUBMIT,
            payload: { msg: { msg: "word not found" } },
          });
        });
      //console.log(response);
    },
    handleClose: () => {
      dispatch({ type: CLOSE_MODAL_SIDE });
    },
    handleChange: (e) => {
      const currVal = e.target.value;
      dispatch({ type: WORD_CHANGE, payload: { currVal } });
    },
  };
};
export default connect(mapStateToProp, mapDispatcToProps)(WordModal);
