import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  border-bottom: 3px solid rgba(white, .05);
  background-color: transparent;
  color: rgba(red, .75);
  position: absolute;
  top: 10px;
  left: 20px;
  user-select: none;
  font-size: ${props => props.animate ? "15px" : "20px"};
  transform: ${props => props.animate ? "translate(-0.5em,-1.1em)" : "translate(0px,0px)"};
  transition: font-size 0.5s, transform 0.5s;
`

export default ({ htmlFor, labelText, animate }) => {
  return(
    <Label htmlFor={htmlFor} animate={animate}>{labelText}</Label>
  )
}