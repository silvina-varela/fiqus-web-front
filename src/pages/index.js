import React, {Fragment} from "react"
import styled from 'styled-components'
import { styles, homepage } from '../content/content.json'
import { useIntl, Link } from "gatsby-plugin-react-intl"
import HomepageHeader from "../components/modules/HomepageHeader"
require('../styles/styles.css')

const Index = (props) => {
  const intl = useIntl();

  return (
    <Fragment>
        <HomepageHeader/>
        <h1>{homepage.title}</h1>
    </Fragment>
  );
}

export default Index