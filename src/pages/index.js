import React, {useState, useEffect, Fragment} from "react"
import { styles, homepage } from '../content/content.json'
import { useIntl, Link } from "gatsby-plugin-react-intl"
import HomepageHeader from "../components/modules/HomepageHeader"
import HomepageCulture from "../components/modules/HomepageCulture"
import HomepageLabs from "../components/modules/HomepageLabs"
import Services from "./servicios"

const Index = (props) => {
  const intl = useIntl();
  const [ishomepage, setIshomepage] = useState("true");

  useEffect(() => {
      const homePaths = ['/', '/en', '/en/', '/es', '/es/']

      setIshomepage(homePaths.includes(props.location.pathname).toString());
          
  }, [props.location])

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