import React from 'react';
import {styles} from '../../content/content.json'

const iluLabs = require('../../images/illustrations/labs.svg');
const iluCultura = require('../../images/illustrations/cultura.svg');

const SectionHeader = (props) => {
    const getHeadStyles = (type) =>{
        switch (type) {
            case "cultura" : 
                return {
                    background : styles.colors.orangeMain,
                    color : styles.colors.white,
                    image: iluCultura
                 }
            break
            case "labs" : 
                return {
                    background : styles.colors.white,
                    color : styles.colors.darkMainBg,
                    image : iluLabs
                 }
            break
            default : 
                return {
                    background : styles.colors.white,
                    color : styles.colors.darkMainBg,
                    image : iluLabs
                }
        }   
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <h4>{props.subtitle}</h4>
            <p>{props.description}</p>
            <img src={getHeadStyles(props.section).image.default}></img>
        </div>
    );
};

export default SectionHeader;