import React, {Fragment} from "react"
import { useIntl } from "gatsby-plugin-react-intl"
import HomepageHeader from "../components/modules/HomepageHeader"
import HomepageCulture from "../components/modules/HomepageCulture"
import HomepageLabs from "../components/modules/HomepageLabs"
import Services from "./servicios"

const Index = (props) => {
  const intl = useIntl();

  return (
    <Fragment>
        <HomepageHeader/>
        <Services ishomepage="true" />
        <HomepageCulture />
        <HomepageLabs/>
    </Fragment>
  );
}

export default Index