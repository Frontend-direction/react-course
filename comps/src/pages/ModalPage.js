import { useState } from 'react';
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal]  = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = <Button primary onClick={handleClose}>I accept</Button>

  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <h1>Modal</h1>
  </Modal>

  return (
    <div>
      <Button primary onClick={handleClick}>Open modal</Button>
      { showModal &&  modal}
    </div>
  );
}
export default ModalPage;