import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  border-bottom: 3px solid rgba(white, .05);
  background-color: transparent;
  color: rgba(red, .75);
`

export default ({ htmlFor, labelText }) => {
  return(
    <Label htmlFor={htmlFor}>{labelText}</Label>
  )
}