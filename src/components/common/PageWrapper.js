import React from 'react';
import styled from 'styled-components'
import Header from '../common/Header'
import Footer from '../common/Footer'


const Wrapper = styled.div`
    position: relative;
    margin:0;
    padding:0;
    width:100%;
    min-height:100%;
    background: ${ props => props.background};
`
const PageContainer = styled.section `
    width:100%;
    max-width:1280px;
    padding: 150px 50px;
    margin: 0 auto;
    min-height:100vh;
`
const PageWrapper = (props) => {
    return (
            <Wrapper background={props.background}>
                <Header></Header>
                <PageContainer> {props.children}</PageContainer>
                <Footer></Footer>
            </Wrapper>
    );
};

export default PageWrapper;