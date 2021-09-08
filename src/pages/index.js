import * as React from "react"
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Homepage from './Homepage'
import Services from './Services'
import Blog from './Blog'

import styled from 'styled-components'
require('../styles/styles.css')




const IndexPage = () => {
  return (
    <main>
      <Header></Header>
      <Footer></Footer>
    </main>
  )
}

export default IndexPage
