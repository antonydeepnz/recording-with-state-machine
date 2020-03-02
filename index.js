import React from 'react'
import { render } from 'react-dom'
import './style.css'
import i18next from 'i18next'

import Hello from './components/hellostage'

import Form from './components/hellostage' 
import form from './components/form'

import Field, {f} from './state-tree/field'

const App = () => {
  return(
    <div className={''}>
      <Field name={'Any'}/>
    </div>
  )
}
//<Form form={form} />
render(<App i18next={i18next} />, document.getElementById('root'))
