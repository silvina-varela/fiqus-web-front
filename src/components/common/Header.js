import React from 'react';
import styled from 'styled-components'
import {Link} from 'gatsby'

const NavWrapper = styled.nav`
    position: fixed;
    width: 100%;
    background: white;
`

const Header = () => {
    return (
        <NavWrapper>
            <ul>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/services"> Services </Link></li>
                <li><Link to="/culture"> Culture </Link></li>
                <li><Link to="/labs"> Labs </Link></li>
                <li><Link to="/blog"> Blog </Link></li>
            </ul>
        </NavWrapper>
    );
};

export default Header;