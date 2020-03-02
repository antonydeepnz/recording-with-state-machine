import React from 'react'
import { render } from 'react-dom'
import './style.css'
import i18next from 'i18next'
import { observer } from 'mobx-react'
import * as Yup from 'yup'
import { Provider } from "mobx-react"

import Hello from './components/hellostage'

import Form from './components/hellostage' 
import form from './components/form'

import Field, {f} from './state-tree/field'

const App = () => {

  const n = Yup.object().shape({
    name: Yup.string(25).min(4),
    age: Yup.number()
  })
  const na = {name: 'dsfdg', age: 2}
  const bool = async () => {
    const bool = await n.validate(na)

    bool
      ? console.log('yes')
      : console.log('no')
  }
  console.log(bool())
  return(
    <div className={''}>
      {}
      <Field name={'Any'}/>
    </div>
  )
}
//<Form form={form} />
render(
  <Provider store={f}>
    <App i18next={i18next} />
  </Provider>, document.getElementById('root'))
