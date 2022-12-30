import React, { useRef } from "react";
import Alert from "@oneui/react-components/src/components/AlertModal";
import "@oneui/6d-base-theme/build/theme.css";

const AlertComponent = () => {
  const content = () => <div>!Modal content</div>;
  const modalRef = useRef();
  return (
    <div className="modal-wrapper">
      <button
        onClick={() => {
          modalRef.current.show();
        }}
        className="btn btn-outline-primary"
      >
        Alert
      </button>
      <Alert
        ref={modalRef}
        content={<content />}
        state={"hide"}
        title={"Warning"}
        type={"warning"}
        onConfirm={() => {
          console.log("on confirm");
        }}
        onCancel={() => {
          console.log("on cancel");
        }}
        primaryButtonLabel={"Confirm"}
        secondaryButtonLabel={"Cancel"}
        showoverlay={true}
        customClass={"modal-custom-class"}
      />
    </div>
  );
};

export default AlertComponent;
