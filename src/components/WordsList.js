import React from "react";
import { connect } from "react-redux";
import { OPEN_MODAL, SEARCH_TERM, CLEAR_SEARCH } from "../actions";
import { BiBookAdd } from "react-icons/bi";

import WordCard from "./WordCard";

function WordsList({
  data = [],
  modalHandler,
  searchHandler,
  searchTerm,
  clearHandler,
}) {
  //console.log(data);
  if (data.length === 0) {
    return (
      <>
        <div
          style={{
            margin: "15rem auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ textAlign: "center", fontSize: "4rem" }}>
            Please click add to add words
          </h1>
        </div>

        <button onClick={modalHandler} className="fetch-btn">
          <BiBookAdd className="download" />
        </button>
      </>
    );
  }
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          value={searchTerm}
          placeholder="Search..."
          onChange={(e) => {
            searchHandler(e);
          }}
        />
        <button onClick={clearHandler} className="search-btn">
          X
        </button>
      </div>
      <button onClick={modalHandler} className="fetch-btn">
        <BiBookAdd className="download" />
      </button>
      {data
        .filter((word) => {
          if (searchTerm === "") {
            return word;
          } else if (
            word.wordID.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return word;
          }
        })
        .map((item) => {
          const { _id } = item;
          return <WordCard key={_id} {...item} />;
        })}
    </>
  );
}
const mapStateToProps = (state) => {
  const { data, searchTerm } = state;
  return { data, searchTerm };
};

const mapDispatchToProp = (dispatch) => {
  return {
    modalHandler: () => {
      dispatch({ type: OPEN_MODAL });
    },
    searchHandler: (e) => {
      const searchVal = e.target.value;
      dispatch({ type: SEARCH_TERM, payload: { searchVal } });
    },
    clearHandler: () => {
      dispatch({ type: CLEAR_SEARCH });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(WordsList);
