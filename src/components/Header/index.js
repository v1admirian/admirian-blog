import React from "react";
import { Container, HeaderContainer } from "./style";
import { useEffect, useState } from "react";
import { Button, Image, } from 'antd';
import { Link, useNavigate } from "react-router-dom";


const Header = ({isMobile , headerStyle ={}}) =>{
    const navigate = useNavigate();
    console.log(`is mobile`, isMobile)
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

    return (
        <>
        <HeaderContainer isScrolled={isScrolled} style={headerStyle}>
            <div style={{display  : 'flex',height : '100%', justifyContent : 'space-between',alignItems : 'center', padding :!isMobile ? '0px 80px' : '0px 20px',width : "100%"}}>
                <span style={{fontWeight : 700, fontSize : '18px', lineHeight : '22px'}}>
                    <Image style={{height : !isMobile ? '42px' : '32px', cursor: 'pointer'}} preview = {false} onClick={()=> window.location.href = 'https://www.admirian.com'} src = "https://static.admirian.com/9a312601-984e-4237-bfad-1454204ce38f_BrandLogo.svg"/>
                </span>
                <span>
                    <Link to={'https://www.admirian.com/Sign-in'}>
                    <Button
                    style={{background: "#010043",
                        borderRadius: "110px",fontSize: !isMobile ? "16px" : '14px',
                        lineHeight: !isMobile ? "19px" : 'normal', color: "#FFFFFF",marginRight : !isMobile ?"10px" : '8px', border : "0px"}}>
                        Sign in
                    </Button>
                    </Link >
                    <Link to={'https://www.admirian.com/Sign-up'}>
                    <Button
                    // onClick={()=>document.getElementById("SignUp-form").scrollIntoView({behavior: "smooth",block: "end"})}
                    style={{background: "#F86624",
                        borderRadius: "110px",fontSize: !isMobile ? "16px" : '14px',
                        lineHeight: !isMobile ? "19px" : 'normal', color: "#FFFFFF", border : "0px"}}>
                        Join Now
                    </Button>
                    </Link>
                </span>

            </div>
        </HeaderContainer>
        </>
    );   

}

export default Header