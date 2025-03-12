import React from "react";
import { HeaderContainer, Logo, Nav, NavLink } from './style';
import { useEffect, useState } from "react";
import { Button, Image } from 'antd';
import { Link, useNavigate } from "react-router-dom";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
}

const Header = ({ headerStyle = {} }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 35) {
        setIsScrolled(true);  // Move Header to top
      } else {
        setIsScrolled(false); // Keep it below Announcement
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const buttonStyles = {
    base: {
      borderRadius: "110px",
      fontSize: isMobile ? "14px" : "16px",
      lineHeight: isMobile ? "normal" : "19px",
      padding: isMobile ? "4px 12px" : "6px 16px",
      height: "auto",
    },
    signIn: {
      background: "#010043",
      color: "#FFFFFF",
      marginRight: isMobile ? "8px" : "10px",
      border: "0px",
    },
    joinNow: {
      background: "#F86624",
      color: "#FFFFFF",
      border: "0px",
    }
  };

  return (
    <HeaderContainer isScrolled={isScrolled} style={headerStyle}>
      <div style={{
        display: 'flex',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: isMobile ? '0px 16px' : '0px 80px',
        width: "100%",
        maxWidth: "1440px",
        margin: "0 auto"
      }}>
        <span style={{ fontWeight: 700, fontSize: isMobile ? '16px' : '18px', lineHeight: isMobile ? '20px' : '22px' }}>
          <Image 
            style={{
              height: isMobile ? '32px' : '42px',
              cursor: 'pointer',
              maxWidth: '100%'
            }}
            preview={false}
            onClick={() => window.location.href = 'https://www.admirian.com'}
            src="https://static.admirian.com/9a312601-984e-4237-bfad-1454204ce38f_BrandLogo.svg"
            alt="Admirian Logo"
          />
        </span>
        <div style={{ display: 'flex', gap: isMobile ? '8px' : '10px' }}>
          <Link to="https://www.admirian.com/Sign-in">
            <Button style={{ ...buttonStyles.base, ...buttonStyles.signIn }}>
              Sign in
            </Button>
          </Link>
          <Link to="https://www.admirian.com/Sign-up">
            <Button style={{ ...buttonStyles.base, ...buttonStyles.joinNow }}>
              Join Now
            </Button>
          </Link>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;