import React from 'react';
import styled from 'styled-components'

const FooterContainer = styled.footer`
    width: 100%;
    min-height: 100vh;
    background:black;
`

const Footer = () => {
    return (
        <FooterContainer>
            <p>
                Este es el footer
            </p>
        </FooterContainer>
    );
};

export default Footer;