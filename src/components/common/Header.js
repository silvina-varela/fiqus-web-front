import React from 'react';
import styled from 'styled-components'
import {Link} from 'gatsby'

const NavWrapper = styled.nav`
    position: fixed;
    width: 100%;
    background: white;
`

const Header = (props) => {
    return (
        <NavWrapper>
            <ul>
                {
                    props.menuLinks ? props.menuLinks.map((menuLink)=> {
                        return (
                            <li key={menuLink.name}><Link to={menuLink.link}> {menuLink.name} </Link></li>)
                        }) : " No hay links "
                }     
            </ul>
        </NavWrapper>
    );
};

export default Header;