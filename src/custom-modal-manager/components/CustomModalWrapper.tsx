import { useEffect, useRef, useState } from "react";
import "../styles/custom-modal.css";
import CustomModal from "./CustomModal";

interface CustomModalProps {
  modalTitle: string;
  modalDescription: string;
  children?: React.ReactNode;
  onClose?: () => void;
}

function CustomModalWrapper({
  modalTitle,
  modalDescription,
  children,
  onClose,
}: CustomModalProps) {
  const [showModal, setShowModal] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setShowModal(false);
    onClose?.();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    showModal && (
      <div className="modalContainer">
        <div ref={modalRef}>
          <CustomModal
            modalTitle={modalTitle}
            modalDescription={modalDescription}
            children={children}
          />
        </div>
      </div>
    )
  );
}

export default CustomModalWrapper;
