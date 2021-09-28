import React, {Fragment} from "react"
import styled from 'styled-components'
import data from '../content/content.json'

const styles = data.styles

const Labs = () => {
    const content = data.labs
    
      return (
        <Fragment>
          <h1>{content.title}</h1>
        </Fragment>
      );
};

export default Labs;