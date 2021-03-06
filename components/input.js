import React, { useState } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import fields from './fields'
import Label from './label'

const InputWrapper = styled.div`
  padding: 10px 0px 0px 10px;
  position: relative;
`

const Error = styled.p`
  margin: 5px;
  opacity: ${props => props.show ? "1" : "0"}; 
  color: red;
  font-size: 0.7em;
  transition: opacity 0.5s; 
`

export default observer(({ field }) => {
  const [bool, setBool ] = useState(false)
  const [text, setText] = useState('')
  const [error, setErr] = useState(true)
  const handleBlur = () => {
    text
      ? setBool(true)
      : setBool(false)
  }
  const handleChange = (e) => {
    setText(e.target.value)
    // text
    //   ? setErr(true)
    //   : setErr(false)
  }
  return(
    <InputWrapper>
      <input onFocus={() => {setBool(true)}} onBlur={handleBlur} onChange={handleChange}/>
      <Label animate={bool} labelText={field.label} htmlFor={field.name}/>
      <Error show={error}>{field.error}</Error>
    </InputWrapper>
  )
})