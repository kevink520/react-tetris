import styled from 'styled-components';
import bgImage from '../../img/bg.png';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
`

export const StyledTetris = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    padding: 12px;
    
    aside {
      max-width: 100%;
      order: -1;
      padding: 0;
    }
  }
`

