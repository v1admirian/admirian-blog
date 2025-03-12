import React from 'react';
import {  Image } from "antd";
import { FooterContainer, Heading8, PrivacyPolicy } from './style';
import { useNavigate } from 'react-router-dom';

const Footer =() =>{
    const navigate = useNavigate();
    return(
        <>
         <Heading8>
                    <span>Still have a query? write to us at 
                        <a style={{color:'#63A1FF'}}> sales@admirian.com
                        </a>
                        <a> or reach us on +91-7710883542 
                        </a>
                    </span>
                </Heading8>
            <FooterContainer>
                <div>
                    <Image 
                        preview={false} 
                        onClick={() => window.location.href = 'https://www.admirian.com'}
                        style={{cursor: 'pointer'}}
                        src="https://static.admirian.com/9a312601-984e-4237-bfad-1454204ce38f_BrandLogo.svg"
                    />
                </div>
                <PrivacyPolicy onClick={() => window.location.href = 'https://www.admirian.com/privacy-policy'}>
                    Privacy policy
                </PrivacyPolicy>
                
            </FooterContainer>
        </>
    )
}

export default Footer