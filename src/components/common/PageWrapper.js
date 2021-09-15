import React from 'react';
import styled from 'styled-components'

import Header from '../common/Header'
import Footer from '../common/Footer'

const Wrapper = styled.section`
    margin:0;
    padding:0;
    width:100%;
    height:100%;
    background: ${ props => props.background}
`

const PageWrapper = (props) => {
    return (
        <Wrapper background={props.background}>
            <Header></Header>
                {props.children}
            <Footer></Footer>
        </Wrapper>
    );
};

export default PageWrapper;