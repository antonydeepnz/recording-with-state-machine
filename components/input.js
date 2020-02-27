import React from 'react'
import styled from 'styled-components'

import fields from './fields'
import Label from './label'

const InputWrapper = styled.div`
  padding: 10px 0px 10px 10px;
`

const Error = styled.p`
  color: red;
  font-size: 0.7em;
`

export default ({ title, }) => {
  return(
    <InputWrapper>
      <input />
      <Label labelText={'Some text'}/>
      <Error>{fields[0].label}</Error>
    </InputWrapper>
  )
}