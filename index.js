import React from 'react'
import { render } from 'react-dom'
import './style.css'
import i18next from 'i18next'

import Hello from './components/hellostage'

import Form from './components/stages'

const App = () => {
  return(
    <div className={''}>
      <Form />
    </div>
  )
}

render(<App i18next={i18next} />, document.getElementById('root'))
