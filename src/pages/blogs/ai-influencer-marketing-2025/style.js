import styled, { keyframes } from 'styled-components';

// Theme variables
const colors = {
  primary: {
    light: '#4A6FFF',
    main: '#3B5AFB',
    dark: '#2A4AE8',
    contrast: '#FFFFFF'
  },
  secondary: {
    light: '#FF6B6B',
    main: '#FF5252',
    dark: '#E63946',
    contrast: '#FFFFFF'
  },
  neutral: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827'
  },
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6'
};

const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  none: 'none'
};

const transitions = {
  default: 'all 0.3s ease',
  fast: 'all 0.15s ease',
  slow: 'all 0.5s ease'
};

const borderRadius = {
  sm: '0.25rem',
  md: '0.5rem',
  lg: '1rem',
  xl: '1.5rem',
  full: '9999px'
};

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.5); opacity: 0.2; }
  100% { transform: scale(1); opacity: 0.5; }
`;

const shimmer = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const MainContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: #f8fafc;
  
  @media (prefers-color-scheme: dark) {
    background-color: #0f172a;
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
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const BlogCategory = styled.div`
  display: inline-block;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 1rem;
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
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 41, 59, 0.9);
  }
  
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #1e293b;
    
    @media (prefers-color-scheme: dark) {
      color: #f8fafc;
    }
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const TOCItem = styled.a`
  display: block;
  padding: 0.75rem 0;
  color: #475569;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: #3b82f6;
  }
  
  @media (prefers-color-scheme: dark) {
    color: #cbd5e1;
    
    &:hover {
      color: #60a5fa;
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
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  line-height: 1.6;
  
  &:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #3b82f6;
    font-weight: bold;
  }
`;

export const AISection = styled(BlogSection)`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 20px;
  padding: 40px;
  margin: 40px 0;
  
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  }
`;

export const AICard = styled.article`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 41, 59, 0.9);
  }
`;

export const AITitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  
  @media (prefers-color-scheme: dark) {
    color: #f8fafc;
  }
`;

export const AIDescription = styled.div`
  color: #475569;
  
  @media (prefers-color-scheme: dark) {
    color: #cbd5e1;
  }
`;

export const AIStats = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
  flex-wrap: wrap;
  gap: 20px;
`;

export const AIStatItem = styled.div`
  text-align: center;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  min-width: 200px;
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 41, 59, 0.9);
  }
`;

export const AIStatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 10px;
`;

export const AIStatLabel = styled.div`
  color: #666;
  font-size: 1rem;
  
  @media (prefers-color-scheme: dark) {
    color: #cbd5e1;
  }
`;

export const AIImage = styled.div`
  margin: 2rem auto;
  border-radius: ${borderRadius.md};
  overflow: hidden;
  box-shadow: ${shadows.lg};
  max-width: 60%;
  height: auto;
  position: relative;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to top, rgba(0,0,0,0.3), transparent);
    pointer-events: none;
  }
  
  img {
    width: 100%;
    height: auto;
    max-height: 300px;
    object-fit: cover;
    display: block;
    transition: ${transitions.default};
  }
  
  &:hover img {
    transform: scale(1.02);
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

export const BlogQuote = styled.blockquote`
  font-size: 1.5rem;
  line-height: 1.6;
  color: #1e293b;
  border-left: 4px solid #3b82f6;
  padding: 2rem;
  margin: 3rem 0;
  background: #f8fafc;
  border-radius: 0 12px 12px 0;
  
  @media (prefers-color-scheme: dark) {
    color: #f1f5f9;
    background: #1e293b;
  }
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
    padding: 1.5rem;
  }
`;

export const BlogAuthor = styled.div`
  display: flex;
  align-items: center;
  margin: 3rem 0;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 1.5rem;
  }
  
  h4 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #1e293b;
  }
  
  p {
    color: #64748b;
    margin: 0;
  }
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 41, 59, 0.9);
    
    h4 {
      color: #f8fafc;
    }
    
    p {
      color: #94a3b8;
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    
    img {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
`;

export const BlogShare = styled.div`
  margin: 3rem 0;
  text-align: center;
  
  h4 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #1e293b;
    
    @media (prefers-color-scheme: dark) {
      color: #f8fafc;
    }
  }
  
  .social-share {
    display: flex;
    justify-content: center;
    gap: 1rem;
    
    a {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background: #f1f5f9;
      color: #475569;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.2s ease;
      
      &:hover {
        background: #e2e8f0;
        transform: translateY(-2px);
      }
      
      @media (prefers-color-scheme: dark) {
        background: #1e293b;
        color: #cbd5e1;
        
        &:hover {
          background: #334155;
        }
      }
    }
  }
`;

export const BlogRelated = styled.section`
  margin: 4rem 0;
  
  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: #1e293b;
    
    @media (prefers-color-scheme: dark) {
      color: #f8fafc;
    }
  }
`;

export const BlogRelatedItem = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 41, 59, 0.9);
  }
`;

export const BlogRelatedImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 180px;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  ${BlogRelatedItem}:hover & img {
    transform: scale(1.05);
  }
`;

export const BlogRelatedContent = styled.div`
  padding: 1.5rem;
`;

export const BlogRelatedTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #1e293b;
  
  @media (prefers-color-scheme: dark) {
    color: #f8fafc;
  }
`;

export const BlogRelatedMeta = styled.div`
  display: flex;
  gap: 1rem;
  color: #64748b;
  font-size: 0.9rem;
  
  @media (prefers-color-scheme: dark) {
    color: #94a3b8;
  }
`;

export const BlogTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
  justify-content: center;
  
  span {
    background: #f1f5f9;
    color: #475569;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 500;
    
    @media (prefers-color-scheme: dark) {
      background: #1e293b;
      color: #cbd5e1;
    }
  }
`;

export const BlogCTA = styled.div`
  background: linear-gradient(135deg, #1e293b, #0f172a);
  padding: 3rem 2rem;
  border-radius: 16px;
  margin: 3rem 0;
  text-align: center;
  color: white;

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #e2e8f0;
  }

  ${CTAButton} {
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    font-size: 1.1rem;
    padding: 1.2rem 2.5rem;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 15px rgba(37, 99, 235, 0.4);
    }
  }
`; 