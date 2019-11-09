import styled from 'styled-components';

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(25vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grip-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 25vw;
  background: #111;

  @media (max-width: 500px) {
    grid-template-rows: repeat(
      ${props => props.height},
      calc((100vh - 280px) / ${props => props.height})
    );
    grid-template-columns: repeat(
      ${props => props.width},
      calc((100vh - 280px) / ${props => props.height})
    );
    max-width: calc(((100vh - 280px) / ${props => props.height}) * ${props => props.width});
  }
`

