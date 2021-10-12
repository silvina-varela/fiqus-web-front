import React, {Fragment} from "react"
import styled from 'styled-components'
import { styles, services } from '../content/content.json'

import Service from '../components/modules/Service'

const MainWrapper = styled.div`
`
const ServicesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1100px;
    margin: auto;
`
const ServicesTitle = styled.h1`
  flex-basis: 100%;
  font-size: 2.38em;
  color: ${styles.colors.purplePrimary};
  margin: 0 auto 38px auto;
  text-align: center;
  @media (min-width: ${styles.breakpoints.m}px) {
    text-align: left;
    font-size: 3.55em;    
    margin-bottom: 39px;
    
    // service desktop style   
    text-align: center;
  }
  // service desktop style   
  text-align: center;
`
const Boton = styled.button`
    margin: 0 6px 8px 0px;
    padding: 9px 20px;
    font-size: 18px;
    border-radius: 12px;
    border-color: ${styles.colors.purplePrimary};
    border-width: 2px!important;
    border-style: solid;
    box-shadow:  0px 4px 0px ${styles.colors.transparent};
    transition: 100ms ease-in-out all;
    margin-bottom: 10px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    font-weight: ${styles.fontWeight.bold};
    color: ${styles.colors.white};
    background-color: ${styles.colors.orangeMain};
    border-color: ${styles.colors.darkMainBg};
    box-shadow:  0px 4px 0px ${styles.colors.darkMainBg};
    max-width: max-content;
    &:hover {
        box-shadow: none;
    }
    margin-top: auto;
    display: none;
    margin: 34px auto 71px auto;
    @media (min-width: ${styles.breakpoints.m}px) {
        margin-top: 46px;
        margin: 0 auto;
    }
    // service desktop style
    display: flex!important;
`

const Services = () => {

      return (
        <MainWrapper>
          <ServicesWrapper>
            <ServicesTitle>{services.title}</ServicesTitle>
            <Fragment>
              {services.services.map( (service) =>{
                return(
                  <Service 
                    key = { service.image } 
                    service = { service }
                    styles = { styles }>
                  </Service>
                )
              }) }
            </Fragment>
          </ServicesWrapper>
          <Boton>ir a servicios</Boton>
        </MainWrapper>
      );
};

export default Services;