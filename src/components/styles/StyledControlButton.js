import styled from 'styled-components';

export const StyledControlButtonsWrapper = styled.div`
  position: absolute;
  left: 40px;
  top: calc(100% - 40px);
  display: flex;
  justify-content: center;

  @media (max-width: 500px) {
    position: static;
  }
`

export const StyledControlButton = styled.button`
  padding: 20px;
  border: 4px solid #333;
  background: transparent;
  text-align: center;
  touch-action: manipulation;

  span {
    font-size: 20px;
    color: #999;
  }

  @media (max-width: 500px) {
    max-width: calc(100vw / 4);
  }
`

