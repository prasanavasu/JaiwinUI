import React from 'react';
import { Modal, Button } from '@mui/material';
import ModalContent from './ModalContent'; // Import the ModalContent component

const ProductModal = ({data}) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        size="small"
      >
        View More
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContent /> {/* Use the imported ModalContent component */}
      </Modal>
    </div>
  );
};

export default ProductModal;
