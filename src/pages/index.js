import React, { useState } from "react"
import { 
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom'

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

const IndexPage = () => {

  

  return (
    <Main>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/">
            <Homepage content={content.sections[0]}></Homepage>
          </Route>
          <Route path="/Servicios">
            <Services content={content.sections[1]}></Services>
          </Route>
          <Route path="/Cultura">
            <Culture content={content.sections[2]}></Culture>
          </Route>
          <Route path="/Labs">
            <Labs content={content.sections[3]}></Labs>
          </Route>
          <Route path="/Blog">
            <Blog></Blog>
          </Route>
        </Switch>

      </Router>
      <Footer></Footer>
    </Main>
  )
}

export default IndexPage
