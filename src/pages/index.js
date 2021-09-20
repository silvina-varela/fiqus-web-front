import React from "react"
import styled from 'styled-components'
import Wrapper from '../components/common/PageWrapper'
import data from '../content/content.json'

require('../styles/styles.css')

export default function Index() {
  const content = data.homepage


  return (
      <Wrapper  background="pink">
        <h1>{content.title}</h1>
      </Wrapper>
  );
}