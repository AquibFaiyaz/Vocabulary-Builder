import React from "react";

import { css } from "@emotion/react";
import ClipLoader from "react-spinners/GridLoader";
import { connect } from "react-redux";

const override = css`
  display: block;
  margin: 15rem auto;
  border-color: red;
`;

function Loading({ isLoading }) {
  return (
    <>
      <ClipLoader loading={isLoading} css={override} size={60} />
      {/* <h1>Loading...</h1> */}
    </>
  );
}

const mapStateToProps = (state) => {
  const { isLoading } = state;
  return { isLoading };
};

export default connect(mapStateToProps)(Loading);
