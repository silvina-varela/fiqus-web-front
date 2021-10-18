import React, {Fragment} from "react"
import styled from 'styled-components'
import { styles } from '../content/content.json'
import { useIntl } from "gatsby-plugin-react-intl"
import SectionHeader from "../components/common/SectionHeader"

const Culture = () => {
    const intl = useIntl();

    const history = intl.formatMessage({id: "culture_historia.content_col1"});
    return (
        <Fragment>
            <SectionHeader 
                section="cultura"
                title={intl.formatMessage({id: 'culture.title'})}
                subtitle={intl.formatMessage({id: 'culture.subtitle'})}
                description={intl.formatMessage({id: 'culture.description'})}
            />

            {/* Cultura | Historia   */}
            <div>
                <h1>{intl.formatMessage({id: "culture_historia.title"})}</h1>
                <div>
                    <p>{intl.formatMessage({id: "culture_historia.content_line1"})}</p>
                    <p>{intl.formatMessage({id: "culture_historia.content_line2"})}</p>
                    <p>{intl.formatMessage({id: "culture_historia.content_line3"})}</p>
                </div>
                <div>
                    <p>{intl.formatMessage({id: "culture_historia.content_line4"})}</p>
                    <p>{intl.formatMessage({id: "culture_historia.content_line5"})}</p>
                </div>
                <h3>{intl.formatMessage({id: "culture_historia.subtitle"})}</h3>
                <p>{intl.formatMessage({id: "culture_historia.subtitleContent"})}</p>
            </div>
        
            {/* Cultura | Somos Federales */}
            <div>
                <h2>{intl.formatMessage({id: "culture_federales.title1"})}</h2>
                <p>{intl.formatMessage({id: "culture_federales.content1"})}</p>
                <p>
                    {intl.formatMessage({id: "culture_federales.tenemosSedes"})} 
                    <b>CABA</b>{intl.formatMessage({id: "y"})}<b>Villa La Angostura</b>.
                    {intl.formatMessage({id: "culture_federales.personasAsociadas"})}
                    <b>Mar del Plata</b>, <b>San Fernando</b>, <b>Puerto Madryn</b>
                    {intl.formatMessage({id: "y"})}<b>San Luis</b>.
                </p>
                <h2>{intl.formatMessage({id: "culture_federales.title2"})}</h2>
                <p>{intl.formatMessage({id: "culture_federales.content2"})}</p>
            </div>


            {/* Cultura | Estamos Federados */}
            <div>
                <h2>{intl.formatMessage({id: "culture_facttic.title"})}</h2>
                <h2>{intl.formatMessage({id: "culture_facttic.subtitle"})}</h2>
                <div>
                    <p>
                        {intl.formatMessage({id: "culture_facttic.content_line1_part1"})}
                        <b>{intl.formatMessage({id: "culture_facttic.content_line1_facttic"})}</b>
                        {intl.formatMessage({id: "culture_facttic.content_line1_part2"})}
                    </p>
                </div>
                <div>
                    <p>{intl.formatMessage({id: "culture_facttic.content_line2"})}</p>
                    <p>{intl.formatMessage({id: "culture_facttic.content_line3"})}</p>
                </div>

                <h2>{intl.formatMessage({id: "culture_internacional.title"})}</h2>
                <p>{intl.formatMessage({id: "culture_internacional.content_line1"})}</p>
                <p>{intl.formatMessage({id: "culture_internacional.content_line2"})}</p>
            </div>

        </Fragment>
    );
};

export default Culture;