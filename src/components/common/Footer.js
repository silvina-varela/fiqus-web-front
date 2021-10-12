import React from 'react';
import styled from 'styled-components'
import data from '../../content/content.json'
import { useIntl } from "gatsby-plugin-react-intl"

const styles = data.styles

const FooterContainer = styled.footer`
    background:${styles.colors.purplePrimary};
    color:${styles.colors.white};
    font-size: .75em;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    //padding: 12px 20px 20px 20px;
    padding: 12px 0px 20px 0px;
    @media (min-width: ${styles.breakpoints.l}px) {
        justify-content: space-between; 
        margin: auto;
        align-items: center;
      }
`
const FooterLicense = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    span {
        font-weight:${styles.fontWeight.bold};
    }
    @media (min-width: ${styles.breakpoints.l}px) {
        width: auto ;
      }    
`
const FooterCopyright = styled.div`
      margin-top: 18px;
      span {
          font-weight:${styles.fontWeight.bold};
          text-transform: uppercase;
      }
      @media (min-width: ${styles.breakpoints.l}px) {
          margin-top: 0;
        }
`
const FooterLicenseContent = styled.p`
      max-width: 342px;
      @media (min-width: ${styles.breakpoints.l}px) {
          max-width: 322px;
        }
`
const FooterLicenseIcon = styled.img`
      width: 38px;
      height: 33px;
      margin-right: 6px;
`

const Footer = () => {
    const intl = useIntl();

    return (
        <FooterContainer>
            <FooterLicense>
                <FooterLicenseIcon src={require('../../images/icon_cc_heart.png').default} alt="Creative Commons Attribution logo"/>
                <FooterLicenseContent>
                    {intl.formatMessage({id: "footer.disclaimer" })}  <span>Creative Commons Attribution</span>
                </FooterLicenseContent>
            </FooterLicense>
            <FooterCopyright>
                {intl.formatMessage({id: "footer.designby" })} <span>El Maizal</span>
            </FooterCopyright>
        </FooterContainer>
    );
};

export default Footer;