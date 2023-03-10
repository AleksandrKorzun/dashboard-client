import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FlexBetween from './FlexBetween';
import { PrimaryButton } from './Buttons';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BasicModal = ({isOpen, handleClose, title, description, link}) => {
    
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} mb={'20px'}>
            {description}
          </Typography>
        <FlexBetween>
            <PrimaryButton text="No" onClick={handleClose}/>
            <Link to={link}>
                <PrimaryButton text="Yes" onClick={handleClose}/>
            </Link>
        </FlexBetween>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal;