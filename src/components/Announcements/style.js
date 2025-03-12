import styled, { keyframes } from 'styled-components';

export const AnnouncementContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #ff0076, #590fb7);
  padding: 12px 24px;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  color: white;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  font-size: ${(props) => (props.isMobile ? '12px' : '18px')}; /* Reduced from 14px to 12px for mobile */
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1px;
  text-align: center;
  gap: 12px;
  flex-wrap: wrap;

  &:hover {
    background: linear-gradient(90deg, #f40076, #342711);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 8px 16px;
    gap: 8px;
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

export const AnimatedEmoticon = styled.span`
  display: inline-block;
  margin: 0 5px; /* Space around emoticons */
  animation: ${bounce} 1s infinite; /* Apply bounce animation, repeat infinitely */
`;

