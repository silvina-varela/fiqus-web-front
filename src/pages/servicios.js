import React, {Fragment} from "react"
import styled from 'styled-components'

import { styles, services } from '../content/content.json'

import Service from '../components/modules/Service'

const Services = () => {

      return (
          <Fragment>
            <h1>{services.title}</h1>
            {services ? services.map( (service) =>{
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