import * as React from "react"
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Homepage from './Homepage'
import Services from './Services'
import Blog from './Blog'

import styled from 'styled-components'
require('../styles/styles.css')

const Main = styled.main`
  position: relative;
  width:100%;
  height:100%;
`



const IndexPage = () => {
  return (
    <Main>
      <Header>BLABLABLABLABLABA</Header>
      <Homepage> </Homepage>
      <Footer></Footer>
    </Main>
  )
}

export default IndexPage
