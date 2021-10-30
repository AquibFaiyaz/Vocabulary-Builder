import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { REMOVE_CARD, CHECK_MEMORIZED } from "../actions";
import Definition from "./Definition";

function WordCard({
  wordID,
  defData,
  _id,
  memorized,
  handleCardDelete,
  handleCheck,
  isChecked,
}) {
  //console.log(_id);
  return (
    <div className={`card-container ${memorized ? "checked" : ""} `}>
      <h1>
        {wordID}
        <div className="under"></div>
      </h1>

      <ul>
        {defData.map((def) => {
          const { definitions } = def;
          return <Definition key={uuidv4()} definitions={definitions} />;
        })}
      </ul>
      <button
        className="remove-btn"
        onClick={() => {
          handleCardDelete(_id);
        }}
      >
        Remove
      </button>
      <div className="check-box">
        <input
          type="checkbox"
          className="check-input"
          onClick={() => {
            handleCheck(_id);
          }}
        />
        <label className="label-text">Memorized</label>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { isChecked } = state;
  return { isChecked };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleCardDelete: async (_id) => {
      await axios
        .delete(`http://localhost:8000/api/v1/dictionary/${_id}`)
        .then((response) => {
          return dispatch({
            type: REMOVE_CARD,
            payload: { msg: response.data },
          }); //{msg:{msg:'blah blah'}}
        })
        .catch((error) => {
          console.log(error);
          return dispatch({
            type: REMOVE_CARD,
            payload: { msg: error },
          });
        });
    },

    handleCheck: async (_id) => {
      const { memorized } = ownProps;
      await axios
        .patch(`http://localhost:8000/api/v1/dictionary/${_id}`, {
          memorized: !memorized,
        })
        .then((response) => {
          return dispatch({
            type: CHECK_MEMORIZED,
            payload: { msg: response.data },
          });
        });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WordCard);
