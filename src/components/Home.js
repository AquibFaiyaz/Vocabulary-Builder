import axios from "axios";
import React, { useEffect } from "react";

import { connect } from "react-redux";
import { DATA_FETCHED } from "../actions";
//Components
import Loading from "./Loading";
import MsgModal from "./modals/MsgModal";
import WordModal from "./modals/WordModal";
import Navbar from "./Navbar";

import WordsList from "./WordsList";

//url for data fetching
const url = "https://aquibdev.info:3000/api/v1/dictionary";

function Home({
  fetchHandler,
  data,
  isLoading,
  isModalOpen,
  isMsgModalOpen,
  isChecked,
}) {
  //Data fetching
  useEffect(() => {
    fetchHandler(url);
  }, [fetchHandler, isModalOpen, isMsgModalOpen, isChecked]);
  //console.log({ data, isLoading });

  return (
    <div className="words-wrapper">
      {isLoading && <Loading />}
      {/* <Loading /> */}
      {data && <WordsList />}
      {isModalOpen && <WordModal />}
      {isMsgModalOpen && <MsgModal />}
    </div>
  );
}

const mapStatetoProps = (state) => {
  const { data, isLoading, isModalOpen, isMsgModalOpen } = state;
  return { data, isLoading, isModalOpen, isMsgModalOpen };
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
