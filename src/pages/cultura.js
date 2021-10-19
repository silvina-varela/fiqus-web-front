import React, {Fragment} from "react"
import styled from 'styled-components'
import { styles } from '../content/content.json'
import { useIntl } from "gatsby-plugin-react-intl"
import SectionHeader from "../components/common/SectionHeader"

const Culture = () => {
    const intl = useIntl();
    
    const HistoryMainContainer = styled.div`
        background-color: ${styles.colors.white};
        padding: 30px 20px 40px 20px;
        @media (min-width: ${styles.breakpoints.m}px) {
            padding-top: 50px;
            padding-bottom: 53px;
        }
    `
    const HistoryTitle = styled.h2`
        font-size: 1.72em;
        line-height: 37px;
        font-weight: ${styles.fontWeight.medium};
        color: ${styles.colors.purplePrimary};
        text-align: center;
        margin-bottom: 30px;
        @media (min-width: ${styles.breakpoints.m}px) {
            font-size: 2.83em;
            font-weight: 59px;
            margin-bottom: 42px;
        }
    `
    const TeamImgContainer = styled.div`
        height: 169px;
        margin: 0 auto 30px auto;
        overflow: hidden;
        @media (min-width: ${styles.breakpoints.s}px) {
            max-width: 500px;
            height: 220px;
        }
        @media (min-width: ${styles.breakpoints.m}px) {
            max-width: 754px;
            height: 248px;
            margin: 0 auto 28px auto;
        }
    `
    const TeamImgMobile = styled.img`
        display: block;
        width: 100%;
        @media (min-width: ${styles.breakpoints.m}px) {
            display: none;
        }
    `
    const TeamImgDesktop = styled.img`
        display: none;
        width: 100%;
        @media (min-width: ${styles.breakpoints.m}px) {
            display: block;
        }
    `
    const HistoryContentContainer = styled.div`
        padding: 0;
        @media (min-width: ${styles.breakpoints.m}px) {
            max-width: 754px;
            margin: auto;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-bottom: 22px;
        }
    `
    const HistoryContentLeftBlock = styled.div`
        @media (min-width: ${styles.breakpoints.m}px) {
            flex-basis: calc(50% - 9px);
            max-width: 370px;
            margin-right: 15px;
        }
    `
    const HistoryContentRightBlock = styled.div`
        margin-bottom: 30px;
        @media (min-width: ${styles.breakpoints.m}px) {
            flex-basis: calc(50% - 8px);
            max-width: 370px;
        }
    `
    const HistoryContentFullBlock = styled.div`
        @media (min-width: ${styles.breakpoints.m}px) {
            width: 100%;
            max-width: 754px;
            margin: auto;
        }
    `
    
    const HistorySubtitle = styled.h3`
        font-size: 1.44em;
        line-height: 34px;
        font-weight: ${styles.fontWeight.bold};
        color: ${styles.colors.purplePrimary};
        text-align: left;
        margin-bottom: 18px;
        @media (min-width: ${styles.breakpoints.m}px) {
            font-size: 1.66em;
            line-height: 37px;
            font-weight: ${styles.fontWeight.regular};
            margin-bottom: 15px;
        }
    `
    const HistoryContent = styled.p`
        font-size: .88em;
        line-height: 22px;
        color: ${styles.colors.darkMainBg};
        margin-bottom: 22px;
        @media (min-width: ${styles.breakpoints.m}px) {
            font-size: 1em;
            line-height: 26px;
            margin-bottom: 25px;
        }
    `

    const FederalMainContainer = styled.div`
        background-color: ${styles.colors.purplePrimary};
        display: flex;
        flex-direction: column;
        padding: 30px 20px 10px 20px;
        @media (min-width: ${styles.breakpoints.m}px) {
            padding-top: 53px;
            padding-bottom: 34px;
        }
    `
    const TopBlock = styled.div`
        display: flex;
        flex-direction: column-reverse;
        @media (min-width: ${styles.breakpoints.m}px) {
            width: 100%;
            max-width: 754px;
            flex-direction: row;
            justify-content: space-between;
            margin: auto;
        }
    `
    const TopBlockImgContainer = styled.div`
        max-width: 320px;
        margin: auto;
        margin-bottom: 26px;
        @media (min-width: ${styles.breakpoints.m}px) {
            max-width: 346px;
            flex-basis: 50%;
            margin-right: auto;
            margin-left: 0;
            margin-bottom: 22px;
        }
    `
    const TopBlockImg = styled.img`
        width: 100%;
    `
    const TopBlockInfoContainer = styled.div`
        @media (min-width: ${styles.breakpoints.m}px) {
            flex-basis: 50%;
            max-width: 367px;
            margin-left: auto;
            margin-right: 0;
            padding-top: 22px;
        }
        `
    const FederalSubtitle = styled.h3`
        font-size: 1.44em;
        line-height: 34px;
        font-weight: ${styles.fontWeight.bold};
        color: ${styles.colors.white};
        text-align: left;
        margin-bottom: 18px;
        @media (min-width: ${styles.breakpoints.m}px) {
            font-size: 1.66em;
            line-height: 37px;
            margin-bottom: 12px;
        }
    `
    const FederalContent = styled.p`
        font-size: .88em;
        line-height: 22px;
        color: ${styles.colors.white};
        margin-bottom: 22px;
        @media (min-width: ${styles.breakpoints.m}px) {
            font-size: 1em;
            line-height: 26px;
            margin-bottom: 25px;
        }
    `
    const FederalContentBoldText = styled.b`
        font-weight: ${styles.fontWeight.regular};
    `
    const BottomBlock = styled.div`
    @media (min-width: ${styles.breakpoints.m}px) {
        max-width: 754px;
        margin: auto;
    }
    `    
    const FactticMainContainer = styled.div`
        background-color: ${styles.colors.white};
        padding: 30px 20px 40px 20px;
        @media (min-width: ${styles.breakpoints.m}px) {
            padding-top: 55px;
            padding-bottom: 80px;
        }
    `
    const FactticTitle = styled.h2`
        font-size: 1.44em;
        line-height: 34px;
        font-weight: ${styles.fontWeight.bold};
        color: ${styles.colors.purplePrimary};
        margin-bottom: 10px;
        @media (min-width: ${styles.breakpoints.m}px) {
            font-size: 1.72em;
            font-weight: ${styles.fontWeight.bold};
            margin-bottom: 20px;
        }
    `
    const FactticLead = styled.h3`
        font-size: 1em;
        line-height: 26px;
        font-weight: ${styles.fontWeight.regular};
        color: ${styles.colors.purplePrimary};
        margin-bottom: 15px;
        @media (min-width: ${styles.breakpoints.m}px) {
            font-size: 1.44em;
            line-height: 34px;
            font-weight: ${styles.fontWeight.regular};  
            margin-bottom: 18px;
        }
    `
    const FactticContentContainer = styled.div`
        padding: 0;
        @media (min-width: ${styles.breakpoints.m}px) {
            max-width: 754px;
            margin: auto;
            margin-bottom: 2px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    `
    const FactticContentLeftBlock = styled.div`
        @media (min-width: ${styles.breakpoints.m}px) {
            flex-basis: calc(50% - 9px);
            max-width: 370px;
            margin-right: 15px;
        }
    `
    const FactticContentRightBlock = styled.div`
        margin-bottom: 27px;
        @media (min-width: ${styles.breakpoints.m}px) {
            flex-basis: calc(50% - 8px);
            max-width: 370px;
        }
    `
    const FactticContentFullBlock = styled.div`
        @media (min-width: ${styles.breakpoints.m}px) {
            width: 100%;
            max-width: 754px;
            margin: auto;
        }
    `    
    const FactticSubtitle = styled.h3`
        font-size: 1.44em;
        line-height: 34px;
        font-weight: ${styles.fontWeight.bold};
        color: ${styles.colors.purplePrimary};
        text-align: left;
        margin-bottom: 18px;
        @media (min-width: ${styles.breakpoints.m}px) {
            font-size: 1.72em;
            line-height: 32px;
            font-weight: ${styles.fontWeight.bold};  
            margin-bottom: 15px;
        }
    `
    const FactticContent = styled.p`
        font-size: .88em;
        line-height: 22px;
        color: ${styles.colors.darkMainBg};
        margin-bottom: 22px;
        @media (min-width: ${styles.breakpoints.m}px) {
            font-size: 1em;
            line-height: 26px;
            margin-bottom: 25px;
        }
    `
    
    const FactticContentBoldText = styled.b`
        //font-weight: ${styles.fontWeight.regular};
    `

    const history = intl.formatMessage({id: "culture_historia.content_col1"});
    return (
        <Fragment>
            <SectionHeader 
                section="cultura"
                title={intl.formatMessage({id: 'culture.title'})}
                subtitle={intl.formatMessage({id: 'culture.subtitle'})}
                description={intl.formatMessage({id: 'culture.description'})}
            />

            <HistoryMainContainer>
                <HistoryTitle>{intl.formatMessage({id: "culture_historia.title"})}</HistoryTitle>
                <TeamImgContainer>
                    <TeamImgMobile src={require('../images/'+ intl.formatMessage({id: "culture_historia.imageMobile"}) + '.png').default} alt="equipo Fiqus" />
                    <TeamImgDesktop src={require('../images/'+ intl.formatMessage({id: "culture_historia.imageDesktop"}) + '.png').default} alt="equipo Fiqus" />
                </TeamImgContainer>
                <HistoryContentContainer>
                    <HistoryContentLeftBlock>
                        <HistoryContent>{intl.formatMessage({id: "culture_historia.content_line1"})}</HistoryContent>
                        <HistoryContent>{intl.formatMessage({id: "culture_historia.content_line2"})}</HistoryContent>
                    </HistoryContentLeftBlock>
                    <HistoryContentRightBlock>
                        <HistoryContent>{intl.formatMessage({id: "culture_historia.content_line3"})}</HistoryContent>
                        <HistoryContent>{intl.formatMessage({id: "culture_historia.content_line4"})}</HistoryContent>
                    </HistoryContentRightBlock>
                </HistoryContentContainer>
                <HistoryContentFullBlock>
                    <HistorySubtitle>{intl.formatMessage({id: "culture_historia.subtitle"})}</HistorySubtitle>
                    <HistoryContent>
                        {intl.formatMessage({id: "culture_historia.content_line5"})}
                    </HistoryContent>
                </HistoryContentFullBlock>
            </HistoryMainContainer>

            {/* Cultura | Historia   */}
            {/*
            <div>
                <h1>{intl.formatMessage({id: "culture_historia.title"})}</h1>
                <div>
                    <p>{intl.formatMessage({id: "culture_historia.content_line1"})}</p>
                    <p>{intl.formatMessage({id: "culture_historia.content_line2"})}</p>
                    <p>{intl.formatMessage({id: "culture_historia.content_line3"})}</p>
                </div>
                <div>
                    <p>{intl.formatMessage({id: "culture_historia.content_line4"})}</p>
                    <p>{intl.formatMessage({id: "culture_historia.content_line5"})}</p>
                </div>
                <h3>{intl.formatMessage({id: "culture_historia.subtitle"})}</h3>
                <p>{intl.formatMessage({id: "culture_historia.subtitleContent"})}</p>
            </div>
            */}
        
            <FederalMainContainer>
                <TopBlock>
                    <TopBlockImgContainer>
                        <TopBlockImg src={require('../images/illustrations/'+ intl.formatMessage({id: "culture_federales.image"}) + '.svg').default} alt="mapa argentina" />
                    </TopBlockImgContainer>
                    <TopBlockInfoContainer>
                        <FederalSubtitle>{intl.formatMessage({id: "culture_federales.title1"})}</FederalSubtitle>
                        <FederalContent>{intl.formatMessage({id: "culture_federales.content1"})}</FederalContent>
                        <FederalContent>
                            {intl.formatMessage({id: "culture_federales.tenemosSedes"})}
                            <FederalContentBoldText>CABA</FederalContentBoldText>
                            {intl.formatMessage({id: "y"})}
                            <FederalContentBoldText>Villa La Angostura. </FederalContentBoldText>
                            {intl.formatMessage({id: "culture_federales.personasAsociadas"})}
                            <FederalContentBoldText>Mar del Plata</FederalContentBoldText>, 
                            <FederalContentBoldText> San Fernando (Bs.As.)</FederalContentBoldText>, 
                            <FederalContentBoldText> Puerto Madryn</FederalContentBoldText>
                            {intl.formatMessage({id: "y"})}
                            <FederalContentBoldText>San Luis</FederalContentBoldText>.
                        </FederalContent>
                    </TopBlockInfoContainer>
                </TopBlock>
                <BottomBlock>
                        <FederalSubtitle>{intl.formatMessage({id: "culture_federales.title2"})}</FederalSubtitle>
                        <FederalContent>{intl.formatMessage({id: "culture_federales.content2"})}</FederalContent>
                </BottomBlock>
            </FederalMainContainer>
            
            {/* Cultura | Somos Federales */}
            {/*
            <div>
                <h2>{intl.formatMessage({id: "culture_federales.title1"})}</h2>
                <p>{intl.formatMessage({id: "culture_federales.content1"})}</p>
                <p>
                    {intl.formatMessage({id: "culture_federales.tenemosSedes"})} 
                    <b>CABA</b>{intl.formatMessage({id: "y"})}<b>Villa La Angostura</b>.
                    {intl.formatMessage({id: "culture_federales.personasAsociadas"})}
                    <b>Mar del Plata</b>, <b>San Fernando</b>, <b>Puerto Madryn</b>
                    {intl.formatMessage({id: "y"})}<b>San Luis</b>.
                </p>
                <h2>{intl.formatMessage({id: "culture_federales.title2"})}</h2>
                <p>{intl.formatMessage({id: "culture_federales.content2"})}</p>
            </div>
            */}


            {/* Cultura | Estamos Federados */}
            
            <FactticMainContainer>
                <FactticContentContainer>
                    <FactticTitle>{intl.formatMessage({id: "culture_facttic.title"})}</FactticTitle>
                    <FactticLead>{intl.formatMessage({id: "culture_facttic.subtitle"})}</FactticLead>
                    <FactticContentLeftBlock>
                        <FactticContent>
                            {intl.formatMessage({id: "culture_facttic.content_line1_part1"})}
                            <FactticContentBoldText>{intl.formatMessage({id: "culture_facttic.content_line1_facttic"})}</FactticContentBoldText>
                            {intl.formatMessage({id: "culture_facttic.content_line1_part2"})}
                        </FactticContent>
                    </FactticContentLeftBlock>
                    <FactticContentRightBlock>
                        <FactticContent>{intl.formatMessage({id: "culture_facttic.content_line2"})}</FactticContent>
                        <FactticContent>{intl.formatMessage({id: "culture_facttic.content_line3"})}</FactticContent>
                    </FactticContentRightBlock>
                </FactticContentContainer>
                <FactticContentFullBlock>
                    <FactticSubtitle>{intl.formatMessage({id: "culture_internacional.title"})}</FactticSubtitle>
                    <FactticContent>{intl.formatMessage({id: "culture_internacional.content_line1"})}</FactticContent>
                    <FactticContent>{intl.formatMessage({id: "culture_internacional.content_line2"})}</FactticContent>
                    <FactticContent>{intl.formatMessage({id: "culture_internacional.content_line3"})}</FactticContent>
                </FactticContentFullBlock>
            </FactticMainContainer>
            
            {/*
            <div>
                <h2>{intl.formatMessage({id: "culture_facttic.title"})}</h2>
                <h2>{intl.formatMessage({id: "culture_facttic.subtitle"})}</h2>
                <div>
                    <p>
                        {intl.formatMessage({id: "culture_facttic.content_line1_part1"})}
                        <b>{intl.formatMessage({id: "culture_facttic.content_line1_facttic"})}</b>
                        {intl.formatMessage({id: "culture_facttic.content_line1_part2"})}
                    </p>
                </div>
                <div>
                    <p>{intl.formatMessage({id: "culture_facttic.content_line2"})}</p>
                    <p>{intl.formatMessage({id: "culture_facttic.content_line3"})}</p>
                </div>

                <h2>{intl.formatMessage({id: "culture_internacional.title"})}</h2>
                <p>{intl.formatMessage({id: "culture_internacional.content_line1"})}</p>
                <p>{intl.formatMessage({id: "culture_internacional.content_line2"})}</p>
            </div>
            */}
        </Fragment>
    );
};

export default Culture;