import React, {useState, useEffect, Fragment} from "react"
import { styles, homepage } from '../content/content.json'
import { useIntl, Link } from "gatsby-plugin-react-intl"
import HomepageHeader from "../components/modules/HomepageHeader"
import HomepageCulture from "../components/modules/HomepageCulture"
import HomepageLabs from "../components/modules/HomepageLabs"
import Services from "./servicios"

const Index = (props) => {
  const intl = useIntl();
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
      const homePaths = ['/', '/en', '/en/', '/es', '/es/']

      setIsHome(homePaths.includes(props.location.pathname));
          
  }, [props.location])

  return (
    <Fragment>
        <HomepageHeader/>
        <Services isHome={isHome} />
        <HomepageCulture />
        <HomepageLabs/>
    </Fragment>
  );
}

export default Index