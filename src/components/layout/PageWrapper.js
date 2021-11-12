import React, {useState, useEffect} from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { styles } from '../../content/content.json'
import Seo from '../common/Seo'
require('../../styles/styles.css')

const Wrapper = styled.div`
    position: relative;
    margin:0;
    padding:0;
    width:100%;
    min-height:100%;
    background: ${styles.colors.white};      
`
const PageContainer = styled.section `
    width:100%;
    //min-height:100vh;
    margin: 0 auto;
    padding-top: 62px;
    @media (min-width: ${styles.breakpoints.xl}px) {
        padding-top: 76px;
    }
`
const PageWrapper = (props) => {
    const [isHome, setIsHome] = useState(true);

    useEffect(() => {
        const homePaths = ['/', '/en', '/en/', '/es', '/es/']

        setIsHome(homePaths.includes(props.location.pathname));
            
    }, [props.location])


    return (
        <StaticQuery 
        query = { graphql`
            query MyQuery {
                site {
                    siteMetadata {
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
                <Seo></Seo>
                <Header menuLinks = {data.site.siteMetadata.menuLinks} isHome={isHome} location={props.location}></Header>
                <PageContainer isHome={isHome}>{props.children}</PageContainer>
                <Footer></Footer>
            </Wrapper>
        )}>
            
        </StaticQuery>
    );
};

export default PageWrapper;