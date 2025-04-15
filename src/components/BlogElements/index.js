import styled from 'styled-components';

export const BlogHeader = styled.header`
  text-align: center;
  margin-bottom: 40px;
  
  h1 {
    font-size: 2.5rem;
    color: #010043;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

export const BlogContent = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const BlogSection = styled.section`
  margin-bottom: 40px;
  
  h2 {
    font-size: 1.8rem;
    color: #010043;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #333;
    margin-bottom: 20px;
  }
`;

export const BlogImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 30px;
`;

export const BlogQuote = styled.blockquote`
  font-size: 1.4rem;
  font-style: italic;
  color: #010043;
  border-left: 4px solid #010043;
  padding-left: 20px;
  margin: 40px 0;
`;

export const BlogList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

export const BlogListItem = styled.li`
  position: relative;
  padding-left: 25px;
  margin-bottom: 15px;
  font-size: 1.1rem;
  line-height: 1.6;
  
  &:before {
    content: "•";
    color: #010043;
    position: absolute;
    left: 0;
    font-size: 1.5rem;
  }
`;

export const BlogCTA = styled.div`
  text-align: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 40px;
  border-radius: 10px;
  margin: 40px 0;
  
  h3 {
    font-size: 1.8rem;
    color: #010043;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.1rem;
    margin-bottom: 30px;
  }
  
  .btn {
    padding: 12px 30px;
    font-size: 1.1rem;
    border-radius: 5px;
    background: #010043;
    color: white;
    text-decoration: none;
    transition: background 0.3s ease;
    
    &:hover {
      background: #020086;
    }
  }
`;

export const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 20px;
`;

export const BlogTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 30px;
  
  span {
    background: #f8f9fa;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 0.9rem;
    color: #010043;
  }
`;

export const BlogShare = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin: 30px 0;
  
  a {
    color: #010043;
    text-decoration: none;
    font-size: 1.2rem;
    
    &:hover {
      color: #020086;
    }
  }
`;

export const BlogAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 40px 0;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  div {
    h4 {
      font-size: 1.2rem;
      color: #010043;
      margin-bottom: 5px;
    }
    
    p {
      font-size: 0.9rem;
      color: #666;
      margin: 0;
    }
  }
`;

export const BlogRelated = styled.div`
  margin: 40px 0;
  
  h3 {
    font-size: 1.8rem;
    color: #010043;
    margin-bottom: 30px;
  }
`;

export const BlogRelatedItem = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BlogRelatedImage = styled.img`
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

export const BlogRelatedContent = styled.div`
  flex: 1;
`;

export const BlogRelatedTitle = styled.h4`
  font-size: 1.2rem;
  color: #010043;
  margin-bottom: 10px;
`;

export const BlogRelatedMeta = styled.div`
  display: flex;
  gap: 15px;
  color: #666;
  font-size: 0.9rem;
`; 