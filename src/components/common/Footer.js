import React from 'react';
import styled from 'styled-components'
import data from '../../content/content.json'

const styles = data.styles

const FooterContainer = styled.footer`
    width: 100%;
    min-height: 100vh;
    background:black;
`

const Footer = () => {
    return (
        <FooterContainer>

        </FooterContainer>
    );
};

export default Footer;