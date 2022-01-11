import './modal.css';

const Modal = ({text, display=true, confirmButtonText="Confirm", cancelButtonText="Cancel", onConfirm, onCancel}) => {
  const handleConfirm = (e) => {
    if(onConfirm instanceof Function) onConfirm(e);
  };

  const handleCancel = (e) => {
    if(onCancel instanceof Function) onCancel(e);
  };

  return display === true ? (
    <div className="modal-wrapper">
      <div>
        <p>{text}</p>
        <button onClick={handleConfirm}>{confirmButtonText}</button>
        <button onClick={handleCancel}>{cancelButtonText}</button>
      </div>
    </div>
  ) : null;
};

export default Modal;