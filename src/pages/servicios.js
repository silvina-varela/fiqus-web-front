import React, {Fragment} from "react"
import styled from 'styled-components'

import data from '../content/content.json'
import Service from '../components/modules/Service'

const Services = () => {
    const content = data.services
      return (
          <Fragment>
            <h1>{content.title}</h1>
            {content.services ? content.services.map( (service) =>{
              return(
                <Service 
                  key={service.image} 
                  service={service.service}
                  description={service.description}
                  image={service.image}>
                </Service>
              )
            }) : ""}
          </Fragment>
      );
};

export default Services;