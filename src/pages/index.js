import React, {Fragment} from "react"
import styled from 'styled-components'
import { styles, homepage } from '../content/content.json'
require('../styles/styles.css')

const Index = (props) => {

  return (
    <Fragment>
        <h1>{homepage.title}</h1>
    </Fragment>
  );
}

export default Index