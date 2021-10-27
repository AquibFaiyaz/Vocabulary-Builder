import React from "react";
import { connect } from "react-redux";
import { OPEN_MODAL } from "../actions";
import { BiBookAdd } from "react-icons/bi";

import WordCard from "./WordCard";

function WordsList({ data, modalHandler }) {
  //console.log(data);
  return (
    <>
      <button onClick={modalHandler}>
        <BiBookAdd className="download" />
      </button>
      {data.map((item) => {
        const { _id } = item;
        return <WordCard key={_id} {...item} />;
      })}
    </>
  );
}
const mapStateToProps = (state) => {
  const { data } = state;
  return { data };
};

const mapDispatchToProp = (dispatch) => {
  return {
    modalHandler: () => {
      dispatch({ type: OPEN_MODAL });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(WordsList);
