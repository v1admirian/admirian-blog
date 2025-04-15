import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

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

// Base styles
const baseTextStyles = css`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
`;

// Main container with theme support

export const MainContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: #f8fafc;
  
  @media (prefers-color-scheme: dark) {
    background-color: #0f172a;
  }
`;

// Animated background with modern design
export const AnimatedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(74, 111, 255, 0.05) 0%, rgba(255, 82, 82, 0.05) 100%);
`;

// Modern background shapes
export const BackgroundShape = styled(motion.div)`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.variant === 'primary' 
    ? 'linear-gradient(135deg, rgba(74, 111, 255, 0.1) 0%, rgba(74, 111, 255, 0.05) 100%)'
    : 'linear-gradient(135deg, rgba(255, 82, 82, 0.1) 0%, rgba(255, 82, 82, 0.05) 100%)'};
  border-radius: ${props => props.circle ? '50%' : '30% 70% 70% 30% / 30% 30% 70% 70%'};
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  z-index: 0;
  filter: blur(40px);
`;

// Modern dots
export const BackgroundDot = styled(motion.div)`
  position: absolute;
  width: ${props => props.size || '10px'};
  height: ${props => props.size || '10px'};
  background: ${props => props.variant === 'primary' ? colors.primary.main : colors.secondary.main};
  border-radius: 50%;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  z-index: 0;
  opacity: 0.2;
`;

// Blog container with modern design
export const BlogContainer = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  background: white;
  border-radius: ${borderRadius.lg};
  box-shadow: ${shadows.xl};
  margin-top: 150px;
  margin-bottom: 40px;
  overflow: hidden;
  text-align: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: linear-gradient(90deg, ${colors.primary.main}, ${colors.secondary.main});
  }
`;

// Modern header
export const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, ${colors.primary.main}, ${colors.secondary.main});
    border-radius: ${borderRadius.full};
  }
`;

// Category badge
export const BlogCategory = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.primary.dark} 100%);
  color: ${colors.primary.contrast};
  padding: 8px 16px;
  border-radius: ${borderRadius.full};
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 20px;
  box-shadow: ${shadows.md};
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

// Modern title
export const BlogTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${colors.neutral[900]};
  margin-bottom: 20px;
  line-height: 1.2;
  letter-spacing: -0.025em;
  background: linear-gradient(135deg, ${colors.neutral[900]} 0%, ${colors.neutral[700]} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Meta information
export const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: ${colors.neutral[500]};
  font-size: 0.875rem;
  
  span {
    display: flex;
    align-items: center;
    gap: 5px;
    
    svg {
      width: 16px;
      height: 16px;
      color: ${colors.neutral[400]};
    }
  }
`;

// Content area
export const BlogContent = styled.div`
  ${baseTextStyles}
  font-size: 1.0625rem;
  line-height: 1.7;
  color: ${colors.neutral[700]};
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  h2, h3, h4 {
    color: ${colors.neutral[900]};
    margin-top: 2.5rem;
    margin-bottom: 1.25rem;
    font-weight: 700;
    letter-spacing: -0.025em;
  }
  
  a {
    color: ${colors.primary.main};
    text-decoration: none;
    border-bottom: 1px solid ${colors.primary.light};
    transition: ${transitions.default};
    
    &:hover {
      color: ${colors.primary.dark};
      border-bottom-color: ${colors.primary.dark};
    }
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.75rem;
    }
  }
  
  code {
    background: ${colors.neutral[100]};
    padding: 0.2rem 0.4rem;
    border-radius: ${borderRadius.sm};
    font-family: 'Fira Code', monospace;
    font-size: 0.875em;
  }
  
  pre {
    background: ${colors.neutral[800]};
    color: ${colors.neutral[100]};
    padding: 1rem;
    border-radius: ${borderRadius.md};
    overflow-x: auto;
    margin-bottom: 1.5rem;
    
    code {
      background: transparent;
      padding: 0;
      color: inherit;
    }
  }
  
  blockquote {
    border-left: 4px solid ${colors.primary.main};
    padding: 1rem 0 1rem 1.5rem;
    margin: 1.5rem 0;
    background: ${colors.neutral[50]};
    border-radius: 0 ${borderRadius.md} ${borderRadius.md} 0;
    
    p {
      margin-bottom: 0;
      font-style: italic;
    }
  }
`;

// Section styling
export const BlogSection = styled.section`
  margin-bottom: 3rem;
  position: relative;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

// Modern section title
export const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${colors.neutral[900]};
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;
  letter-spacing: -0.025em;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, ${colors.primary.main}, ${colors.secondary.main});
    border-radius: ${borderRadius.sm};
  }
`;

// Table of contents
export const TableOfContents = styled.div`
  background: ${colors.neutral[50]};
  border-radius: ${borderRadius.md};
  padding: 1.5rem;
  margin: 2rem 0;
  border-left: 4px solid ${colors.primary.main};
  box-shadow: ${shadows.md};
  
  h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: ${colors.neutral[900]};
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

// TOC items
export const TOCItem = styled.a`
  display: block;
  color: ${colors.neutral[700]};
  text-decoration: none;
  margin-bottom: 0.75rem;
  transition: ${transitions.default};
  font-size: 0.9375rem;
  padding: 0.5rem 0.75rem;
  border-radius: ${borderRadius.sm};
  
  &:hover {
    color: ${colors.primary.main};
    transform: translateX(5px);
    background: ${colors.neutral[100]};
  }
  
  &.active {
    color: ${colors.primary.main};
    font-weight: 600;
    background: ${colors.neutral[100]};
  }
`;

// Feature list
export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`;

// Feature item
export const FeatureItem = styled.li`
  position: relative;
  padding-left: 2rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  
  &:before {
    content: '✓';
    position: absolute;
    left: 0;
    top: 0;
    color: ${colors.primary.main};
    font-weight: bold;
  }
`;

// Highlighted section
export const AISection = styled.section`
  background: linear-gradient(135deg, ${colors.neutral[50]} 0%, ${colors.neutral[100]} 100%);
  border-radius: ${borderRadius.lg};
  padding: 2rem;
  margin: 2.5rem 0;
  box-shadow: ${shadows.lg};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: linear-gradient(90deg, ${colors.primary.main}, ${colors.secondary.main});
  }
`;

// Card component
export const AICard = styled.div`
  background: white;
  border-radius: ${borderRadius.md};
  padding: 1.5rem;
  box-shadow: ${shadows.md};
  margin-bottom: 1.5rem;
  transition: ${transitions.default};
  border: 1px solid ${colors.neutral[200]};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${shadows.lg};
    border-color: ${colors.primary.light};
  }
`;

// Card title
export const AITitle = styled.h3`
  color: ${colors.neutral[900]};
  font-size: 1.25rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${colors.primary.main};
  }
`;

// Card description
export const AIDescription = styled.p`
  color: ${colors.neutral[600]};
  font-size: 0.9375rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
`;

// Stats container
export const AIStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
`;

// Stat item
export const AIStatItem = styled.div`
  flex: 1;
  min-width: 160px;
  background: white;
  border-radius: ${borderRadius.md};
  padding: 1.25rem;
  box-shadow: ${shadows.md};
  text-align: center;
  border: 1px solid ${colors.neutral[200]};
  transition: ${transitions.default};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${shadows.lg};
    border-color: ${colors.primary.light};
  }
`;

// Stat number
export const AIStatNumber = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${colors.primary.main};
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.secondary.main} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

// Stat label
export const AIStatLabel = styled.div`
  color: ${colors.neutral[600]};
  font-size: 0.875rem;
  font-weight: 500;
`;

// Image container
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

// CTA button - Enhanced
export const CTAButton = styled.a`
  display: inline-block;
  background: #3b82f6;
  color: white;
  padding: 0.875rem 2rem;
  border-radius: ${borderRadius.full};
  font-weight: 700;
  text-decoration: none;
  transition: ${transitions.default};
  margin-top: 1.25rem;
  font-size: 1rem;
  box-shadow: ${shadows.lg};
  position: relative;
  overflow: hidden;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  z-index: 10;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transform: translateX(-100%);
    transition: ${transitions.default};
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(37, 99, 235, 0.4);
    color: white;
    
    &::before {
      transform: translateX(100%);
      transition: ${transitions.fast};
    }
  }
  
  &:active {
    transform: translateY(-2px);
    box-shadow: 0 8px 15px rgba(37, 99, 235, 0.2);
  }
`;

// Quote styling
export const BlogQuote = styled.blockquote`
  font-size: 1.25rem;
  font-style: italic;
  color: ${colors.neutral[800]};
  border-left: 4px solid ${colors.primary.main};
  padding: 1.5rem 0 1.5rem 2rem;
  margin: 2rem 0;
  background: ${colors.neutral[50]};
  border-radius: 0 ${borderRadius.md} ${borderRadius.md} 0;
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    font-size: 4rem;
    color: ${colors.primary.light};
    opacity: 0.2;
    font-family: Georgia, serif;
  }
  
  p {
    margin-bottom: 0;
  }
  
  cite {
    display: block;
    margin-top: 1rem;
    font-size: 0.875rem;
    color: ${colors.neutral[600]};
    font-style: normal;
    font-weight: 500;
  }
`;

// Author section
export const BlogAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 2.5rem 0;
  padding: 1.5rem;
  background: ${colors.neutral[50]};
  border-radius: ${borderRadius.md};
  box-shadow: ${shadows.md};
  
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid white;
    box-shadow: ${shadows.md};
  }
  
  h4 {
    margin: 0 0 0.5rem 0;
    color: ${colors.neutral[900]};
    font-size: 1.125rem;
    font-weight: 600;
  }
  
  p {
    margin: 0;
    color: ${colors.neutral[600]};
    font-size: 0.9375rem;
  }
`;

// Share section
export const BlogShare = styled.div`
  margin: 2rem 0;
  padding: 1.5rem;
  background: ${colors.neutral[50]};
  border-radius: ${borderRadius.md};
  box-shadow: ${shadows.md};
  
  h4 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: ${colors.neutral[900]};
    font-size: 1.125rem;
    font-weight: 600;
  }
  
  .social-share {
    display: flex;
    gap: 0.75rem;
    
    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 1rem;
      background: white;
      border-radius: ${borderRadius.full};
      color: ${colors.neutral[700]};
      text-decoration: none;
      font-weight: 500;
      transition: ${transitions.default};
      box-shadow: ${shadows.sm};
      font-size: 0.875rem;
      
      svg {
        margin-right: 0.5rem;
        width: 16px;
        height: 16px;
      }
      
      &:hover {
        background: ${colors.primary.main};
        color: white;
        transform: translateY(-2px);
        box-shadow: ${shadows.md};
      }
    }
  }
`;

// Tags section

// CTA section


// Related articles section
export const BlogRelated = styled.section`
  margin: 4rem auto;
  max-width: 1000px;
  
  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: #1e293b;
    text-align: center;
    
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
  margin: 3rem auto;
  text-align: center;
  color: white;
  max-width: 800px;

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: white;
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