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
                subttitle={intl.formatMessage({id: 'culture.subttitle'})}
                description={intl.formatMessage({id: 'homepage.lead'})}
            />
        </Fragment>
    );
};

export default Culture;