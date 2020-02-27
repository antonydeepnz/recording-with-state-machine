import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  border-bottom: 3px solid rgba(white, .05);
  background-color: transparent;
  color: rgba(red, .75);
  font-size: ${props => props.animate ? "15px" : "20px"};
  margin-left: ${props => props.animate ? "-50px" : "0px"};
  transition: font-size 1s, margin 1s;
`

export default ({ htmlFor, labelText, bool }) => {
  return(
    <Label htmlFor={htmlFor} animate={bool}>{labelText}</Label>
  )
}