import React, {Fragment} from "react"
import styled from 'styled-components'
import { styles, culture } from '../content/content.json'


const Culture = () => {
    return (
        <Fragment>
            <h1>{culture.title}</h1>
        </Fragment>
    );
};

export default Culture;