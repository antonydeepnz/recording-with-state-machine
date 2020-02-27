import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  border-bottom: 3px solid rgba(white, .05);
  background-color: transparent;
  color: rgba(red, .75);
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
  font-size: ${props => props.animate ? "15px" : "20px"};
  transform: ${props => props.animate ? "translate(0em,-1em)" : "translate(0px,0px)"};
  transition: font-size 1s, transform 1s;
`

export default ({ htmlFor, labelText, bool }) => {
  return(
    <Label htmlFor={htmlFor} animate={bool}>{labelText}</Label>
  )
}