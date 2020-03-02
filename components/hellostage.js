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

// export default observer(({ form }) => (
//   <form onSubmit={form.onSubmit}>
//     <SimpleInput field={form.$('email')} />
//     <SimpleInput field={form.$('password')} />
//     <SimpleInput field={form.$('passwordConfirm')} />

//     <br />
//     <button type="submit" className={$btn} onClick={form.onSubmit}>Submit</button>
//     <button type="button" className={$btn} onClick={form.onClear}>Clear</button>
//     <button type="button" className={$btn} onClick={form.onReset}>Reset</button>

//     <p>{form.error}</p>
//   </form>
// ));