import React from 'react'
import { render } from 'react-dom'
import './style.css'
import i18next from 'i18next'

import Hello from './components/hellostage'

import Form from './components/hellostage' 
import form from './components/form'

const App = () => {
  return(
    <div className={''}>
      <Form form={form} />
    </div>
  )
}

render(<App i18next={i18next} />, document.getElementById('root'))
