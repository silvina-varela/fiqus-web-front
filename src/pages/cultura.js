import React, {Fragment} from "react"
import styled from 'styled-components'
import { styles } from '../content/content.json'
import { useIntl, Link } from "gatsby-plugin-react-intl"
import SectionHeader from "../components/common/SectionHeader"

const Culture = () => {
    const intl = useIntl();

    return (
        <Fragment>
            <SectionHeader 
                section="cultura"
                title={intl.formatMessage({id: 'culture.title'})}
                subtitle={intl.formatMessage({id: 'culture.subtitle'})}
                description={intl.formatMessage({id: 'culture.description'})}
            />
        </Fragment>
    );
};

export default Culture;