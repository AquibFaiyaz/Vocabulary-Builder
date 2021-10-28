import React, { useEffect } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { CLOSE_MSG_MODAL } from "../../actions";

Modal.setAppElement("#root");
function MsgModal({ isMsgModalOpen, modalMsg, handleCloseMsg }) {
  useEffect(() => {
    setTimeout(() => {
      handleCloseMsg();
    }, 1000);
  });
  const messgae = modalMsg.msg;
  return (
    <Modal className="msg-modal" isOpen={isMsgModalOpen}>
      <h1>{messgae}</h1>
    </Modal>
  );
}

const mapStateToProp = (state) => {
  const { isMsgModalOpen, modalMsg } = state;
  return { isMsgModalOpen, modalMsg };
};

const mapDispatchToProp = (dispatch) => {
  return {
    handleCloseMsg: () => {
      dispatch({ type: CLOSE_MSG_MODAL });
    },
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(MsgModal);
