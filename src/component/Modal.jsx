import React, { useState } from 'react';
import Modal from 'react-modal';
import img from '../assets/badge1.png'
import { BadgeUi } from './BadgeUi';
import { Container, Typography } from '@mui/material';
import { ReactComponent as Logo } from '../assets/staricon.svg';
// Style for the modal content
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '400px', // Adjust the maximum width as needed
    width: '90%', // Adjust the width as needed
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#fff',
    position: 'relative',
    zIndex: '1000',
  },
};

// Component
const MyModal = ({setModalIsOpen,modalIsOpen,badge}) => {
  

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
      >
        <Container
         style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '30vh' 
          }}
          
        >

        <BadgeUi size={135} badge={badge} />
        <Typography mt={2} ml={2} variant="h5" component="h5" textAlign="center">Badge Unlocked! <span>⭐</span></Typography>
        <Typography mt={1} textAlign="center"><span>🎉</span>Level Up! Earned a shiny new badge!🎖️✨ </Typography>
        </Container>
      </Modal>
    </div>
  );
};

export default MyModal;
