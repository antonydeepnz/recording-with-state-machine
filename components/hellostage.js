import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import Wrapper from './stagesWrapper'
import Input from './input'

export default observer(({ form }) => {
  return(
    <Wrapper>
     <form onSubmit={form.onSubmit}>
        <Input field={form.$('name')}/>
        <Input field={form.$('telephone')}/>

        <button type="submit" onClick={form.onSubmit}>Submit</button>
    </form>
    </Wrapper>
  )
})