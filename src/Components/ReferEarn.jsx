import React, { useState } from 'react';
import { Button, Container, Typography, Modal, Box } from '@mui/material';
import ReferralForm from '../Components/RefferalForm';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const ReferEarn = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Refer & Earn
      </Typography>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Refer Now
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <ReferralForm handleClose={handleClose} />
        </Box>
      </Modal>
    </Container>
  );
};

export default ReferEarn;
