import React, {Fragment} from "react"
import styled from 'styled-components'
import { styles, services } from '../content/content.json'
import { useIntl } from "gatsby-plugin-react-intl"

import Service from '../components/modules/Service'

const Services = () => {
  const intl = useIntl();

    return (
          <Fragment>
            <h1>{intl.formatMessage({id: "services.title"})}</h1>
            {services.services.map( (service ) =>{
              return(
                <Service 
                  key = {service.id}
                  image = { service.image } 
                  id = {service.id}
                  service = { service }
                  styles = { styles }>
                </Service>
              )
            }) }
          </Fragment>
      );
};

export default Services;