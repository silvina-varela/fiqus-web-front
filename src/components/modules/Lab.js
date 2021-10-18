import React from 'react';
import styled from 'styled-components'
import data from '../../content/content.json'
import Img from "gatsby-image"
import Tags from '../common/Tags'
import { useIntl, Link } from "gatsby-plugin-react-intl"
import Button from '../common/Button'


const styles = data.styles

const CaseWrapper = styled.div`
    margin-bottom: 60px;
    max-width: 351px;
    flex-basis: 100%;
    &:last-of-type {
        margin-bottom: 96px;
    }
    @media (min-width: ${styles.breakpoints.l}px) {
        flex-basis: 33%;
        &:last-of-type {
            margin-bottom: 75px;
        }
    }
` 

const LabImage = styled(Img)`
    border-radius: 6px;
    margin-bottom: 15px;
    height: 182px;
    @media (min-width: ${styles.breakpoints.l}px) {
        height: 208px;
    }
`
const LabTitle = styled.h3`
    font-size: 2.11em;
    line-height: 42px;
    color: ${styles.colors.greenMain};
    margin-bottom: 15px;    
`
const LabDescription =styled.p`
    font-size: 1em;
    line-height: 1.22em;
    padding-bottom: 22px;
    margin-bottom: 20px;
    color: ${styles.colors.darkMainBg};
    border-bottom: 2px solid ${styles.colors.greenLight};
    @media (min-width: ${styles.breakpoints.l}px) {
        line-height: 1.44em;
    }
`
const TagsTitle = styled.h4`
    margin-bottom: 20px;
    font-size: .88em;
    font-weight: ${styles.fontWeight.medium};
    color: ${styles.colors.ultraDarkGrey};
`
const TagsContainer =  styled.div`
    padding-bottom: 16px;
    margin-bottom: 20px;
    border-bottom: 2px solid ${styles.colors.greenLight};
    @media (min-width: ${styles.breakpoints.l}px) {
        padding-bottom: 13px;
    }
`
const BtnContainer =  styled.div`
    display: flex;
    flex-wrap: wrap;
`
const BtnGithub =  styled(Button)`
`
const BtnSite =  styled(Button)`
`

const SuccessCase = (props) => {
    const lab = props.labData
    const intl = useIntl();

    return (
        <CaseWrapper>
            <LabImage fluid={props.fluidImg}></LabImage>
            <LabTitle>{lab.frontmatter.title}</LabTitle>
            <LabDescription>{lab.excerpt}</LabDescription>
            <TagsTitle>Tecnologías investigadas</TagsTitle>
            <TagsContainer>
                <Tags styles={props.styles} type="labs" tags={lab.frontmatter.tags}></Tags>
            </TagsContainer>
            <BtnContainer>
                { props.labData.frontmatter.website && 
                    <BtnSite type='btnLabeled' theme={styles} to={props.labData.frontmatter.website} btnText='ver sitio'></BtnSite>
                }
                { props.labData.frontmatter.github && 
                    <BtnGithub type='btnLabeled' theme={styles} to={props.labData.frontmatter.github} btnText='ir a GitHub' src={require('../../images/icon_github.svg').default}></BtnGithub>
                }
            </BtnContainer>
        </CaseWrapper>
    );
};

export default SuccessCase;