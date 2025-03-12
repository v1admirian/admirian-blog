import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const pulse = keyframes`
  0% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 0.4;
  }
`;

export const AnimatedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  overflow: hidden;
  background: linear-gradient(135deg, #F6F6FF 0%, #ffffff 100%);
`;

export const BackgroundShape = styled.div`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(255, 0, 118, 0.1), rgba(89, 15, 183, 0.1));
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  opacity: 0.6;
`;

export const BackgroundDot = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: linear-gradient(45deg, #ff0076, #590fb7);
  border-radius: 50%;
  animation: ${pulse} 3s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
`;

export const BlogListingContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
`;

const gradientText = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const GradientText = styled.span`
  background: linear-gradient(
    45deg,
    #ff0076,
    #590fb7,
    #00c6ff,
    #0072ff,
    #ff0076
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${gradientText} 8s ease infinite;
  font-weight: bold;
`;

export const BlogHeader = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  padding-top: 72px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #ff0076, #590fb7);
    border-radius: 2px;
  }
`;

export const BlogHeaderTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
  line-height: 1.2;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: -0.02em;
  background: linear-gradient(
    45deg,
    #ff0076,
    #590fb7,
    #00c6ff
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 2px 15px rgba(255, 0, 118, 0.2);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const BlogHeaderSubtitle = styled.p`
  font-size: 1.4rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  text-align: center;

  strong {
    color: #ff0076;
    font-weight: 600;
  }

  @media (prefers-color-scheme: dark) {
    color: #ccc;
    strong {
      color: #ff4d94;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0 1rem;
  }
`;

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem;
  max-width: 1400px;
  margin: 3rem auto;
  padding: 0 2rem;
  position: relative;
  align-items: stretch;

  &::before {
    content: '';
    position: absolute;
    top: -50px;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(89, 15, 183, 0.2) 50%,
      transparent 100%
    );
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1199px) and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const BlogImage = styled.div`
  width: 100%;
  height: 240px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.3),
      transparent
    );
    pointer-events: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const BlogCard = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);

    ${BlogImage} img {
      transform: scale(1.1);
    }

    &::after {
      opacity: 1;
    }
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    padding: 2px;
    background: linear-gradient(45deg, #ff0076, #590fb7);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  @media (prefers-color-scheme: dark) {
    background: rgba(26, 26, 26, 0.9);
  }
`;

export const BlogContent = styled.div`
  padding: 1.8rem;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  justify-content: space-between;
`;

export const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #666;
  white-space: nowrap;
  overflow: hidden;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;

    &:not(:last-child)::after {
      content: '•';
      margin-left: 0.5rem;
      opacity: 0.5;
    }
  }

  @media (max-width: 400px) {
    span {
      font-size: 0.75rem;
      gap: 0.3rem;
    }
  }

  @media (prefers-color-scheme: dark) {
    color: #999;
  }
`;

export const BlogCategory = styled.span`
  background: ${props => {
    switch(props.category) {
      case 'For Agency':
        return 'linear-gradient(45deg, #ff0076, #590fb7)';
      case 'For Brands':
        return 'linear-gradient(45deg, #00c6ff, #0072ff)';
      case 'Case Studies':
        return 'linear-gradient(45deg, #590fb7, #ff4d94)';
      default:
        return 'linear-gradient(45deg, #ff0076, #590fb7)';
    }
  }};
  padding: 0.4rem 1rem;
  border-radius: 20px;
  color: white;
  font-weight: 500;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(255, 0, 118, 0.2);
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 0, 118, 0.3);
  }

  @media (max-width: 400px) {
    padding: 0.3rem 0.8rem;
    font-size: 0.75rem;
  }
`;

export const BlogTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  line-height: 1.4;
  margin: 0;
  transition: color 0.3s ease;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 4.2rem;

  &:hover {
    background: linear-gradient(45deg, #ff0076, #590fb7);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  @media (prefers-color-scheme: dark) {
    color: #fff;
  }
`;

export const BlogExcerpt = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 4.8rem;
  margin: 0;

  @media (prefers-color-scheme: dark) {
    color: #ccc;
  }
`;

export const ReadMore = styled.a`
  color: #ff0076;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  margin-top: auto;
  font-size: 0.95rem;
  padding: 0.5rem 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #ff0076, #590fb7);
    transition: width 0.3s ease;
  }

  &:hover {
    gap: 1rem;
    color: #590fb7;

    &::after {
      width: 100%;
    }
  }

  span {
    transition: transform 0.3s ease;
  }

  &:hover span {
    transform: translateX(5px);
  }

  @media (prefers-color-scheme: dark) {
    color: #ff4d94;

    &:hover {
      color: #ff80b3;
    }
  }
`;

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

export const SearchContainer = styled.div`
  margin: 2rem auto;
  max-width: 600px;
  width: 100%;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    background: #2a2a2a;
    border-color: #404040;
    color: white;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 2rem auto;
  max-width: 800px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 1rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const FilterButton = styled.button`
  padding: 0.6rem 1.8rem;
  border: none;
  border-radius: 20px;
  background: ${props => {
    if (!props.active) return props.theme.mode === 'dark' ? '#333' : '#f0f0f0';
    switch(props.category) {
      case 'For Agency':
        return 'linear-gradient(45deg, #ff0076, #590fb7)';
      case 'For Brands':
        return 'linear-gradient(45deg, #00c6ff, #0072ff)';
      case 'Case Studies':
        return 'linear-gradient(45deg, #590fb7, #ff4d94)';
      default:
        return 'linear-gradient(45deg, #ff0076, #590fb7)';
    }
  }};
  color: ${props => props.active ? 'white' : '#333'};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.02em;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    color: ${props => props.active ? 'white' : '#ccc'};
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimatedBlogCard = styled(BlogCard)`
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: ${props => props.delay}s;
  opacity: 0;
`;