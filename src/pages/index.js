import React, { useState } from "react"

import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Homepage from './Homepage'
import Services from './Services'
import Culture from './Culture'
import Labs from './Labs'
import Blog from './Blog'
import content from '../data/sectionsContent/content.json'


import styled from 'styled-components'
require('../styles/styles.css')

const Main = styled.main`
  position: relative;
  width:100%;
  height:100%;
`

export default function Index() {
  return (
    <h1>Hello</h1>
  )
}