import React from 'react';
import {Link} from 'gatsby'
import styled from 'styled-components'

const BtnContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`
const BtnImg = styled.img`
    display: ${props => props.type.imgDisplay};
    height: 20px;
    margin-right: 6px;
`
const Btn = styled(Link)`
    margin: 0 6px 8px 0px;
    padding: 9px 20px;
    font-size: 18px;
    font-size: ${props => props.type.fontSize};
    font-weight: ${props => props.type.fontWeight};
    color: ${props => props.type.color };
    background-color: ${props => props.type.background};
    border-radius: 12px;
    border-color: ${props => props.type.borderColor};
    border-width: 2px!important;
    border-style: solid;
    box-shadow:  0px 4px 0px ${props => props.type.boxShadow};
    transition: 100ms ease-in-out all;
    margin-bottom: 10px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        box-shadow: none;
    }
`

const Button = (props) => {
    
    const getBtnStyles = (type) =>{
        switch (type) {
            case "btnPrimaryOrange" : 
                return {
                    background : props.theme.colors.orangeMain,
                    borderColor : props.theme.colors.darkMainBg,
                    boxShadow : props.theme.colors.darkMainBg, 
                    fontWeight : props.theme.fontWeight.bold, 
                    color : props.theme.colors.white,
                    imgDisplay : 'none'
                 }
            break
            case "btnPrimaryWhite" : 
                return {
                    background : props.theme.colors.white,
                    borderColor : props.theme.colors.darkMainBg,
                    boxShadow : props.theme.colors.darkMainBg, 
                    fontWeight : props.theme.fontWeight.bold, 
                    color : props.theme.colors.darkMainBg,
                    imgDisplay : 'none'
                }
            break
            case "btnPrimaryOrangePurple" : 
                return {
                    background : props.theme.colors.orangeMain,
                    borderColor : props.theme.colors.purplePrimary,
                    boxShadow : props.theme.colors.purplePrimary, 
                    fontWeight : props.theme.fontWeight.bold, 
                    color : props.theme.colors.white,
                    imgDisplay : 'none'
                 }
            break
            case "btnPrimaryPurple" : 
                return {
                    background : props.theme.colors.white,
                    borderColor : props.theme.colors.purplePrimary,
                    boxShadow : props.theme.colors.purplePrimary, 
                    fontWeight : props.theme.fontWeight.bold, 
                    color : props.theme.colors.purplePrimary,
                    imgDisplay : 'none'
                }
            break
            case "btnSecondary" : 
                return {
                    background : props.theme.colors.white,
                    borderColor : props.theme.colors.lightGrey,
                    boxShadow : props.theme.colors.transparent, 
                    fontSize: '14px',
                    fontWeight : props.theme.fontWeight.medium, 
                    color : props.theme.colors.darkGrey,
                    imgDisplay : 'none'
                 }
            break
            case "btnLabeled" : 
                return {
                    background : props.theme.colors.white,
                    borderColor : props.theme.colors.darkMainBg,
                    boxShadow : props.theme.colors.darkMainBg, 
                    fontWeight : props.theme.fontWeight.bold, 
                    color : props.theme.colors.darkMainBg,
                    imgDisplay : 'static'
                 }
            break
            default : 
                return {
                    background : props.theme.colors.white,
                    borderColor : props.theme.colors.darkMainBg,
                    boxShadow : props.theme.colors.darkMainBg,
                    fontWeight : props.theme.fontWeight.bold, 
                    color : props.theme.colors.darkMainBg,
                    imgDisplay : 'none'
                }
        }   
    }
    
    return (
        <BtnContainer>   
            <Btn type={getBtnStyles(props.type)} theme={props.theme} to={props.href}>
                <BtnImg src={require('../../images/icon_website.svg').default} />
                ver sitio
            </Btn>         
            <Btn type={getBtnStyles(props.type)} theme={props.theme} to={props.href}>
                <BtnImg src={require ('../../images/icon_github.svg').default} />
                ir a Github
            </Btn>
            
        </BtnContainer>
    );
};

export default Button;