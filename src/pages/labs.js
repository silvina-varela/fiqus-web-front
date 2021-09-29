import React, {Fragment} from "react"
import styled from 'styled-components'
import SuccessCase from "../components/modules/SuccessCase"

import {styles, labs} from '../content/content.json'


const Labs = () => {

      return (
        <Fragment>
          <h1>{labs.title}</h1>
          <SuccessCase></SuccessCase>
        </Fragment>
      );
};

export default Labs;