import React, { useState } from "react"

import styled from 'styled-components'
import Wrapper from '../components/common/PageWrapper'

import content from '../data/sectionsContent/content.json'

require('../styles/styles.css')

export default function Index() {

  const PageContent = () => {
    return (
        <h1>Index</h1>
    )
  }

  return (
      <Wrapper children={PageContent} background="pink"></Wrapper>
  );
}