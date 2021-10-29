import React, {Fragment} from "react"
import styled from 'styled-components'
import { styles, homepage } from '../content/content.json'
import { useIntl, Link } from "gatsby-plugin-react-intl"
import HomepageHeader from "../components/modules/HomepageHeader"
import HomepageCulture from "../components/modules/HomepageCulture"
import HomepageLabs from "../components/modules/HomepageLabs"
require('../styles/styles.css')

const Index = (props) => {
  const intl = useIntl();

  return (
    <Fragment>
        <HomepageHeader/>
        <HomepageCulture/>
        <HomepageLabs/>
    </Fragment>
  );
}

export default Index