import { Container } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';

const WidthSetter = ({ children }) => {
  

  return (
    <Container maxWidth='sm'>
        {children}
      
    </Container>
  );
};

export default WidthSetter;
