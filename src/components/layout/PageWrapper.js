import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { styles } from '../../content/content.json'

const Wrapper = styled.div`
    position: relative;
    margin:0;
    padding:0;
    width:100%;
    min-height:100%;
    background: ${styles.colors.purpleLight};  
    
`
const PageContainer = styled.section `
    width:100%;
    max-width:${styles.breakpoints.xl}px;
    //min-width:${styles.breakpoints.xs}px;
    padding: 102px 20px;
    margin: 0 auto;
    min-height:100vh;
    @media (min-width: ${styles.breakpoints.m}px) {
    padding: 123px 50px;
    }
`
const PageWrapper = (props) => {
    return (
        <StaticQuery 
        query = { graphql`
            query MyQuery {
                site {
                    siteMetadata {
                        title
                        menuLinks{
                            name
                            link
                        }
                    }
                }
            }
        `
        }
        render = { data => (
            <Wrapper>
                <Header menuLinks = {data.site.siteMetadata.menuLinks} isHome={props.location.pathname === '/'} location={props.location}></Header>
                <PageContainer>{props.children}</PageContainer>
                <Footer></Footer>
            </Wrapper>
        )}>
            
        </StaticQuery>
    );
};

export default PageWrapper;