import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 72px;
  display: flex;
  left: 0;
  width: 100%;
  z-index: 999;
  background: linear-gradient(rgba(246, 246, 255, 0.3), transparent);
  animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
  padding-top: 0px;
  padding-bottom: 0px;
  backdrop-filter: blur(17px);
  position: fixed;
  top: ${(props) => (props.isScrolled ? '0px' : '50px')};  /* Adjusted top value */
  transition: top 0.3s ease-in-out;

`;

export const MasterLayoutStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const MasterComponentStyle = styled.div`
  margin: 24px;
  background: var(--surface-medium, #EBF4FF);
  width: 100%;
`;