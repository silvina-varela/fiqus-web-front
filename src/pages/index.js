import React, {useContext, Fragment} from "react"
import { useIntl } from "gatsby-plugin-react-intl"
import HomepageHeader from "../components/modules/HomepageHeader"
import HomepageCulture from "../components/modules/HomepageCulture"
import HomepageLabs from "../components/modules/HomepageLabs"
import Services from "./servicios"
import isHomepageContext from "../context/isHomepageContext"

const Index = (props) => {
  const intl = useIntl();
  const ishomepage = useContext(isHomepageContext)

  return (
    <Fragment>
        <HomepageHeader/>
        <Services ishomepage={ishomepage} />
        <HomepageCulture />
        <HomepageLabs/>
    </Fragment>
  );
}

export default Index