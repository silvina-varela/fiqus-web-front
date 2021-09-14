import React from 'react';
import { Link } from 'react-router-dom'
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
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/Servicios"> Servicios </Link></li>
                <li><Link to="/Cultura"> Cultura </Link></li>
                <li><Link to="/Labs"> Labs </Link></li>
                <li><Link to="/Blog"> Blog </Link></li>
            </ul>
        </NavWrapper>
    );
};

export default Header;