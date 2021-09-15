import React from 'react';
import styled from 'styled-components'

const NavWrapper = styled.nav`
    width: 100%;
    height: 80px;
    background: pink;
`

const Header = () => {
    return (
        <NavWrapper>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </NavWrapper>
    );
};

export default Header;