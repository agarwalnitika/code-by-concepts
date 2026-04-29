import { useState } from "react";
import "../styles/custom-modal.css";
import CustomModalWrapper from "./CustomModalWrapper";

function ModalTester() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        show modal
      </button>
      {showModal && (
        <CustomModalWrapper
          modalTitle="modal"
          modalDescription="this is a modal"
          onClose={() => {
            setShowModal(false);
          }}
        />
      )}
    </>
  );
}

export default ModalTester;
