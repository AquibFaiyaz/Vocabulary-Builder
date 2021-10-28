import axios from "axios";
import React, { useEffect } from "react";

import { connect } from "react-redux";
import { DATA_FETCHED } from "../actions";
//Components
import Loading from "./Loading";
import MsgModal from "./modals/MsgModal";
import WordModal from "./modals/WordModal";

import WordsList from "./WordsList";

//url for data fetching
const url = "http://localhost:8000/api/v1/dictionary";

function Home({ fetchHandler, data, isLoading, isModalOpen }) {
  //Data fetching
  useEffect(() => {
    fetchHandler(url);
  }, [fetchHandler, isModalOpen]);
  //console.log({ data, isLoading });

  return (
    <div className="words-wrapper">
      {isLoading && <Loading />}
      {data && <WordsList />}
      {isModalOpen && <WordModal />}
      <MsgModal />
    </div>
  );
}

const mapStatetoProps = (state) => {
  const { data, isLoading, isModalOpen } = state;
  return { data, isLoading, isModalOpen };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchHandler: async (url) => {
      const response = await axios.get(url);
      dispatch({
        type: DATA_FETCHED,
        payload: { data: response.data.data },
      });
    },
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Home);
