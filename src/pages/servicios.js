import React, {Fragment} from "react"
import styled from 'styled-components'
import { styles, services } from '../content/content.json'
import { useIntl } from "gatsby-plugin-react-intl"

import FeaturedService from '../components/modules/FeaturedService'
import Button from '../components/common/Button'
import Service from '../components/modules/Service'

const MainWrapper = styled.div`
`
const ServicesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 946px;
    margin: auto;
    ${props => {
        if (props.isHome) {
            return ` 
            display: inline-flex;
            max-width: unset;
            flex-wrap: wrap;
            justify-content: center;
            @media (min-width: ${styles.breakpoints.m}px) {
                justify-content: center;
                gap: 36px;
            }
            @media (min-width: ${styles.breakpoints.xl}px) {
                justify-content: flex-start;
            }
            `
        }
    }}
    }
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
    ${props => {
        if (props.isHome) {
            return ` 
            text-align: center;
            `
        }
    }}
  }

`
// estos estilos deberían estar adentro de button como una opcion posible de estilos
// acá, si hay estilos, deberian ser solo cosas excepcionales
const Btn = styled(Button)`
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
`

const Services = (props) => {
    const intl = useIntl();

      return (
        <MainWrapper>
          <ServicesWrapper isHome={props.isHome}>
            <ServicesTitle isHome={props.isHome}>{intl.formatMessage({id: "services.title"})}</ServicesTitle>
            <Fragment>
              {services.services.map( (service) =>{
                return(
                  <Service 
                    isHome={props.isHome}
                    key = {service.id}
                    image = { service.image } 
                    id = {service.id}
                    service = { service }
                    styles = { styles }>
                  </Service>
                )
              }) }
            </Fragment>
            {props.isHome && 
              <Btn type='btnPrimaryOrange' theme={styles} to={props.href} btnText='ir a servicios'></Btn>
            }
          </ServicesWrapper>
          <FeaturedService />
        </MainWrapper>
      );
};

export default Services;