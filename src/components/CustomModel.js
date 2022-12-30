import React, { useRef } from "react";
import CustomModal from "@oneui/react-components/src/components/CustomModal";

const CustomModel = () => {
  const ModalBodyContent = () => <div> Modal body content... </div>;
  const ModalFooter = () => {
    return (
      <>
        <button
          type="button"
          className="btn btn-app-secondary"
          data-dismiss="modal"
          onClick={() => modalRef.current.hide()}
        >
          Cancel from App
        </button>
        <button
          type="button"
          className="btn btn-app-primary"
          onClick={() => {
            console.log("you clicked me..");
          }}
        >
          Confirm
        </button>
      </>
    );
  };
  const modalRef = useRef();
  return (
    <>
      <button
        type="button"
        className="btn btn-app-primary"
        onClick={() => modalRef.current.show()}
      >
        Launch Regular Modal
      </button>
      <CustomModal
        ref={modalRef}
        transition="" // left,right , empty("") for default transition
        modalSize={"modal-lg"}
        isOverlay={false}
        modalTitle={"Modal Title"}
        modalBody={<ModalBodyContent />}
        modalFooter={<ModalFooter />}
        onConfirm={() => {}}
        onCancel={() => {
          modalRef.current.hide();
        }}
      />
    </>
  );
};

export default CustomModel;
