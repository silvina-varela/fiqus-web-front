import React, {Fragment} from "react"
import styled from 'styled-components'
import { styles, services } from '../content/content.json'
import { useIntl } from "gatsby-plugin-react-intl"

import FeaturedService from '../components/modules/FeaturedService'
import Button from '../components/common/Button'
import Service from '../components/modules/Service'

const MainWrapper = styled.div`
  padding-bottom: 187px;
  ${props => {
    if (props.isHome) {
        return `
        padding-bottom: 0;
        `
    }
  }}
  @media (min-width: ${styles.breakpoints.m}px) {
    padding-bottom: 243px;
    ${props => {
      if (props.isHome) {
          return `
          padding-bottom: 0;
          `
      }
    }}
  }
`
const ServicesContainer = styled.div`
  background-color: ${styles.colors.purpleLight};
  padding: 40px 20px 200px 20px;
  ${props => {
    if (props.isHome) {
        return `
        padding-bottom: 177px;
        text-align: center;
        `
    }
  }}
  @media (min-width: ${styles.breakpoints.m}px) {
    padding-bottom: 155px;
    ${props => {
      if (props.isHome) {
          return `
          padding-top: 70px;
          padding-bottom: 220px;
          `
      }
    }}
  }
  @media (min-width: ${styles.breakpoints.lpx}) {
    padding-top: 55px;
    padding-left: 0;
    padding-right: 0;
  }
`
const ServicesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 946px;
    justify-content: space-between;
    margin: auto;
    ${props => {
        if (props.isHome) {
            return ` 
            display: inline-flex;
            max-width: unset;
            flex-wrap: wrap;
            justify-content: center;
            max-width: 1102px;
              gap: 10px;
            @media (min-width: ${styles.breakpoints.m}px) {
              gap: 36px;
              margin-bottom: 50px;
            }
            @media (min-width: ${styles.breakpoints.xl}px) {
                justify-content: flex-start;
            }
            `
        }
    }}
    }
`
const ServicesHomeTitle = styled.h2`
  flex-basis: 100%;
  font-size: 2.38em;
  line-height: 49px;
  color: ${styles.colors.purplePrimary};
  margin: 0 auto 25px auto;
  text-align: center;
  @media (min-width: ${styles.breakpoints.m}px) {
    text-align: left;
    font-size: 3em;    
    line-height: 62px;
    margin-bottom: 40px;
    ${props => {
        if (props.isHome) {
            return ` 
            text-align: center!important;
            `
        }
    }}
  }
`
const ServicesTitle = styled.h1`
  flex-basis: 100%;
  font-size: 2.38em;
  line-height: 49px;
  color: ${styles.colors.purplePrimary};
  margin: 0 auto 25px auto;
  text-align: center;
  @media (min-width: ${styles.breakpoints.m}px) {
    text-align: left;
    font-size: 3em;    
    line-height: 62px;
    margin-bottom: 40px;
    ${props => {
        if (props.isHome) {
            return ` 
            text-align: center!important;
            `
        }
    }}
  }
`
const Btn = styled(Button)`
    //display: none;
    width: max-content;
    ${props => {
      if (props.isHome) {
          return `
          display: flex;
          margin: 35px auto 0 auto;
          `
      }
    }}
    @media (min-width: ${styles.breakpoints.m}px) {
      //display: none;
      ${props => {
        if (props.isHome) {
            return `
            display: flex;
            margin: 0 auto 15px auto;
            `
        }
      }}
    }
`

const Services = (props) => {
    const intl = useIntl();

      return (
        <MainWrapper isHome={props.isHome}>
          <ServicesContainer isHome={props.isHome}>
            <ServicesWrapper isHome={props.isHome}>
              {
                  props.isHome ? 
                  <ServicesHomeTitle isHome={props.isHome}>{intl.formatMessage({id: "services.title"})}</ServicesHomeTitle>
                  : <ServicesTitle isHome={props.isHome}>{intl.formatMessage({id: "services.title"})}</ServicesTitle>
              }
              <Fragment>
                {services.services.map( (service) =>{
                  return(
                    <Service 
                      isHome={props.isHome}
                      key = {service.id}
                      image = {service.image} 
                      id = {service.id}
                      service = {service}
                      styles = {styles}
                      href = {props.href}>
                    </Service>
                  )
                })}
              </Fragment>
              {
                  props.isHome ? 
                  <FeaturedService isHome={props.isHome}>{intl.formatMessage({id: "services.title"})}</FeaturedService>
                  : ""
              }
            </ServicesWrapper>
            {
              props.isHome && 
                  <Btn
                    isHome={props.isHome}
                    type='btnPrimaryOrange'
                    theme={styles}
                    btnText={intl.formatMessage({id: "services.btnText"})}
                    isLink
                    href="servicios"
                  />
            }
          </ServicesContainer>
          {
            props.isHome ? 
            ""
            : <FeaturedService /> 
          }
        </MainWrapper>
      );
};

export default Services;