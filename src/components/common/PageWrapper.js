import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.section`
    position: relative;
    width:100%;
    height:100%;
    background: ${ props => props.background}
`

const PageWrapper = (props) => {
    return (
        <Wrapper background={props.background}>
            <h1>bakkakjashgdksaujgdsajdbaksdksdksadjsa</h1>
            <h1>bakkakjashgdksaujgdsajdbaksdksdksadjsa</h1>
            <h1>bakkakjashgdksaujgdsajdbaksdksdksadjsa</h1>
            <h1>bakkakjashgdksaujgdsajdbaksdksdksadjsa</h1>
        </Wrapper>
    );
};

export default PageWrapper;