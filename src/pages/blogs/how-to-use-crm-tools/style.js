import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 0.5; }
`;

export const MainContainer = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  background: linear-gradient(135deg, #f8fafc, #f1f5f9);

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #0f172a, #1e293b);
  }
`;

export const AnimatedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;

export const BackgroundShape = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  background: linear-gradient(135deg, #3b82f620, #6366f120);
  border-radius: 50%;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  opacity: 0.5;
`;

export const BackgroundDot = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  background: linear-gradient(135deg, #3b82f640, #6366f140);
  border-radius: 50%;
  animation: ${pulse} 4s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

export const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
  padding-top: 60px;
`;

export const BlogHeader = styled.header`
  text-align: center;
  margin: 4rem 0;
`;

export const BlogTitle = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(
    -45deg,
    #3b82f6,
    #6366f1,
    #8b5cf6,
    #3b82f6
  );
  background-size: 300% 300%;
  animation: ${shimmer} 15s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 2rem 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const BlogMeta = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  color: #64748b;
  font-size: 1.25rem;
  font-weight: 500;
  
  @media (prefers-color-scheme: dark) {
    color: #94a3b8;
  }
`;

export const BlogCategory = styled.span`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background: linear-gradient(135deg, #3b82f620, #6366f120);
  border-radius: 20px;
  color: #3b82f6;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #3b82f640, #6366f140);
    color: #60a5fa;
  }
`;

export const BlogContent = styled.div`
  margin: 4rem 0;
  font-size: 1.25rem;
  line-height: 1.8;
  color: #334155;
  
  p {
    margin: 1.5rem 0;
    font-size: 1.25rem;
    line-height: 1.8;
    
    strong {
      color: #1e293b;
      font-weight: 700;
    }
  }
  
  @media (prefers-color-scheme: dark) {
    color: #e2e8f0;
    
    p strong {
      color: #f1f5f9;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
    
    p {
      font-size: 1.125rem;
    }
  }
`;

export const BlogSection = styled.section`
  margin: 4rem 0;
  
  p {
    margin: 1.5rem 0;
  }
  
  p:first-of-type {
    font-size: 1.35rem;
    line-height: 1.7;
    color: #1e293b;
    font-weight: 500;
    
    @media (prefers-color-scheme: dark) {
      color: #f1f5f9;
    }
    
    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: #1e293b;
  margin: 3rem 0 2rem;
  line-height: 1.2;
  letter-spacing: -0.01em;
  
  @media (prefers-color-scheme: dark) {
    color: #f1f5f9;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const TableOfContents = styled.nav`
  background: rgba(255, 255, 255, 0.8);
  padding: 2.5rem;
  border-radius: 16px;
  margin: 3rem 0;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  h3 {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    color: #1e293b;
    font-weight: 800;
  }
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 41, 59, 0.8);
    
    h3 {
      color: #f1f5f9;
    }
  }
`;

export const TOCItem = styled.a`
  display: block;
  color: #64748b;
  text-decoration: none;
  padding: 0.75rem 0;
  transition: all 0.2s ease;
  border-radius: 6px;
  padding-left: 0.75rem;
  font-size: 1.15rem;
  font-weight: 500;
  
  &:hover {
    color: #3b82f6;
    background: rgba(59, 130, 246, 0.1);
    padding-left: 1.25rem;
  }
  
  @media (prefers-color-scheme: dark) {
    color: #94a3b8;
    
    &:hover {
      color: #60a5fa;
      background: rgba(96, 165, 250, 0.1);
    }
  }
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1.75rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  margin: 0;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.5;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(59, 130, 246, 0.1);
    border-color: rgba(59, 130, 246, 0.2);
  }
  
  &::before {
    content: "💡";
    margin-right: 1.25rem;
    color: #3b82f6;
    font-weight: bold;
    background: #dbeafe;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    flex-shrink: 0;
    transition: all 0.3s ease;
    font-size: 1.5rem;
  }
  
  &:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 12px rgba(59, 130, 246, 0.3);
  }
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 41, 59, 0.8);
    color: #e2e8f0;
    
    &::before {
      background: #1e40af;
      color: #bfdbfe;
    }

    &:hover {
      box-shadow: 0 8px 16px rgba(96, 165, 250, 0.1);
      border-color: rgba(96, 165, 250, 0.2);
    }
  }
`;

export const QuizSection = styled.section`
  background: linear-gradient(135deg, #dbeafe, #e0e7ff);
  padding: 4rem 3rem;
  border-radius: 16px;
  margin: 4rem 0;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  h3 {
    font-size: 2.5rem;
    color: #1e293b;
    margin-bottom: 2rem;
    font-weight: 800;
    line-height: 1.2;
  }
  
  p {
    font-size: 1.35rem;
    margin: 1.5rem 0;
    color: #1e293b;
    font-weight: 500;
    line-height: 1.6;
  }
  
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #1e40af, #4338ca);
    
    h3, p {
      color: #e2e8f0;
    }
  }
  
  @media (max-width: 768px) {
    padding: 3rem 2rem;
    
    h3 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1.25rem;
    }
  }
`;

export const CTAButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  color: white;
  padding: 1.25rem 2.5rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.25rem;
  margin-top: 2rem;
  transition: all 0.3s ease;
  border: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    background: linear-gradient(135deg, #2563eb, #4f46e5);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1.15rem;
  }
`; 