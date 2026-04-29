import "../styles/custom-modal.css";

interface CustomModalProps {
  modalTitle: string;
  modalDescription: string;
  children?: React.ReactNode;
}

function CustomModal({
  modalTitle,
  modalDescription,
  children,
}: CustomModalProps) {
  return (
    <div className="modal slideIn">
      <div>{modalTitle}</div>
      <div>{modalDescription}</div>
      <div>{children}</div>
    </div>
  );
}

export default CustomModal;
