import React from 'react';
import { StyledControlButton } from './styles/StyledControlButton';

const ControlButton = ({ icon, onClick }) => (
  <StyledControlButton type="button" onClick={onClick}>
    <span className={`fa ${icon}`}></span>
  </StyledControlButton>
);

export default ControlButton;

