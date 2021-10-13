import React, {Fragment} from "react"
import styled from 'styled-components'
import { styles, culture } from '../content/content.json'
import { useIntl, Link } from "gatsby-plugin-react-intl"


const Culture = () => {
    const intl = useIntl();

    return (
        <Fragment>
            <h1>{culture.title}</h1>
        </Fragment>
    );
};

export default Culture;