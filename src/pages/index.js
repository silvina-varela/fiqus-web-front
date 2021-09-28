import React, {Fragment} from "react"
import styled from 'styled-components'
import data from '../content/content.json'
require('../styles/styles.css')

const Index = (props) => {
  const content = data.homepage

  return (
    <Fragment>
        <h1>{content.title}</h1>
    </Fragment>
  );
}

export default Index