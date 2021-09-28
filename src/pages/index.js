import React from "react"
import styled from 'styled-components'
import Wrapper from '../components/common/PageWrapper'
import data from '../content/content.json'
require('../styles/styles.css')

const Index = (props) => {
  const content = data.homepage

  return (
      <Wrapper>
        <h1>{content.title}</h1>
      </Wrapper>
  );
}

export default Index