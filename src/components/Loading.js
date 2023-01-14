import React from "react";

import { css } from "@emotion/react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { connect } from "react-redux";

const override = css`
  display: block;
  margin: 15rem auto;
  border-color: red;
`;
let color = "blue";

function Loading({ isLoading }) {
  return (
    <>
      <ClimbingBoxLoader
        loading={isLoading}
        css={override}
        size={30}
        color={color}
      />
      {/* <h1>Loading...</h1> */}
    </>
  );
}

const mapStateToProps = (state) => {
  const { isLoading } = state;
  return { isLoading };
};

export default connect(mapStateToProps)(Loading);
