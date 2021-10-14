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

const Btn = styled(Button)`
    display: none;
    margin: 34px auto 71px auto;
    width: max-content;
    @media (min-width: ${styles.breakpoints.m}px) {
      margin: 50px auto 18px auto;
    }
    ${props => {
        if (props.isHome) {
            return ` 
            display: flex;
            `
        }
    }}
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